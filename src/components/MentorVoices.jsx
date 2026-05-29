import { CircularTestimonials } from '@/components/ui/circular-testimonials'

// Mapped to the CircularTestimonials shape: { quote, name, designation, src }
const mentorTestimonials = [
  {
    quote:
      'The fellows arrive curious. They leave with evidence. That shift is what I look for in any future health leader.',
    name: 'Dr. Lakshmi Narayanan',
    designation: 'Director, Rural Health Systems · Community Health',
    src: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    quote:
      'Most students study the system. REACT fellows build inside it. The work is closer to industry than coursework.',
    name: 'Arjun Krishnan',
    designation: 'Founder, Civic Tech Labs · Civic Technology',
    src: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    quote:
      'A research paper signed by a fellow here is a paper that came from a community, not a library. That is rare and useful.',
    name: 'Prof. Indira Subramanian',
    designation: 'Chair, Public Policy Research · Policy & Governance',
    src: 'https://randomuser.me/api/portraits/women/76.jpg',
  },
  {
    quote:
      'When a fellow walks me through their venture, they already know the customer, the cost, and the field. That is the founder you want to back.',
    name: 'Rahul Menon',
    designation: 'Partner, AgriVenture Capital · Livelihood & Agri',
    src: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
  {
    quote:
      'I watched a team spend six months on one school. The product they shipped now serves four districts. That is what staying earns.',
    name: 'Dr. Anjali Pillai',
    designation: 'Field Mentor, Education Equity · Education',
    src: 'https://randomuser.me/api/portraits/women/29.jpg',
  },
  {
    quote:
      'Fellows leave knowing how to read a patent, file one, and protect what they have built. That is the gap REACT closes.',
    name: 'Vikram Iyer',
    designation: 'Patent Counsel & Innovation Mentor · IP & Engineering',
    src: 'https://randomuser.me/api/portraits/men/68.jpg',
  },
  {
    quote:
      'The fellows do not just hear stories. They sit in living rooms long enough to act on what they hear. That is the difference.',
    name: 'Meera Subramaniam',
    designation: 'Director, Women’s Enterprise Network · Women’s Livelihood',
    src: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
]

export default function MentorVoices() {
  return (
    <section
      id="mentors"
      className="relative z-10 flex min-h-[640px] flex-col justify-center overflow-hidden bg-canvas py-16 sm:min-h-screen lg:py-20"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
            Mentor &amp; Authority Voices
          </p>
          <h2 className="mt-4 font-serif text-[clamp(1.9rem,3.8vw,3.2rem)] font-semibold leading-[1.05] text-ink">
            The people who shape every fellow in the cohort.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15.5px] leading-[1.7] text-[#5b4d3f]">
            Each fellow works with six mentors across the fellowship — faculty,
            research, field, technical, venture, and innovation — assigned to a
            specific phase and a specific purpose.
          </p>
        </div>

        <div className="mt-12 flex w-full justify-center lg:mt-16">
          <CircularTestimonials
            testimonials={mentorTestimonials}
            autoplay
            colors={{
              name: '#0A0A0A',
              designation: '#5b4d3f',
              testimony: '#0A0A0A',
              arrowBackground: '#E25B2A',
              arrowForeground: '#FAF8F5',
              arrowHoverBackground: '#0A0A0A',
            }}
            fontSizes={{
              name: '28px',
              designation: '18px',
              quote: '20px',
            }}
          />
        </div>
      </div>
    </section>
  )
}
