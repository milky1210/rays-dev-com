import { courses, gradeAnswer, selectQuestions } from './core.js';

const $ = id => document.getElementById(id);
const storageKey = 'rays-logcal-best-v1';
let bests = {};
try { const saved = JSON.parse(localStorage.getItem(storageKey) || '{}'); if (saved && typeof saved === 'object' && !Array.isArray(saved)) bests = saved; } catch { /* Practice also works without storage. */ }
let course, questions = [], answers = [], index = 0, reviewMode = false;
const cache = new Map();

function show(section) {
  for (const id of ['courses', 'practice', 'result']) $(id).hidden = id !== section;
}

function choose() {
  show('courses');
  $('courses').scrollIntoView({ behavior: 'smooth' });
  $('course-list').querySelector('button')?.focus({ preventScroll: true });
}

function renderQuestion() {
  const q = questions[index];
  $('counter').textContent = `${reviewMode ? '復習 / ' : ''}${index + 1} / ${questions.length}`;
  $('progress').max = questions.length;
  $('progress').value = index;
  $('question').textContent = q.question.replace(/^問題文:\s*/, '');
  $('answer').value = '';
  $('answer-form').hidden = false;
  $('feedback').replaceChildren();
  $('feedback').className = 'feedback';
  $('next').hidden = true;
  $('question').focus({ preventScroll: true });
  $('answer').focus({ preventScroll: true });
}

function begin(pool, isReview = false) {
  questions = selectQuestions(pool);
  if (!questions.length) throw new Error('問題がありません。');
  answers = []; index = 0; reviewMode = isReview;
  show('practice');
  $('practice-title').textContent = course.label;
  $('practice').scrollIntoView({ behavior: 'smooth' });
  renderQuestion();
}

async function start(selected) {
  course = selected;
  $('load-error').hidden = true;
  const buttons = [...$('course-list').querySelectorAll('button')];
  buttons.forEach(b => b.disabled = true);
  try {
    if (!cache.has(course.id)) {
      const sets = await Promise.all(course.files.map(async file => {
        const response = await fetch(`./data/${file}`);
        if (!response.ok) throw new Error('教材を読み込めませんでした。');
        const data = await response.json();
        if (!Array.isArray(data)) throw new Error('教材の形式を確認してください。');
        return data;
      }));
      cache.set(course.id, sets.flat());
    }
    begin(cache.get(course.id));
  } catch {
    $('load-error').textContent = '教材を読み込めませんでした。通信を確認して、コースをもう一度選んでください。';
    $('load-error').hidden = false;
    show('courses');
  } finally { buttons.forEach(b => b.disabled = false); }
}

for (const [i, item] of courses.entries()) {
  const button = document.createElement('button');
  button.className = 'course';
  const number = document.createElement('span'); number.textContent = `COURSE ${String(i + 1).padStart(2, '0')}`;
  const title = document.createElement('strong'); title.textContent = item.label;
  const symbol = document.createElement('b'); symbol.className = 'course-symbol'; symbol.setAttribute('aria-hidden', 'true');
  symbol.textContent = ['log', '× ÷', 'k M', 'm²', 's', '%', '10ⁿ'][i];
  const description = document.createElement('small'); description.textContent = item.description;
  const arrow = document.createElement('i'); arrow.textContent = '↗'; arrow.setAttribute('aria-hidden', 'true');
  button.append(number, symbol, title, description, arrow);
  button.addEventListener('click', () => start(item));
  $('course-list').append(button);
}

$('answer-form').addEventListener('submit', event => {
  event.preventDefault();
  const q = questions[index];
  const grade = gradeAnswer($('answer').value, q.answer);
  if (!grade) {
    $('feedback').textContent = '小数の数値を入力してください（例: −0.301）。';
    $('answer').focus();
    return;
  }
  answers.push({ question: q, ...grade });
  $('answer-form').hidden = true;
  $('feedback').replaceChildren();
  $('feedback').className = `feedback ${grade.correct ? 'good' : 'error'}`;
  const heading = document.createElement('strong'); heading.textContent = grade.correct ? '正解！' : 'もう少し！';
  const correct = document.createElement('p'); correct.textContent = `あなたの回答: ${grade.answer} / 正解: ${q.answer.toFixed(3)}（差: ${grade.error.toFixed(3)}）`;
  const explanation = document.createElement('p');
  explanation.textContent = q.explanation || `求める数はおよそ 10^(${q.answer.toFixed(3)}) です。小数点以下の値と、10の何乗かを分けて考えてみましょう。`;
  const mascot = document.createElement('img');
  mascot.src = grade.correct ? '/assets/rays-celebrate.png' : '/assets/rays-thinking.png';
  mascot.alt = ''; mascot.width = 100; mascot.height = 100;
  const message = document.createElement('div'); message.append(heading, correct, explanation);
  $('feedback').append(mascot, message);
  $('progress').value = index + 1;
  $('next').textContent = index + 1 === questions.length ? '結果を見る →' : '次の問題へ →';
  $('next').hidden = false;
  $('next').focus();
});

function finish() {
  const score = answers.filter(a => a.correct).length;
  if (!reviewMode) {
    const previous = Number.isInteger(bests[course.id]) ? bests[course.id] : 0;
    bests[course.id] = Math.max(previous, score);
    try { localStorage.setItem(storageKey, JSON.stringify(bests)); } catch { /* Storage can be disabled. */ }
  }
  show('result');
  $('score').textContent = `${score} / ${questions.length}`;
  $('best').textContent = reviewMode ? '復習完了。少しずつ感覚を育てていこう。' : `${course.label} / このブラウザでの最高記録: ${bests[course.id] ?? score} / ${questions.length}`;
  $('review').hidden = answers.every(a => a.correct);
  $('review-list').replaceChildren();
  for (const answer of answers) {
    const item = document.createElement('article'); item.className = 'review-item';
    const title = document.createElement('h3'); title.textContent = `${answer.correct ? '○' : '△'} ${answer.question.question.replace(/^問題文:\s*/, '')}`;
    const detail = document.createElement('p'); detail.textContent = `回答 ${answer.answer} → 正解 ${answer.question.answer.toFixed(3)}`;
    item.append(title, detail); $('review-list').append(item);
  }
  $('result').scrollIntoView({ behavior: 'smooth' });
  $('result-title').focus({ preventScroll: true });
}

$('next').addEventListener('click', () => { index++; if (index < questions.length) renderQuestion(); else finish(); });
$('retry').addEventListener('click', () => start(course));
$('review').addEventListener('click', () => begin(answers.filter(a => !a.correct).map(a => a.question), true));
$('quit').addEventListener('click', choose);
$('choose').addEventListener('click', choose);
