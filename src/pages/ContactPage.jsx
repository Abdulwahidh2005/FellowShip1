import { useState } from 'react'
import { motion } from 'motion/react'
import Navbar from '../components/Navbar.jsx'

function Field({ label, type = 'text', name, required, placeholder }) {
  return (
    <label className="flex flex-col gap-2 text-[13px] font-semibold uppercase tracking-[0.16em] text-neutral-600">
      <span>
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="rounded-none border border-black/15 bg-white px-4 py-3 text-[15px] font-normal normal-case tracking-normal text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
      />
    </label>
  )
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pt-40 pb-24 lg:px-10">
        <header>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
            Talk to Our Team
          </p>
          <h1 className="mt-5 font-serif text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[1.02] text-ink">
            Ask us anything.
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-neutral-600">
            Share your details below. One of our team will reach out within 24
            hours to answer everything you want to know.
          </p>
        </header>

        {submitted ? (
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mt-14 border-l-[3px] border-accent bg-[#f1ece2] px-7 py-9 sm:px-9 sm:py-12"
          >
            <p className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] font-semibold leading-tight text-ink">
              You are all set. Expect to hear from our team within 24 hours.
            </p>
            <p className="mt-6 font-serif-italic text-[1.05rem] leading-[1.65] text-[#5b4d3f]">
              Most questions about REACT are best answered in a single
              conversation. We will make sure yours is one of them.
            </p>
          </motion.section>
        ) : (
          <form
            className="mt-14"
            onSubmit={(e) => {
              e.preventDefault()
              setSubmitted(true)
            }}
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Full Name" name="fullName" required />
              <Field
                label="Email Address"
                type="email"
                name="email"
                required
              />
              <Field
                label="Phone Number (WhatsApp)"
                type="tel"
                name="whatsapp"
                required
              />
              <Field label="Phone Number" type="tel" name="phone" />
            </div>

            <label className="mt-6 flex flex-col gap-2 text-[13px] font-semibold uppercase tracking-[0.16em] text-neutral-600">
              <span>
                What would you like to know?{' '}
                <span className="font-normal normal-case tracking-normal text-neutral-500">
                  (optional — helps us prepare for the conversation)
                </span>
              </span>
              <textarea
                name="question"
                rows={5}
                className="rounded-none border border-black/15 bg-white px-4 py-3 text-[15px] font-normal normal-case tracking-normal text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
              />
            </label>

            <div className="mt-8">
              <button
                type="submit"
                className="inline-flex min-h-14 items-center justify-center bg-accent px-12 py-4 text-[13px] font-extrabold uppercase tracking-[0.16em] text-white transition hover:bg-[#cf4f22]"
              >
                Send
              </button>
            </div>
          </form>
        )}
      </main>
    </>
  )
}
