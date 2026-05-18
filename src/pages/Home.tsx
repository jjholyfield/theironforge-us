import { Hero } from '../components/layout/Hero'
import { Section } from '../components/layout/Section'

export default function Home() {
  return (
    <>
      <Hero
        title="Iron Forge Brotherhood"
        subtitle="Coaching. Community. Performance."
        ctaText="Apply for Coaching"
        ctaHref="/apply"
      />
      <Section gradient="top">
        <p className="text-text-secondary text-center text-lg">
          Programs, coaching, and community content coming in Phase 22.
        </p>
      </Section>
    </>
  )
}
