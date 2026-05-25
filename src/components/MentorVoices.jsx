import StaggerMentors from './StaggerMentors.jsx'

export default function MentorVoices() {
  return (
    <section
      id="mentors"
      className="relative z-10 flex min-h-screen flex-col justify-center overflow-hidden bg-canvas py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
            Mentor &amp; Authority Voices
          </p>
          <h2 className="mt-4 font-serif text-[clamp(1.9rem,3.8vw,3.2rem)] font-semibold leading-[1.05] text-ink">
            The people who shape every fellow in the cohort.
          </h2>
          <p className="mt-5 max-w-2xl text-[15.5px] leading-[1.7] text-[#5b4d3f]">
            Each fellow works with six mentors across the fellowship — faculty,
            research, field, technical, venture, and innovation — assigned to a
            specific phase and a specific purpose.
          </p>
        </div>
      </div>

      <div className="mt-10 lg:mt-12">
        <StaggerMentors />
      </div>
    </section>
  )
}
