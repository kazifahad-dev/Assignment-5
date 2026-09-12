import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechGrid from './components/TechGrid'
import Loader from './components/Loader'
import useTechnologies from './hooks/useTechnologies'
import useStack from './hooks/useStack'

function App() {
  const { technologies, isLoading, error } = useTechnologies()
  const { isInStack, addToStack } = useStack()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <section id="technologies" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mb-9">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-[32px]">Explore the Technologies</h2>
          <p className="mt-2 text-sm text-slate-500 sm:text-base">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {isLoading && <Loader />}
        {error && <p className="rounded-lg bg-red-50 p-4 text-sm text-red-600">Couldn't load technologies: {error}</p>}
        {!isLoading && !error && <TechGrid technologies={technologies} isInStack={isInStack} onAdd={addToStack} />}
      </section>
    </div>
  )
}

export default App