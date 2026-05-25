import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import Navbar from '../components/Navbar.jsx'

const phases = [
  {
    number: '00',
    title: 'Civic Immersion · 14 Days',
    lead: 'Before your first module begins, you spend fourteen days in the field.',
    paragraphs: [
      'Six impact domains. Real communities. You do not observe from a distance. You stay overnight in a below-poverty-line household, shadow a health worker through a government primary care centre, wake before sunrise on a farm, and spend a full day alongside informal urban labourers. You carry a field log. You record what you see, what you hear, and what you did not expect to feel.',
      'By Day 12 you are back on campus, applying a proprietary nine-lens analytical framework to everything you witnessed. The output is a Domain Intelligence Card, a structured intelligence asset that maps your chosen domain across nine dimensions. You carry this card for the next 24 months.',
      'On Day 14 you present a shortlist of three to five field-evidenced problems to the full cohort. Your mentor signs off on one. That problem is yours. It will not change.',
      'The gate question for every output in this phase is simple: could this have been produced without leaving campus? If yes, it does not pass.',
    ],
    produces:
      'You produce: Domain Intelligence Cards across all six impact domains. Field logs, interview transcripts, a six-to-ten minute documentary. A mentor-signed problem locked for the next 24 months.',
  },
  {
    number: '01',
    title: 'Researcher · Months 1–6',
    lead: 'You arrive in Phase 1 with a locked problem. This phase makes you impossible to argue with about it.',
    subModules: [
      {
        title: 'Social Problem Intelligence',
        body: 'You spend the first six weeks proving your problem is real. Not asserting it. Proving it. You conduct community interviews, triangulate with national datasets, and trace the structural barrier that keeps the problem alive, who benefits from it remaining unsolved, and why prior solutions have failed. The output is a publication-quality research paper. Not a report. A paper that argues, with field evidence and cited literature, that your problem is real, persistent, and in principle solvable by engineering. An external academic reviewer reads it.',
      },
      {
        title: 'Applied Engineering Fundamentals',
        body: 'Simultaneously, you work through ten self-directed engineering sprints across ten distinct domains: electronics and embedded systems, materials science, mechanical systems, software and data, biological systems, and five more of your choosing. Each sprint is entirely self-directed. You find the resource, design the build, execute it, test it, fail on it, iterate, and document honestly. The output is not a product. It is proof that you can enter an unfamiliar technical domain and produce something that works.',
      },
      {
        title: 'Technology Gap Analysis',
        body: 'M03 answers the next question your research paper raises: if this problem is real and STEM-solvable, why has STEM not solved it yet? You conduct a forensic investigation of the engineering and patent landscape around your problem, classifying the gap as a material gap, a method gap, or an application gap. The output, a Technology Gap Analysis Report, is confidential. Its strategic intelligence value to your venture means it stays internal. What comes from it publicly is one sentence: your PoC Hypothesis Statement. The specific engineering claim your Proof of Concept must prove or disprove.',
      },
    ],
    produces:
      'You produce: A publication-quality research paper reviewed by an external academic. Ten engineering sprint logs. A confidential Technology Gap Analysis Report. A mentor-approved PoC Hypothesis Statement.',
  },
  {
    number: '02',
    title: 'Engineer · Months 7–12',
    lead: 'You arrive in Phase 2 with a hypothesis. This phase tests it with your hands.',
    subModules: [
      {
        title: 'Proof of Concept Development',
        body: 'You build the simplest version of your solution that could prove your hypothesis. You test it. You find what fails. You build again. Two full build-test-iterate cycles, each documented to technical file standard. At the end, an external technical panel reviews the build against the hypothesis, not a pitch, a technical review. Then you return to the community with your PoC. You observe how people actually interact with what you built versus how you expected them to. The gap between those two things becomes your next design brief.',
      },
      {
        title: 'Intellectual Property Strategy',
        body: 'Before your PoC becomes a product, you document it. You learn to read a patent, conduct a freedom-to-operate search, and file. You produce an IP Disclosure Document and file a provisional patent application at the Indian Patent Office. The acknowledgement number is your evidence.',
      },
    ],
    produces:
      'You produce: A working Proof of Concept with technical file, build records, test data, and community verification. An IP Disclosure Document. A provisional patent filed at the Indian Patent Office.',
  },
  {
    number: '03',
    title: 'Innovator · Months 13–18',
    lead: 'You arrive in Phase 3 with a working prototype and a filed patent. This phase turns it into a product.',
    subModules: [
      {
        title: 'Product Development and Scale',
        body: 'You build Version 2. More durable. More manufacturable. More adapted to real field conditions. You deploy it with real users, not a lab test, not a focus group. You observe how they actually use it versus how you designed it to be used. You measure what changes. You build a complete Bill of Materials with actual supplier quotations and calculate unit cost across production volumes.',
      },
      {
        title: 'Grant Writing and Advocacy',
        body: 'A functioning product with a filed patent and real user evidence is a grant application. You write one, to a real scheme, DST, BIRAC, Startup India Seed Fund, or equivalent, during this module. The acknowledgement number is your portfolio item. Simultaneously, you draft the complete patent specification.',
      },
    ],
    produces:
      'You produce: A user-tested MVP with adoptability evidence and unit cost model. A submitted grant application with acknowledgement number. A complete patent specification draft.',
  },
  {
    number: '04',
    title: 'Venture Founder · Months 19–24',
    lead: 'You arrive in Phase 4 with a product, a patent, a grant application, and two years of field evidence. This phase makes you a founder.',
    subModules: [
      {
        title: 'Venture Architecture',
        body: 'You choose a legal entity and justify it with specific legal and tax implications. You build a Business Model Canvas, every block populated with specific names, numbers, and real relationships. You design a go-to-market plan for your first 100 users: not a demographic category, specific people you can name from two years in the field. You present a Venture Architecture Document to an external entrepreneur or investor. Their written assessment is your gate.',
      },
      {
        title: 'Financial Modelling and Economics',
        body: 'You build a financial model from first principles. What does each component of your product cost per unit? What does fabrication add? Logistics? What is your unit cost at 10, 100, and 1,000 units? What does it cost to acquire one customer? What is their lifetime value? What is your three-year profit and loss? When do you break even? What is the single assumption whose failure would make the venture non-viable? An external finance professional reviews your model adversarially. Every objection must be answered or the assumption revised.',
      },
      {
        title: 'Communication and Brand Strategy',
        body: 'The last thing a REACT fellow builds is their voice. You learn to tell the same venture story to every audience, investor, community user, grant committee, institutional partner, without changing what the venture is. You write landing page copy, a cold investor email, a community user description, and an SDG-aligned impact brief. You build a ten-slide pitch deck. You rehearse Demo Day. Then you deliver it live, to a panel of external investors, industry leaders, and domain experts. Ten minutes. Five-minute Q&A. This is where the fellowship ends and the venture begins.',
      },
    ],
    produces:
      'You produce: A Venture Architecture Document reviewed by an external entrepreneur or investor. A three-year financial model stress-tested by an external finance professional. A full communication portfolio including pitch deck, brand brief, landing page copy, and impact brief. A registered entity with your name on it. Demo Day delivered to a live external panel.',
  },
]

const portfolio = [
  'Domain Intelligence Cards and field-evidenced problem shortlist',
  'Publication-quality research paper',
  'Technology Gap Analysis Report and PoC Hypothesis Statement',
  'Proof of Concept technical file and IP disclosure',
  'Provisional patent filed at the Indian Patent Office',
  'MVP technical file, user testing reports, and unit cost model',
  'Submitted grant application and complete patent specification',
  'Venture Architecture Document and entity registration initiated',
  'Three-year financial model and five-slide investor summary',
  'Communication portfolio and Demo Day delivered',
]

function PhaseBlock({ phase }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="border-t border-black/15 pt-14"
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[12rem_1fr]">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
            Phase {phase.number}
          </p>
          <p className="mt-3 font-serif text-[2.6rem] font-semibold leading-none text-ink">
            {phase.number}
          </p>
        </div>
        <div>
          <h2 className="font-serif text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold leading-tight text-ink">
            {phase.title}
          </h2>
          <p className="mt-5 font-serif-italic text-[1.1rem] leading-snug text-accent">
            {phase.lead}
          </p>

          {phase.paragraphs &&
            phase.paragraphs.map((p, i) => (
              <p
                key={i}
                className="mt-6 text-[16px] leading-[1.75] text-[#5b4d3f]"
              >
                {p}
              </p>
            ))}

          {phase.subModules &&
            phase.subModules.map((m) => (
              <div key={m.title} className="mt-8">
                <h3 className="font-serif text-[1.25rem] font-semibold leading-tight text-ink">
                  {m.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.75] text-[#5b4d3f]">
                  {m.body}
                </p>
              </div>
            ))}

          <p className="mt-8 border-l-[3px] border-accent bg-[#f1ece2] px-6 py-5 font-serif-italic text-[1.02rem] leading-[1.6] text-ink">
            {phase.produces}
          </p>
        </div>
      </div>
    </motion.section>
  )
}

export default function JourneyPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 pt-40 pb-24 lg:px-10">
        <header>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
            See the Full Journey
          </p>
          <h1 className="mt-5 font-serif text-[clamp(2.6rem,5.4vw,4.8rem)] font-semibold leading-[1.02] text-ink">
            Two years inside the build.
          </h1>
          <p className="mt-6 max-w-3xl text-[17px] leading-[1.8] text-[#5b4d3f]">
            Two years in REACT is not a curriculum. It is a build. You move
            through five distinct phases, each with a specific identity, a
            specific set of skills, and a specific output the world can see.
            What follows is exactly what happens inside each one.
          </p>
        </header>

        <div className="mt-16 space-y-14">
          {phases.map((phase) => (
            <PhaseBlock key={phase.number} phase={phase} />
          ))}
        </div>

        {/* Portfolio */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-24 border-t border-black/15 pt-14"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
            The 10 Portfolio Items
          </p>
          <h2 className="mt-5 font-serif text-[clamp(2.2rem,4vw,3.4rem)] font-semibold leading-tight text-ink">
            Every REACT fellow graduates with ten portfolio items.
          </h2>
          <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {portfolio.map((item, i) => (
              <li
                key={i}
                className="flex gap-4 border border-black/10 bg-white/60 px-5 py-4 text-[15px] leading-snug text-ink"
              >
                <span className="font-serif text-[1.4rem] font-semibold leading-none text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </motion.section>

        {/* Support */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-24 border-t border-black/15 pt-14"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
            Your Support Structure
          </p>
          <h2 className="mt-5 font-serif text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-tight text-ink">
            Six mentors. Fifteen STEM Innovation Circles.
          </h2>
          <p className="mt-6 max-w-3xl text-[16.5px] leading-[1.8] text-[#5b4d3f]">
            Every fellow works with six mentors across the fellowship: Faculty,
            Research, Field, Technical, Venture, and Innovation. Each assigned
            for a specific phase and a specific purpose.
          </p>
          <p className="mt-6 max-w-3xl text-[16.5px] leading-[1.8] text-[#5b4d3f]">
            Technical build support is available through fifteen STEM
            Innovation Circles spanning ten technology domains and five science
            domains. If your venture requires technical expertise you do not
            personally hold, you are paired with STEM students who build under
            your direction. You bring the domain knowledge. They bring the
            build capacity. The venture is yours.
          </p>
        </motion.section>

        {/* Credential */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-24 border-t border-black/15 pt-14"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
            Your Credential
          </p>
          <h2 className="mt-5 font-serif text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-tight text-ink">
            You graduate with two.
          </h2>
          <p className="mt-6 max-w-3xl text-[16.5px] leading-[1.8] text-[#5b4d3f]">
            Your host degree and a Diploma in Social Innovation from the Social
            Innovation Institute at Kumaraguru Institutions.
          </p>
        </motion.section>

        {/* CTAs */}
        <section className="mt-24 border-t border-black/15 pt-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              to="/apply"
              className="inline-flex min-h-14 items-center justify-center bg-accent px-9 py-4 text-[13px] font-extrabold uppercase tracking-[0.16em] text-white transition hover:bg-[#cf4f22]"
            >
              Apply to 2026 Batch
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-14 items-center justify-center border border-neutral-300 px-9 py-4 text-[13px] font-bold uppercase tracking-[0.16em] text-ink transition hover:border-neutral-500 hover:bg-white/60"
            >
              Talk to Our Team
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
