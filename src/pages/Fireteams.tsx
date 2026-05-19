import { Helmet } from 'react-helmet-async'
import { Hero } from '../components/layout/Hero'
import { Section } from '../components/layout/Section'
import { CTABlock } from '../components/layout/CTABlock'
import { SKOOL_URL } from '../data/site-config'

const NEXT_COHORT_DATE = 'TBD'

export default function Fireteams() {
  return (
    <>
      <Helmet>
        <title>Iron Forge Fireteams -- 6-Week Group Coaching | $299</title>
        <meta
          name="description"
          content="Teams of 20 men. 6 weeks. Daily accountability, custom training, personalized meal plans, two assigned coaches. $299. 800+ men have been through Fireteams."
        />
      </Helmet>

      {/* Section 1: Hero */}
      <Hero
        title="Fireteams: 6 Weeks. 20 Men. No Excuses."
        subtitle={`Daily accountability, custom training, personalized meal plans, and two assigned coaches. $299 for 6 weeks. Next cohort starts ${NEXT_COHORT_DATE}.`}
        ctaText="Secure Your Spot"
        ctaHref="#fireteams-cta"
      />

      {/* Section 2: What Is Fireteams */}
      <Section gradient="top">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
            What Is Fireteams
          </h2>

          <p className="text-text-secondary leading-relaxed mb-6">
            Fireteams is not a program you buy and do on your own. It is a 6-week intensive where you are placed on a team of 20 men with two assigned coaches, daily accountability check-ins, and an 80 percent compliance minimum. If you do not show up, your team knows. If you skip a check-in, your coaches know. The structure is the point.
          </p>

          <p className="text-text-secondary leading-relaxed mb-6">
            You train 5 days a week — 45 minutes of weights plus 45 minutes of cardio. You follow a custom training program built for the cohort. You get a fully personalized meal plan with calculated macros, shopping lists, and a cookbook with 48 recipes. You check in daily with your team via Marco Polo and you attend weekly group coaching calls covering training, nutrition, and mindset.
          </p>

          <p className="text-text-secondary leading-relaxed">
            800+ men have been through Fireteams. The guys who do this are the ones who know they need external accountability to perform at the level they are capable of. They are not looking for a PDF to download. They are looking for a team that will not let them quit.
          </p>
        </div>
      </Section>

      {/* Section 3: What's Included */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
            What's Included
          </h2>
          <div className="space-y-4">
            {[
              { item: 'Custom training program', detail: '5 days/week (45 min weights + 45 min cardio)' },
              { item: 'Personalized meal plan', detail: 'Calculated macros, shopping lists, 48-recipe cookbook' },
              { item: 'Two assigned coaches', detail: 'Dedicated to your team for the full 6 weeks' },
              { item: 'Daily check-ins', detail: 'Marco Polo team video accountability' },
              { item: 'Weekly group coaching calls', detail: 'Training, nutrition, mindset -- live with your coaches' },
              { item: '6-week video curriculum', detail: 'Structured education modules throughout the program' },
              { item: 'Iron Forge app access', detail: 'Track workouts and progress through TrainHeroic' },
            ].map(({ item, detail }, i) => (
              <div key={i} className="flex items-start gap-3 bg-surface-elevated rounded-lg p-4 border border-border">
                <svg className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="text-text-primary font-medium">{item}</span>
                  <span className="text-text-secondary ml-2">— {detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Section 4: Pricing */}
      <Section gradient="top">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-text-primary mb-4">
            $299 — 6 weeks
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto">
            That is less than $50 a week for two coaches, a custom training program, personalized meal plans, daily team accountability, and weekly coaching calls. There is no ongoing subscription. You pay once, you do the 6 weeks, and you come out the other side a different person. If you want to run it again with a new cohort, you can.
          </p>
        </div>
      </Section>

      {/* Section 5: Testimonials (Placeholder) */}
      <Section>
        <h2 className="font-display text-3xl font-bold text-text-primary mb-8 text-center">
          What Fireteams Men Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              quote: '[Testimonial quote about what Fireteams changed -- accountability, discipline, results]',
              name: 'Name',
              detail: 'Age, occupation',
            },
            {
              quote: '[Testimonial quote about the team dynamic and daily check-ins]',
              name: 'Name',
              detail: 'Age, occupation',
            },
            {
              quote: '[Testimonial quote about what happened AFTER Fireteams -- continued progress, upgraded to coaching]',
              name: 'Name',
              detail: 'Age, occupation',
            },
          ].map((testimonial, i) => (
            <div
              key={i}
              className="bg-surface-elevated rounded-xl p-6 border border-border"
            >
              <p className="text-text-secondary leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <p className="mt-4 text-text-primary font-medium">
                — {testimonial.name}
              </p>
              <p className="text-text-muted text-sm">{testimonial.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 6: Escalation */}
      <Section gradient="top">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-text-primary mb-4">
            Ready For More?
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            Fireteams is group coaching with daily accountability. If you finish Fireteams and want to go deeper — labs, clinical protocols, a dedicated 1:1 coach reviewing your bloodwork and building your optimization plan — that is Health Optimization Coaching. A lot of guys who go through Fireteams realize they want the full system. The door is there when you are ready.
          </p>
          <a
            href="/optimize"
            className="text-brand-400 hover:text-brand-300 transition-colors font-medium"
          >
            Learn About Health Optimization Coaching
          </a>
        </div>
      </Section>

      {/* Section 7: CTA Block */}
      <Section id="fireteams-cta">
        <CTABlock
          heading={`Next cohort starts ${NEXT_COHORT_DATE}. Spots are limited to 20.`}
          description="Not ready for Fireteams? Join the free community."
          primaryText="Secure Your Spot"
          primaryHref="#fireteams-cta"
          secondaryText="Join the Brotherhood"
          secondaryHref={SKOOL_URL}
        />
      </Section>
    </>
  )
}
