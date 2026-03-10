import { motion } from 'motion/react';
import SectionHeading from './ui/SectionHeading';
import SectionDivider from './ui/SectionDivider';
import Navbar from './Navbar';
import Footer from './Footer';
import Chatbot from './Chatbot';
import { BackgroundEffects } from './BackgroundEffects';

export default function AboutPage() {
    return (
        <div className="relative min-h-screen bg-cream selection:bg-bronze/30 selection:text-forest">
            <BackgroundEffects />
            <Navbar />

            <main className="pt-32 pb-24 relative z-10">
                <div className="section-container">
                    <SectionHeading
                        title="Philosophie & Vision"
                        subtitle="Ihre Vision, unsere Berufung"
                    />

                    <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="space-y-6 text-forest/80 font-sans leading-relaxed"
                        >
                            <p className="text-xl font-serif text-forest mb-8 leading-snug">
                                "Handwerk nicht als Beruf zu sehen, sondern als Berufung zu verstehen, zeichnet unser Unternehmen aus."
                            </p>

                            <p>
                                Wir arbeiten stetig daran, ein großartiges Unternehmen zu bleiben. Jute Garten- und Landschaftsbau ist es äußerst wichtig, seinen Kunden qualitativ hochwertige Produkte und Services zu bieten. Aber unsere Bemühungen reichen weit darüber hinaus. Wir arbeiten an einer Strategie, um Wachstum durch Innovation zu beschleunigen und die Fähigkeiten unserer Firma und unserer Partner zu stärken.
                            </p>

                            <p>
                                Wir sind stets bestrebt, Ihnen als kompetentes Dienstleistungsunternehmen zur Seite zu stehen. Dabei stehen die Wünsche unserer Kunden und deren Umsetzung grundsätzlich im Vordergrund. Wir verstehen es als unsere Aufgabe, mittels kompetenter Beratung, Planung und fachgerechter Umsetzung ein optimales Ergebnis zu erzielen.
                            </p>

                            <p>
                                Unser umfassendes Dienstleistungsangebot reicht von der Planung bis zur Ausführung sämtlicher Arbeiten im Außenanlagenbereich. Unser Unternehmen arbeitet in allen wirtschaftlichen Schichten vom Privatkunden- und Unternehmenssektor bis hin zu öffentlichen Aufträgen. Dabei betrachten wir jeden Kunden als individuell und wichtig.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src="/Portfolio_1.webp"
                                alt="Sascha Junker bei der Arbeit an einer Natursteinmauer"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-cream text-lg font-serif">Inh. Sascha Junker</p>
                                <p className="text-cream/80 text-sm font-sans">Geschäftsführer</p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </main>

            <SectionDivider color="#1B3022" />
            <Footer />
            <Chatbot />
        </div>
    );
}
