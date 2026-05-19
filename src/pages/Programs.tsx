import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Hero } from '../components/layout/Hero'
import { Section } from '../components/layout/Section'
import { PROGRAM_CATEGORIES, getProgramBySlug } from '../data/programs'

export default function Programs() {
  // Get the training team program for the feature block
  const trainingTeam = getProgramBySlug('iron-forge-training-team')

  return (
    <>
      <Helmet>
        <title>Iron Forge Brotherhood -- Training Programs | TrainHeroic</title>
        <meta
          name="description"
          content="20 training programs from $27-$67 plus the Iron Forge Training Team at $25/month. Bulking, cutting, bodyweight, garage gym, powerbuilding -- all delivered through TrainHeroic."
        />
      </Helmet>

      {/* Section 1: Hero */}
      <Hero
        title="Training Programs Built by the Iron Forge Coaching Team"
        subtitle="20 standalone programs from $27 to $67. Or join the Iron Forge Training Team at $25 per month for ongoing programming with coach access."
      />

      {/* Section 2: Training Team Feature Block */}
      {trainingTeam && (
        <Section gradient="top">
          <div className="max-w-3xl mx-auto bg-surface-elevated border-l-4 border-brand-500 rounded-r-lg p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div>
                <h2 className="font-display text-2xl font-bold text-text-primary">
                  Iron Forge Training Team -- $25/month
                </h2>
                <p className="text-text-muted text-sm mt-1">50+ active members</p>
              </div>
              <a
                href={trainingTeam.trainheroicUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm shrink-0"
              >
                Join the Training Team
              </a>
            </div>
            <p className="text-text-secondary leading-relaxed">
              Ongoing programming delivered through the TrainHeroic app. New programming every training block. Coach access for form checks and questions. Instructional videos for every movement. The Iron Forge training community. Cancel anytime.
            </p>
          </div>
        </Section>
      )}

      {/* Section 3: Program Directory */}
      <Section>
        <div className="space-y-12">
          {PROGRAM_CATEGORIES.filter(cat => cat.key !== 'team').map((category) => {
            const categoryPrograms = category.slugs
              .map((slug) => getProgramBySlug(slug))
              .filter((p) => p !== undefined)

            if (categoryPrograms.length === 0) {
              return (
                <div key={category.key}>
                  <h3 className="font-display text-2xl font-bold text-text-primary mb-4">
                    {category.label}
                  </h3>
                  <p className="text-text-muted text-sm italic">Programs coming soon</p>
                </div>
              )
            }

            return (
              <div key={category.key}>
                <h3 className="font-display text-2xl font-bold text-text-primary mb-6">
                  {category.label}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {categoryPrograms.map((program) => (
                    <Link
                      key={program.slug}
                      to={`/programs/${program.slug}`}
                      className="bg-surface-elevated rounded-xl p-6 border border-border hover:border-brand-500/50 transition-colors group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <span className="text-xs text-brand-400 uppercase tracking-wide">
                            {program.categoryLabel}
                          </span>
                          <h4 className="font-display text-lg font-bold text-text-primary mt-1 group-hover:text-brand-400 transition-colors">
                            {program.name}
                          </h4>
                          <p className="text-text-muted text-sm mt-1">
                            {program.duration} | {program.daysPerWeek} days/week
                          </p>
                        </div>
                        <span className="text-text-primary font-bold shrink-0">
                          {program.priceDisplay}
                        </span>
                      </div>
                      <p className="text-brand-400 text-sm mt-4 group-hover:text-brand-300 transition-colors">
                        View Program
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Section 4: Escalation Note */}
      <Section gradient="top">
        <div className="max-w-3xl mx-auto">
          <p className="text-text-secondary leading-relaxed mb-8">
            These are self-guided programs. You get the programming, you follow it, you progress on your own. If you want group accountability with daily check-ins, a team of 20 men pushing each other, and two assigned coaches -- that is Fireteams. If you want the full system with labs, clinical protocols, a dedicated coach, and weekly calls -- that is Health Optimization Coaching. There is a path for every level of commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/fireteams"
              className="btn-primary text-sm text-center"
            >
              Learn About Fireteams
            </Link>
            <Link
              to="/optimize"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border text-text-secondary hover:text-text-primary transition-colors text-sm"
            >
              Learn About Coaching
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
