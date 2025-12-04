import React, { useState } from "react";
import { createRoot } from "react-dom/client";

// --- Icons (Inline SVG for reliability) ---
const Icons = {
  Gavel: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"/><path d="m16 16 6-6"/><path d="m8 8 6-6"/><path d="m9 7 8 8"/><path d="m21 11-8-8"/></svg>
  ),
  BadgeCheck: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.78 4 4 0 0 1 0-6.74Z"/><path d="m9 12 2 2 4-4"/></svg>
  ),
  Globe: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
  ),
  GraduationCap: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
  ),
  ArrowRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  ),
  Menu: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
  )
};

// --- Styles ---
const css = `
  :root {
    --primary: #1a365d; /* Royal Blue */
    --secondary: #2b6cb0; /* Lighter Blue */
    --accent: #ed8936; /* Gold/Orange */
    --accent-hover: #dd6b20;
    --text-main: #2d3748;
    --text-light: #718096;
    --bg-light: #f7fafc;
    --white: #ffffff;
    --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: var(--font-sans);
    color: var(--text-main);
    line-height: 1.6;
    background-color: var(--white);
  }

  /* Typography */
  h1, h2, h3 {
    font-weight: 700;
    line-height: 1.2;
    color: var(--primary);
  }

  h1 { font-size: 2.5rem; margin-bottom: 1rem; }
  h2 { font-size: 2rem; margin-bottom: 2rem; text-align: center; }
  h3 { font-size: 1.25rem; margin-bottom: 0.5rem; }
  p { margin-bottom: 1rem; }

  /* Layout */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* Header */
  header {
    background: var(--white);
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    position: sticky;
    top: 0;
    z-index: 100;
  }
  
  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--primary);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .logo span {
    color: var(--accent);
  }

  .nav-links {
    display: flex;
    gap: 30px;
  }

  .nav-links a {
    text-decoration: none;
    color: var(--text-main);
    font-weight: 500;
    transition: color 0.2s;
  }

  .nav-links a:hover {
    color: var(--secondary);
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 24px;
    border-radius: 6px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s;
    border: none;
  }

  .btn-primary {
    background-color: var(--accent);
    color: var(--white);
  }
  .btn-primary:hover { background-color: var(--accent-hover); }

  .btn-outline {
    background-color: transparent;
    border: 2px solid var(--white);
    color: var(--white);
  }
  .btn-outline:hover { background-color: rgba(255,255,255,0.1); }

  .btn-outline-dark {
    border: 2px solid var(--primary);
    color: var(--primary);
  }
  .btn-outline-dark:hover { background-color: var(--bg-light); }

  /* Hero */
  .hero {
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    color: var(--white);
    padding: 80px 0;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
  }

  .hero-content {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    z-index: 1;
  }

  .hero p {
    font-size: 1.25rem;
    color: rgba(255,255,255,0.9);
    margin-bottom: 2.5rem;
  }

  .hero-buttons {
    display: flex;
    justify-content: center;
    gap: 16px;
  }

  /* Stats Bar */
  .stats-bar {
    background-color: var(--bg-light);
    padding: 40px 0;
    border-bottom: 1px solid #e2e8f0;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    text-align: center;
  }

  .stat-item h4 {
    font-size: 2.5rem;
    color: var(--primary);
    font-weight: 800;
    margin-bottom: 0;
  }
  .stat-item span {
    color: var(--text-light);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
  }

  /* Services */
  .services {
    padding: 80px 0;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
  }

  .service-card {
    background: var(--white);
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    transition: transform 0.2s, box-shadow 0.2s;
    border: 1px solid #e2e8f0;
  }

  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0,0,0,0.1);
    border-color: var(--secondary);
  }

  .icon-box {
    background: var(--bg-light);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    color: var(--primary);
  }

  .service-link {
    color: var(--secondary);
    font-weight: 600;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    margin-top: 15px;
  }

  /* News Preview */
  .news-section {
    background-color: var(--bg-light);
    padding: 80px 0;
  }

  .news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }

  .news-card {
    background: var(--white);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }

  .news-content {
    padding: 24px;
  }

  .news-date {
    font-size: 0.85rem;
    color: var(--text-light);
    margin-bottom: 8px;
    display: block;
  }

  .news-title {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 12px;
    color: var(--primary);
  }

  /* Footer */
  footer {
    background: var(--primary);
    color: var(--white);
    padding: 60px 0 20px;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
    margin-bottom: 40px;
  }

  .footer-col h5 {
    font-size: 1.1rem;
    margin-bottom: 20px;
    color: rgba(255,255,255,0.9);
  }

  .footer-links {
    list-style: none;
  }
  
  .footer-links li { margin-bottom: 10px; }
  
  .footer-links a {
    color: rgba(255,255,255,0.7);
    text-decoration: none;
  }
  
  .footer-links a:hover { color: var(--white); }

  .copyright {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid rgba(255,255,255,0.1);
    color: rgba(255,255,255,0.5);
    font-size: 0.9rem;
  }

  /* Mobile */
  @media (max-width: 768px) {
    h1 { font-size: 2rem; }
    .hero { padding: 60px 0; }
    .nav-links { display: none; } /* Simplified mobile handling */
    .mobile-menu-btn { display: block; }
    .hero-buttons { flex-direction: column; }
    .btn { width: 100%; justify-content: center; }
  }
  
  @media (min-width: 769px) {
    .mobile-menu-btn { display: none; }
  }
`;

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <style>{css}</style>
      
      {/* Navigation */}
      <header>
        <div className="container nav-container">
          <a href="#" className="logo">
            ТПП <span>РФ</span>
          </a>
          
          <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#">О Палате</a>
            <a href="#">Услуги</a>
            <a href="#">Членство</a>
            <a href="#">Пресс-центр</a>
            <a href="#">Контакты</a>
          </nav>

          <div style={{ display: 'flex', gap: '10px' }}>
             <button className="btn btn-primary">Вступить</button>
             <button className="mobile-menu-btn btn btn-outline-dark" style={{padding: '8px'}} onClick={() => setIsMenuOpen(!isMenuOpen)}>
               <Icons.Menu />
             </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <h1>Объединяем бизнес — развиваем регион</h1>
          <p>
            Торгово-промышленная палата — ваш надежный партнер. Защищаем интересы, 
            помогаем с выходом на новые рынки и сертифицируем продукцию.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Стать членом палаты</button>
            <button className="btn btn-outline">Календарь событий</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h4>1,200+</h4>
              <span>Членов палаты</span>
            </div>
            <div className="stat-item">
              <h4>30</h4>
              <span>Лет опыта</span>
            </div>
            <div className="stat-item">
              <h4>50k+</h4>
              <span>Выданных сертификатов</span>
            </div>
            <div className="stat-item">
              <h4>200+</h4>
              <span>Мероприятий в год</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2>Наши услуги</h2>
          <div className="services-grid">
            
            <div className="service-card">
              <div className="icon-box"><Icons.Gavel /></div>
              <h3>Юридическая поддержка</h3>
              <p>Защита интересов в суде, правовая экспертиза договоров, консультации по налоговому праву.</p>
              <a href="#" className="service-link">Подробнее <Icons.ArrowRight /></a>
            </div>

            <div className="service-card">
              <div className="icon-box"><Icons.BadgeCheck /></div>
              <h3>Сертификация и Экспертиза</h3>
              <p>Выдача сертификатов происхождения (СТ-1), экспертиза качества товаров, оценка собственности.</p>
              <a href="#" className="service-link">Подробнее <Icons.ArrowRight /></a>
            </div>

            <div className="service-card">
              <div className="icon-box"><Icons.Globe /></div>
              <h3>ВЭД и Сотрудничество</h3>
              <p>Поиск партнеров за рубежом, организация бизнес-миссий, переводческие услуги и таможенное сопровождение.</p>
              <a href="#" className="service-link">Подробнее <Icons.ArrowRight /></a>
            </div>

            <div className="service-card">
              <div className="icon-box"><Icons.GraduationCap /></div>
              <h3>Деловое образование</h3>
              <p>Семинары, тренинги для руководителей и сотрудников, курсы повышения квалификации.</p>
              <a href="#" className="service-link">Подробнее <Icons.ArrowRight /></a>
            </div>

          </div>
        </div>
      </section>

      {/* News Preview */}
      <section className="news-section">
        <div className="container">
          <h2>Новости и События</h2>
          <div className="news-grid">
            {[1, 2, 3].map((i) => (
              <div className="news-card" key={i}>
                <div style={{height: '180px', background: '#cbd5e0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#718096'}}>
                  Изображение новости
                </div>
                <div className="news-content">
                  <span className="news-date">12 Октября 2023</span>
                  <h4 className="news-title">Итоги регионального форума "Бизнес-Успех"</h4>
                  <p style={{fontSize: '0.9rem', color: '#4a5568'}}>
                    Обсудили ключевые вопросы поддержки малого и среднего предпринимательства...
                  </p>
                  <a href="#" style={{color: 'var(--primary)', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem'}}>Читать далее</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="logo" style={{color: 'white', marginBottom: '20px'}}>
                ТПП <span>РФ</span>
              </div>
              <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem'}}>
                Союз «Торгово-промышленная палата» — негосударственная некоммерческая организация.
              </p>
            </div>
            
            <div className="footer-col">
              <h5>Разделы</h5>
              <ul className="footer-links">
                <li><a href="#">Об организации</a></li>
                <li><a href="#">Документы</a></li>
                <li><a href="#">Комитеты</a></li>
                <li><a href="#">Проекты</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h5>Услуги</h5>
              <ul className="footer-links">
                <li><a href="#">Сертификация</a></li>
                <li><a href="#">Оценка</a></li>
                <li><a href="#">Юридические услуги</a></li>
                <li><a href="#">Выставки</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h5>Контакты</h5>
              <ul className="footer-links">
                <li>+7 (999) 000-00-00</li>
                <li>info@tpp-example.ru</li>
                <li>г. Москва, ул. Примерная, д. 1</li>
              </ul>
            </div>
          </div>
          
          <div className="copyright">
             © 2023 Торгово-промышленная палата. Версия сайта: Вариант 1.
          </div>
        </div>
      </footer>
    </>
  );
};

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Target container 'root' is not a DOM element.");
}