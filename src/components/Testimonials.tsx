import { motion } from 'motion/react';
import { StaggerTestimonials, type StaggerTestimonial } from './ui/stagger-testimonials';
import SectionHeading from './ui/SectionHeading';

const testimonials: StaggerTestimonial[] = [
  {
    tempId: 0,
    testimonial: 'Unsere neue Natursteinterrasse ist wunderschön geworden. Saubere Arbeit und sehr zuverlässig. Absolute Empfehlung für jeden Gartenbesitzer in Zossen.',
    by: 'Familie Müller',
    location: 'Zossen',
    rating: 5,
  },
  {
    tempId: 1,
    testimonial: 'Gute Beratung sollte wirklich nichts kosten - das haben wir hier erlebt! Die neue Zaunanlage steht perfekt und sieht klasse aus.',
    by: 'Stefan K.',
    location: 'Wünsdorf',
    rating: 5,
  },
  {
    tempId: 2,
    testimonial: 'Herr Junker und sein Team haben unsere kompletten Pflasterarbeiten bei der Einfahrt übernommen. Schnell, professionell und ohne Mängel.',
    by: 'Petra Schmidt',
    location: 'Rangsdorf',
    rating: 5,
  },
  {
    tempId: 3,
    testimonial: 'Wir lassen unseren kompletten Garten pflegen und sind jedes Mal begeistert, wie ordentlich hinterlassen wird.',
    by: 'Jürgen Lehmann',
    location: 'Klausdorf',
    rating: 5,
  },
  {
    tempId: 4,
    testimonial: 'Tolle Holzterrasse! Leider gab es eine kleine Verzögerung bei der Materiallieferung, aber das Ergebnis entschädigt dafür.',
    by: 'Sabine W.',
    location: 'Mellensee',
    rating: 4,
  },
  {
    tempId: 5,
    testimonial: 'Erdarbeiten und Teichbau gingen Hand in Hand. Herr Junker hat ein super Auge für die Gestaltung.',
    by: 'Christian Hoffmann',
    location: 'Ludwigsfelde',
    rating: 5,
  },
  {
    tempId: 6,
    testimonial: 'Winterdienst funktioniert reibungslos. Und im Sommer sorgt die neue Bewässerungsanlage für satten grünen Rasen.',
    by: 'Familie Bauer',
    location: 'Dabendorf',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-sand/20 relative z-10">
      <div className="section-container">
        <SectionHeading title="Stimmen unserer Klienten" subtitle="Erfahrungen unserer geschätzten Kunden" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: '-80px' }}
        transition={{ duration: 0.8 }}
      >
        <StaggerTestimonials testimonials={testimonials} />
      </motion.div>
    </section>
  );
}
