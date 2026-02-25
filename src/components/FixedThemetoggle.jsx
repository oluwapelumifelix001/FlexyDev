import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from './Themeprovider'

export function FixedThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setMounted(true)

        // Show toggle after scrolling down a bit
        const handleScroll = () => {
            setIsVisible(window.scrollY > 200)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (!mounted) return null

    return (
        <div
            className={`fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'
                }`}
        >
            <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="group relative p-3 rounded-full bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 shadow-lg shadow-zinc-200/50 dark:shadow-zinc-900/50 hover:shadow-xl hover:shadow-cyan-500/20 transition-all hover:scale-110"
                aria-label="Toggle theme"
            >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-md transition-opacity" />

                {/* Icon with rotation animation */}
                <div className="relative">
                    {theme === 'dark' ? (
                        <Sun size={20} className="animate-[spin_3s_linear_infinite]" />
                    ) : (
                        <Moon size={20} className="animate-[pulse_2s_ease-in-out_infinite]" />
                    )}
                </div>

                {/* Tooltip */}
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-zinc-800 dark:bg-zinc-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {theme === 'dark' ? 'Light mode' : 'Dark mode'}
                </span>
            </button>
        </div>
    )
}