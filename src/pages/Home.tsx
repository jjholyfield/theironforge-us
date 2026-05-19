import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Hero } from '../components/layout/Hero'
import { Section } from '../components/layout/Section'
import { CTABlock } from '../components/layout/CTABlock'
import { fadeInUp, staggerContainer, viewportOnce } from '../lib/animations'
import { SKOOL_URL } from '../data/site-config'

const PATHS = [
  {
    title: 'Free Community',
    subtitle: 'Iron Forge Brotherhood on Skool',
    description: 'The community is free and it is where most of the value lives. Inside you have access to over 40 course modules covering training, nutrition, hormone optimization, supplementation protocols, and peptide research. You can ask questions, post your labs, and learn from other guys who are going through the same process. I am in there regularly posting new content and answering questions directly.',
    price: 'Free',
    ctaText: 'Join Free',
    ctaHref: SKOOL_URL,
    external: true,
  },
  {
    title: 'Training Programs',
    subtitle: 'Self-Guided Programs + Team Plan on TrainHeroic',
    description: '16 structured training programs from $19 to $67 -- bulking, cutting, bodyweight, garage gym, beginner foundations. Buy one, get it forever, follow the programming in the TrainHeroic app. Or join the Team Plan at $25 per month for ongoing programming with coach access, instructional videos, and the full training community.',
    price: '$27 - $67',
    ctaText: 'Browse Programs',
    ctaHref: '/programs',
    external: false,
  },
  {
    title: 'Fireteams',
    subtitle: '$299 / 6-Week Cohort',
    description: 'Teams of 20 men. Daily accountability. 5 days a week -- 45 minutes of weights plus 45 minutes of cardio. Custom training program, personalized meal plans, two assigned coaches, weekly group calls, and daily check-ins via Marco Polo. This is not self-guided. If you miss check-ins, your team knows. 800+ men have been through Fireteams. Next cohort start date is on the page.',
    price: '$299',
    ctaText: 'Learn About Fireteams',
    ctaHref: '/fireteams',
    external: false,
  },
  {
    title: 'Health Optimization Coaching',
    subtitle: '$5,000 / 6-Month Commitment',
    description: 'The full system. We use your bloodwork to build your clinical protocol, you have a dedicated fitness coach who talks to you every week, and I am on your team reviewing your labs and adjusting your protocol every month. Quarterly labs, clinical reports, doctor referral when needed, and ongoing optimization based on your data -- not generic templates.',
    price: '$5,000',
    ctaText: 'Learn About Coaching',
    ctaHref: '/optimize',
    external: false,
  },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Iron Forge Brotherhood -- Men's Health Optimization Community & Coaching</title>
        <meta
          name="description"
          content="Iron Forge is where men who take their health seriously come to optimize. Free community, training programs, and premium health optimization coaching built around your data."
        />
      </Helmet>

      {/* Section 1: Hero */}
      <Hero
        title="Health Optimization for Men Who Are Done Guessing"
        subtitle="Community. Programs. Coaching. Everything you need to stop training blind and start building protocols based on your data -- all in one place."
        ctaText="Join the Brotherhood"
        ctaHref={SKOOL_URL}
      />
      <Section>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 -mt-8">
          <Link to="/apply" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border text-text-secondary hover:text-text-primary transition-colors">
            Apply for Coaching
          </Link>
        </div>
      </Section>

      {/* Section 2: What Is Iron Forge */}
      <Section gradient="top">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-text-primary mb-8 text-center">
            What Is Iron Forge
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            Iron Forge started as a training program. It has evolved into something much bigger than that. This is a community of men who have decided that guessing about their health is not a strategy, and that training hard without understanding what is happening inside their body is leaving results on the table every single day.
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            The guys in this community are not beginners looking for their first workout plan. They are men who already train, who already eat well, and who have realized that the next level of performance and health is not going to come from doing more of the same. It is going to come from data -- bloodwork, protocols, and a system that connects training to nutrition to hormones to supplementation as one integrated picture.
          </p>
          <p className="text-text-secondary leading-relaxed">
            That is what Iron Forge is. A community built around education, real data, and proven protocols. Not a fitness program factory. Not a supplement company. A system for men who want to actually optimize their health instead of hoping that hard work alone gets them there.
          </p>
        </div>
      </Section>

      {/* Section 3: Four Paths */}
      <Section>
        <h2 className="font-display text-3xl font-bold text-text-primary mb-10 text-center">
          Four Paths to Optimization
        </h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PATHS.map((path) => (
            <motion.div
              key={path.title}
              variants={fadeInUp}
              className="bg-surface-elevated rounded-xl p-6 border border-border flex flex-col"
            >
              <span className="text-xs text-brand-400 uppercase tracking-wide font-medium">
                {path.price}
              </span>
              <h3 className="font-display text-xl font-bold text-text-primary mt-2">
                {path.title}
              </h3>
              <p className="text-text-muted text-sm mt-1 mb-3">{path.subtitle}</p>
              <p className="text-text-secondary text-sm leading-relaxed flex-1">
                {path.description}
              </p>
              {path.external ? (
                <a
                  href={path.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6 text-sm text-center"
                >
                  {path.ctaText}
                </a>
              ) : (
                <Link
                  to={path.ctaHref}
                  className="btn-primary mt-6 text-sm text-center"
                >
                  {path.ctaText}
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Section 4: The Ladder */}
      <Section gradient="top">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-6">
              Start Wherever You Are
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Iron Forge is built so you can start wherever you are and go as deep as you want. Most guys start with the free community on Skool -- courses, Q&A, research breakdowns, direct access to ask questions. When you want structured programming, there are 16 standalone programs on TrainHeroic from $19 to $67, or the Team Plan at $25 a month for ongoing programming with coach access.
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
              When you are ready for real accountability, Fireteams puts you on a team of 20 men with two coaches, daily check-ins, and an 80 percent compliance minimum for 6 weeks at $299. And when you want the full system -- labs, clinical protocols, a dedicated coach, and monthly calls with me reviewing your bloodwork and building your optimization plan -- that is Health Optimization Coaching at $5,000 for six months.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              Every level is a real thing. There is no bait-and-switch where the free tier is gutted to push you into coaching. The community is genuinely valuable on its own. The programs are real programming. Fireteams is real coaching. And Health Optimization is the full system for guys who are done guessing about what is happening inside their body.
            </p>
            <Link
              to="/optimize"
              className="text-brand-400 hover:text-brand-300 transition-colors font-medium"
            >
              See Full Details on Coaching
            </Link>
          </div>
          <div className="md:col-span-2">
            <div className="bg-surface-elevated rounded-xl border border-border p-8 text-center">
              <div className="space-y-4">
                <div className="bg-surface-overlay rounded-lg p-4 border border-border-subtle">
                  <p className="text-text-muted text-xs uppercase tracking-wide">Free</p>
                  <p className="text-text-primary font-medium">Community</p>
                </div>
                <div className="bg-surface-overlay rounded-lg p-4 border border-border-subtle">
                  <p className="text-text-muted text-xs uppercase tracking-wide">$27-$67</p>
                  <p className="text-text-primary font-medium">Programs</p>
                </div>
                <div className="bg-surface-overlay rounded-lg p-4 border border-border-subtle">
                  <p className="text-text-muted text-xs uppercase tracking-wide">$299</p>
                  <p className="text-text-primary font-medium">Fireteams</p>
                </div>
                <div className="bg-brand-950 rounded-lg p-4 border border-brand-800">
                  <p className="text-brand-400 text-xs uppercase tracking-wide">$5,000</p>
                  <p className="text-text-primary font-medium">Health Optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 5: Social Proof (Placeholder) */}
      <Section>
        <h2 className="font-display text-3xl font-bold text-text-primary mb-8 text-center">
          What the Brotherhood Says
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              quote: '[Testimonial quote about community value and what they learned]',
              name: 'Name L.',
              detail: 'Brotherhood member, 12 months',
            },
            {
              quote: '[Testimonial quote about coaching results -- labs improved, protocols working]',
              name: 'Name M.',
              detail: 'Coaching client, 6 months',
            },
            {
              quote: '[Testimonial quote about the difference between this and previous coaching/programs]',
              name: 'Name R.',
              detail: 'Coaching client, 9 months',
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
                -- {testimonial.name}
              </p>
              <p className="text-text-muted text-sm">{testimonial.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA Block */}
      <Section gradient="top">
        <CTABlock
          heading="Join the Brotherhood"
          description="Start with the free community. Courses, Q&A, research breakdowns. No credit card. No trial. Just join and start learning."
          primaryText="Join the Brotherhood"
          primaryHref={SKOOL_URL}
        />
      </Section>
    </>
  )
}
