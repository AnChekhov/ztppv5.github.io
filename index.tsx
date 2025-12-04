import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Menu, X, ChevronRight, Globe, ShieldCheck, 
  Briefcase, TrendingUp, Users, ArrowRight,
  Phone, Mail, MapPin, Calendar, Award
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'О Палате', href: '#' },
    { name: 'Услуги', href: '#services' },
    { name: 'Члены Палаты', href: '#' },
    { name: 'Пресс-центр', href: '#' },
    { name: 'Контакты', href: '#footer' },
  ];

  const services = [
    {
      title: 'ВЭД и Таможня',
      description: 'Содействие в поиске партнеров в Китае и Монголии, таможенное оформление, переводы.',
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      highlight: true
    },
    {
      title: 'Сертификация',
      description: 'Выдача сертификатов происхождения товаров (СТ-1, общая форма), экспертиза качества.',
      icon: <Award className="w-8 h-8 text-amber-500" />,
      highlight: false
    },
    {
      title: 'Юридическая защита',
      description: 'Консультации, представительство в судах, защита интеллектуальной собственности.',
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      highlight: false
    },
    {
      title: 'Деловые миссии',
      description: 'Организация бизнес-миссий, выставок и форумов в России и за рубежом.',
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      highlight: false
    },
  ];

  const news = [
    {
      date: '12 Октября 2023',
      title: 'Бизнес-миссия в Маньчжурию',
      preview: 'Делегация предпринимателей Забайкалья посетила приграничную зону для обсуждения новых контрактов.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800'
    },
    {
      date: '05 Октября 2023',
      title: 'Семинар по изменениям в налоговом кодексе',
      preview: 'Эксперты ФНС разъяснили новые правила уплаты ЕНС для малого и среднего бизнеса.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800'
    },
    {
      date: '28 Сентября 2023',
      title: 'Встреча с Генеральным консулом КНР',
      preview: 'Обсуждение вопросов упрощения визового режима для водителей грузового транспорта.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5 text-white'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded flex items-center justify-center font-bold text-xl ${isScrolled ? 'bg-blue-700 text-white' : 'bg-white text-blue-900'}`}>
              З
            </div>
            <div className={`font-bold leading-tight ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
              <span className="block uppercase tracking-wider text-sm">Забайкальская</span>
              <span className="text-xs opacity-90">Торгово-промышленная палата</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium hover:text-amber-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-100'}`}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-transform hover:scale-105 shadow-lg shadow-amber-500/30">
              Вступить
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-slate-800' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-slate-800' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t md:hidden">
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-slate-700 font-medium py-2 border-b border-slate-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-blue-700 text-white w-full py-3 rounded-lg font-semibold mt-2">
                Вступить в палату
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/80 z-10"></div>
          {/* Abstract geometric background representation */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-400 via-blue-500 to-transparent"></div>
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern Business Building" 
            className="w-full h-full object-cover grayscale mix-blend-overlay"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20 pt-20">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full text-amber-300 text-xs font-bold tracking-wider mb-6">
              РАЗВИВАЕМ БИЗНЕС ВМЕСТЕ
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Ваш надежный партнер <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                в Забайкалье
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
              Мы объединяем предпринимателей для создания благоприятной бизнес-среды, развития международных связей и защиты интересов бизнеса.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:shadow-lg hover:shadow-amber-500/30 flex items-center justify-center gap-2 group">
                Стать членом палаты
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center">
                Наши услуги
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats Strip */}
        <div className="absolute bottom-0 w-full border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
              <div>
                <div className="text-3xl font-bold text-white">30+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">Лет опыта</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">450+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">Компаний-членов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">1200+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">Экспертиз в год</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">CN/MN</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">Международные связи</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-slate-900 text-3xl md:text-4xl font-bold mb-4">Направления деятельности</h2>
              <p className="text-slate-600 max-w-xl">
                Комплексная поддержка бизнеса на всех этапах развития: от регистрации и защиты прав до выхода на международные рынки.
              </p>
            </div>
            <a href="#" className="text-blue-700 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              Все услуги <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`p-8 rounded-2xl transition-all duration-300 group hover:-translate-y-1 ${
                  service.highlight 
                    ? 'bg-blue-900 text-white shadow-xl shadow-blue-900/20' 
                    : 'bg-white text-slate-800 shadow-sm hover:shadow-lg border border-slate-100'
                }`}
              >
                <div className={`mb-6 p-3 rounded-xl inline-block ${
                  service.highlight ? 'bg-white/10' : 'bg-blue-50'
                }`}>
                  {service.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${service.highlight ? 'text-white' : 'text-slate-900'}`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 ${service.highlight ? 'text-blue-100' : 'text-slate-500'}`}>
                  {service.description}
                </p>
                <a href="#" className={`inline-flex items-center text-sm font-semibold ${
                  service.highlight ? 'text-amber-400 hover:text-amber-300' : 'text-blue-600 hover:text-blue-700'
                }`}>
                  Подробнее <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-amber-50 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-amber-100 rounded-full blur-3xl opacity-50"></div>
            
            <div className="flex-1 relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Присоединяйтесь к ведущему бизнес-сообществу региона
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  'Прямой диалог с властью',
                  'Расширение деловых контактов',
                  'Участие в закрытых мероприятиях',
                  'Скидки на услуги Палаты'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <div className="w-6 h-6 rounded-full bg-amber-200 flex items-center justify-center text-amber-700">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="bg-slate-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
                Подать заявку на вступление
              </button>
            </div>
            <div className="flex-1 w-full max-w-md">
               <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                       <TrendingUp className="text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Ваш бизнес</div>
                      <div className="text-sm text-slate-500">Потенциал роста</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-slate-100 rounded-full w-full">
                      <div className="h-2 bg-blue-500 rounded-full w-3/4"></div>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full w-full">
                      <div className="h-2 bg-amber-500 rounded-full w-1/2"></div>
                    </div>
                  </div>
                  <div className="mt-6 text-sm text-slate-500 text-center">
                    Вместе мы сильнее. Станьте частью команды.
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Новости и События</h2>
            <p className="text-slate-600">Будьте в курсе деловой жизни региона</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer border border-slate-100">
                <div className="h-48 overflow-hidden bg-slate-200 relative">
                   {/* Placeholder for news image */}
                   <div className="absolute inset-0 bg-slate-800/10 group-hover:bg-slate-800/0 transition-colors"></div>
                   <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                   />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-amber-600 font-semibold mb-3">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm line-clamp-3">
                    {item.preview}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="text-slate-600 font-semibold hover:text-slate-900 border-b-2 border-transparent hover:border-slate-900 transition-all">
              Читайте все новости
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-slate-900 text-slate-300 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-white font-bold text-2xl mb-6">ЗТПП</div>
              <p className="text-sm leading-relaxed text-slate-400 mb-6">
                Союз "Забайкальская Торгово-Промышленная Палата" — негосударственная некоммерческая организация, объединяющая предприятия и предпринимателей.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">VK</div>
                <div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors cursor-pointer">TG</div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Навигация</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Об организации</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Услуги и тарифы</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Реестр членов</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Комитеты</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Бизнес-образование</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Услуги</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Экспертиза и сертификация</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Оценка собственности</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Переводы</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Штрихкодирование</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Контакты</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                  <span>г. Чита, ул. Шилова, 100</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                  <span>+7 (3022) 12-34-56</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                  <span>info@zabtpp.ru</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <div className="mb-4 md:mb-0">
              © {new Date().getFullYear()} Забайкальская ТПП. Все права защищены.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white">Пользовательское соглашение</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);