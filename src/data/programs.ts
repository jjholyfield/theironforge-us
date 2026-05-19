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
    slug: 'heavy-duty-x12-v2',
    name: 'Heavy Duty x12 v2',
    price: 47,
    priceDisplay: '$47',
    isSubscription: false,
    duration: '12 weeks',
    daysPerWeek: '3',
    sessionLength: '60-75 min',
    category: 'flagship',
    categoryLabel: 'Flagship',
    equipment: 'Full gym (barbell, squat rack, bench, dumbbells, cables)',
    trainheroicUrl: 'https://marketplace.trainheroic.com/workout-plan/program/kher-program-1772097887?attrib=599393-aff-ironforge-heavydutyv2',
    hero: {
      headline: 'Heavy Duty x12 v2',
      subheadline: 'The evolution of Mentzer\'s HIT methodology, updated with modern frequency research and fresh exercise selection, still three days per week and still built around pushing every set to its limit.',
    },
    description: 'Heavy Duty x12 v2 takes the same high-intensity training philosophy from the original and updates it with newer research on training frequency and recovery, which means the core principle stays the same but the exercise selection, progression model, and block structure have all been refined based on what we have learned about natural lifters since the first version launched.\n\nThe program still runs three days per week on a full body split, and that is intentional because the research consistently shows that hitting every muscle group three times per week outperforms the traditional bro split for natural lifters. When you train a muscle once a week, you get a 48 to 72 hour window of elevated protein synthesis and then nothing for the rest of the week, so by the time you train it again the growth signal has been off for four or five days. Full body training three times per week keeps that signal elevated more consistently, which is exactly why this program is structured the way it is.\n\nThe progression has been updated so the loading scheme is smarter and the exercise rotation gives your joints and connective tissue a break from the same movement patterns every session. You still push sets near failure, you still track your numbers, and the weight still goes up across the three four-week blocks. The philosophy has not changed. The programming got sharper.',
    included: [
      'Full 12-week programming delivered through the TrainHeroic app',
      'Coaching notes per session explaining the intent behind every workout',
      'Instructional videos for every movement',
      'Progress tracking built into the app',
      'Buy once, own forever',
      'Community access for coaching support and questions',
    ],
    forYou: [
      'You have training experience with compound lifts and want a structured three day per week program built on high-intensity principles',
      'You ran Heavy Duty x12 and want the next progression with updated exercise selection and loading',
      'You want to train less often but with higher intensity per session and let recovery do the work',
    ],
    notForYou: [
      'You have not run Heavy Duty x12 yet. Start there. This program builds on the base it lays and the progression makes more sense if you have that foundation.',
    ],
    teamCallout: 'Want access to all 20+ programs? The Iron Forge Training Team is $25 per month. Ongoing programming delivered through TrainHeroic with coach access, new programming every training block, and instructional videos for every movement. If you are buying more than one program, the Team is always a better deal.',
    otherPrograms: ['heavy-duty-x12', 'meals-on-wheels'],
    faq: [
      {
        q: 'Where do I access the program after purchase?',
        a: 'TrainHeroic app. Download it, purchase through the link, and it appears in your app immediately. TrainHeroic handles payment, delivery, and progress tracking.',
      },
      {
        q: 'Do I need to run v1 first?',
        a: 'It is not strictly required, but it is recommended. Heavy Duty x12 establishes the working weights and movement patterns that v2 builds on, and the progression in v2 assumes you already have that base. If you are new to high-intensity training, start with v1.',
      },
      {
        q: 'What changed from v1?',
        a: 'The exercise selection is updated, the progression model is refined based on newer frequency research, and the loading scheme across the three blocks is smarter. The philosophy is the same, the programming has evolved.',
      },
      {
        q: 'How long is this program?',
        a: '12 weeks, three four-week blocks. You own it forever, so you can run it again whenever you want.',
      },
      {
        q: 'What equipment do I need?',
        a: 'Full gym. Barbell, squat rack, bench, dumbbells, and cable access. Same equipment as v1.',
      },
    ],
    seo: {
      title: 'Heavy Duty x12 v2 -- 12-Week High-Intensity Training Program | Iron Forge Brotherhood',
      description: 'The evolution of Mentzer\'s HIT methodology. 12 weeks, 3 days per week, updated exercise selection and frequency research. $47 on TrainHeroic.',
    },
  },
  {
    slug: 'bulking-season',
    name: 'Bulking Season',
    price: 67,
    priceDisplay: '$67',
    isSubscription: false,
    duration: '12 weeks',
    daysPerWeek: '4',
    sessionLength: '~75 min',
    category: 'flagship',
    categoryLabel: 'Flagship',
    equipment: 'Barbell, squat rack, adjustable bench, dumbbells',
    trainheroicUrl: 'https://marketplace.trainheroic.com/workout-plan/program/childress-program-1762291908?attrib=599393-aff-ironforge-bulking',
    hero: {
      headline: 'Bulking Season',
      subheadline: '12 weeks of structured hypertrophy training on a four day split, built around heavy compound movements that drive muscle growth while keeping body composition in check.',
    },
    description: 'Bulking Season is a 12-week hypertrophy program built on a four day training split where sessions run about 75 minutes and the focus is on heavy compound movements that actually drive muscle growth. The programming is structured so you are not just going to the gym and doing random exercises for high reps. Every session has a purpose, every movement is selected for a reason, and the progressive overload is built into the program so the weights keep going up as your body adapts.\n\nThe reason this runs four days per week at 75 minutes instead of six days at 45 is because hypertrophy for natural lifters is not about how many hours you spend in the gym. It is about how much quality stimulus you deliver per session and whether your body has enough recovery time to actually build the tissue. Four days gives you enough frequency to hit every muscle group with serious volume, and the rest days between sessions are where the growth actually happens. That is how natural muscle building works, and the programming is designed around that reality.\n\nThis program also comes with a starter meal plan because training is only half of the equation when you are trying to add size. You need the caloric surplus and the macronutrient targets to support the work you are doing in the gym, and the meal plan gives you a framework to build from so you are not guessing. Every exercise in the program has a full video walkthrough, and the Iron Forge community is there if you have questions about form, nutrition, or anything else that comes up during the 12 weeks.',
    included: [
      'Full 12-week programming delivered through the TrainHeroic app',
      'Starter meal plan to support your training',
      'Instructional videos for every movement',
      'Progress tracking built into the app',
      'Buy once, own forever',
      'Community access for coaching support and questions',
    ],
    forYou: [
      'You want to build muscle with a structured program that tells you exactly what to do every session',
      'You can commit to four days per week in the gym for 75 minutes per session',
      'You are a beginner or intermediate lifter who wants to add size with a program that progresses intelligently',
    ],
    notForYou: [
      'You are in a cutting phase and trying to lose body fat right now. Look at Shredding Season instead, because that program is designed to preserve muscle while you are in a deficit.',
    ],
    teamCallout: 'Want access to all 20+ programs? The Iron Forge Training Team is $25 per month. Ongoing programming delivered through TrainHeroic with coach access, new programming every training block, and instructional videos for every movement. If you are buying more than one program, the Team is always a better deal.',
    otherPrograms: ['bulking-season-vol-2', 'shredding-season'],
    faq: [
      {
        q: 'Where do I access the program after purchase?',
        a: 'TrainHeroic app. Download it, purchase through the link, and it appears in your app immediately. TrainHeroic handles payment, delivery, and progress tracking.',
      },
      {
        q: 'Is this good for beginners?',
        a: 'Yes. Every exercise has a full video walkthrough, the progression is structured so you are not thrown into anything too heavy too fast, and the community is there for questions. You do not need to be advanced to start this program.',
      },
      {
        q: 'What is the meal plan?',
        a: 'A starter framework with caloric targets and macronutrient guidelines designed to support muscle growth during the 12 weeks. It gives you the nutrition foundation so you are not guessing on the food side while the training handles the gym side.',
      },
      {
        q: 'How long is this program?',
        a: '12 weeks. You own it forever, so you can run it again whenever you want.',
      },
      {
        q: 'What equipment do I need?',
        a: 'Barbell, squat rack, adjustable bench, and dumbbells. Standard gym equipment. If your gym has these, you are good to go.',
      },
    ],
    seo: {
      title: 'Bulking Season -- 12-Week Hypertrophy Program | Iron Forge Brotherhood',
      description: '12 weeks of structured hypertrophy training on a 4-day split. Heavy compound movements, starter meal plan, video walkthroughs. $67 on TrainHeroic.',
    },
  },
  {
    slug: 'bulking-season-vol-2',
    name: 'Bulking Season Vol II',
    price: 67,
    priceDisplay: '$67',
    isSubscription: false,
    duration: '12 weeks',
    daysPerWeek: '5',
    sessionLength: '60-75 min',
    category: 'flagship',
    categoryLabel: 'Flagship',
    equipment: 'Full gym (barbell, squat rack, adjustable bench, dumbbells, cables/machines)',
    trainheroicUrl: 'https://marketplace.trainheroic.com/workout-plan/program/kher-program-1772023971?attrib=599393-aff-ironforge-bulkingv2',
    hero: {
      headline: 'Bulking Season Vol II',
      subheadline: '12 weeks of advanced hypertrophy programming on a five day split with fresh exercise variations, smarter progression, and periodization designed to break through the plateaus that Vol I veterans always hit.',
    },
    description: 'Bulking Season Vol II picks up where the original left off, and the reason it exists is because your body adapts to any stimulus you give it repeatedly. If you ran Vol I and saw great results for eight or nine weeks and then things slowed down, that is not because the program stopped working. That is because your body got efficient at handling the exact exercises, angles, and rep schemes it was seeing every week, so the growth signal weakened. Vol II solves that by rotating all three of those variables across the 12-week cycle so your muscles never get a chance to settle into a pattern.\n\nThe program moves to five days per week instead of four, and the extra training day is intentional because it allows more dedicated work on shoulders, chest, and back without cramming everything into four sessions and rushing through the accessory work. The additional day also means each session can focus on fewer muscle groups with more quality sets, which is how you drive hypertrophy once you are past the beginner stage where everything works. The progressive overload is still built into every block, but the loading scheme is more advanced because this program assumes you already have a base of strength and muscle from Vol I or at least six months of consistent structured training.\n\nThe periodization is designed around what actually happens with natural lifters at the intermediate level, where linear progression starts to stall and you need planned variation to keep forcing adaptation. That is what this program delivers.',
    included: [
      'Full 12-week programming delivered through the TrainHeroic app',
      'Instructional videos for every movement',
      'Progress tracking built into the app',
      'Buy once, own forever',
      'Community access for coaching support and questions',
    ],
    forYou: [
      'You ran Bulking Season and want the next step with fresh programming and higher frequency',
      'You have at least six months of consistent structured training and your linear progression has started to stall',
      'You can commit to five days per week in the gym and want a program that accounts for the fact that your body has adapted to beginner programming',
    ],
    notForYou: [
      'You have not done any structured hypertrophy training yet. Start with Bulking Season. This program assumes you already have a base and the progression is built on top of that foundation.',
    ],
    teamCallout: 'Want access to all 20+ programs? The Iron Forge Training Team is $25 per month. Ongoing programming delivered through TrainHeroic with coach access, new programming every training block, and instructional videos for every movement. If you are buying more than one program, the Team is always a better deal.',
    otherPrograms: ['bulking-season', 'shredding-season-vol-2'],
    faq: [
      {
        q: 'Where do I access the program after purchase?',
        a: 'TrainHeroic app. Download it, purchase through the link, and it appears in your app immediately. TrainHeroic handles payment, delivery, and progress tracking.',
      },
      {
        q: 'Do I need to run Vol I first?',
        a: 'It is strongly recommended. Vol II assumes you have a base of strength and muscle already in place, and the progression scheme is designed for intermediate lifters who have moved past the beginner stage. If you have not run Vol I but have at least six months of consistent structured training, you can start here.',
      },
      {
        q: 'What is different from Vol I?',
        a: 'Five days per week instead of four, fresh exercise variations that hit muscles from different angles, smarter periodization designed to break through plateaus, and extra dedicated work on shoulders, chest, and back. The philosophy is the same. The programming is more advanced.',
      },
      {
        q: 'How long is this program?',
        a: '12 weeks. You own it forever, so you can run it again whenever you want.',
      },
      {
        q: 'What equipment do I need?',
        a: 'Full gym. Barbell, squat rack, adjustable bench, dumbbells, and cable/machine access. Standard gym equipment.',
      },
    ],
    seo: {
      title: 'Bulking Season Vol II -- 12-Week Advanced Hypertrophy Program | Iron Forge Brotherhood',
      description: 'Advanced 12-week hypertrophy on a 5-day split. Fresh exercise variations, smarter periodization for intermediate lifters. $67 on TrainHeroic.',
    },
  },
  {
    slug: 'shredding-season',
    name: 'Shredding Season',
    price: 67,
    priceDisplay: '$67',
    isSubscription: false,
    duration: '12 weeks',
    daysPerWeek: '5',
    sessionLength: '~75 min',
    category: 'flagship',
    categoryLabel: 'Flagship',
    equipment: 'Barbell, squat rack, flat bench, dumbbells, cable machine, leg press, leg curl machine, pull-up bar, incline bench',
    trainheroicUrl: 'https://marketplace.trainheroic.com/workout-plan/program/holyfield-program-1768788795?attrib=599393-aff-ironforge-shredding',
    hero: {
      headline: 'Shredding Season',
      subheadline: '12 weeks of high volume, high frequency training on a five day split designed to strip body fat while preserving every pound of muscle you have built.',
    },
    description: 'Shredding Season is a 12-week fat loss program built on a five day training split where sessions run about 75 minutes with high volume and high frequency training. The reason this program runs five days per week with that level of volume is because when you are in a caloric deficit, your body is looking for reasons to break down muscle tissue for energy, and the single most effective way to prevent that is to keep training stimulus high enough that your body gets the signal to hold onto the muscle because it is still being used. If you cut calories and drop your training volume at the same time, your body reads that as permission to start burning muscle along with fat. That is the opposite of what you want.\n\nThe programming uses heavy compound movements as the foundation of every session because those movements recruit the most muscle fiber and produce the strongest growth signal, and then the accessory work builds on that foundation with higher rep ranges and shorter rest periods to drive metabolic stress. The combination of high mechanical tension from the compounds and metabolic stress from the accessories is what makes this program effective for body recomposition during a deficit.\n\nThis program also comes with a starter meal plan because training handles the stimulus side but nutrition determines whether you are actually in a deficit and whether that deficit is set up in a way that supports performance and recovery. Every exercise has a full video walkthrough, the progression is structured so you know exactly what to do every session, and the community is there for questions about form, nutrition, or anything else that comes up during the 12 weeks.',
    included: [
      'Full 12-week programming delivered through the TrainHeroic app',
      'Starter meal plan to support fat loss while preserving muscle',
      'Instructional videos for every movement',
      'Progress tracking built into the app',
      'Buy once, own forever',
      'Community access for coaching support and questions',
    ],
    forYou: [
      'You want to lose body fat while keeping the muscle you have built',
      'You can commit to five days per week in the gym for about 75 minutes per session',
      'You are a beginner or intermediate lifter who wants a structured cutting program with clear progression',
    ],
    notForYou: [
      'You are trying to build size right now. Bulking Season is what you want, because that program is designed for a caloric surplus and muscle growth rather than fat loss in a deficit.',
    ],
    teamCallout: 'Want access to all 20+ programs? The Iron Forge Training Team is $25 per month. Ongoing programming delivered through TrainHeroic with coach access, new programming every training block, and instructional videos for every movement. If you are buying more than one program, the Team is always a better deal.',
    otherPrograms: ['shredding-season-vol-2', 'bulking-season'],
    faq: [
      {
        q: 'Where do I access the program after purchase?',
        a: 'TrainHeroic app. Download it, purchase through the link, and it appears in your app immediately. TrainHeroic handles payment, delivery, and progress tracking.',
      },
      {
        q: 'Will I lose muscle on this program?',
        a: 'That is exactly what this program is designed to prevent. The high volume and high frequency training keeps the growth signal elevated so your body holds onto muscle tissue even in a caloric deficit. The programming handles the stimulus side, and the meal plan helps you set up the nutrition side so you are losing fat without sacrificing muscle.',
      },
      {
        q: 'What equipment do I need?',
        a: 'Squat rack, flat bench, incline bench, barbell, dumbbells, cable machine, leg press, leg curl machine, and a pull-up bar. This program uses more equipment than most because the exercise variety is part of how it keeps training stimulus high across five days.',
      },
      {
        q: 'Is this good for beginners?',
        a: 'Yes. Every exercise has a full video walkthrough and the progression is structured so you are not thrown into anything too heavy too fast. The community is there for questions on form and nutrition.',
      },
      {
        q: 'How long is this program?',
        a: '12 weeks. You own it forever, so you can run it again whenever you want.',
      },
    ],
    seo: {
      title: 'Shredding Season -- 12-Week Fat Loss Program | Iron Forge Brotherhood',
      description: '12 weeks of high volume, high frequency training to strip body fat while preserving muscle. 5 days per week, starter meal plan included. $67 on TrainHeroic.',
    },
  },
  {
    slug: 'shredding-season-vol-2',
    name: 'Shredding Season Vol II',
    price: 47,
    priceDisplay: '$47',
    isSubscription: false,
    duration: '12 weeks',
    daysPerWeek: '6',
    sessionLength: '60-75 min',
    category: 'flagship',
    categoryLabel: 'Flagship',
    equipment: 'Full gym (barbell, squat rack, bench, dumbbells, cables, machines)',
    trainheroicUrl: 'https://marketplace.trainheroic.com/workout-plan/program/kher-program-1772106491?attrib=599393-aff-ironforge-shreddingv2',
    hero: {
      headline: 'Shredding Season Vol II',
      subheadline: '12 weeks of push, pull, legs twice per week with density training methodology designed to strip fat while protecting every pound of muscle, six days per week.',
    },
    description: 'Shredding Season Vol II runs a push/pull/legs split twice per week for six days of training, and the core methodology that makes this program different from the original is density training. Density training means you are doing more work in less time by systematically shortening rest periods and increasing the amount of volume you can pack into each session, which creates a massive metabolic stress response that burns through calories during the workout and keeps your metabolism elevated for hours after you leave the gym through something called EPOC, which is the amount of oxygen your body needs to consume after training to return to its baseline state, and the higher that number is the more energy your body burns during recovery.\n\nThe reason this works so well for fat loss specifically is because the metabolic stress from density training is one of the strongest signals your body receives to upregulate fat oxidation, and when you pair that with the mechanical tension from heavy compound movements at the start of each session, you get both the fat burning stimulus and the muscle preservation signal happening at the same time. That is the combination that makes cutting work without losing the muscle you spent years building.\n\nMoving from five days in Vol I to six days in Vol II is intentional because the push/pull/legs split hits every muscle group twice per week, and the higher frequency means each individual session can be slightly shorter while still accumulating more total weekly volume than Vol I. The rest periods get shorter as the blocks progress, the density increases, and your work capacity goes up across the 12 weeks. That is how the program is designed to work.',
    included: [
      'Full 12-week programming delivered through the TrainHeroic app',
      'Instructional videos for every movement',
      'Progress tracking built into the app',
      'Buy once, own forever',
      'Community access for coaching support and questions',
    ],
    forYou: [
      'You want to lose body fat with a high frequency program that uses density training to maximize metabolic stress',
      'You can commit to six days per week and want a structured push/pull/legs split',
      'You have some training experience and want a cutting program that pushes the pace harder than a standard fat loss program',
    ],
    notForYou: [
      'You have never run a structured cutting program before. Start with Shredding Season, because the volume and frequency here is higher and the density training methodology assumes you have a base of work capacity already.',
    ],
    teamCallout: 'Want access to all 20+ programs? The Iron Forge Training Team is $25 per month. Ongoing programming delivered through TrainHeroic with coach access, new programming every training block, and instructional videos for every movement. If you are buying more than one program, the Team is always a better deal.',
    otherPrograms: ['shredding-season', 'bulking-season-vol-2'],
    faq: [
      {
        q: 'Where do I access the program after purchase?',
        a: 'TrainHeroic app. Download it, purchase through the link, and it appears in your app immediately. TrainHeroic handles payment, delivery, and progress tracking.',
      },
      {
        q: 'Can I do this without running Vol I?',
        a: 'Yes, but Vol I is recommended if you have never done a structured cutting program before. Vol II uses density training with shorter rest periods and higher frequency, so having a base of work capacity makes the experience better. If you have been training consistently for six months or more, you can start here.',
      },
      {
        q: 'Why six days per week?',
        a: 'The push/pull/legs split runs twice per week, which means six training days. The higher frequency allows each session to focus on fewer muscle groups with more quality work, and the density training methodology benefits from the increased frequency because your body adapts to handling more volume in less time across the 12 weeks.',
      },
      {
        q: 'What equipment do I need?',
        a: 'Full gym. Barbell, squat rack, bench, dumbbells, cables, and machines. The exercise variety is part of how density training keeps the stimulus high across six days.',
      },
      {
        q: 'How long is this program?',
        a: '12 weeks. You own it forever, so you can run it again whenever you want.',
      },
    ],
    seo: {
      title: 'Shredding Season Vol II -- 12-Week Density Training Cut | Iron Forge Brotherhood',
      description: '12 weeks of push/pull/legs density training, 6 days per week. Strip fat while protecting muscle with EPOC-driven methodology. $47 on TrainHeroic.',
    },
  },
  {
    slug: 'powerbuilder',
    name: 'Powerbuilder',
    price: 47,
    priceDisplay: '$47',
    isSubscription: false,
    duration: '12 weeks',
    daysPerWeek: '5',
    sessionLength: '60-75 min',
    category: 'powerbuilding',
    categoryLabel: 'Powerbuilding & Hybrid',
    equipment: 'Full gym (barbell, squat rack, bench, dumbbells, machines)',
    trainheroicUrl: 'https://marketplace.trainheroic.com/workout-plan/program/childress-program-1764776165?attrib=599393-aff-ironforge-powerbuilder',
    hero: {
      headline: 'Powerbuilder',
      subheadline: '12 weeks of powerlifting meets bodybuilding, building real strength and real size with compound-focused progressive overload that actually works for natural lifters.',
    },
    description: 'Powerbuilder is a 12-week powerbuilding program that combines the strength development of a powerlifting program with the muscle-building volume of a bodybuilding program, and the way it does that is through a progression model where your rep targets on compound lifts decrease over the course of the program while the weight on the bar increases. You start the first block in higher rep ranges that drive hypertrophy and tissue growth, and as the weeks progress, those rep targets taper down into lower ranges that build maximal strength on top of the muscle you just built. That is how you get both size and strength out of the same 12-week training block instead of choosing one or the other.\n\nThis is the same progression structure the Iron Forge coaching team uses with one-on-one coaching clients, and every single one of them hit lifetime PRs on bench, squat, and deadlift while adding measurable size. The reason it works is something called undulating periodization, which means the training stimulus changes systematically across the program so your body never fully adapts to one rep range before the demand shifts. Most guys pick a program that is either pure hypertrophy or pure strength, train in the same rep range for 12 weeks, stall out by week 6, and wonder what went wrong. This program is built so the stimulus keeps driving adaptation from start to finish.\n\nThe sessions run five days per week at 60 to 75 minutes, and every session is anchored by heavy compound movements with accessory work layered in to build the muscle that supports your big lifts. You need a full gym for this program because it uses barbells, racks, benches, dumbbells, and machines. This is not a program for someone who is still learning how to squat, bench, and deadlift, because the progressive overload model assumes you already have the movement patterns dialed in and you are ready to push real weight.',
    included: [
      'Full 12-week programming delivered through the TrainHeroic app',
      'Instructional videos for every movement',
      'Progress tracking built into the app',
      'Buy once, own forever',
      'Starter meal plan to support the training volume',
      'Community access for coaching support and questions',
    ],
    forYou: [
      'You are an intermediate lifter who knows the squat, bench, and deadlift with proper form and you want a structured program that builds both strength and size',
      'You can commit to five training days per week at 60 to 75 minutes per session in a full gym',
      'You have been training consistently for at least six months and you are ready for a real progression model instead of winging it',
    ],
    notForYou: [
      'You are still learning the squat, bench, and deadlift. Start with 8 Week Foundations, build the technique base, and come back to Powerbuilder when your movement patterns are solid.',
    ],
    teamCallout: 'Want access to all 20+ programs? The Iron Forge Training Team is $25 per month. Ongoing programming delivered through TrainHeroic with coach access, new programming every training block, and instructional videos for every movement. If you are buying more than one program, the Training Team is always a better deal.',
    otherPrograms: ['meals-on-wheels', 'heavy-duty-x12', 'crucible-upper-lower'],
    faq: [
      {
        q: 'What is the difference between this and a bodybuilding program?',
        a: 'A pure bodybuilding program keeps you in hypertrophy rep ranges the entire time, which builds size but does not develop maximal strength. Powerbuilder starts in those higher rep ranges and progressively tapers into lower rep ranges with heavier weight, so you build the muscle first and then teach it to produce maximum force. You get both adaptations in one program.',
      },
      {
        q: 'What equipment do I need?',
        a: 'Full gym. Barbell, squat rack, bench, dumbbells, and machine access. This is a compound movement program and the progressive overload model requires the equipment to match.',
      },
      {
        q: 'Can I run this as a beginner?',
        a: 'This program assumes you already know how to squat, bench, and deadlift with proper form. If you are still learning the movements, start with the 4 Week Training Protocol or 8 Week Foundations, build the technique base, and then come back to Powerbuilder.',
      },
      {
        q: 'How is this different from Meals On Wheels?',
        a: 'Meals On Wheels is a pure strength program focused on bench, squat, deadlift, and overhead press with linear progression. Powerbuilder combines powerlifting strength work with bodybuilding hypertrophy volume, so you are training for both size and strength simultaneously. If you only care about moving heavy weight, Meals On Wheels is the better fit. If you want both, Powerbuilder is the program.',
      },
      {
        q: 'What if I need more than just programming?',
        a: 'These are self-guided programs. If you want coach feedback and ongoing programming, join the Iron Forge Training Team at $25 per month. If you want the full system with labs, clinical protocols, and a dedicated coach, check out Health Optimization Coaching.',
      },
    ],
    seo: {
      title: 'Powerbuilder -- 12-Week Powerbuilding Program | Iron Forge Brotherhood',
      description: '12 weeks of powerlifting meets bodybuilding. Compound-focused progressive overload building both strength and size. Starter meal plan included. $47 on TrainHeroic.',
    },
  },
  {
    slug: 'hard-as-nails-hybrid',
    name: 'Hard As Nails Hybrid',
    price: 47,
    priceDisplay: '$47',
    isSubscription: false,
    duration: '8 weeks',
    daysPerWeek: '5',
    sessionLength: '60-75 min',
    category: 'powerbuilding',
    categoryLabel: 'Powerbuilding & Hybrid',
    equipment: 'Full gym + ruck, sled, sandbag',
    trainheroicUrl: 'https://marketplace.trainheroic.com/workout-plan/program/kher-program-1772096332?attrib=599393-aff-ironforge-hardnails',
    hero: {
      headline: 'Hard As Nails Hybrid',
      subheadline: '8 weeks of strength and conditioning hybrid programming built for men who need to perform in the real world, not just the gym.',
    },
    description: 'Hard As Nails Hybrid was originally built for a private coaching client who was training for two events at the same time, an elk hunt 15 miles deep in the Idaho mountains and his first amateur powerlifting meet, and the problem was that no traditional program could prepare him for both. A pure strength program would have left him gassed on the mountain. A pure endurance program would have wrecked his squat numbers. So the Iron Forge coaching team built a hybrid that paired barbell strength work with ruck carries, sled pushes, and smart conditioning so he could walk into the meet strong and walk out of the mountains capable. That is what this program is.\n\nThe reason hybrid programming works differently than just doing cardio after your lifts is something called concurrent training, which means you are deliberately programming both strength and conditioning into the same training block in a way that does not let one cancel out the other. Most guys who try to add conditioning to their strength program just throw in some running or some circuit work on off days and wonder why their squat stalls and their joints start aching. This program structures the conditioning work so it supports the strength work instead of competing with it, and the result is a different kind of fitness than you get from either approach alone. You get strong and you stay capable.\n\nThe sessions run five days per week at 60 to 75 minutes, and the program requires functional equipment beyond a standard gym. You need a ruck, a sled, and a sandbag in addition to a full barbell setup. The audience for this program is specific: hunters, veterans, outdoorsmen, first responders, and dads who want to be strong enough to carry their kid up a mountain and still hit a deadlift PR in the same month. The mountain does not care how you feel about it, and this program trains you accordingly.',
    included: [
      'Full 8-week programming delivered through the TrainHeroic app',
      'Instructional videos for every movement',
      'Progress tracking built into the app',
      'Buy once, own forever',
      'NOTE: This program requires functional equipment (ruck, sled, sandbag) in addition to a full gym setup',
    ],
    forYou: [
      'You need both strength and endurance because your life or your goals demand real-world physical capacity, not just gym performance',
      'You are a hunter, rucker, first responder, veteran, or someone who needs to perform outside the gym as well as inside it',
      'You have training experience with compound lifts and you can commit to five days per week with access to functional equipment',
    ],
    notForYou: [
      'You only care about how you look in the mirror and you do not need conditioning or real-world capacity. Bulking Season or Shredding Season is a better fit for pure physique goals.',
    ],
    teamCallout: 'Want access to all 20+ programs? The Iron Forge Training Team is $25 per month. Ongoing programming delivered through TrainHeroic with coach access, new programming every training block, and instructional videos for every movement. If you are buying more than one program, the Training Team is always a better deal.',
    otherPrograms: ['three-dimensional-athlete', 'garage-athlete', 'meals-on-wheels'],
    faq: [
      {
        q: 'What equipment do I need beyond a regular gym?',
        a: 'You need a ruck (weighted backpack), a sled, and a sandbag in addition to standard gym equipment like a barbell, squat rack, bench, and dumbbells. Some sessions are conditioning-focused and require the functional equipment to run the program as written.',
      },
      {
        q: 'Is this a military program?',
        a: 'It was not designed as a military program specifically, but it was built for a client who needed the same kind of physical readiness that military service demands, which is the ability to be strong, conditioned, and capable in unpredictable real-world situations. Veterans, first responders, and active duty service members are exactly the audience this program was built for.',
      },
      {
        q: 'How long is this program?',
        a: '8 weeks. You own it forever, so you can run it once, run it again, or come back to it whenever you need to build that hybrid capacity back up.',
      },
      {
        q: 'Can I run this without the sled and ruck?',
        a: 'You can substitute some movements, but the conditioning component is built around those tools for a reason. If you do not have access to a ruck and sled, the Garage Athlete program or Meals On Wheels would be a better fit for your equipment setup.',
      },
      {
        q: 'What if I need more than just programming?',
        a: 'These are self-guided programs. If you want coach feedback and ongoing programming, join the Iron Forge Training Team at $25 per month. If you want the full system with labs, clinical protocols, and a dedicated coach, check out Health Optimization Coaching.',
      },
    ],
    seo: {
      title: 'Hard As Nails Hybrid -- 8-Week Strength & Conditioning Program | Iron Forge Brotherhood',
      description: '8 weeks of strength and conditioning hybrid. Barbell work paired with ruck carries, sled pushes, and smart conditioning for real-world capacity. $47 on TrainHeroic.',
    },
  },
  {
    slug: 'three-dimensional-athlete',
    name: 'Three Dimensional Athlete',
    price: 27,
    priceDisplay: '$27',
    isSubscription: false,
    duration: '4 weeks',
    daysPerWeek: '5',
    category: 'powerbuilding',
    categoryLabel: 'Powerbuilding & Hybrid',
    equipment: 'Full gym (barbell, squat rack, bench, dumbbells)',
    trainheroicUrl: 'https://marketplace.trainheroic.com/workout-plan/program/kher-program-1772170345?attrib=599393-aff-ironforge-3dathlete',
    hero: {
      headline: 'Three Dimensional Athlete',
      subheadline: '4 weeks of strength plus mobility for men whose bodies stopped working right, because being strong should not mean being broken.',
    },
    description: 'Three Dimensional Athlete is a 4-week program that pairs heavy compound lifts with deliberate mobility work and movement patterns that translate to real life, and the reason this combination matters is that most men who have been lifting for years have built a specific kind of problem. You got strong doing the same movements in the same planes of motion, and over time your body adapted to that narrow range by tightening everything else down. Your shoulders click when you press overhead, your hips are locked up from years of sitting and squatting in the same groove, and your back hurts every morning because the fascia and joint capsules that are supposed to allow full range of motion have stiffened into whatever position you use most.\n\nThe reason mobility degrades in lifters who only do traditional strength work is that your body builds tissue around the demands you place on it, and if the only demand is pushing and pulling in straight lines, the connective tissue surrounding those joints stops maintaining range of motion you never use. Fascial adhesions develop between muscle layers, joint capsules lose their elasticity, and your body starts compensating around restrictions instead of moving through full range. That compensation is where the small injuries pile up. The 3D Athlete protocol addresses this by pairing the heavy compound work that keeps you strong with targeted mobility sequences that restore the movement quality you have been losing for years, so the small injuries that have been accumulating start to disappear instead of getting worse.\n\nThe sessions run five days per week and this program requires a full gym because the strength component is built on real compound lifts, not bodyweight mobility drills. This is not a rehab program and it is not a yoga program. You are still training heavy, you are still progressing, and you are still building strength, but you are doing it in a way that restores the movement quality your body needs to keep training for the next 20 years without falling apart.',
    included: [
      'Full 4-week programming delivered through the TrainHeroic app',
      'Instructional videos for every movement',
      'Progress tracking built into the app',
      'Buy once, own forever',
      'Starter meal plan to support training and recovery',
      'Community access for coaching support and questions',
    ],
    forYou: [
      'You are a lifter over 30 who is strong but has accumulated small injuries and movement restrictions over years of training',
      'Your shoulders click, your hips are locked up, or your back hurts every morning and you know it is from training but you do not want to stop lifting',
      'You want a structured program that maintains your strength while restoring the mobility you have been losing',
    ],
    notForYou: [
      'You are looking for a pure hypertrophy or pure strength program. This is strength plus mobility. If size is the goal, look at Bulking Season. If pure strength is the goal, Meals On Wheels is the better fit.',
    ],
    teamCallout: 'Want access to all 20+ programs? The Iron Forge Training Team is $25 per month. Ongoing programming delivered through TrainHeroic with coach access, new programming every training block, and instructional videos for every movement. If you are buying more than one program, the Training Team is always a better deal.',
    otherPrograms: ['hard-as-nails-hybrid', 'foundations', 'dumbbell-recomp'],
    faq: [
      {
        q: 'Is this a rehab program?',
        a: 'No. This is a training program that includes deliberate mobility work alongside heavy compound lifts. You are still training with real weight and progressing in strength. The mobility component is designed to restore movement quality, not replace your training.',
      },
      {
        q: 'Will I still get stronger?',
        a: 'Yes. The program is built on heavy compound lifts with progressive overload. The mobility work is layered in alongside the strength work, not instead of it. You stay strong and you move better. That is the whole point.',
      },
      {
        q: 'What equipment do I need?',
        a: 'Full gym. Barbell, squat rack, bench, and dumbbells. The strength component uses the same equipment as any compound movement program.',
      },
      {
        q: 'I am over 40 with bad shoulders. Is this program safe for me?',
        a: 'The program is designed specifically for men who have accumulated movement restrictions from years of training. The mobility sequences target exactly the kind of shoulder, hip, and back issues that lifters develop over time. That said, if you have an acute injury or a medical condition, consult a physician before starting any training program.',
      },
      {
        q: 'What if I need more than just programming?',
        a: 'These are self-guided programs. If you want coach feedback and ongoing programming, join the Iron Forge Training Team at $25 per month. If you want the full system with labs, clinical protocols, and a dedicated coach, check out Health Optimization Coaching.',
      },
    ],
    seo: {
      title: 'Three Dimensional Athlete -- 4-Week Strength & Mobility Program | Iron Forge Brotherhood',
      description: '4 weeks of strength plus mobility for lifters over 30. Heavy compound lifts paired with targeted mobility work to fix movement restrictions. $27 on TrainHeroic.',
    },
  },
  {
    slug: 'meals-on-wheels',
    name: 'Meals On Wheels',
    price: 67,
    priceDisplay: '$67',
    isSubscription: false,
    duration: '12 weeks',
    daysPerWeek: '5',
    sessionLength: '75 min',
    category: 'powerbuilding',
    categoryLabel: 'Powerbuilding & Hybrid',
    equipment: 'Full gym (barbell, squat rack, bench, dumbbells, machines)',
    trainheroicUrl: 'https://marketplace.trainheroic.com/workout-plan/program/kher-program-1772101815?attrib=599393-aff-ironforge-mow',
    hero: {
      headline: 'Meals On Wheels',
      subheadline: '12 weeks of old-school strength work built on the four lifts that matter, because moving heavy weight is the foundation everything else is built on.',
    },
    description: 'Meals On Wheels is 12 weeks of pure strength programming built on bench press, squat, deadlift, and overhead press, and the reason the program is structured around these four lifts specifically is that they load the most muscle mass through the longest range of motion of any movements you can do in a gym. That combination of muscle mass recruited and range of motion traveled is what drives the strongest strength adaptation, which is why every serious strength program in history has been built on some version of these same four movements. This is not a hypertrophy program trying to make you look bigger, and it is not a powerbuilding hybrid trying to do both things at once. This is a program that makes you stronger, and everything in it is designed around that single goal.\n\nThe programming uses linear progression with planned deloads and volume blocks structured across the 12 weeks so the weight on the bar keeps climbing without grinding your joints into dust. Move heavy things. Be hard to kill. That is the philosophy, and the program reflects it. You train five days per week at about 75 minutes per session, and every session is built around one or two of the four main lifts with accessory work that strengthens the positions and muscle groups that support those lifts. The deload weeks are programmed intentionally because men past 30 who are chasing pure strength need to respect recovery as part of the process, not treat it as weakness.\n\nThe audience for this program is men who have been training for a while and want to focus on getting genuinely stronger without the noise of trying to optimize body composition at the same time. If you want to move heavy weight and build the kind of functional strength that carries over into everything else you do, this is the program.',
    included: [
      'Full 12-week programming delivered through the TrainHeroic app',
      'Instructional videos for every movement',
      'Progress tracking built into the app',
      'Buy once, own forever',
      'Community access for coaching support and questions',
    ],
    forYou: [
      'You want pure strength and you have the training experience and discipline to commit to five days per week of compound-focused work',
      'You know your way around a barbell and you want a structured program that makes the weight on the bar go up over 12 weeks',
      'You are a man past 30 who wants to get stronger while respecting your joints and recovery',
    ],
    notForYou: [
      'You are looking to build size or lose fat specifically. Bulking Season is designed for muscle growth and Shredding Season is designed for fat loss. Meals On Wheels is about strength.',
    ],
    teamCallout: 'Want access to all 20+ programs? The Iron Forge Training Team is $25 per month. Ongoing programming delivered through TrainHeroic with coach access, new programming every training block, and instructional videos for every movement. If you are buying more than one program, the Training Team is always a better deal.',
    otherPrograms: ['powerbuilder', 'heavy-duty-x12', 'crucible-upper-lower'],
    faq: [
      {
        q: 'Is this a powerlifting program?',
        a: 'It is built on the same four lifts that powerlifters train, but it is not a competition prep program. There is no peaking cycle, no meet-day simulation, and no competition-specific work. This is a general strength program that uses the most effective compound movements to build raw strength over 12 weeks.',
      },
      {
        q: 'How is this different from Powerbuilder?',
        a: 'Powerbuilder combines powerlifting strength work with bodybuilding hypertrophy volume, so you train for both size and strength simultaneously using an undulating periodization model. Meals On Wheels is pure strength. The programming is focused entirely on making bench, squat, deadlift, and overhead press go up, with accessory work that supports those lifts. If you want both size and strength, go with Powerbuilder. If you want to move heavy weight and nothing else matters, this is the program.',
      },
      {
        q: 'What equipment do I need?',
        a: 'Full gym. Barbell, squat rack, bench, dumbbells, and machine access. The programming is centered on heavy compound movements and the equipment needs to support that.',
      },
      {
        q: 'I am over 40. Is the volume too much?',
        a: 'The program includes planned deloads and volume management specifically because the audience is men past 30 who need to train hard and recover smart. The progression is built to respect your joints while still making the weight on the bar go up.',
      },
      {
        q: 'What if I need more than just programming?',
        a: 'These are self-guided programs. If you want coach feedback and ongoing programming, join the Iron Forge Training Team at $25 per month. If you want the full system with labs, clinical protocols, and a dedicated coach, check out Health Optimization Coaching.',
      },
    ],
    seo: {
      title: 'Meals On Wheels -- 12-Week Pure Strength Program | Iron Forge Brotherhood',
      description: '12 weeks of old-school strength on bench, squat, deadlift, and overhead press. Linear progression with planned deloads for men past 30. $67 on TrainHeroic.',
    },
  },
  {
    slug: 'crucible-upper-lower',
    name: 'The Crucible Upper-Lower',
    price: 47,
    priceDisplay: '$47',
    isSubscription: false,
    duration: '12 weeks',
    daysPerWeek: '4',
    category: 'powerbuilding',
    categoryLabel: 'Powerbuilding & Hybrid',
    equipment: 'Full gym (barbell, dumbbells, cables, machines)',
    trainheroicUrl: 'https://marketplace.trainheroic.com/workout-plan/program/kher-program-1772169244?attrib=599393-aff-ironforge-crucible',
    hero: {
      headline: 'The Crucible Upper-Lower',
      subheadline: '12 weeks of upper/lower split programming that hits every muscle twice per week with weekly exercise rotation, because training each muscle once a week is not enough for natural lifters.',
    },
    description: 'The Crucible is a 12-week upper/lower split that hits every muscle group twice per week, and the reason this frequency matters more than most guys realize is that the protein synthesis window after a training session only lasts about 48 to 72 hours for natural lifters. That means if you are training chest on Monday and not hitting it again until the following Monday, you are spending four to five days per week where that muscle is not growing because the stimulus has already worn off. An upper/lower split that trains each muscle twice per week catches both protein synthesis windows, which is what the actual hypertrophy research says builds muscle most effectively for men who are not on exogenous hormones.\n\nMost upper/lower programs make you run the same two workouts on repeat for 12 weeks, and by week 4 your body has adapted to the stimulus and progress stalls. The Crucible rotates exercises, angles, and rep schemes weekly so the training demand keeps changing while the structure stays consistent. You are still doing an upper day and a lower day, but the movements and the loading patterns shift every week so your body never fully adapts to the routine. That is what keeps the muscle-building signal strong from week 1 through week 12 instead of flatlining halfway through.\n\nThe program runs four days per week with heavy compound movements as the foundation and accessory work that fills in the gaps. Four days instead of five or six means you have three full recovery days per week, which is important for natural lifters who need the recovery to actually realize the training stimulus. You need a full gym for this program because the weekly rotation uses barbells, dumbbells, cables, and machines to hit every muscle from different angles and through different rep ranges.',
    included: [
      'Full 12-week programming delivered through the TrainHeroic app',
      'Instructional videos for every movement',
      'Progress tracking built into the app',
      'Buy once, own forever',
      'Community access for coaching support and questions',
    ],
    forYou: [
      'You are an intermediate lifter who has been running a bro split or a push/pull/legs program and you have stopped making progress',
      'You are a natural lifter who wants to optimize training frequency for muscle growth instead of training each muscle once per week',
      'You can commit to four training days per week in a full gym and you want a structured program that rotates weekly to prevent adaptation',
    ],
    notForYou: [
      'You have never trained on a consistent schedule before. Start with 8 Week Foundations or the 4 Week Training Protocol first, build the training habit and the movement base, and then come back to The Crucible when you are ready for a more advanced split.',
    ],
    teamCallout: 'Want access to all 20+ programs? The Iron Forge Training Team is $25 per month. Ongoing programming delivered through TrainHeroic with coach access, new programming every training block, and instructional videos for every movement. If you are buying more than one program, the Training Team is always a better deal.',
    otherPrograms: ['bulking-season', 'shredding-season-vol-2', 'powerbuilder'],
    faq: [
      {
        q: 'What is upper/lower vs a bro split?',
        a: 'A bro split trains each muscle group once per week, usually one body part per day (chest Monday, back Tuesday, legs Wednesday). An upper/lower split trains every upper body muscle on one day and every lower body muscle on another, and you alternate so each muscle gets hit twice per week. For natural lifters, the research shows that the higher frequency drives more muscle growth because the protein synthesis signal from training only lasts 48 to 72 hours.',
      },
      {
        q: 'Do I need to know the exercises already?',
        a: 'The program includes instructional videos for every movement, so you do not need to have every exercise memorized before you start. That said, this program is designed for intermediate lifters who already know how to execute basic compound movements like squats, deadlifts, bench press, and overhead press. If you are brand new to the gym, start with Foundations.',
      },
      {
        q: 'How is this different from a push/pull/legs program?',
        a: 'A push/pull/legs split typically runs six days per week to hit each muscle twice. The Crucible gets you to twice per week frequency in only four training days because upper day trains all pushing and pulling muscles together, and lower day trains all lower body muscles together. You get the same optimal frequency with more recovery time between sessions.',
      },
      {
        q: 'Will I still get stronger on this program?',
        a: 'Yes. The foundation of every session is heavy compound movements with progressive overload. You will get stronger and build muscle. The upper/lower structure is specifically designed to optimize both by managing training frequency and recovery for natural lifters.',
      },
      {
        q: 'What if I need more than just programming?',
        a: 'These are self-guided programs. If you want coach feedback and ongoing programming, join the Iron Forge Training Team at $25 per month. If you want the full system with labs, clinical protocols, and a dedicated coach, check out Health Optimization Coaching.',
      },
    ],
    seo: {
      title: 'The Crucible Upper-Lower -- 12-Week Hypertrophy Program | Iron Forge Brotherhood',
      description: '12 weeks of upper/lower split hitting every muscle twice per week with weekly exercise rotation. Optimized frequency for natural lifters. $47 on TrainHeroic.',
    },
  },
  {
    slug: 'garage-athlete',
    name: 'Garage Athlete',
    price: 47,
    priceDisplay: '$47',
    isSubscription: false,
    duration: '8 weeks',
    daysPerWeek: '5-6',
    category: 'garage',
    categoryLabel: 'Garage Gym',
    equipment: 'Barbell, squat rack, adjustable bench, pull-up bar, dumbbells',
    trainheroicUrl: 'https://marketplace.trainheroic.com/workout-plan/program/kher-program-1771738031?attrib=599393-aff-ironforge-garageathlete',
    hero: {
      headline: 'Garage Athlete',
      subheadline: '8 weeks of structured garage gym programming for men who bought the equipment but have been winging it ever since.',
    },
    description: 'You built the garage gym because you wanted to train on your own schedule, with no commute and no waiting for equipment, and that part worked. The problem is that most guys set up a squat rack, a bench, and some dumbbells and then spend the next two years doing the same random workout they remember from college because there is no coach out there, no program on the wall, and nobody checking whether the weight on the bar actually went up since last month.\n\nGarage Athlete is 8 weeks of structured push/pull programming built specifically for the equipment you already have, which means every session is designed around a barbell, squat rack, adjustable bench, pull-up bar, and dumbbells. The push/pull format hits every muscle group two to three times per week because that is what the hypertrophy research consistently shows works best for natural lifters, and the progressive overload is programmed into every block so the weight on the bar keeps climbing in a way your body can actually recover from instead of just guessing at what feels hard today.\n\nThe difference between winging it and following a structured program is not motivation or effort, because you already have both of those. The difference is that progressive overload only works when someone maps it out across weeks, and that is exactly what this program does.',
    included: [
      'Full programming delivered through the TrainHeroic app',
      'Instructional videos for every movement',
      'Progress tracking built into the app',
      'Buy once, own forever',
      'Equipment: barbell, squat rack, adjustable bench, pull-up bar, and dumbbells. That is all you need.',
    ],
    forYou: [
      'You have a garage gym setup with a barbell, squat rack, adjustable bench, pull-up bar, and dumbbells',
      'You have been training on your own without a program and want structured progressive overload',
      'You want to build muscle and strength using the equipment you already own',
      'You can commit to training consistently for 8 weeks',
    ],
    notForYou: [
      'You have a full commercial gym with cables, machines, and a full dumbbell rack, because you have more equipment options. Look at Bulking Season or Crucible Upper-Lower for full gym programs.',
      'You have never touched a barbell before. Start with 8 Week Foundations to build the movement base first.',
    ],
    teamCallout: 'Want access to all 20+ programs? The Iron Forge Training Team is $25 per month. Ongoing programming delivered through TrainHeroic with coach access, new programming every training block, and instructional videos for every movement. If you are buying more than one program, the Training Team is always a better deal.',
    otherPrograms: ['garage-athlete-mass', 'garage-athlete-cuts'],
    faq: [
      {
        q: 'What equipment do I need?',
        a: 'Barbell, squat rack, adjustable bench, pull-up bar, and dumbbells. If you have those five things in your garage, you are set. No cables, no machines, no specialty equipment.',
      },
      {
        q: 'What is the difference between Garage Athlete, Garage Athlete: Mass, and Garage Athlete: Cuts?',
        a: 'Garage Athlete is the base program built on push/pull progressive overload and is the right starting point for most guys. Mass is the hypertrophy variant with heavier loads, advanced set schemes, and ramping frequency for intermediate lifters who want to build size specifically. Cuts is the fat loss variant using density training with shorter rest periods to strip fat while protecting muscle.',
      },
      {
        q: 'How many days per week do I need to train?',
        a: 'The program runs a push/pull format designed to hit every muscle group two to three times per week. Plan on training most days of the week to get the full benefit of the programming.',
      },
      {
        q: 'Where do I access the program after purchase?',
        a: 'TrainHeroic app. Download it, purchase through the link, and it appears in your app immediately. TrainHeroic handles payment, delivery, and progress tracking.',
      },
      {
        q: 'What if I need more than just programming?',
        a: 'These are self-guided programs. If you want coach feedback and ongoing programming, join the Iron Forge Training Team at $25 per month. If you want the full system with labs, clinical protocols, and a dedicated coach, check out Health Optimization Coaching.',
      },
    ],
    seo: {
      title: 'Garage Athlete -- 8-Week Garage Gym Program | Iron Forge Brotherhood',
      description: '8 weeks of structured push/pull programming for your garage gym. Barbell, rack, bench, dumbbells, pull-up bar. Progressive overload that works. $47 on TrainHeroic.',
    },
  },
  {
    slug: 'garage-athlete-mass',
    name: 'Garage Athlete: Mass',
    price: 47,
    priceDisplay: '$47',
    isSubscription: false,
    duration: '8 weeks',
    daysPerWeek: '6',
    category: 'garage',
    categoryLabel: 'Garage Gym',
    equipment: 'Barbell, squat rack, adjustable bench, pull-up bar, dumbbells',
    trainheroicUrl: 'https://marketplace.trainheroic.com/workout-plan/program/kher-program-1772091699?attrib=599393-aff-ironforge-garagemass',
    hero: {
      headline: 'Garage Athlete: Mass',
      subheadline: 'Hypertrophy-focused garage gym programming with ramping frequency and advanced set schemes built to add serious size in 8 weeks.',
    },
    description: 'Most guys with a garage gym hit a wall around the six month mark where the weight on the bar stops going up, the mirror stops changing, and they start wondering whether a home setup can actually build real size. It can, but the programming has to be built for hypertrophy specifically, which means heavier loads, advanced set schemes, and a frequency model that ramps over time instead of staying flat.\n\nGarage Athlete: Mass runs 8 weeks on a push/pull format, six days a week, and the frequency model starts at two times per muscle per week before ramping to three times by the final block. That progression matters because your body adapts to training volume first, and once it adapts you need to increase the stimulus density to keep growing, which is exactly what ramping frequency does without requiring you to add sets indefinitely. The advanced set schemes, which include drop sets, slow eccentrics, and mechanical advantage variations, are all built around the equipment already sitting in your garage, so every session uses a barbell, squat rack, adjustable bench, pull-up bar, and dumbbells.\n\nThis is intermediate level programming. If you have been following Garage Athlete or any structured program for at least a few months and the growth has stalled, this is the next step up because the training stimulus has to evolve for the muscle to keep responding.',
    included: [
      'Full programming delivered through the TrainHeroic app',
      'Instructional videos for every movement',
      'Progress tracking built into the app',
      'Buy once, own forever',
      'Equipment: barbell, squat rack, adjustable bench, pull-up bar, and dumbbells. Same setup as the base Garage Athlete program.',
    ],
    forYou: [
      'You are an intermediate lifter with a garage gym who wants to build mass specifically',
      'You have been training consistently for at least six months and your current progress has stalled',
      'You can commit to six training days per week for 8 weeks',
      'You have a barbell, squat rack, adjustable bench, pull-up bar, and dumbbells',
    ],
    notForYou: [
      'You have never followed a structured program before. Start with Garage Athlete as the base program and build the training foundation first.',
    ],
    teamCallout: 'Want access to all 20+ programs? The Iron Forge Training Team is $25 per month. Ongoing programming delivered through TrainHeroic with coach access, new programming every training block, and instructional videos for every movement. If you are buying more than one program, the Training Team is always a better deal.',
    otherPrograms: ['garage-athlete-cuts', 'garage-athlete'],
    faq: [
      {
        q: 'Do I need to run the base Garage Athlete program first?',
        a: 'You do not have to, but you should have at least six months of consistent training under your belt. Garage Athlete: Mass uses advanced set schemes and a ramping frequency model that assumes you already know how to execute the movements with proper form and can handle the volume. If you are newer to structured programming, start with Garage Athlete and build from there.',
      },
      {
        q: 'Why 6 days per week?',
        a: 'The hypertrophy research is clear that natural lifters build more muscle when each muscle group gets hit at minimum twice per week, and this program ramps that frequency to three times per week by the final block. Six training days on a push/pull split is how you get that frequency while still managing recovery between sessions.',
      },
      {
        q: 'What equipment do I need?',
        a: 'Barbell, squat rack, adjustable bench, pull-up bar, and dumbbells. Same setup as the base Garage Athlete program. No cables, no machines.',
      },
      {
        q: 'Can I switch to Garage Athlete: Cuts after this program?',
        a: 'Absolutely. Running a hypertrophy block before a fat loss block is one of the most effective ways to build muscle and then reveal it. Mass builds the size, Cuts strips the fat. That is how this works.',
      },
      {
        q: 'Where do I access the program after purchase?',
        a: 'TrainHeroic app. Download it, purchase through the link, and it appears in your app immediately. TrainHeroic handles payment, delivery, and progress tracking.',
      },
    ],
    seo: {
      title: 'Garage Athlete: Mass -- 8-Week Hypertrophy Garage Gym Program | Iron Forge Brotherhood',
      description: '8 weeks of hypertrophy programming for your garage gym. Ramping frequency, advanced set schemes, push/pull format. 6 days per week. $47 on TrainHeroic.',
    },
  },
  {
    slug: 'garage-athlete-cuts',
    name: 'Garage Athlete: Cuts',
    price: 47,
    priceDisplay: '$47',
    isSubscription: false,
    duration: '8 weeks',
    daysPerWeek: '6',
    sessionLength: '45-60 min',
    category: 'garage',
    categoryLabel: 'Garage Gym',
    equipment: 'Barbell, squat rack, adjustable bench, pull-up bar, dumbbells',
    trainheroicUrl: 'https://marketplace.trainheroic.com/workout-plan/program/kher-program-1772036347?attrib=599393-aff-ironforge-garagecuts',
    hero: {
      headline: 'Garage Athlete: Cuts',
      subheadline: 'Density-based fat loss programming built for the garage gym, push/pull/legs twice a week in 45 to 60 minute sessions.',
    },
    description: 'Density training is one of the most effective ways to lose fat while keeping the muscle you already built, and the reason it works is simple. You are doing more work in less time, which means shorter rest periods between sets, more total volume packed into a 45 to 60 minute window, and a metabolic demand that forces your body to burn through stored energy while the resistance training signal tells your muscles to stay exactly where they are.\n\nGarage Athlete: Cuts runs 8 weeks on a push/pull/legs format, six days a week, which means you hit each movement pattern twice per week. The sessions are built around the equipment already in your garage, so every workout uses a barbell, squat rack, adjustable bench, pull-up bar, and dumbbells, and the programming is structured so that the density increases across blocks while the compound movements stay heavy enough to protect your strength base. This is not a cardio program disguised as lifting. The barbell work stays heavy and the density format handles the fat loss side by keeping your heart rate elevated and your rest periods short.\n\nThe garage gym is actually the ideal environment for density training because you control the pace. There is nobody rotating in on your squat rack, nobody waiting for the bench, and nobody slowing you down between sets. You set the clock, you move through the work, and the environment lets you train at the tempo the program demands.',
    included: [
      'Full programming delivered through the TrainHeroic app',
      'Instructional videos for every movement',
      'Progress tracking built into the app',
      'Buy once, own forever',
      'Equipment: barbell, squat rack, adjustable bench, pull-up bar, and dumbbells',
      'Sessions run 45 to 60 minutes.',
    ],
    forYou: [
      'You have a garage gym and want to lose fat while keeping the muscle you have built',
      'You can train six days per week and are comfortable with shorter rest periods and higher intensity sessions',
      'You want structured fat loss programming that does not sacrifice your compound lifts',
      'You have a barbell, squat rack, adjustable bench, pull-up bar, and dumbbells',
    ],
    notForYou: [
      'You are trying to put on size right now. Garage Athlete: Mass is the hypertrophy variant built for that goal with the same equipment.',
    ],
    teamCallout: 'Want access to all 20+ programs? The Iron Forge Training Team is $25 per month. Ongoing programming delivered through TrainHeroic with coach access, new programming every training block, and instructional videos for every movement. If you are buying more than one program, the Training Team is always a better deal.',
    otherPrograms: ['garage-athlete-mass', 'garage-athlete'],
    faq: [
      {
        q: 'What equipment do I need?',
        a: 'Barbell, squat rack, adjustable bench, pull-up bar, and dumbbells. Same setup as the other Garage Athlete programs. No cables, no machines.',
      },
      {
        q: 'Can I switch to Garage Athlete: Mass after Cuts?',
        a: 'Yes, and that is actually one of the best transitions you can make. Running the fat loss program first strips the body fat, and then switching to the hypertrophy variant lets you build muscle on a leaner frame where you can actually see the results. A lot of guys cycle between the two.',
      },
      {
        q: 'What if I do not have a cable machine?',
        a: 'You do not need one. Every exercise in this program is built around a barbell, squat rack, adjustable bench, pull-up bar, and dumbbells. The programming was designed from the ground up for garage gym setups, not adapted from a commercial gym program.',
      },
      {
        q: 'How is this different from Shredding Season?',
        a: 'Shredding Season is a full commercial gym program that uses cables, machines, leg press, and a wider range of equipment across five days. Garage Athlete: Cuts is built specifically for the garage gym equipment set and runs a push/pull/legs format over six days with shorter sessions. If you have a full gym, Shredding Season gives you more exercise variety. If you are training in your garage, Cuts is built for your setup.',
      },
      {
        q: 'Where do I access the program after purchase?',
        a: 'TrainHeroic app. Download it, purchase through the link, and it appears in your app immediately. TrainHeroic handles payment, delivery, and progress tracking.',
      },
    ],
    seo: {
      title: 'Garage Athlete: Cuts -- 8-Week Fat Loss Garage Gym Program | Iron Forge Brotherhood',
      description: '8 weeks of density-based fat loss for your garage gym. Push/pull/legs, 6 days per week, 45-60 min sessions. Strip fat while protecting muscle. $47 on TrainHeroic.',
    },
  },
  {
    slug: 'dumbbell-recomp',
    name: 'Dumbbell Recomp',
    price: 47,
    priceDisplay: '$47',
    isSubscription: false,
    duration: '8 weeks',
    daysPerWeek: '6 (3 lifting, 3 conditioning)',
    sessionLength: '45-60 min',
    category: 'dumbbell-bodyweight',
    categoryLabel: 'Dumbbell & Bodyweight',
    equipment: 'Adjustable dumbbells only',
    trainheroicUrl: 'https://marketplace.trainheroic.com/workout-plan/program/kher-program-1771932985?attrib=599393-aff-ironforge-dumbbellrecomp',
    hero: {
      headline: 'Dumbbell Recomp',
      subheadline: '8 weeks of body recomposition with nothing but dumbbells and your bodyweight.',
    },
    description: 'Body recomposition means you are burning fat and building muscle at the same time, and most people think you need a full gym to do it. You do not. What you need is structured programming with enough resistance training stimulus to tell your body to hold onto muscle while the conditioning work and caloric output handle the fat loss side, and a pair of adjustable dumbbells gives you everything required to create that stimulus.\n\nDumbbell Recomp runs 8 weeks with six training days per week, split into three days of resistance training and three days of conditioning and mobility work. The resistance days use dumbbell compound movements and progressive overload to build strength and muscle, and the conditioning days use bodyweight circuits and metabolic work that keeps your heart rate elevated and your body burning through stored energy. That three-and-three split is what makes recomposition possible, because the resistance work sends the signal to build and the conditioning work creates the caloric demand to burn, and when those two things happen in the same training week your body composition starts shifting even without a dramatic calorie cut.\n\nSessions run 45 to 60 minutes, and the only equipment you need is adjustable dumbbells. No barbell, no bench, no rack, no machines. This is built for the hotel gym, the apartment fitness center, the firehouse, the patrol car trunk with a set of dumbbells in the back, or the corner of your living room. If you have dumbbells and floor space, you can run this program.',
    included: [
      'Full programming delivered through the TrainHeroic app',
      'Instructional videos for every movement',
      'Progress tracking built into the app',
      'Buy once, own forever',
      'Equipment: adjustable dumbbells. No barbell, no bench, no rack, no machines.',
    ],
    forYou: [
      'You do not have access to a full gym but still want structured programming with real progressive overload',
      'You travel frequently and need a program that works in hotel gyms and apartment fitness centers',
      'You are a first responder, law enforcement, military, or anyone whose schedule and location make a commercial gym impractical',
      'You want to lose fat and build muscle simultaneously using minimal equipment',
    ],
    notForYou: [
      'You have access to a full gym with barbells, cables, and machines, because you can get more out of programs like Bulking Season or Crucible Upper-Lower that use the full range of equipment.',
    ],
    teamCallout: 'Want access to all 20+ programs? The Iron Forge Training Team is $25 per month. Ongoing programming delivered through TrainHeroic with coach access, new programming every training block, and instructional videos for every movement. If you are buying more than one program, the Training Team is always a better deal.',
    otherPrograms: ['bodyweight-super-shred', 'foundations', 'three-dimensional-athlete'],
    faq: [
      {
        q: 'What weight dumbbells do I need?',
        a: 'Adjustable dumbbells are ideal because the program uses progressive overload, which means the weight needs to go up over the 8 weeks. If you have a fixed set, you want a range that lets you go heavy on compound movements like rows and presses and lighter on isolation work. A pair of adjustable dumbbells that go up to at least 50 pounds will cover most guys.',
      },
      {
        q: 'Can I do this at a hotel gym?',
        a: 'Yes, and that is exactly who this program was built for. Every exercise uses dumbbells and bodyweight only. If the hotel gym has a set of dumbbells and enough floor space to move, you can run the full program.',
      },
      {
        q: 'What does the conditioning work look like?',
        a: 'The three conditioning days use bodyweight circuits and metabolic work designed to keep your heart rate elevated and drive fat loss. These are not rest days, they are active training days with structured programming, just without the dumbbells.',
      },
      {
        q: 'Where do I access the program after purchase?',
        a: 'TrainHeroic app. Download it, purchase through the link, and it appears in your app immediately. TrainHeroic handles payment, delivery, and progress tracking.',
      },
      {
        q: 'What if I need more than just programming?',
        a: 'These are self-guided programs. If you want coach feedback and ongoing programming, join the Iron Forge Training Team at $25 per month. If you want the full system with labs, clinical protocols, and a dedicated coach, check out Health Optimization Coaching.',
      },
    ],
    seo: {
      title: 'Dumbbell Recomp -- 8-Week Body Recomposition Program | Iron Forge Brotherhood',
      description: '8 weeks of body recomposition with dumbbells only. 3 days lifting, 3 days conditioning. Built for hotel gyms, apartments, and anywhere with floor space. $47 on TrainHeroic.',
    },
  },
  {
    slug: 'bodyweight-super-shred',
    name: 'Bodyweight Super Shred',
    price: 30,
    priceDisplay: '$30',
    isSubscription: false,
    duration: '6 weeks',
    daysPerWeek: '5',
    sessionLength: '45 min',
    category: 'dumbbell-bodyweight',
    categoryLabel: 'Dumbbell & Bodyweight',
    equipment: 'Pull-up bar only',
    trainheroicUrl: 'https://marketplace.trainheroic.com/workout-plan/program/kher-program-1772016825?attrib=599393-aff-ironforge-bwshred',
    hero: {
      headline: 'Bodyweight Super Shred',
      subheadline: '6-week bodyweight-only program that builds real muscle definition with no equipment except a pull-up bar.',
    },
    description: 'Most guys assume you need a gym and a barbell to make any real progress, and for building maximum strength that is true, but fat loss and muscle definition are a different equation. What drives fat loss is total energy expenditure and training frequency, and what drives muscle definition is time under tension and metabolic stress, and you can create all four of those things with nothing but your own bodyweight and a pull-up bar if the programming is structured correctly.\n\nBodyweight Super Shred runs 6 weeks, five days a week, with 45 minute sessions built entirely around bodyweight movements and a pull-up bar. The programming uses high volume, high frequency, and controlled tempos to create the metabolic demand that strips fat while the resistance from your own bodyweight maintains and builds muscle definition. Guys have dropped 30 plus pounds on this program because the training frequency is high enough and the session density is intense enough to drive real body composition change without ever touching a weight.\n\nThis is not an "at home workout" you found on the internet. This is structured programming with progressive overload built into each week, coaching notes on every session, and video demonstrations for every movement. The pull-up bar is the only piece of equipment you need, and that can be a door frame bar, a tree branch, a playground bar, or anything that lets you hang and pull. The program meets you wherever you are.',
    included: [
      'Full programming delivered through the TrainHeroic app',
      'Instructional videos for every movement',
      'Progress tracking built into the app',
      'Buy once, own forever',
      'Equipment: a pull-up bar. Door frame bar, tree branch, playground. Zero other equipment.',
    ],
    forYou: [
      'You need a program with zero equipment barriers that you can do anywhere',
      'You want to lose fat and build visible muscle definition using only your bodyweight',
      'You travel constantly, are deployed, work unpredictable hours, or simply do not have access to a gym right now',
      'You are at any fitness level and want a structured starting point that does not require equipment you do not have',
    ],
    notForYou: [
      'You are looking to build serious mass, because at a certain point you need external resistance to keep progressing. Look at Dumbbell Recomp as the next step up in equipment.',
    ],
    teamCallout: 'Want access to all 20+ programs? The Iron Forge Training Team is $25 per month. Ongoing programming delivered through TrainHeroic with coach access, new programming every training block, and instructional videos for every movement. If you are buying more than one program, the Training Team is always a better deal.',
    otherPrograms: ['bodyweight-super-shred-vol-2', 'dumbbell-recomp'],
    faq: [
      {
        q: 'Do I really not need any equipment?',
        a: 'The only thing you need is a pull-up bar, and that can be a door frame bar you buy for twenty dollars, a tree branch, a playground bar, or anything sturdy enough to hang from and pull yourself up on. Beyond that, everything in this program uses your bodyweight and floor space.',
      },
      {
        q: 'What if I cannot do a pull-up?',
        a: 'The program includes progressions and modifications for every movement, including pull-ups. If you cannot do a full pull-up yet, you start with the progression variant in the app and build toward it. The program is designed for any fitness level.',
      },
      {
        q: 'How long are the sessions?',
        a: '45 minutes, five days a week for 6 weeks. The sessions are dense because the rest periods are short and the volume is high, so 45 minutes is all you need to get the full training stimulus.',
      },
      {
        q: 'Can I really lose significant weight on a bodyweight program?',
        a: 'Guys have dropped 30 plus pounds on this program. Fat loss is driven by energy expenditure and training frequency, and this program delivers both at a level that most people do not expect from bodyweight training. The programming is structured to keep your heart rate elevated and your muscles under tension for the full 45 minutes.',
      },
      {
        q: 'Where do I access the program after purchase?',
        a: 'TrainHeroic app. Download it, purchase through the link, and it appears in your app immediately. TrainHeroic handles payment, delivery, and progress tracking.',
      },
    ],
    seo: {
      title: 'Bodyweight Super Shred -- 6-Week Bodyweight Fat Loss Program | Iron Forge Brotherhood',
      description: '6-week bodyweight-only program. 5 days per week, 45 min sessions, pull-up bar only. Guys have dropped 30+ pounds. $30 on TrainHeroic.',
    },
  },
  {
    slug: 'bodyweight-super-shred-vol-2',
    name: 'BW Super Shred Vol II',
    price: 30,
    priceDisplay: '$30',
    isSubscription: false,
    duration: '6 weeks',
    daysPerWeek: '6',
    category: 'dumbbell-bodyweight',
    categoryLabel: 'Dumbbell & Bodyweight',
    equipment: 'Pull-up bar only',
    trainheroicUrl: 'https://marketplace.trainheroic.com/workout-plan/program/kher-program-1772021609?attrib=599393-aff-ironforge-bwshredv2',
    hero: {
      headline: 'BW Super Shred Vol II',
      subheadline: 'Harder movements, more volume, one extra training day, same zero equipment setup.',
    },
    description: 'Vol I put you on the map. Vol II drops you in the trenches. The first Bodyweight Super Shred program built your base, got you comfortable with high frequency bodyweight training, and showed you what your body can do without a single piece of equipment beyond a pull-up bar. Vol II takes that foundation and pushes it further, because progressive overload in bodyweight training does not mean adding weight to the bar. It means harder movement patterns, more volume per session, and more training days per week.\n\nBW Super Shred Vol II runs 6 weeks at six days per week, which is one more training day than Vol I, and the movement patterns are more demanding across the board. The programming was designed by a retired Army SFC who built it the same way he built training programs for soldiers, which means the volume is high, the rest periods are short, and the movements require real control and coordination, not just effort. The progression across the 6 weeks is deliberate, so each week builds on the last and the final block demands more from you than the first block did in every way.\n\nThe equipment requirement is the same as Vol I. A pull-up bar and nothing else. If you finished the first program and you are looking for the next challenge without adding equipment, this is it.',
    included: [
      'Full programming delivered through the TrainHeroic app',
      'Instructional videos for every movement',
      'Progress tracking built into the app',
      'Buy once, own forever',
      'Equipment: pull-up bar only. Same as Vol I.',
    ],
    forYou: [
      'You finished Bodyweight Super Shred Vol I and want the next challenge with the same zero equipment setup',
      'You are comfortable with high frequency bodyweight training and want harder movement patterns and more volume',
      'You can commit to six training days per week for 6 weeks',
      'You want to continue building definition and losing fat without adding any equipment',
    ],
    notForYou: [
      'You have not run Vol I yet. Start there, because this program assumes you have the bodyweight movement base and conditioning from the first 6 weeks.',
    ],
    teamCallout: 'Want access to all 20+ programs? The Iron Forge Training Team is $25 per month. Ongoing programming delivered through TrainHeroic with coach access, new programming every training block, and instructional videos for every movement. If you are buying more than one program, the Training Team is always a better deal.',
    otherPrograms: ['bodyweight-super-shred', 'dumbbell-recomp'],
    faq: [
      {
        q: 'Do I need to run Vol I first?',
        a: 'Yes. Vol II assumes you have the movement base and conditioning level from the first 6 weeks. The movement patterns are harder, the volume is higher, and the program adds an extra training day. If you jump straight into Vol II without that foundation, you will be behind from day one.',
      },
      {
        q: 'Is 6 days too much for bodyweight training?',
        a: 'Bodyweight training is lower impact on your joints and connective tissue than barbell work, which means your body can handle a higher training frequency without the same recovery cost. Six days of bodyweight work is sustainable for most guys, especially if you built the base with the five day per week Vol I program first. The programming manages the volume across the week so you are not grinding the same muscle groups into the ground every day.',
      },
      {
        q: 'What equipment do I need?',
        a: 'A pull-up bar. Same as Vol I. Door frame bar, tree branch, playground, anything sturdy enough to hang from. Zero other equipment.',
      },
      {
        q: 'What happens after I finish Vol II?',
        a: 'If you want to keep progressing with bodyweight training, you can cycle back through Vol I and Vol II with the goal of improving your numbers and movement quality on every exercise. If you are ready to add equipment, Dumbbell Recomp is the next step up and only requires adjustable dumbbells.',
      },
      {
        q: 'Where do I access the program after purchase?',
        a: 'TrainHeroic app. Download it, purchase through the link, and it appears in your app immediately. TrainHeroic handles payment, delivery, and progress tracking.',
      },
    ],
    seo: {
      title: 'BW Super Shred Vol II -- 6-Week Advanced Bodyweight Program | Iron Forge Brotherhood',
      description: '6 weeks, 6 days per week, pull-up bar only. Harder movements, more volume than Vol I. Designed by a retired Army SFC. $30 on TrainHeroic.',
    },
  },
  {
    slug: 'foundations',
    name: '8 Week Foundations',
    price: 30,
    priceDisplay: '$30',
    isSubscription: false,
    duration: '8 weeks',
    daysPerWeek: '3',
    sessionLength: '60-75 min',
    category: 'beginner',
    categoryLabel: 'Beginner / Foundation',
    equipment: 'Full gym (barbell, squat rack, bench, dumbbells, cable/machine access)',
    trainheroicUrl: 'https://marketplace.trainheroic.com/workout-plan/program/kher-program-1772002707?attrib=599393-aff-ironforge-foundations',
    hero: {
      headline: '8 Week Foundations',
      subheadline: 'Eight weeks of structured training for men who are new to the gym, coming back after time off, or tired of walking in with no plan and leaving with nothing to show for it.',
    },
    description: 'Three days a week. That is all this takes, and the reason it works is because recovery matters more when you are new to structured training than it does at any other point in your lifting career. Every single session you do in those early weeks creates more stimulus relative to your training age than a guy who has been lifting for five years would get from the same workout, which means three days of structured training per week is not a compromise for beginners, it is actually the optimal frequency because your connective tissue, your joints, and your central nervous system all need time to adapt alongside your muscles.\n\nEach session runs 60 to 75 minutes, and the programming covers compound movement patterns that carry over into every program in the Iron Forge catalog. If you have run the 4 Week Training Protocol, which has been downloaded over 40,000 times, Foundations takes those same proven concepts and stretches them into a full eight-week progression with more volume, more variety, and a deliberate ramp that builds your work capacity over two months instead of one. Every concept is explained as you go, every exercise has detailed video demonstrations, and nothing in this program assumes you already know what you are doing. That is the whole point.\n\nThis is the program that builds the foundation everything else sits on. You learn the movement patterns, you build the habit of showing up three days a week and following a structured plan, and by week eight you have enough training base to walk into any specialization in the catalog and actually get something out of it.',
    included: [
      'Full 8-week programming delivered through the TrainHeroic app (3 days per week, 60 to 75 minutes per session)',
      'Instructional videos for every movement so you never have to guess at form',
      'Progress tracking built into the app',
      'Every exercise has detailed video demonstrations with coaching cues',
      'Access to the Iron Forge Brotherhood community (25,000+ members)',
      'Buy once, own forever',
    ],
    forYou: [
      'You are new to the gym or coming back after months or years away and you want a structured plan that tells you exactly what to do every session',
      'You are busy, you work full time, and three days a week is what fits your schedule',
      'You ran the 4 Week Training Protocol and want to keep building on those movement patterns with a longer progression',
      'You have been going to the gym but you have no plan and you are tired of winging it',
    ],
    notForYou: [
      'If you have been training consistently for six months or more and you already know the main compound lifts, you are ready for something more advanced. Look at Bulking Season for a 12-week hypertrophy program or Crucible Upper-Lower if you want an upper/lower split that hits every muscle twice a week.',
    ],
    teamCallout: 'Want access to all 20+ programs? The Iron Forge Training Team is $25 per month with ongoing programming, coach access, and new training blocks every 8 weeks. If you are buying more than one program, the Training Team is always a better deal.',
    otherPrograms: ['4-week-protocol', 'crucible-upper-lower', 'bulking-season'],
    faq: [
      {
        q: 'Can a complete beginner do this program?',
        a: 'Yes, that is exactly who it is built for. Every exercise has a video demonstration, every concept is explained as you go, and the programming starts at a level where no prior gym experience is required. You just follow the plan.',
      },
      {
        q: 'What is the difference between this and the 4 Week Training Protocol?',
        a: 'The 4 Week Training Protocol is a four-week introduction that runs five days a week. Foundations is an eight-week program that runs three days a week with more volume, more variety, and a longer progression arc. If you ran the 4 Week Protocol and want to keep building, Foundations is the natural next step. If you have never followed any program, either one works as a starting point.',
      },
      {
        q: 'What equipment do I need?',
        a: 'Full gym access. You need a barbell, squat rack, bench, dumbbells, and basic cable or machine access. This is a compound movement program and you need the equipment to match.',
      },
      {
        q: 'How long are the workouts?',
        a: '60 to 75 minutes per session, three days a week. The programming is structured so you get in, do the work, and get out without wasting time.',
      },
      {
        q: 'What if I need more than just programming?',
        a: 'Foundations is self-guided. If you want coach feedback on your form, ongoing programming that changes every training block, and a community of men doing the same work, the Iron Forge Training Team is $25 per month. If you want the full system with labs, clinical protocols, and a dedicated coach, check out Health Optimization Coaching.',
      },
    ],
    seo: {
      title: '8 Week Foundations -- Beginner Strength Program | Iron Forge Brotherhood',
      description: '8 weeks of structured training for beginners. 3 days per week, 60-75 min sessions. Every exercise demonstrated. 40,000+ men started here. $30 on TrainHeroic.',
    },
  },
  {
    slug: '4-week-protocol',
    name: '4 Week Training Protocol',
    price: 27,
    priceDisplay: '$27',
    isSubscription: false,
    duration: '4 weeks',
    daysPerWeek: '5',
    sessionLength: '~60 min',
    category: 'beginner',
    categoryLabel: 'Beginner / Foundation',
    equipment: 'Full gym (barbell, squat rack, bench, dumbbells, machines)',
    trainheroicUrl: 'https://marketplace.trainheroic.com/workout-plan/program/kher-program-1772442029?attrib=599393-aff-ironforge-4week',
    hero: {
      headline: '4 Week Training Protocol',
      subheadline: 'The program that started it all, run by over 40,000 men, four weeks of structured training for $27.',
    },
    description: '$27. Four weeks. One hour a day. Five days a week. The program that started it all.\n\nThe reason a short-term structured program is the best entry point for men who have never followed a real training plan is because it removes every excuse. The cost is low enough that it is not a financial commitment, the duration is short enough that you can see the end before you start, and the structure is tight enough that you never have to think about what to do when you walk into the gym. You just open the app and follow the plan, and by the end of four weeks you have built something more valuable than any amount of strength, which is the habit of showing up and doing the work consistently.\n\nOver 40,000 men have run this program, and the ones who stick around in the Iron Forge community almost always point back to these four weeks as the turning point. The programming introduces you to the basic movement patterns, teaches you how to follow a structured plan, and gives you enough results in a month that you actually want to keep going. This is the on-ramp to everything else in the Iron Forge catalog, and it was designed that way on purpose because the hardest part of training is not the weight on the bar, it is getting started and following through.',
    included: [
      'Full 4-week programming delivered through the TrainHeroic app (5 days per week, approximately 60 minutes per session)',
      'Instructional videos for every movement',
      'Progress tracking built into the app',
      'Starter meal plan to support your training',
      'Access to the Iron Forge Brotherhood community (25,000+ members)',
      'Buy once, own forever',
    ],
    forYou: [
      'You have never followed a structured training program and you want to know what it feels like to show up every day with a plan',
      'You are skeptical about whether this stuff actually works and $27 for four weeks is low enough risk to find out',
      'You weigh 350 pounds or you weigh 150 pounds and it does not matter because the programming meets you where you are',
      'You want to test the Iron Forge system before committing to a longer program',
    ],
    notForYou: [
      'If you already train consistently and have been lifting for six months or more, skip this and go straight to 8 Week Foundations or one of the specialized programs like Bulking Season or Heavy Duty x12. The 4 Week Protocol is designed for men who are starting from zero or close to it.',
    ],
    teamCallout: 'Want access to all 20+ programs? The Iron Forge Training Team is $25 per month with ongoing programming, coach access, and new training blocks every 8 weeks. If you are buying more than one program, the Training Team is always a better deal.',
    otherPrograms: ['foundations', 'bulking-season'],
    faq: [
      {
        q: 'Is $27 all I pay?',
        a: 'Yes. $27 gets you the full four-week program, the starter meal plan, video demonstrations for every exercise, and community access. You own it forever. There are no recurring charges, no upsells during the program, and no hidden fees. TrainHeroic handles payment and delivery.',
      },
      {
        q: 'Can a 350 pound guy do this?',
        a: 'Yes. The programming is built to meet you wherever you are. The exercises scale to your current fitness level and the progression is structured so that you build capacity over four weeks regardless of your starting point. Over 40,000 men have run this program and they did not all start in the same place.',
      },
      {
        q: 'What equipment do I need?',
        a: 'Full gym access. You need a barbell, squat rack, bench, dumbbells, and basic machine access. If you do not have a gym, look at the Bodyweight Super Shred or Dumbbell Recomp programs which require minimal equipment.',
      },
      {
        q: 'What happens after the four weeks?',
        a: 'You own the program forever so you can run it again if you want. Most men move into 8 Week Foundations, which extends the same concepts into a longer progression, or they jump into a specialized program like Bulking Season or Heavy Duty x12 depending on their goals.',
      },
      {
        q: 'What if I need more than just programming?',
        a: 'The 4 Week Protocol is self-guided. If you want coach feedback, ongoing programming that evolves every training block, and a community training together, the Iron Forge Training Team is $25 per month. If you want the full system with labs, clinical protocols, and a dedicated coach, check out Health Optimization Coaching.',
      },
    ],
    seo: {
      title: '4 Week Training Protocol -- The On-Ramp to Iron Forge | Iron Forge Brotherhood',
      description: '$27. Four weeks. Five days a week. Over 40,000 men have run it. Starter meal plan, video demos, community access. The program that started it all.',
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
