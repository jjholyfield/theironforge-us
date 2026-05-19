import { Helmet } from 'react-helmet-async'
import { Hero } from '../components/layout/Hero'
import { Section } from '../components/layout/Section'
import { CTABlock } from '../components/layout/CTABlock'
import { SKOOL_URL } from '../data/site-config'

const STEPS = [
  {
    number: 1,
    title: 'Join Skool',
    description: 'Click the button, create your account, and you are in. No credit card, no trial, no commitment. You have full access immediately.',
  },
  {
    number: 2,
    title: 'Start with the courses that match your goals',
    description: 'If you are focused on body composition, start with the training and nutrition modules. If you are interested in hormones and protocols, start with the hormone optimization series. The courses are organized so you can go straight to what matters to you.',
  },
  {
    number: 3,
    title: 'Engage with the community',
    description: 'Post questions, share your progress, learn from other members. The guys in this community are serious about their health and the conversations reflect that. This is not a beginner fitness forum.',
  },
  {
    number: 4,
    title: 'When you are ready for coached accountability, the coaching application is there',
    description: 'No pressure, no timeline. Some guys stay in the community for months learning before they decide coaching is right for them. Some apply within a week. Both are fine.',
  },
]

export default function Community() {
  return (
    <>
      <Helmet>
        <title>Iron Forge Brotherhood -- Free Men's Health Optimization Community | Skool</title>
        <meta
          name="description"
          content="Join the Iron Forge Brotherhood for free. 40+ courses on training, nutrition, hormones, and supplementation. Community Q&A with Josh. No credit card required."
        />
      </Helmet>

      {/* Section 1: Hero */}
      <Hero
        title="The Iron Forge Brotherhood"
        subtitle="A free community for men who take their health and performance seriously. Courses, Q&A, direct access to support. No catch, no credit card, no trial period. Just join and start learning."
        ctaText="Join the Brotherhood"
        ctaHref={SKOOL_URL}
      />

      {/* Section 2: What You Get */}
      <Section gradient="top">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
            What You Get
          </h2>

          <p className="text-text-secondary leading-relaxed mb-6">
            Here is what you have access to the moment you join. Inside the Skool community you will find over 40 course modules covering everything from training periodization to hormone optimization to building a supplement protocol that actually makes sense for your specific situation. These are not surface-level introductions. These are the same frameworks and research I use with my coaching clients, broken down into sequential modules you can work through at your own pace.
          </p>

          <p className="text-text-secondary leading-relaxed mb-6">
            The courses cover five core areas: training programming and periodization, nutrition and body composition, hormone optimization and bloodwork interpretation, supplementation protocols, and peptide research. Each area has multiple modules that go deep enough for you to actually implement what you learn, not just understand it conceptually. I built all of it from clinical experience and published research, and I update it as new data comes out.
          </p>

          <p className="text-text-secondary leading-relaxed mb-6">
            Beyond the courses, the community itself is where a lot of the real value lives. You can post questions, share your bloodwork, get feedback from other guys who are working through the same optimization process, and my support team (Kelsey and Cassie) is in there daily handling DMs and questions. I post new content regularly, break down research, and answer questions directly. This is not a community where you join and get ignored.
          </p>

          <p className="text-text-secondary leading-relaxed">
            The weekly rhythm is simple: new content from me, active Q&A threads, and member discussions about what is working and what is not. You learn from the courses and you learn from other guys in the community who are running similar protocols and sharing their results.
          </p>
        </div>
      </Section>

      {/* Section 3: How It Works */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-text-primary mb-10 text-center">
            How It Works
          </h2>
          <div className="space-y-8">
            {STEPS.map((step) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold text-lg">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Section 4: CTA Block */}
      <Section gradient="top">
        <CTABlock
          heading="The community is free. The education is real."
          description="No credit card. No trial. No catch. Join and start learning today."
          primaryText="Join the Iron Forge Brotherhood"
          primaryHref={SKOOL_URL}
        />
      </Section>
    </>
  )
}
