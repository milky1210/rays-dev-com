import {
  Braces,
  CirclePlay,
  Code2,
  Flame,
  Gamepad2,
  Sigma,
  Sparkles,
  Video,
} from 'lucide-react';

const projects = [
  {
    number: '01',
    title: '影将棋',
    label: 'SHADOW SHOGI',
    description:
      '相手の駒が見えない、新感覚の二人対戦将棋。読みと推理で盤面の影を追いかけよう。',
    href: 'https://shadow-shogi.rays-dev.com',
    icon: Gamepad2,
    className: 'project-shadow',
    tags: ['GAME', 'TYPE SCRIPT'],
  },
  {
    number: '02',
    title: 'FIRE / VIEW',
    label: 'PIXEL FIRE SIMULATION',
    description:
      'カールノイズでゆらぐ、格子ベースの焚き火。ぼーっと眺めて、少し触って遊べます。',
    href: 'https://fire-view.rays-dev.com',
    icon: Flame,
    className: 'project-fire',
    tags: ['SIMULATION', 'TYPE SCRIPT'],
  },
  {
    number: '03',
    title: 'Fourier Picture',
    label: 'CREATIVE CODING',
    description:
      '描いた線を、回転する円の重なりへ。らくがきとフーリエ変換をつなぐ実験です。',
    href: 'https://fourier-picture.rays-dev.com',
    icon: Sigma,
    className: 'project-fourier',
    tags: ['MATH', 'CANVAS'],
  },
  {
    number: '04',
    title: 'どっちが安い？',
    label: 'PRICE QUIZ',
    description:
      '1個あたりの値段をすばやく比べる、10問タイムアタック。買い物の暗算力を試そう。',
    href: 'https://select-cheaper.rays-dev.com',
    icon: Sparkles,
    className: 'project-cheaper',
    tags: ['QUIZ', 'JAVASCRIPT'],
  },
];

const youtubeVideos = [
  {
    src: '/assets/youtube-speed-math.png',
    alt: '爆速検算についてのRAYS動画サムネイル',
  },
  {
    src: '/assets/youtube-monty-hall.png',
    alt: 'モンティ・ホール問題についてのRAYS動画サムネイル',
  },
  {
    src: '/assets/youtube-dice.png',
    alt: 'サイコロの数列についてのRAYS動画サムネイル',
  },
];

function FaceMark() {
  return (
    <span className="face-mark" aria-hidden="true">
      <i />
      <i />
      <b />
    </span>
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="RAYS ホーム">
          <FaceMark />
          <span>
            RAYS<small>DEVELOP</small>
          </span>
        </a>

        <nav aria-label="メインナビゲーション">
          <a href="#works">つくったもの</a>
          <a href="#youtube">YouTube</a>
          <a href="#about">RAYSについて</a>
        </nav>

        <a
          className="header-channel"
          href="https://www.youtube.com/@Rays-develop"
          target="_blank"
          rel="noreferrer"
        >
          <CirclePlay size={18} aria-hidden="true" />
          チャンネルを見る
        </a>
      </header>

      <section className="hero">
        <div className="hero-dots" aria-hidden="true" />
        <div className="hero-copy">
          <p className="hero-kicker">
            <Sparkles size={18} aria-hidden="true" />
            つくって、試して、またつくる。
          </p>
          <h1>
            やってみたいを、
            <br />
            <span>つくってみる。</span>
          </h1>
          <p className="hero-lead">
            ゲーム、数学、Webアプリ。
            <br />
            気になったことを、触って遊べる形にしています。
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#works">
              <Gamepad2 size={20} aria-hidden="true" />
              作品で遊ぶ
            </a>
            <a
              className="secondary-button"
              href="https://www.youtube.com/@Rays-develop"
              target="_blank"
              rel="noreferrer"
            >
              <Video size={20} aria-hidden="true" />
              動画を見る
            </a>
          </div>
        </div>

        <div className="hero-character">
          <div className="speech-bubble">
            <span>こんにちは！</span>
            RAYSです
          </div>
          <span className="float-tag tag-code">
            <Braces size={18} aria-hidden="true" /> CODE
          </span>
          <span className="float-tag tag-play">
            <Gamepad2 size={18} aria-hidden="true" /> PLAY
          </span>
          <span className="float-tag tag-math">
            <Sigma size={18} aria-hidden="true" /> MATH
          </span>
          <div className="character-halo" aria-hidden="true" />
          <img
            src="/assets/rays-mascot.png"
            alt="黒いパーカーを着たRAYSのキャラクター"
            width="1280"
            height="1280"
            fetchPriority="high"
          />
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>
          <span>WEB APPS</span><i>●</i><span>GAMES</span><i>●</i>
          <span>CREATIVE CODING</span><i>●</i><span>MATH</span><i>●</i>
          <span>WEB APPS</span><i>●</i><span>GAMES</span><i>●</i>
          <span>CREATIVE CODING</span><i>●</i><span>MATH</span>
        </div>
      </div>

      <section className="works" id="works">
        <div className="section-title">
          <p>WORKS</p>
          <h2>つくったもの</h2>
          <span>ブラウザですぐに遊べます。</span>
        </div>

        <div className="project-list">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <a
                className={`project-card ${project.className}`}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                key={project.title}
              >
                <div className="project-topline">
                  <span>{project.number}</span>
                  <span>{project.label}</span>
                </div>
                <div className="project-icon" aria-hidden="true">
                  <Icon size={44} strokeWidth={1.7} />
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <span className="open-label">あそぶ</span>
              </a>
            );
          })}
        </div>
      </section>

      <section className="youtube" id="youtube">
        <div className="youtube-heading">
          <p>
            <Video size={20} aria-hidden="true" /> RAYS ON YOUTUBE
          </p>
          <h2>
            考える過程も、
            <br />
            動画にしています。
          </h2>
          <span>
            数学のふしぎや、身近な疑問、つくったものの裏側を
            キャラクターと一緒に分かりやすく紹介します。
          </span>
          <a
            className="youtube-button"
            href="https://www.youtube.com/@Rays-develop"
            target="_blank"
            rel="noreferrer"
          >
            <CirclePlay size={22} aria-hidden="true" />
            @Rays-develop
          </a>
        </div>

        <div className="video-stack">
          {youtubeVideos.map((video, index) => (
            <a
              className={`video-card video-${index + 1}`}
              href="https://www.youtube.com/@Rays-develop"
              target="_blank"
              rel="noreferrer"
              key={video.src}
            >
              <img src={video.src} alt={video.alt} loading="lazy" />
              <span className="video-play" aria-hidden="true">
                <CirclePlay size={32} />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-card">
          <span className="about-label">ABOUT RAYS</span>
          <h2>
            「なんで？」から、
            <br />
            遊べるものをつくる。
          </h2>
          <p>
            RAYSは、個人開発と解説動画の小さなラボです。
            日常の疑問をコードにして、難しいことも触って分かる形へ。
            完成品だけでなく、試行錯誤の過程も公開していきます。
          </p>
          <a
            href="https://github.com/milky1210"
            target="_blank"
            rel="noreferrer"
          >
            <Code2 size={20} aria-hidden="true" />
            GitHubでコードを見る
          </a>
        </div>
        <div className="about-stamp" aria-hidden="true">
          <span>RAYS</span>
          <small>PLAY · BUILD · SHARE</small>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top" aria-label="ページ上部へ戻る">
          <FaceMark />
          <span>
            RAYS<small>DEVELOP</small>
          </span>
        </a>
        <p>気になったら、まずつくってみる。</p>
        <div>
          <a href="#works">WORKS</a>
          <a href="https://www.youtube.com/@Rays-develop">YOUTUBE</a>
          <a href="https://github.com/milky1210">GITHUB</a>
        </div>
        <small>© {new Date().getFullYear()} RAYS</small>
      </footer>
    </main>
  );
}
