"use client"

import { useState } from "react"
import GlitchBackground from "@/components/GlitchBackground"

export default function Portfolio() {
  const [showButtons, setShowButtons] = useState(true)
  // const [isLoading, setIsLoading] = useState(true)
  // const [currentLine, setCurrentLine] = useState(0)

  // const bootLines = [
  //   "[ OK ] Starting portfolio system...",
  //   "[ OK ] Loading creative assets...",
  //   "[ OK ] Initializing design modules...",
  //   "[ OK ] Mounting project gallery...",
  //   "[ OK ] Starting web services...",
  //   "[ OK ] Portfolio system ready",
  //   "",
  //   "Welcome to the creative space",
  // ]

  type PortfolioItem = {
    id: number
    title: string
    heightClass: string
    colorClass: string
    link: string
  }

  const portfolioItems: PortfolioItem[] = [
    {
      id: 0,
      title: "Encontra Tu Mascota",
      heightClass: "h-[5dvh]",
      colorClass: "bg-[#D66528]/75 hover:bg-[#FF8A65]/75",
      link: "https://encontratumascota.ar?ref=hub",
    },
    {
      id: 1,
      title: "Spotify Dashboard",
      heightClass: "h-[5dvh]",
      colorClass: "bg-[#1DB954]/75 hover:bg-[#248847]/75",
      link: "https://spotifydata.eugeniosm.com?ref=hub",
    },
    {
      id: 2,
      title: "Notes",
      heightClass: "h-[20dvh]",
      colorClass: "bg-[#ffc107]/75 hover:bg-[#bd9315]/75",
      link: "https://notes.eugeniosm.com?ref=hub",
    },
    {
      id: 3,
      title: "Spotify",
      heightClass: "h-[5dvh]",
      colorClass: "bg-[#1DB954]/75 hover:bg-[#248847]/75",
      link: "https://open.spotify.com/user/eugeniosaintemarie/playlists",
    },
    {
      id: 4,
      title: "Amigos de mierda",
      heightClass: "h-[20dvh]",
      colorClass: "bg-[#795548]/75 hover:bg-[#6D4C41]/75",
      link: "https://eugeniosm.com/amigos-de-mierda?ref=hub",
    },
    {
      id: 5,
      title: "Photos",
      heightClass: "h-[9.5dvh]",
      colorClass: "bg-[#833AB4]/75 hover:bg-[#673886]/75",
      link: "https://eugeniosm.com/photos?ref=hub",
    },
    {
      id: 6,
      title: "Pins",
      heightClass: "h-[9.5dvh]",
      colorClass: "bg-[#E60023]/75 hover:bg-[#a61229]/75",
      link: "https://es.pinterest.com/eugeniosaintemarie/",
    },
    {
      id: 7,
      title: "Set",
      heightClass: "h-[5dvh]",
      colorClass: "bg-[#248847]/75 hover:bg-[#25653b]/75",
      link: "https://musicset.vercel.app?ref=hub",
    },
    {
      id: 8,
      title: "Generala tracker",
      heightClass: "h-[9.5dvh]",
      colorClass: "bg-[#5D4037]/75 hover:bg-[#4E342E]/75",
      link: "https://generala-tracker.vercel.app?ref=hub",
    },
    {
      id: 9,
      title: "La Baza tracker",
      heightClass: "h-[9.5dvh]",
      colorClass: "bg-[#5D4037]/75 hover:bg-[#4E342E]/75",
      link: "https://baza-tracker.vercel.app?ref=hub",
    },
  ]

  // useEffect(() => {
  //   if (currentLine < bootLines.length) {
  //     const timer = setTimeout(
  //       () => {
  //         setCurrentLine(currentLine + 1)
  //       },
  //       currentLine === bootLines.length - 1 ? 1000 : 100,
  //     )
  //     return () => clearTimeout(timer)
  //   } else {
  //     const timer = setTimeout(() => {
  //       setIsLoading(false)
  //     }, 500)
  //     return () => clearTimeout(timer)
  //   }
  // }, [currentLine, bootLines.length])

  // if (isLoading) {
  //   return (
  //     <div className="min-h-screen bg-black text-green-400 font-mono p-4 flex flex-col justify-center">
  //       <div className="max-w-2xl mx-auto w-full">
  //         {bootLines.slice(0, currentLine).map((line, index) => (
  //           <div key={index} className="mb-1 text-sm">
  //             {line}
  //             {index === currentLine - 1 && <span className="animate-pulse">_</span>}
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div className="min-h-screen relative flex flex-col">
      <GlitchBackground />
      <main className="p-3 relative z-10 w-full flex-1 flex items-center justify-center">
        <div className="max-w-4xl mx-auto">
          {showButtons && (
            <div className="flex flex-col" style={{ gap: '1dvh' }}>
              {portfolioItems[0] && (
                <a
                  key={portfolioItems[0].id}
                  href={portfolioItems[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden rounded-lg transition-all duration-300 cursor-pointer flex items-center justify-center p-6 ${portfolioItems[0].heightClass} ${portfolioItems[0].colorClass}`}
                  style={{
                    animationDelay: `0ms`,
                    animation: "fadeInUp 0.6s ease-out forwards",
                  }}
                >
                  <div className="relative w-full flex items-center justify-center">
                    <h2 className="text-white text-lg font-bold text-center leading-tight group-hover:scale-105 transition-transform duration-300">
                      {portfolioItems[0].title}
                    </h2>
                  </div>
                </a>
              )}
              {portfolioItems[1] && (
                <a
                  key={portfolioItems[1].id}
                  href={portfolioItems[1].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden rounded-lg transition-all duration-300 cursor-pointer flex items-center justify-center p-6 ${portfolioItems[1].heightClass} ${portfolioItems[1].colorClass}`}
                  style={{
                    animationDelay: `100ms`,
                    animation: "fadeInUp 0.6s ease-out forwards",
                  }}
                >
                  <div className="relative w-full flex items-center justify-center">
                    <h2 className="text-white text-lg font-bold text-center leading-tight group-hover:scale-105 transition-transform duration-300">
                      {portfolioItems[1].title}
                    </h2>
                  </div>
                </a>
              )}
              <div className="columns-2" style={{ columnGap: '1dvh' }}>
                {portfolioItems.filter(item => item.id !== 0 && item.id !== 1).map((item, index) => (
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`break-inside-avoid group relative overflow-hidden rounded-lg transition-all duration-300 cursor-pointer flex items-center justify-center p-6 ${item.heightClass} ${item.colorClass}`}
                    style={{
                      animationDelay: `${(index + 1) * 100}ms`,
                      animation: "fadeInUp 0.6s ease-out forwards",
                      marginBottom: '1dvh',
                    }}
                  >
                    <div className="relative w-full flex items-center justify-center">
                      <h2 className="text-white text-lg font-bold text-center leading-tight group-hover:scale-105 transition-transform duration-300">
                        {item.title}
                      </h2>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <div className="w-full flex justify-center my-2.5 z-20">
        <button
          onClick={() => setShowButtons(!showButtons)}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 border border-white/20"
        >
          <i className={`fas ${showButtons ? 'fa-eye' : 'fa-eye-slash'} text-white text-xl`}></i>
        </button>
      </div>

      <footer className="w-full flex justify-center pb-2.5 z-10">
        <a
          href="https://eugeniosm.com?ref=hub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-white transition-colors duration-300 text-sm font-medium"
        >
          ∃ugenio © {new Date().getFullYear()}
        </a>
      </footer>
    </div>
  )
}
