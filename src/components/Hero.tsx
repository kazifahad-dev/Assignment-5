import bannerStack from '../assets/banner-stack.png'

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-4 pb-10 pt-14 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-[60px]">
            Build Your Ideal
            <br />
            <span className="text-gradient-brand">Development Stack</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Explore frontend, backend, database, and tooling options, compare them side by
            side, and put together the stack that fits your next project.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#technologies" className="inline-flex items-center justify-center rounded-lg bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90">
              Explore Technologies
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-normal text-gray-700 transition-colors hover:bg-gray-50">
              Learn More
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center lg:col-span-5">
          <img src={bannerStack} alt="Isometric illustration of a layered development stack" className="w-full max-w-87.5" />
        </div>
      </div>
    </section>
  )
}