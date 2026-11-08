export const courses = [
  { id: 'numbers', label: '数のログ', description: 'まずは数を常用対数に変えてみよう。', files: ['easy/easy1.json'] },
  { id: 'calculation', label: 'かけ算・わり算', description: 'かけ算は足し算、わり算は引き算へ。', files: ['easy/times_div.json'] },
  { id: 'prefix', label: '接頭辞と単位', description: 'ミリ、キロ、メガ。大きさをつかもう。', files: ['prefixed/easy2.json'] },
  { id: 'length', label: '長さ・面積・速さ', description: '身近なスケールをログで見てみよう。', files: ['length/length_knowledge1.json', 'length/length_knowledge2.json', 'area/area_knowledge2.json', 'speed/speed_knowledge2.json'] },
  { id: 'time', label: '時間', description: '秒から年まで、単位を行き来しよう。', files: ['time/time_knowledge1.json', 'time/time_knowledge2.json', 'time/time_cal1.json'] },
  { id: 'probability', label: '確率', description: 'とても小さな確率も、対数で考える。', files: ['prob/prob_knowledge2.json', 'prob/prob_cal1.json', 'prob/prob_cal2.json', 'prob/prob_cal3.json'] },
  { id: 'population', label: '人口のスケール', description: '元教材の2024年時点の値で練習。', files: ['population/population_knowledge2.json'] },
];

export function parseAnswer(value) {
  const normalized = String(value).normalize('NFKC').trim().replaceAll('−', '-');
  if (!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(normalized)) return null;
  const number = Number(normalized);
  return Number.isFinite(number) ? number : null;
}

export function gradeAnswer(value, expected) {
  const answer = parseAnswer(value);
  if (answer === null || !Number.isFinite(expected)) return null;
  const error = Math.abs(answer - expected);
  return { answer, error, correct: error <= 0.1 + 1e-10, factor: 10 ** error };
}

export function selectQuestions(pool, count = 10, random = Math.random) {
  const valid = pool.filter(q => typeof q.question === 'string' && q.question.trim() && Number.isFinite(q.answer));
  const shuffled = [...valid];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}
