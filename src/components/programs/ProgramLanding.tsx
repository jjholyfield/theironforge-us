import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Hero } from '../layout/Hero'
import { Section } from '../layout/Section'
import { CTABlock } from '../layout/CTABlock'
import { FAQ } from '../shared/FAQ'
import type { Program } from '../../data/programs'
import { getProgramBySlug } from '../../data/programs'

interface ProgramLandingProps {
  program: Program
}

export function ProgramLanding({ program }: ProgramLandingProps) {
  const otherProgramData = program.otherPrograms
    .map((slug) => getProgramBySlug(slug))
    .filter((p): p is Program => p !== undefined)

  return (
    <>
      <Helmet>
        <title>{program.seo.title}</title>
        <meta name="description" content={program.seo.description} />
      </Helmet>

      {/* Section 1: Hero */}
      <Hero
        title={program.hero.headline}
        subtitle={program.hero.subheadline}
      />
      <Section>
        <div className="text-center">
          <p className="text-3xl font-bold text-text-primary mb-6">{program.priceDisplay}</p>
          <a
            href={program.trainheroicUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg"
          >
            {program.isSubscription ? 'Start Free Trial' : `Get This Program`}
          </a>
        </div>
      </Section>

      {/* Section 2: What This Program Is */}
      <Section gradient="top">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
            {program.isSubscription ? 'What This Is' : 'What This Program Is'}
          </h2>
          {program.description.split('\n\n').map((paragraph, i) => (
            <p key={i} className="text-text-secondary leading-relaxed mb-6 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      {/* Section 3: What's Included */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
            What's Included
          </h2>
          <ul className="space-y-4">
            {program.included.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Section 4: Who This Is For / Not For */}
      <Section gradient="top">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-display text-xl font-bold text-text-primary mb-6">
              This is for you if...
            </h3>
            <ul className="space-y-4">
              {program.forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-text-primary mb-6">
              This is NOT for you if...
            </h3>
            <ul className="space-y-4">
              {program.notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Section 5: CTA Block + Team Callout */}
      <Section>
        <CTABlock
          heading={`${program.name} | ${program.priceDisplay}`}
          description="Delivered through the TrainHeroic app. Purchase, download, and start training today."
          primaryText={program.isSubscription ? 'Start Free Trial' : 'Get This Program'}
          primaryHref={program.trainheroicUrl}
        />
        {program.slug !== 'iron-forge-training-team' && program.teamCallout && (
          <div className="mt-8 max-w-3xl mx-auto bg-surface-elevated border-l-4 border-brand-500 rounded-r-lg p-6">
            <p className="text-text-secondary leading-relaxed">{program.teamCallout}</p>
          </div>
        )}
      </Section>

      {/* Section 6: Other Programs */}
      {otherProgramData.length > 0 && (
        <Section gradient="top">
          <h2 className="font-display text-3xl font-bold text-text-primary mb-8 text-center">
            Other Programs
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {otherProgramData.slice(0, 3).map((p) => (
              <div
                key={p.slug}
                className="bg-surface-elevated rounded-xl p-6 border border-border"
              >
                <span className="text-xs text-brand-400 uppercase tracking-wide">
                  {p.categoryLabel}
                </span>
                <h3 className="font-display text-lg font-bold text-text-primary mt-2">
                  {p.name}
                </h3>
                <p className="text-text-secondary text-sm mt-1">{p.priceDisplay}</p>
                <Link
                  to={`/programs/${p.slug}`}
                  className="inline-block mt-4 text-sm text-brand-400 hover:text-brand-300 transition-colors"
                >
                  View Program
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/programs"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              See All Programs
            </Link>
          </div>
        </Section>
      )}

      {/* Section 7: FAQ */}
      <Section>
        <h2 className="font-display text-3xl font-bold text-text-primary mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <FAQ items={program.faq} />
      </Section>
    </>
  )
}
