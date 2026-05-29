import Stack from './Stack.jsx'
import TestimonialCard from './TestimonialCard.jsx'
import { testimonials } from '../data/testimonials.js'

export default function TestimonialStack() {
  const cards = testimonials.map((t) => <TestimonialCard data={t} />)

  return (
    <div className="relative w-full max-w-[500px] overflow-hidden">
      {/* Crosshair guide lines framing the stack */}
      <div
        className="pointer-events-none absolute -inset-6 z-0 sm:-inset-10"
        aria-hidden="true"
      >
        <span className="absolute left-0 right-0 top-1/2 h-px bg-neutral-300/70" />
        <span className="absolute bottom-0 left-1/2 top-0 w-px bg-neutral-300/70" />
        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-300/80 bg-canvas" />
      </div>

      {/* The animated Stack */}
      <div
        className="relative z-10"
        style={{
          width: 'min(500px, 100%)',
          height: 'clamp(360px, 80vw, 380px)',
        }}
      >
        <Stack
          cards={cards}
          randomRotation
          sensitivity={150}
          sendToBackOnClick
          autoplay
          autoplayDelay={2600}
          pauseOnHover
          animationConfig={{ stiffness: 240, damping: 22 }}
        />
      </div>
    </div>
  )
}
