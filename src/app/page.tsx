import type { Metadata } from 'next'
import Link from 'next/link'
import VideoTrigger from '@/components/VideoTrigger'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import YouTubeGrid from '@/components/YouTubeGrid'
import FinaleForm from '@/components/FinaleForm'

export const metadata: Metadata = {
  title: 'Krzysztof Wnęk — Mówca, Mentor, Coach PQ',
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-text">
            <h1 className="display">
              Wymieniasz <br /><span className="it">stres</span> <br />na sukces?
            </h1>
            <p className="hero-sub">
              Pomagam mężczyznom odzyskać radość i budować zdrowe relacje z bliskimi — bez rezygnowania z ambicji.
            </p>
            <div className="hero-ctas">
              <div className="hero-cta-group">
                <a href="#umow" className="btn btn-teal">Poznaj swoich Sabotażystów</a>
                <p className="hero-free-tag">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                    <circle cx="8" cy="8" r="7" />
                    <path d="M8 5v3.2l2.2 1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  darmowy test · 5 minut
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHORITY */}
      <section className="authority">
        <div className="wrap">
          <div className="authority-row">
            <div className="auth-cell reveal" data-delay="0">
              <div className="auth-num">500 tys</div>
              <div className="auth-label">Absolwentów Positive Intelligence®</div>
            </div>
            <div className="auth-cell reveal" data-delay="1">
              <div className="auth-num">52</div>
              <div className="auth-label">Odcinków na YouTube</div>
            </div>
            <div className="auth-cell reveal" data-delay="2">
              <div className="auth-num">WSB-NLU</div>
              <div className="auth-label">Wykładowca</div>
            </div>
            <div className="auth-cell reveal" data-delay="3">
              <div className="auth-num">PQ</div>
              <div className="auth-label">Positive Intelligence® Coach</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="sec light">
        <div className="wrap">
          <div className="problem-head reveal">
            <div>
              <div className="eyebrow">01 <span className="em">—</span> Wyzwanie</div>
              <h2 className="display">Czy to <span className="it">brzmi</span> znajomo?</h2>
            </div>
          </div>
          <div className="problem-rule reveal" />
          <div className="problem-grid">
            <div className="problem-card reveal" data-delay="0">
              <div className="num">01</div>
              <p>Osiągnąłeś, co chciałeś. Radości nie ma.</p>
            </div>
            <div className="problem-card reveal" data-delay="1">
              <div className="num">02</div>
              <p>Pracę zabierasz do domu. Dom „nosisz" w pracy.</p>
            </div>
            <div className="problem-card reveal" data-delay="2">
              <div className="num">03</div>
              <p>Osiągasz coraz więcej. Spełnienia brak…</p>
            </div>
            <div className="problem-card reveal" data-delay="3">
              <div className="num">04</div>
              <p>Obowiązki wypierają relacje. Chcesz, ale nie potrafisz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFORMATION */}
      <section className="sec dark">
        <div className="wrap-narrow">
          <div className="trans-grid">
            <div className="trans-col before reveal">
              <h3>Przed</h3>
              <ul>
                <li>Przewlekły stres, reaktywność, rozdrażnienie</li>
                <li>Późne noce, wczesne pobudki</li>
                <li>Zaniedbane relacje</li>
                <li>„Będę szczęśliwy gdy…"</li>
              </ul>
            </div>
            <div className="trans-col after reveal" data-delay="1">
              <h3>Po</h3>
              <ul>
                <li>Spokój mimo presji</li>
                <li>Głęboka praca, prawdziwy odpoczynek</li>
                <li>Uważność w domu i w pracy</li>
                <li>Radość „w standardzie" codzienności</li>
              </ul>
            </div>
          </div>
          <div className="trans-cta reveal">
            <Link href="/dla-ciebie" className="btn btn-outline-light">
              Sprawdź, czy to dla Ciebie
            </Link>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="sec dark" id="video">
        <div className="wrap-narrow">
          <div className="video-eyebrow reveal">
            <div className="eyebrow on-dark">02 <span className="em">—</span> Zobacz sam</div>
          </div>
          <h2 className="video-headline reveal" data-delay="1">
            <span className="nowrap">Jak Program PQ<sup>®</sup></span><br />
            <span className="it">może Ci pomóc?</span>
          </h2>
          <VideoTrigger />
        </div>
      </section>

      {/* SABOTEURS */}
      <section className="sec light sabo" id="test">
        <div className="wrap">
          <div className="sabo-grid">
            <div className="reveal">
              <div className="eyebrow">03 <span className="em">—</span> Pierwszy krok zmiany</div>
              <h2>
                Zanim zaczniesz walczyć — <br />poznaj <span className="it">wroga</span>.
              </h2>
              <p className="desc">
                Test Sabotażystów Mentalnych opracowany przez{' '}
                <strong>Shirzada Chamine&apos;a</strong> wykładowcę Stanford University.
                Identyfikuje Twoje przekonania i nawyki, które sabotują Twoją efektywność,
                relacje i spokój.
              </p>
              <a href="#umow" className="btn btn-dark">Odbierz bezpłatny test</a>
              <p className="note">Zapisz się niżej · Wyniki dostaniesz na e-mail</p>
            </div>
            <div className="sabo-steps reveal" data-delay="2">
              <div className="sabo-step">
                <div className="n">I</div>
                <div>
                  <div className="t">Szybki test</div>
                  <div className="d">5 min · online · 100% prywatnie</div>
                </div>
              </div>
              <div className="sabo-step">
                <div className="n">II</div>
                <div>
                  <div className="t">Otrzymasz wyniki</div>
                  <div className="d">Spersonalizowany profil sabotażystów na mail</div>
                </div>
              </div>
              <div className="sabo-step">
                <div className="n">III</div>
                <div>
                  <div className="t">Umów bezpłatną sesję</div>
                  <div className="d">30-minutowe omówienie wyników na żywo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="sec light" id="o-mnie">
        <div className="wrap">
          <div className="about-grid">
            <div className="about-portrait reveal" aria-label="Portret — Krzysztof Wnęk" />
            <div className="about-body reveal" data-delay="1">
              <div className="eyebrow">04 <span className="em">—</span> Kim jestem</div>
              <div className="about-quote">
                „Nie prowadzę warsztatów. Rozpalam ludzi. Potem daję im narzędzia, żeby płonęli dalej."
              </div>
              <p className="about-bio">
                Trener fitnessu mentalnego i propagator Pozytywnej Inteligencji. Wspieram mężczyzn
                w budowaniu „antykruchości" — większego spokoju, odporności psychicznej i lepszych
                relacji, bez udawania twardziela w dynamicznych czasach.
              </p>
              <p className="about-bio">
                Od ponad 20 lat zgłębiam mechanizmy lęku i napięcia, ucząc się, jak nie pozwolić
                im przejąć kontroli nad życiem. Prywatnie szczęśliwy mąż jednej żony i ojciec 3 synów.
              </p>
              <div className="about-cta">
                <Link href="/o-mnie" className="link-text">Przeczytaj pełną historię →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="sec dark" id="testimonials">
        <div className="wrap">
          <div className="testi-head reveal">
            <div className="eyebrow on-dark">05 <span className="em">—</span> Dlaczego warto</div>
            <h2>Dowody.</h2>
          </div>
        </div>
        <TestimonialsCarousel />
      </section>

      {/* PATHS */}
      <section className="sec light">
        <div className="wrap">
          <div className="paths-head reveal">
            <div className="eyebrow">06 <span className="em">—</span> Jak możemy współpracować</div>
            <h2>Trzy ścieżki.</h2>
            <p>Wszystkie drogi prowadzą do tego samego miejsca — jasności, energii i obecności.</p>
          </div>
          <div className="paths-grid">
            <div className="path reveal" data-delay="0">
              <div className="tag">Program PQ<span className="em">·</span>Premium</div>
              <div className="title">7-tygodniowy program</div>
              <p className="desc">
                Dla osób znających angielski. Pełna metodologia PQ. Najgłębsza, najbardziej trwała transformacja.
              </p>
              <div className="price">
                4 000 — 5 000 PLN
                <span className="price-sub">lub 12 × 300 PLN</span>
              </div>
              <div className="path-cta">
                <Link href="/dla-ciebie" className="link-text">Dowiedz się więcej →</Link>
              </div>
            </div>
            <div className="path reveal" data-delay="1">
              <div className="tag">Coaching 1:1<span className="em">·</span>Indywidualny</div>
              <div className="title">Minimum 5 sesji</div>
              <p className="desc">
                Bez angielskiego lub po programie. Narzędzia proaktywnego coachingu + metodologia PQ dopasowana do Twojej sytuacji.
              </p>
              <div className="price">Do ustalenia</div>
              <div className="path-cta">
                <Link href="/umow-rozmowe" className="link-text">Zapytaj o sesję →</Link>
              </div>
            </div>
            <div className="path reveal" data-delay="2">
              <div className="tag">Prelekcje<span className="em">·</span>B2B · Zespoły</div>
              <div className="title">Przemówienia i Warsztaty</div>
              <p className="desc">
                Dla konferencji i zespołów korporacyjnych. Język biznesu — odporność decyzyjna, efektywność pod presją, mierzalne rezultaty.
              </p>
              <div className="price">Wycena indywidualna</div>
              <div className="path-cta">
                <Link href="/dla-firm" className="link-text">Zapytaj →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YOUTUBE */}
      <section className="sec dark" id="youtube">
        <div className="wrap">
          <div className="yt-head reveal">
            <div className="eyebrow on-dark">07 <span className="em">—</span> YouTube</div>
            <h2>Bezpłatnie. Na YouTube.</h2>
          </div>
          <YouTubeGrid />
          <div className="yt-foot reveal">
            <a
              href="https://www.youtube.com/@PozytywnaInteligencja"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-light"
            >
              Zobacz wszystkie
            </a>
          </div>
        </div>
      </section>

      {/* FINALE */}
      <section className="light finale" id="umow">
        <div className="finale-inner">
          <div className="eyebrow reveal">08 <span className="em">—</span> Decyzja</div>
          <h2 className="reveal" data-delay="1">
            Gotowy na <span className="it">rozmowę</span>,<br />która zmienia wszystko?
          </h2>
          <p className="finale-lead reveal" data-delay="2">Odbierz prezent — bezpłatny test Sabotażystów.</p>
          <FinaleForm />
          <p className="finale-note reveal" data-delay="3">
            Bezpłatne · Wyniki na Twój e-mail · Test opracowany przez Shirzada Chamine&apos;a ze Stanford
          </p>
        </div>
      </section>
    </>
  )
}
