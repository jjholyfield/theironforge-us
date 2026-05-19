import { useState, type FormEvent } from 'react'
import { submitApplication, type ApplicationData } from '../../lib/ghl'
import { SKOOL_URL } from '../../data/site-config'

export function ApplicationForm() {
  const [form, setForm] = useState<ApplicationData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    primaryGoal: '',
    recentBloodwork: '',
    trainingExperience: '',
    clinicalNotes: '',
    goals: '',
  })
  const [committed, setCommitted] = useState(false)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  function updateField(field: keyof ApplicationData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleBlur(field: string) {
    setTouched((prev) => ({ ...prev, [field]: true }))
  }

  function isFieldInvalid(field: keyof ApplicationData): boolean {
    if (!touched[field]) return false
    if (field === 'email') {
      return !form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    }
    return !form[field]
  }

  const allFieldsFilled =
    form.firstName &&
    form.lastName &&
    form.email &&
    form.phone &&
    form.primaryGoal &&
    form.recentBloodwork &&
    form.trainingExperience &&
    form.clinicalNotes &&
    form.goals

  const canSubmit = allFieldsFilled && committed && status !== 'submitting'

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!canSubmit) return
    setStatus('submitting')
    const result = await submitApplication(form)
    if (result.ok) {
      setStatus('success')
    } else {
      setStatus('error')
      setErrorMsg(result.error || 'Something went wrong.')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <h2 className="font-display text-2xl font-bold text-text-primary">
          Your application is in.
        </h2>
        <p className="mt-4 text-text-secondary max-w-xl mx-auto leading-relaxed">
          You will receive your payment link within 24 hours. Once payment is confirmed,
          your onboarding begins. Questions in the meantime? DM me in the Skool community.
        </p>
        <a
          href={SKOOL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-8 inline-block"
        >
          Join the Brotherhood while you wait
        </a>
      </div>
    )
  }

  const inputClasses = (field: keyof ApplicationData) =>
    `w-full bg-surface-overlay border ${
      isFieldInvalid(field) ? 'border-red-500' : 'border-border'
    } rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-500 transition-colors`

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      {/* Name row */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            First Name <span className="text-brand-500">*</span>
          </label>
          <input
            type="text"
            value={form.firstName}
            onChange={(e) => updateField('firstName', e.target.value)}
            onBlur={() => handleBlur('firstName')}
            required
            className={inputClasses('firstName')}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Last Name <span className="text-brand-500">*</span>
          </label>
          <input
            type="text"
            value={form.lastName}
            onChange={(e) => updateField('lastName', e.target.value)}
            onBlur={() => handleBlur('lastName')}
            required
            className={inputClasses('lastName')}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">
          Email <span className="text-brand-500">*</span>
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => updateField('email', e.target.value)}
          onBlur={() => handleBlur('email')}
          required
          className={inputClasses('email')}
        />
        {isFieldInvalid('email') && (
          <p className="text-red-500 text-sm mt-1">Please enter a valid email address.</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">
          Phone <span className="text-brand-500">*</span>
        </label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => updateField('phone', e.target.value)}
          onBlur={() => handleBlur('phone')}
          required
          className={inputClasses('phone')}
        />
      </div>

      {/* Primary Goal */}
      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">
          Primary Goal <span className="text-brand-500">*</span>
        </label>
        <select
          value={form.primaryGoal}
          onChange={(e) => updateField('primaryGoal', e.target.value)}
          onBlur={() => handleBlur('primaryGoal')}
          required
          className={inputClasses('primaryGoal')}
        >
          <option value="">Select your primary goal</option>
          <option value="Body Composition">Body Composition</option>
          <option value="Hormone Optimization">Hormone Optimization</option>
          <option value="Full Optimization">Full Optimization</option>
        </select>
      </div>

      {/* Recent Bloodwork */}
      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">
          Recent Bloodwork <span className="text-brand-500">*</span>
        </label>
        <select
          value={form.recentBloodwork}
          onChange={(e) => updateField('recentBloodwork', e.target.value)}
          onBlur={() => handleBlur('recentBloodwork')}
          required
          className={inputClasses('recentBloodwork')}
        >
          <option value="">Select an option</option>
          <option value="Yes within 12 months">Yes (within 12 months)</option>
          <option value="No">No</option>
          <option value="I don't remember">I don't remember</option>
        </select>
      </div>

      {/* Training Experience */}
      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">
          Current Training Experience <span className="text-brand-500">*</span>
        </label>
        <textarea
          value={form.trainingExperience}
          onChange={(e) => updateField('trainingExperience', e.target.value)}
          onBlur={() => handleBlur('trainingExperience')}
          required
          rows={3}
          placeholder="Briefly describe your current training: how often, what type, how long you've been training"
          className={inputClasses('trainingExperience')}
        />
      </div>

      {/* Health History */}
      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">
          Health History Summary <span className="text-brand-500">*</span>
        </label>
        <textarea
          value={form.clinicalNotes}
          onChange={(e) => updateField('clinicalNotes', e.target.value)}
          onBlur={() => handleBlur('clinicalNotes')}
          required
          rows={3}
          placeholder="Any relevant health history: current medications, previous lab results, conditions, injuries, or concerns"
          className={inputClasses('clinicalNotes')}
        />
      </div>

      {/* Goals */}
      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">
          Goals <span className="text-brand-500">*</span>
        </label>
        <textarea
          value={form.goals}
          onChange={(e) => updateField('goals', e.target.value)}
          onBlur={() => handleBlur('goals')}
          required
          rows={3}
          placeholder="What does success look like for you in 6 months? Be specific."
          className={inputClasses('goals')}
        />
      </div>

      {/* Commitment Checkbox */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="commitment"
          checked={committed}
          onChange={(e) => setCommitted(e.target.checked)}
          className="mt-1 h-5 w-5 rounded border-border bg-surface-overlay accent-brand-500"
        />
        <label htmlFor="commitment" className="text-sm text-text-secondary leading-relaxed">
          I understand this is a $5,000, 6-month commitment. I am ready to invest in my health optimization.
        </label>
      </div>

      {/* Error message */}
      {status === 'error' && (
        <p className="text-red-500 text-sm">{errorMsg}</p>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={!canSubmit}
        className={`w-full sm:w-auto sm:mx-auto sm:block btn-primary text-lg px-12 py-4 ${
          !canSubmit ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  )
}
