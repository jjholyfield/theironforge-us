import { Helmet } from 'react-helmet-async'
import { Section } from '../components/layout/Section'
import { ApplicationForm } from '../components/forms/ApplicationForm'

export default function Apply() {
  return (
    <>
      <Helmet>
        <title>Iron Forge Brotherhood -- Apply for Health Optimization Coaching</title>
        <meta
          name="description"
          content="Apply for health optimization coaching with Josh Holyfield. 5-minute application. No discovery call. $5,000 for 6 months of labs, protocols, coaching, and clinical oversight."
        />
      </Helmet>

      {/* Section 1: Header */}
      <Section className="pt-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Apply for Health Optimization Coaching
          </h1>
          <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Fill out the form below. This takes about 5 minutes. Your answers serve as your intake -- no separate onboarding form, no discovery call, no "let's chat first." Once submitted, you will receive your payment link within 24 hours. Payment secures your spot. Your first coaching call is the first real conversation.
          </p>
        </div>
      </Section>

      {/* Section 2: Application Form */}
      <Section>
        <ApplicationForm />
      </Section>

      {/* Section 3: Pricing Reminder */}
      <Section>
        <div className="max-w-2xl mx-auto bg-surface-overlay rounded-xl p-6 border border-border-subtle">
          <p className="text-text-primary font-medium mb-2">
            $5,000 — 6-month commitment
          </p>
          <p className="text-text-secondary text-sm leading-relaxed">
            After your application is reviewed, you will receive a payment link. Payment secures your spot and starts the process.
          </p>
          <p className="text-text-muted text-sm mt-3">
            Supplements, peptides, and prescriptions are separate purchases as needed. Your coaching team recommends based on your data. You decide what you use.
          </p>
        </div>
      </Section>
    </>
  )
}
