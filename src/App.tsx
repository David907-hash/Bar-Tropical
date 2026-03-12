import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Utensils, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  Twitter, 
  Star, 
  Quote as QuoteIcon,
  ChevronRight,
  Heart,
  Users,
  Award,
  Palmtree
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 py-4",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className={cn(
          "flex items-center space-x-2 text-2xl md:text-3xl font-display uppercase tracking-tighter",
          isScrolled ? "text-tropical-orange" : "text-white"
        )}>
          <Palmtree className={cn(isScrolled ? "text-tropical-orange" : "text-white")} size={28} />
          <span>Bar Tropical</span>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/gps-cs-s/AHVAweq8lJ-2qOmgIbuNP82agg6Pzq00-5gdxDPhBHptigkqVN_8HukbFQtU56XZ71pIFshOhRtmY2v3_-GXBGOYdM-M6RrpSMKJRD5lpzFwohbPRoKrvZwLJFRsj3o7fDFFGo1IWrg1=w2000" 
          alt="Tropical Bar Interior" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60 md:bg-black/50" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-12 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-9xl text-white mb-6 leading-[0.9] font-display uppercase tracking-tighter">
            Fresh Drinks. <br />
            <span className="text-tropical-orange">Exotic Food.</span> <br />
            Vibrant Vibes.
          </h1>
          <p className="text-white/80 text-base md:text-xl mb-10 max-w-2xl mx-auto font-delius leading-relaxed">
            Dal 1994 nel cuore di Montegranaro (MC) <br />
            Una storia di famiglia ti aspetta!
          </p>
        </motion.div>
      </div>


    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Utensils className="text-tropical-orange" />,
      title: "Sapori Esotici",
      desc: "Il nostro menu è ispirato ai nostri sapori del territorio, con prodotti Km 0"
    },
    {
      icon: <Heart className="text-tropical-orange" />,
      title: "Atmosfera Vibrante",
      desc: "Pensato per l'energia e il divertimento, perfetto per una serata in tranquillità"
    },
    {
      icon: <Award className="text-tropical-orange" />,
      title: "Mixologist Esperti",
      desc: "I nostri bartender sono artisti, creano cocktail unici e personalizzati."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" 
              alt="Tropical Cocktail" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-36 h-36 md:w-48 md:h-48 bg-tropical-orange rounded-full flex items-center justify-center text-white text-center p-4 md:p-6 shadow-xl hidden sm:flex">
            <p className="font-display uppercase italic text-base md:text-xl">"L'atmosfera migliore in città"</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-tropical-orange font-semibold tracking-widest uppercase text-xs md:text-sm mb-4 block">LA NOSTRA STORIA</span>
          <h2 className="text-4xl md:text-6xl mb-6 md:mb-8 leading-tight">
            Creiamo ricordi, <br />
            <span className="italic text-tropical-orange">un drink alla volta.</span>
          </h2>
          <div className="text-gray-600 text-base md:text-xl mb-8 md:mb-10 leading-relaxed font-delius">
            <p className="font-bold text-tropical-dark mb-4">Una storia di famiglia dal cuore delle Marche.</p>
            <p>
              Tutto inizia il 3 aprile 1994. Alessandro Mancinelli e suo fratello Tony Mancinelli aprono le porte del Bar Tropical con un sogno: creare un luogo dove le persone possano sentirsi lontane, anche solo per un momento, senza allontanarsi dal centro di Montegranaro.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {features.map((f, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-tropical-orange/10 flex items-center justify-center shrink-0">
                  {React.cloneElement(f.icon as React.ReactElement, { size: 20 })}
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-heading font-bold mb-1">{f.title}</h4>
                  <p className="text-sm md:text-base text-gray-500 font-delius">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StorySection = () => {
  return (
    <section className="bg-tropical-dark text-white py-24 md:py-40 relative overflow-hidden">
      {/* Vertical Rail Text */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden xl:block">
        <p 
          className="rotate-180 text-[10px] uppercase tracking-[0.5em] text-white/20 font-medium"
          style={{ writingMode: 'vertical-rl' }}
        >
          ESTABLISHED IN THE TROPICS • URBAN ESCAPE • ESTABLISHED IN THE TROPICS
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Narrative */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-tropical-orange font-bold tracking-[0.4em] uppercase text-[10px]">Capitolo Uno: La Visione</span>
                <h2 className="text-6xl md:text-8xl font-display uppercase leading-[0.85] tracking-tighter">
                  L'unico <br />
                  <span className="text-tropical-orange">Traguardo</span>
                </h2>
              </div>

              <div className="space-y-6 text-white/60 text-lg leading-relaxed font-delius max-w-md">
                <p>
                  Mi prendo il tempo per ascoltare attentamente e capire i bisogni, i desideri e le preoccupazioni dei miei clienti. La mia genuina attenzione per i loro interessi assicura che il lavoro sia fatto bene.
                </p>
                <p>
                  Con sede a Montegranaro, aiuto gli amanti del buon bere e mangiare nella scelta migliore per le proprie esigenze personali...
                </p>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <p className="text-3xl font-display text-tropical-orange">2</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Generazioni</p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="text-center">
                  <p className="text-3xl font-display text-tropical-orange">32+</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Anni Aperto</p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="text-center">
                  <p className="text-3xl font-display text-tropical-orange">100%</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Esperienza</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Storytelling */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="aspect-[4/5] md:aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwepXlVI5hy3iTcfp4xFgT3NnRhW45hhOCaMuHyEjerr7-0tNTswGm5LUZB2HX9MC1y-BOEm2PtTIpRzJgCSaiG2zDXPcJo6fg_drHS3S8vZ5SJ7qw1MnCVw4ZypmQL2msEKzoq17=s1920" 
                  alt="Tropical Story" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-tropical-orange/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-tropical-orange/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

const TheCraft = () => {
  const steps = [
    {
      time: "7:00",
      title: "La Colazione",
      desc: "La giornata al Bar Tropical inizia all'insegna della tradizione e della qualità. Crediamo che la colazione sia il momento più importante, e per questo la prepariamo esclusivamente con prodotti 100% Made in Italy. Dal caffè proveniente dalle migliori torrefazioni italiane, ai cornetti fragranti ripieni di creme artigianali, fino al pane e alle focacce appena sfornate per una colazione salata. Ogni mattina è un piccolo viaggio nei sapori autentici della nostra terra, per offrirti un risveglio genuino e pieno di energia.",
      image: "https://images.pexels.com/photos/101533/pexels-photo-101533.jpeg"
    },
    {
      time: "18:00",
      title: "L'Aperitivo",
      desc: "Quando il sole inizia a calare, il nostro bancone si anima con i colori e i profumi dell'aperitivo , prepariamo drink freschi, innovativi e dissetanti perfetti per brindare alla fine della giornata. A fare da contrappunto ai nostri cocktail, trovi una selezione di stuzzichini e prodotti del posto scelti accuratammente in ogni dettaglio: Serviti direttamente al bancone garantendo qualità e freschezza ad ogni ora della giornata .",
      image: "https://images.pexels.com/photos/1475/food-vegetables-italian-restaurant.jpg"
    },
    {
      time: "23:00",
      title: "Dopo Serata",
      desc: "Con la sera, l'atmosfera si trasforma. Bar Tropical diventa il tuo salotto segreto per il dopocena, un angolo di pace dove rigenerarsi. Abbiamo pensato a uno spazio accogliente e informale, dedicato al relax, dove potersi concedere un buon cocktail o un distillato in santa pace. La colonna sonora è affidata a una selezione di musica rilassante, perfetta per chiacchierare, leggere un libro o semplicemente godersi la compagnia, lontano dalla confusione. Un luogo dove il tempo sembra scorrere più lentamente.",
      image: "https://images.pexels.com/photos/4279096/pexels-photo-4279096.jpeg"
    }
  ];

  return (
    <section className="py-24 md:py-40 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-tropical-orange font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Capitolo Due: Il Ritmo</span>
          <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter">
            Un Viaggio <span className="text-tropical-orange">nel</span> Tempo.
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 hidden lg:block" />

          <div className="space-y-24 md:space-y-40">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "flex flex-col lg:flex-row items-center gap-12 md:gap-20",
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                )}
              >
                <div className="flex-1 w-full">
                  <div className="aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl group">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <div className="flex-1 space-y-6 text-center lg:text-left">
                  <div className="inline-block px-4 py-1 rounded-full bg-tropical-orange/10 text-tropical-orange text-xs font-bold tracking-widest uppercase">
                    {step.time}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-display uppercase tracking-tighter">{step.title}</h3>
                  <p className="text-gray-500 text-lg leading-relaxed max-w-md mx-auto lg:mx-0 font-delius">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutMe = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-tropical-cream">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <div className="relative">
            <div className="aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 md:border-8 border-white">
              <img 
                src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwerNGY4k_NZbMZJtz-sg1_XKXKxuzKjUefw61irskRmEEufsxmMPterKujaWNgBNjlyEfjkcY3kNomi_a4nMYJMZ7UbLcC0K5xTcQ-0hJJMoNtmg_0RwEHuqwO5WZ3V_qkEttfH0J7Z71M21=w1000" 
                alt="Alessandro Mancinelli" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl max-w-[80%]">
              <h3 className="text-xl md:text-2xl font-heading font-bold">Alessandro Mancinelli</h3>
              <p className="text-tropical-orange font-medium text-sm md:text-base">Fondatore & Barista</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <span className="text-tropical-orange font-semibold tracking-widest uppercase text-xs md:text-sm mb-4 block">Su di Me</span>
          <h2 className="text-5xl md:text-7xl mb-6 md:mb-8 leading-[0.9] font-display uppercase tracking-tighter">
            Dedicato ai vostri <br />
            <span className="text-tropical-orange">interessi</span> e alla vostra felicità.
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8 italic leading-relaxed font-delius">
            "Mi prendo il tempo per ascoltare attentamente e capire i bisogni, i desideri e le preoccupazioni dei miei clienti. La mia genuina attenzione per i loro interessi assicura che il lavoro sia fatto bene."
          </p>
          <p className="text-gray-600 text-sm md:text-base mb-8 md:mb-10 leading-relaxed font-delius">
            Con sede a Montegranaro, aiuto gli amanti del buon bere e mangiare nella scelta migliore per le proprie esigenze personali...
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
            <div className="p-5 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-tropical-orange/10 flex items-center justify-center mb-4">
                <Users className="text-tropical-orange" size={20} />
              </div>
              <h4 className="font-heading font-bold text-lg mb-2">Guida Esperta</h4>

            </div>
            <div className="p-5 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-tropical-orange/10 flex items-center justify-center mb-4">
                <Heart className="text-tropical-orange" size={20} />
              </div>
              <h4 className="font-heading font-bold text-lg mb-2">Il Cliente al Primo Posto</h4>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      text: "Un grazie di cuore per averci accolto e pienamente soddisfatto anche se eravamo un gruppo numeroso e non avevamo avvisato del nostro arrivo.",
      author: "Chiara Cifatte",
      rating: 5
    },
    {
      text: "Questo è il bar centrale di Montegranaro la colazione alla mattina è super con la cortesia di Leonella poi alla sera potrai gustare i famosi cocktail di super Pippo.",
      author: "Valentino Brugnini",
      rating: 5
    },
    {
      text: "Siamo andati la mattina per un caffè e un toast. Il servizio è stato eccellente, la signora è stata molto gentile, personale gentile e molto gentile e qualificato.",
      author: "Maria Besso",
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16">
        <span className="text-tropical-orange font-semibold tracking-widest uppercase text-xs md:text-sm mb-4 block">Testimonianze</span>
        <h2 className="text-4xl md:text-6xl mb-6">Storie dei Nostri Ospiti</h2>
        <div className="flex items-center justify-center space-x-2 mb-4 md:mb-8">
          {[...Array(5)].map((_, i) => <Star key={i} className="fill-tropical-orange text-tropical-orange" size={18} />)}
          <span className="font-bold text-base md:text-lg ml-2">Valutazione 4.6/5</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 bg-tropical-cream rounded-2xl md:rounded-3xl border border-gray-100 relative"
          >
            <QuoteIcon className="text-tropical-orange/10 absolute top-4 right-4 md:top-6 md:right-6" size={32} />
            <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base leading-relaxed italic">"{r.text}"</p>
            <div className="flex items-center justify-between">
              <span className="font-heading font-bold text-base md:text-lg">— {r.author}</span>
              <div className="flex">
                {[...Array(r.rating)].map((_, i) => <Star key={i} className="fill-tropical-orange text-tropical-orange" size={12} />)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const QuoteSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-tropical-dark text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 md:opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] md:text-[20vw] font-display font-bold italic whitespace-nowrap">
          TROPICAL
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <QuoteIcon className="text-tropical-orange mx-auto mb-8 md:mb-10" size={48} />
        <h2 className="text-2xl md:text-5xl font-heading italic mb-10 md:mb-12 leading-tight">
          "L'atmosfera è impareggiabile. Vibrante, esotica ed elegante. I drink tropicali sono i migliori che abbia mai provato e la musica mantiene l'energia alta tutta la notte."
        </h2>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#121212] text-white py-16 md:py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="space-y-6">
          <div className="flex items-center space-x-2 text-2xl font-display uppercase tracking-tighter text-tropical-orange">
            <Palmtree size={24} />
            <span>Bar Tropical</span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed">
            Una destinazione culinaria premium per drink esotici e sapori tropicali. Vivi l'atmosfera dell'isola in ogni sorso.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-tropical-orange transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-tropical-orange transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-tropical-orange transition-colors" aria-label="Twitter">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        <div className="sm:pl-8">
          <h4 className="text-tropical-orange font-semibold uppercase tracking-widest text-xs mb-6 md:mb-8">Legale</h4>
          <ul className="space-y-3 md:space-y-4 text-white/60 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Informativa sulla Privacy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Termini di Servizio</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Informativa sui Cookie</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-tropical-orange font-semibold uppercase tracking-widest text-xs mb-6 md:mb-8">Newsletter</h4>
          <p className="text-white/50 mb-6 text-xs md:text-sm">Iscriviti per ricevere offerte speciali e aggiornamenti sul menu stagionale.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="La tua email" 
              className="bg-white/5 border border-white/10 rounded-l-full px-4 md:px-6 py-3 w-full focus:outline-none focus:border-tropical-orange transition-colors text-sm"
            />
            <button className="bg-tropical-orange px-5 py-3 rounded-r-full hover:bg-tropical-orange/90 transition-colors shrink-0">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 md:mt-20 pt-8 border-t border-white/5 text-center text-white/30 text-xs md:text-sm">
        <p>© {new Date().getFullYear()} Bar Tropical. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <StorySection />
        <TheCraft />
        <AboutMe />
        <Testimonials />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
}
