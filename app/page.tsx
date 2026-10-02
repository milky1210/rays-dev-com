import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Play,
  Video,
} from 'lucide-react';

const projects = [
  {
    index: '01',
    title: 'FIRE / VIEW',
    description: 'カールノイズで揺らぐ、格子ベースのインタラクティブな焚き火。',
    tags: ['TYPE SCRIPT', 'SIMULATION'],
    href: 'https://milky1210.github.io/fire-view/',
    repo: 'https://github.com/milky1210/fire-view',
    className: 'project-fire',
  },
  {
    index: '02',
    title: 'FOURIER PICTURE',
    description: 'らくがきをフーリエ変換で抽象化する、線と数式の実験。',
    tags: ['MATH', 'CREATIVE CODING'],
    href: 'https://milky1210.github.io/FourierPicture/',
    repo: 'https://github.com/milky1210/FourierPicture',
    className: 'project-fourier',
  },
  {
    index: '03',
    title: 'どっちが安い？',
    description: '1個あたり安い商品を瞬時に選ぶ、10問タイムアタック暗算クイズ。',
    tags: ['JAVASCRIPT', 'GAME'],
    href: 'https://milky1210.github.io/select_cheaper/',
    repo: 'https://github.com/milky1210/select_cheaper',
    className: 'project-cheaper',
  },
  {
    index: '04',
    title: 'STOCK VIEWER',
    description: '保有している株式の評価額を、リアルタイムで眺めるためのビューアー。',
    tags: ['TYPE SCRIPT', 'FINANCE'],
    href: 'https://milky1210.github.io/stock_viewer/',
    repo: 'https://github.com/milky1210/stock_viewer',
    className: 'project-stock',
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="RAYS ホーム">
          <span className="brand-mark">R/</span>
          <span className="brand-name">RAYS</span>
        </a>

        <nav className="header-nav" aria-label="メインナビゲーション">
          <a href="#works">WORKS</a>
          <a href="#about">ABOUT</a>
          <a href="#youtube">YOUTUBE</a>
        </nav>

        <a
          className="header-github"
          href="https://github.com/milky1210"
          target="_blank"
          rel="noreferrer"
        >
          <Code2 size={17} aria-hidden="true" />
          <span>GITHUB</span>
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orbit" aria-hidden="true">
          <span className="orbit-dot" />
          <span className="orbit-label">BUILDING SINCE 2017</span>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> INDEPENDENT DEVELOPER · TOKYO
          </p>
          <h1>
            <span>PLAY.</span>
            <span>BUILD.</span>
            <span className="accent-line">SHARE.</span>
          </h1>
          <p className="hero-lead">
            思いつきを、触れるものに。
            <br />
            ゲーム、Webアプリ、映像の実験をつくっています。
          </p>
        </div>

        <div className="hero-meta">
          <div>
            <strong>04</strong>
            <span>LIVE PROJECTS</span>
          </div>
          <div>
            <strong>09+</strong>
            <span>YEARS CREATING</span>
          </div>
        </div>

        <a className="scroll-cue" href="#works">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={16} aria-hidden="true" />
        </a>
      </section>

      <section className="works section-shell" id="works">
        <div className="section-heading">
          <div>
            <p className="kicker">SELECTED WORKS</p>
            <h2>つくったもの。</h2>
          </div>
          <p className="section-note">
            ブラウザですぐに遊べる、小さな実験とプロダクト。
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <a
                className={`project-visual ${project.className}`}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} を開く`}
              >
                <span className="project-number">{project.index}</span>
                {project.className === 'project-fire' && (
                  <img
                    src="https://milky1210.github.io/fire-view/og.png"
                    alt="FIRE / VIEW のピクセルアートの炎"
                  />
                )}
                <span className="visual-mark" aria-hidden="true" />
                <span className="visit-chip">
                  OPEN <ArrowUpRight size={15} aria-hidden="true" />
                </span>
              </a>

              <div className="project-info">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <a
                  className="repo-link"
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} のソースコードを見る`}
                >
                  <Code2 size={17} aria-hidden="true" />
                </a>
              </div>
              <div className="tag-row" aria-label="使用技術">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="about-index" aria-hidden="true">
          ABOUT / 02
        </div>
        <div className="about-statement">
          <p className="kicker">ABOUT RAYS</p>
          <h2>
            小さな疑問を、
            <br />
            <em>触れるもの</em>に。
          </h2>
        </div>

        <div className="about-copy">
          <p>
            RAYSは、つくりながら考える個人開発のラボです。
            日常のちょっとした不便や「これ、動いたらおもしろそう」を起点に、
            Webアプリ、ゲーム、映像表現へ落とし込みます。
          </p>
          <p>
            完成品だけでなく、試して、壊して、またつくる過程も楽しむ。
            その記録をコードと動画で公開しています。
          </p>
        </div>

        <div className="about-values">
          <div>
            <span>01</span>
            <strong>PLAYFUL</strong>
            <p>まず、自分が触って楽しいものを。</p>
          </div>
          <div>
            <span>02</span>
            <strong>EXPERIMENTAL</strong>
            <p>正解よりも、新しい試し方を。</p>
          </div>
          <div>
            <span>03</span>
            <strong>OPEN</strong>
            <p>コードも過程も、できるだけひらく。</p>
          </div>
        </div>
      </section>

      <section className="youtube-section" id="youtube">
        <div className="youtube-signal" aria-hidden="true">
          <span>RAYS / CHANNEL</span>
          <div className="signal-lines">
            {Array.from({ length: 18 }, (_, index) => (
              <i key={index} />
            ))}
          </div>
        </div>

        <div className="youtube-content">
          <p className="youtube-label">
            <Video size={15} aria-hidden="true" /> YOUTUBE
          </p>
          <h2>
            動くものは、
            <br />
            <span>動画でも。</span>
          </h2>
          <p>
            制作の過程やプロダクトのデモ、思いつきを形にするまでを
            RAYSチャンネルから発信します。
          </p>
          <div className="youtube-button pending" aria-label="YouTube チャンネルURL設定待ち">
            <span className="play-dot">
              <Play size={15} fill="currentColor" aria-hidden="true" />
            </span>
            CHANNEL LINK COMING SOON
          </div>
          <small>※ チャンネルURL設定後にリンクが有効になります</small>
        </div>
      </section>

      <footer>
        <a className="footer-brand" href="#top">
          <span className="brand-mark">R/</span>
          <span>RAYS</span>
        </a>
        <p>PLAY. BUILD. SHARE.</p>
        <div className="footer-links">
          <a href="#works">WORKS</a>
          <a href="#about">ABOUT</a>
          <a
            href="https://github.com/milky1210"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
        <span className="copyright">© {new Date().getFullYear()} RAYS</span>
      </footer>
    </main>
  );
}
