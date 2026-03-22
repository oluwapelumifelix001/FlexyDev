import { useRef, useState, useEffect } from 'react'
import { ExternalLink, Github, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react'
import zoomdrive from '/ZoomDrive.png'
import Studyflow from '/studyflow.png'
import ammie from '/ammie.png'
import bims from '/bims2.png'
import weather from '/weather.png'
import technova from '/TechNova.png'
const projects = [
    {
    title: 'Tech Nova',
    description: 'TechNova is an AI-powered science and technology news platform that curates complex breakthroughs—from AI and robotics to space exploration—into digestible, personalized insights. It combines smart curation with an interactive assistant, "Nova," to help users stay informed without the information overload.',
    tags: ['React', 'Rest API', 'Tailwind CSS'],
    image: technova,
    github: 'https://github.com/oluwapelumifelix001/Tech-Nova.git',
    live: 'https://tech-nova-ashen-iota.vercel.app/',
    featured: true,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Zoomdrive Car rentals',
    description: 'A modern car rental platform that lets users browse, filter, and book vehicles seamlessly with transparent pricing and flexible dates.',
    tags: ['React', 'Node.js', 'MongoDB','Express', 'Tailwind CSS'],
    image: zoomdrive,
    github: 'https://github.com/oluwapelumifelix001/ZoomDrive',
    live: 'https://zoomdrive-frontend-awhy.vercel.app/',
    featured: true,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'StudyFlow',
    description: 'StudyFlow is a productivity web app designed to help students plan, stay organized, and stay connected while studying.Free Access to ai tools to enhance learning experience.',
    tags: ['Html', 'Css', 'Javascript', 'Bootstrap'],
    image: Studyflow,
    github: 'https://github.com/oluwapelumifelix001/StudyFlow',
    live: 'https://study-flow-omega.vercel.app/',
    featured: true,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Bims Luxe Scent',
    description: 'A luxury fragrance e-commerce platform built with React and Tailwind CSS. Features product filtering, cart functionality, and responsive design.',
    tags: ['React.js', 'framer motion', 'Tailwind', 'Vercel'],
    image: bims,
    github: 'https://github.com/oluwapelumifelix001/Bims-Luxe-Scent',
    live: 'https://bimscent.vercel.app/',
    featured: false,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Ammie Kripsy Crunch',
    description: 'Ammie Kripsy Crunch is a dynamic recipe app that offers personalized meal recommendations based on user preferences and dietary needs. Built with React and Tailwind CSS, it features a sleek UI and seamless navigation.',
    tags: ['React', 'Tailwind CSS', 'API Integration', 'Vercel'],
    image: ammie,
    github: 'https://github.com/oluwapelumifelix001/Ammie-Kripsy-Crunch',
    live: 'https://ammie-kripsy-crunch.vercel.app/',
    featured: false,
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Flexy Weather App',
    description: 'A sleek weather application that provides real-time forecasts and current conditions for any location. Built with React and Tailwind CSS, it features a clean UI and seamless API integration for accurate weather data.',
    tags: ['Html', 'Css', 'Javascript', 'Api'],
    image: weather,
    github: 'https://github.com/oluwapelumifelix001/Weather-Project.git',
    live: 'https://oluwapelumifelix001.github.io/Weather-Project/',
    featured: false,
    color: 'from-pink-500 to-rose-500',
  },

]

export function Projects() {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)

  const checkScroll = () => {
    const container = scrollRef.current
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0)
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      )
      
      const cardWidth = container.firstChild?.offsetWidth || 0
      const gap = 24
      const newIndex = Math.round(container.scrollLeft / (cardWidth + gap))
      setActiveIndex(Math.min(newIndex, projects.length - 1))
    }
  }

  useEffect(() => {
    const container = scrollRef.current
    if (container) {
      container.addEventListener('scroll', checkScroll)
      checkScroll()
      return () => container.removeEventListener('scroll', checkScroll)
    }
  }, [])

  const scroll = (direction) => {
    const container = scrollRef.current
    if (container) {
      const cardWidth = container.firstChild?.offsetWidth || 400
      const gap = 24
      const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap)
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const scrollToCard = (index) => {
    const container = scrollRef.current
    if (container) {
      const cardWidth = container.firstChild?.offsetWidth || 400
      const gap = 24
      container.scrollTo({ left: index * (cardWidth + gap), behavior: 'smooth' })
    }
  }

  return (
    <section id="projects" className="py-20 md:py-32 bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500">Work</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-xl">
              A collection of projects that showcase my expertise in building scalable, user-centric applications.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full border transition-all ${
                canScrollLeft
                  ? 'border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-zinc-100 dark:hover:bg-zinc-900'
                  : 'border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-600 cursor-not-allowed'
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-3 rounded-full border transition-all ${
                canScrollRight
                  ? 'border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-zinc-100 dark:hover:bg-zinc-900'
                  : 'border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-600 cursor-not-allowed'
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 px-4 sm:px-6 lg:px-8"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {/* Spacer for centering first card on large screens */}
        <div className="hidden lg:block flex-shrink-0 w-[calc((100vw-1280px)/2)]" />

        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group relative flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] xl:w-[400px] snap-center"
          >
            <div className="relative h-full bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2">
              
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-900 via-white/20 dark:via-zinc-900/20 to-transparent" />
                
                {/* Featured Badge */}
                {project.featured && (
                  <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.color} text-white`}>
                    Featured
                  </span>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-zinc-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/90 dark:bg-zinc-900/80 rounded-full text-zinc-900 dark:text-white hover:bg-white dark:hover:bg-white hover:text-zinc-900 transition-all hover:scale-110"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/90 dark:bg-zinc-900/80 rounded-full text-zinc-900 dark:text-white hover:bg-white dark:hover:bg-white hover:text-zinc-900 transition-all hover:scale-110"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-400 rounded-md border border-zinc-200 dark:border-zinc-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors group/link"
                  >
                    Live Demo
                    <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`} />
            </div>
          </article>
        ))}

        {/* Spacer for centering last card on large screens */}
        <div className="hidden lg:block flex-shrink-0 w-[calc((100vw-1280px)/2)]" />
      </div>

      {/* Progress Indicators */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex items-center justify-center gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'w-8 bg-cyan-500'
                  : 'w-2 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* View All Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
        <a
          href="https://github.com/oluwapelumifelix001?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors group"
        >
          View all projects on GitHub
          <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>

      {/* Hide scrollbar CSS */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}