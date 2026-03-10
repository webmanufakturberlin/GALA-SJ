import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { ShinyButton } from './ui/shiny-button';

const serviceData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  paragraphs: string[];
}> = {
  gartengestaltung: {
    title: 'Pflaster- & Natursteinarbeiten',
    subtitle: 'Perfekte Wege & Bauwerke aus Meisterhand',
    description:
      'Von der Einfahrt bis zur kunstvollen Natursteinmauer – wir gestalten langlebige und formschöne Steinarbeiten. Jeder Pflasterstein sitzt perfekt, um Einfahrten und Terrassen dauerhaft nutzbar und optisch ansprechend zu machen.',
    features: [
      'Pflasterarbeiten für Einfahrten und Wege',
      'Natursteinarbeiten und Mauerwerke',
      'Gartengestaltung mit Stein-Elementen',
      'Erd- und Schachtarbeiten zur Vorbereitung',
      'Dränagesysteme für optimale Entwässerung',
      'Teichanlagenbau mit Steineinfassungen',
    ],
    image: '/Leistungen_2.webp',
    paragraphs: [
      'Pflaster- und Natursteinarbeiten bilden das Rückgrat jeder soliden Gartengestaltung. Wir bei Jute Gartenbau verstehen unser Handwerk als Berufung und legen größten Wert auf eine fachgerechte und ästhetische Umsetzung Ihrer Wege, Einfahrten und Terrassen.',
      'Dabei setzen wir auf hochwertige Materialien und eine sorgfältige Untergrundvorbereitung durch präzise Erd- und Schachtarbeiten sowie effiziente Dränagesysteme. So stellen wir sicher, dass Ihre Steinarbeiten auch nach Jahren noch stabil und eben bleiben.',
      'Egal ob es um die Integration eines idyllischen Gartenteichs mit Natursteineinfassung geht oder um die repräsentative Gestaltung Ihres Eingangs – unsere erfahrenen Steinsetzer verwirklichen Ihre Visionen mit handwerklicher Perfektion.',
    ],
  },
  landschaftsbau: {
    title: 'Holzterrasse & Zaunbau',
    subtitle: 'Fachgerechte Holzarbeiten für Ihren Außenbereich',
    description:
      'Wir schaffen gemütliche Außenbereiche mit maßgeschneiderten Holzterrassen und sichern Ihr Grundstück mit stabilen Zaunsystemen. Qualitätsholz und fachgerechte Montage garantieren jahrzehntelange Freude.',
    features: [
      'Holzterrassen und WPC-Beläge',
      'Geländerbau und Maßanfertigungen',
      'Carports und Pergolen',
      'Montage von Zaunanlagen und Sichtschutz',
      'Holzarbeiten im Außenbereich',
      'Individuelle Holzkreationen',
    ],
    image: '/Leistungen_3.webp',
    paragraphs: [
      'Holz ist ein natürlicher Baustoff, der Wärme und Eleganz in jeden Garten bringt. Ob maßgefertigte Holzterrassen als Erweiterung Ihres Wohnzimmers oder stilvolle Pergolen für schattige Stunden – wir planen und bauen individuelle Holzarbeiten, die genau auf Ihre Bedürfnisse zugeschnitten sind.',
      'Darüber hinaus bieten wir kompetente Lösungen im Bereich Zaun- und Geländerbau an. Eine hochwertige Zaunanlage schützt nicht nur Ihre Privatsphäre, sondern rundet das optische Gesamtbild Ihres Grundstücks harmonisch ab.',
      'Von der Auswahl des geeigneten Holzes oder WPC-Materials bis zur fachmännischen Installation Ihres neuen Carports stehen wir Ihnen beratend zur Seite. Gute Beratung sollte dabei stets kostenfrei sein – das ist unser Versprechen an Sie.',
    ],
  },
  pflege: {
    title: 'Pflege, Baum & Bewässerung',
    subtitle: 'Rundum-Betreuung für Garten und Grundstück',
    description:
      'Damit Ihr Garten immer in voller Pracht steht, bieten wir umfassenden Pflege- und Pflanzdienst an. Von der Installation moderner Bewässerungssysteme bis zum zuverlässigen Winterdienst sind wir für Sie da.',
    features: [
      'Außenanlagenplanung und Pflanzdienst',
      'Baumarbeiten und Gehölzschnitt',
      'Bewässerungssysteme – Installation',
      'Regelmäßige Garten- und Grünpflege',
      'Pflasterreinigung und Pflege',
      'Zuverlässiger Winterdienst',
    ],
    image: '/Leistungen_4.webp',
    paragraphs: [
      'Ein gepflegter Garten ist ein Ort der Entspannung und Erholung. Unser Pflegeteam übernimmt alle anfallenden Arbeiten, vom fachgerechten Pflanzdienst über professionelle Baumarbeiten bis hin zur regelmäßigen Grünpflege. So können Sie Ihre Freizeit im Garten unbeschwert genießen.',
      'Um die optimale Versorgung Ihrer Pflanzen zu gewährleisten, planen und installieren wir zudem moderne, wassersparende Bewässerungssysteme. Diese nehmen Ihnen nicht nur Arbeit ab, sondern sorgen auch in trockenen Sommern für eine grüne Oase.',
      'Unser Service endet nicht mit dem Sommer. In der kalten Jahreszeit übernehmen wir zuverlässig den Winterdienst auf Ihrem Grundstück. Mit Jute Gartenbau haben Sie das ganze Jahr über einen kompetenten Ansprechpartner an Ihrer Seite.',
    ],
  },
};

export default function LeistungenPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = slug ? serviceData[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="relative min-h-screen bg-cream">
        <Navbar />
        <div className="pt-32 pb-24 px-6 text-center">
          <h1 className="text-3xl font-serif text-forest mb-4">Seite nicht gefunden</h1>
          <button onClick={() => navigate('/')} className="text-bronze hover:underline font-sans">
            Zurück zur Startseite
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-cream">
      <Navbar />

      {/* Hero banner */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-forest/70" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <p className="text-bronze font-sans text-xs uppercase tracking-widest mb-3">{service.subtitle}</p>
          <h1 className="text-4xl md:text-6xl font-serif text-cream">{service.title}</h1>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate('/#leistungen')}
            className="flex items-center gap-2 text-forest/60 hover:text-forest mb-10 font-sans text-sm transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Startseite
          </button>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl font-sans text-forest/80 leading-relaxed mb-12"
          >
            {service.description}
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-forest/5 rounded-2xl p-8 md:p-10 mb-12"
          >
            <h2 className="text-2xl font-serif text-forest mb-6">Unsere Leistungen im Detail</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-bronze flex-shrink-0 mt-0.5" />
                  <span className="font-sans text-sm text-forest/80">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Paragraphs */}
          {service.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="font-sans text-forest/70 leading-relaxed mb-6"
            >
              {p}
            </motion.p>
          ))}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <ShinyButton onClick={() => navigate('/#contact')}>
              Jetzt Beratung anfragen
            </ShinyButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
