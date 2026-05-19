export interface Program {
  slug: string
  name: string
  price: number
  priceDisplay: string
  isSubscription: boolean
  subscriptionInterval?: string
  duration: string
  daysPerWeek: string
  sessionLength?: string
  category: 'flagship' | 'powerbuilding' | 'garage' | 'dumbbell-bodyweight' | 'beginner' | 'team'
  categoryLabel: string
  equipment: string
  trainheroicUrl: string
  hero: { headline: string; subheadline: string }
  description: string
  included: string[]
  forYou: string[]
  notForYou: string[]
  teamCallout: string
  otherPrograms: string[]
  faq: Array<{ q: string; a: string }>
  seo: { title: string; description: string }
}

export const programs: Program[] = [
  {
    slug: 'heavy-duty-x12',
    name: 'Heavy Duty x12',
    price: 47,
    priceDisplay: '$47',
    isSubscription: false,
    duration: '12 weeks',
    daysPerWeek: '3',
    sessionLength: '60-75 min',
    category: 'flagship',
    categoryLabel: 'Flagship',
    equipment: 'Full gym (barbell, squat rack, bench, dumbbells, cables)',
    trainheroicUrl: 'https://marketplace.trainheroic.com/workout-plan/program/holyfield-program-1763586915?attrib=599393-aff-ironforge-heavyduty',
    hero: {
      headline: 'Heavy Duty x12',
      subheadline: '12 weeks of Mike Mentzer\'s high-intensity training philosophy built for three days per week, where every working set is pushed to failure and progressive overload drives the entire program.',
    },
    description: 'Heavy Duty x12 is built on Mike Mentzer\'s high-intensity training philosophy, which means every working set in this program is pushed to failure because that is what the research says actually drives adaptation for natural lifters. The programming runs three days per week on a full body split, and every session is 60 to 75 minutes of compound movements with progressive overload structured across three four-week blocks so the weight on the bar keeps climbing in a way that your body can actually recover from.\n\nThis is low volume, high intensity training. You are not spending six days a week in the gym doing twenty sets per muscle group and wondering why your joints hurt and your strength has flatlined. You are training three days, pushing every working set as hard as it can go, recovering fully, and coming back stronger. The entire philosophy is built on the idea that training stimulus needs to be intense enough to force adaptation but infrequent enough to allow recovery, and that is exactly how Mentzer trained and how this program is designed.\n\nThe three blocks build on each other, so the first four weeks establish your working weights and movement patterns, the second four weeks increase intensity and load, and the final four weeks push you into territory you have not hit before. You train hard, track your numbers, and let the progressive overload do what it is designed to do. That is the whole point.',
    included: [
      'Full 12-week programming delivered through the TrainHeroic app',
      'Coaching notes per session explaining the intent behind every workout',
      'Instructional videos for every movement',
      'Progress tracking built into the app so you can see your numbers climbing week to week',
      'Buy once, own forever',
      'Community access for coaching support and questions',
    ],
    forYou: [
      'You have at least six months of consistent training and know how to execute the main compound lifts with proper form',
      'You want to train three days per week with maximum intensity rather than six days at moderate effort',
      'You respond well to low volume, high intensity programming and want a structured system instead of winging it',
    ],
    notForYou: [
      'You have never touched a barbell before, because this program assumes you already know the movement patterns. Start with 8 Week Foundations and build from there.',
    ],
    teamCallout: 'Want access to all 20+ programs? The Iron Forge Training Team is $25 per month. Ongoing programming delivered through TrainHeroic with coach access, new programming every training block, and instructional videos for every movement. If you are buying more than one program, the Team is always a better deal.',
    otherPrograms: ['heavy-duty-x12-v2', 'meals-on-wheels', 'powerbuilder'],
    faq: [
      {
        q: 'Where do I access the program after purchase?',
        a: 'TrainHeroic app. Download it, purchase through the link, and it appears in your app immediately. TrainHeroic handles payment, delivery, and progress tracking.',
      },
      {
        q: 'How long is this program?',
        a: '12 weeks, broken into three four-week blocks. You own it forever, so you can run it once, run it again, or come back to it whenever you want.',
      },
      {
        q: 'What equipment do I need?',
        a: 'Full gym. Barbell, squat rack, bench, dumbbells, and cable access. This is a compound movement program and you need the equipment to match.',
      },
      {
        q: 'Can I run this if I am a beginner?',
        a: 'This program assumes you already know how to squat, bench, and deadlift with proper form. If you are still learning the movements, start with the 4 Week Training Protocol or 8 Week Foundations, build the technique base, and then come back to Heavy Duty.',
      },
      {
        q: 'What if I need more than just programming?',
        a: 'These are self-guided. If you want coach feedback and ongoing programming, join the Iron Forge Training Team at $25 per month. If you want the full system with labs, clinical protocols, and a dedicated coach, check out Health Optimization Coaching.',
      },
    ],
    seo: {
      title: 'Heavy Duty x12 -- 12-Week Strength & Hypertrophy Program | Iron Forge Brotherhood',
      description: '12 weeks of Mike Mentzer high-intensity training. 3 days per week, every set to failure, progressive overload across three blocks. $47 on TrainHeroic.',
    },
  },
  {
    slug: 'iron-forge-training-team',
    name: 'Iron Forge Training Team',
    price: 25,
    priceDisplay: '$25/month',
    isSubscription: true,
    subscriptionInterval: 'month',
    duration: 'Ongoing (8-week blocks)',
    daysPerWeek: 'Varies by block',
    category: 'team',
    categoryLabel: 'Training Team',
    equipment: 'Full gym',
    trainheroicUrl: 'https://marketplace.trainheroic.com/workout-plan/team/iron-forge-training-team?attrib=599393-aff-ironforge-team',
    hero: {
      headline: 'Iron Forge Training Team',
      subheadline: 'Ongoing periodized programming with coach access, new training blocks every 8 weeks, and a community of men who show up and do the work.',
    },
    description: 'This is not a single program. The Iron Forge Training Team is ongoing training programming that changes every eight-week block, periodized through hypertrophy, strength, power, and work capacity phases so your body never adapts to one stimulus long enough to plateau. The reason this produces better long-term results than running individual programs back to back is because periodization across multiple training blocks builds in structured deloads, varies the training stimulus intentionally, and plans progression across months instead of just weeks, which means your joints, your nervous system, and your muscle tissue all get the recovery and variation they need to keep growing.\n\nTraining is Pillar 1 of the 6-Pillar System, and the Team Plan is where that pillar lives. Every eight weeks the programming shifts, the rep schemes change, the intensity targets move, and you keep progressing without having to think about what comes next because the programming is already built for you. You get direct coaching support for questions and form checks, instructional videos for every movement in every block, and a community of 50+ men who are training on the same programming at the same time, which means accountability is built into the structure instead of something you have to manufacture on your own.\n\nThe difference between buying individual programs and joining the Team is the difference between running one training block and training with a system. Individual programs give you a snapshot. The Team gives you the full picture.',
    included: [
      'Ongoing programming delivered through the TrainHeroic app, updated every 8-week training block',
      'Periodization across hypertrophy, strength, power, and work capacity phases',
      'Instructional videos for every movement in every block',
      'Progress tracking built into the app',
      'Coach access for questions, form checks, and programming adjustments',
      'Community of 50+ members training on the same block',
      '7-day free trial',
      'Cancel anytime, no contract',
    ],
    forYou: [
      'You work full time, you have a family, and you want real periodized programming without having to think about what to run next',
      'You have bought one or two individual programs and you are ready for ongoing programming that evolves every training block instead of repeating the same twelve weeks',
      'You want coach access for form checks and programming questions instead of figuring everything out on your own',
      'You want to train alongside a community of men who are doing the same work at the same time',
    ],
    notForYou: [
      'If you want one specific program for one specific goal, buy that program individually. The Team is designed for men who want to train consistently over months and years with evolving programming. If you want a 12-week strength block and nothing else, grab Heavy Duty x12 or Meals On Wheels and run it.',
    ],
    teamCallout: '',
    otherPrograms: ['heavy-duty-x12', 'bulking-season', 'powerbuilder'],
    faq: [
      {
        q: 'How is this different from buying individual programs?',
        a: 'Individual programs are one-time purchases that give you a set number of weeks of programming. The Training Team is a subscription that gives you new programming every 8-week block, periodized across different training phases so your body never plateaus on the same stimulus. You also get coach access and a training community, which you do not get with standalone programs.',
      },
      {
        q: 'What does the programming look like?',
        a: 'Every block runs eight weeks and focuses on a specific training phase. One block might emphasize hypertrophy with higher volume and moderate loads, the next block shifts to strength with heavier weight and lower reps, and the block after that targets power or work capacity. The periodization is planned so each phase builds on the one before it and your body gets the variation it needs to keep progressing.',
      },
      {
        q: 'Can I cancel anytime?',
        a: 'Yes. There is no contract and no commitment beyond the current month. You can cancel through TrainHeroic at any time. The 7-day free trial gives you a full week to try the programming before you pay anything.',
      },
      {
        q: 'What if I already bought a standalone program?',
        a: 'You keep it. Every standalone program you purchase is yours forever. The Training Team is a separate subscription that gives you ongoing programming. Many members run both, using their standalone programs during breaks or running them alongside the Team programming for extra volume.',
      },
      {
        q: 'What does coach access mean?',
        a: 'You can ask questions about the programming, submit form check videos, and get feedback on your training directly from the coaching team. This is not 1:1 coaching where someone builds a fully custom plan around your labs and goals, but it is real coaching support from the people who write the programming. If you want the full individualized system with labs, protocols, and a dedicated coach, that is Health Optimization Coaching.',
      },
    ],
    seo: {
      title: 'Iron Forge Training Team -- $25/month Ongoing Programming | Iron Forge Brotherhood',
      description: 'Ongoing periodized programming with coach access. New training blocks every 8 weeks. 50+ active members. 7-day free trial. Cancel anytime.',
    },
  },
]

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find(p => p.slug === slug)
}

export const PROGRAM_CATEGORIES = [
  { key: 'flagship', label: 'Flagship', slugs: ['heavy-duty-x12', 'heavy-duty-x12-v2', 'bulking-season', 'bulking-season-vol-2', 'shredding-season', 'shredding-season-vol-2'] },
  { key: 'powerbuilding', label: 'Powerbuilding & Hybrid', slugs: ['powerbuilder', 'hard-as-nails-hybrid', 'three-dimensional-athlete', 'meals-on-wheels', 'crucible-upper-lower'] },
  { key: 'garage', label: 'Garage Gym', slugs: ['garage-athlete', 'garage-athlete-mass', 'garage-athlete-cuts'] },
  { key: 'dumbbell-bodyweight', label: 'Dumbbell & Bodyweight', slugs: ['dumbbell-recomp', 'bodyweight-super-shred', 'bodyweight-super-shred-vol-2'] },
  { key: 'beginner', label: 'Beginner / Foundation', slugs: ['foundations', '4-week-protocol'] },
  { key: 'team', label: 'Training Team', slugs: ['iron-forge-training-team'] },
]
