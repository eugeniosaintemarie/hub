"use client"

import { useState } from "react"

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
  //   "[ OK ] Portfolio system ready.",
  //   "",
  //   "Welcome to the creative space.",
  // ]

  const portfolioItems = [
    {
      id: 1,
      title: "Notes",
      category: "",
      heightClass: "h-[30vh]",
      colorClass: "bg-[#ffc107]/75 hover:bg-[#bd9315]/75",
      link: "https://eugeniosaintemarie.github.io/notes/?ref=hub",
    },
    {
      id: 2,
      title: "Spotify",
      category: "",
      heightClass: "h-[10vh]",
      colorClass: "bg-[#1DB954]/75 hover:bg-[#248847]/75",
      link: "https://open.spotify.com/user/eugeniosaintemarie/playlists",
    },
    {
      id: 3,
      title: "Set",
      category: "",
      heightClass: "h-[10vh]",
      colorClass: "bg-[#248847]/75 hover:bg-[#25653b]/75",
      link: "https://eugenioset.vercel.app/?ref=hub",
    },
    {
      id: 4,
      title: "Amigos de mierda",
      category: "",
      heightClass: "h-[19vh]",
      colorClass: "bg-[#795548]/75 hover:bg-[#6D4C41]/75",
      link: "https://eugeniosaintemarie.github.io/amigos-de-mierda/?ref=hub",
    },
    {
      id: 5,
      title: "Photos",
      category: "",
      heightClass: "h-[25.5vh]",
      colorClass: "bg-[#833AB4]/75 hover:bg-[#673886]/75",
      link: "https://eugeniosaintemarie.github.io/photos/?ref=hub",
    },
    {
      id: 7,
      title: "Pins",
      category: "",
      heightClass: "h-[25.5vh]",
      colorClass: "bg-[#E60023]/75 hover:bg-[#a61229]/75",
      link: "https://es.pinterest.com/eugeniosaintemarie/",
    },
    {
      id: 8,
      title: "Generala tracker",
      category: "",
      heightClass: "h-[9vh]",
      colorClass: "bg-[#5D4037]/75 hover:bg-[#4E342E]/75",
      link: "https://generala-tracker.vercel.app/?ref=hub",
    },
    {
      id: 9,
      title: "La Baza tracker",
      category: "",
      heightClass: "h-[9vh]",
      colorClass: "bg-[#5D4037]/75 hover:bg-[#4E342E]/75",
      link: "https://baza-tracker.vercel.app/?ref=hub",
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
      <main className="p-3 relative z-10 w-full flex-1 flex items-center justify-center">
        <div className="max-w-4xl mx-auto">
          {showButtons && (
            <div className="columns-2 gap-3 space-y-3">
              {portfolioItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`break-inside-avoid mb-3 group relative overflow-hidden rounded-lg transition-all duration-300 cursor-pointer flex items-center justify-center p-6 ${item.heightClass} ${item.colorClass}`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: "fadeInUp 0.6s ease-out forwards",
                  }}
                  onClick={() => {
                    if (item.link) {
                      window.open(item.link, "_blank")
                    }
                  }}
                >
                  <div className="relative w-full flex items-center justify-center">
                    <h2 className="text-white text-lg font-bold text-center leading-tight group-hover:scale-105 transition-transform duration-300">
                      {item.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="w-full flex justify-center pb-20 z-10">
        <a
          href="https://eugeniosaintemarie.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-white transition-colors duration-300 text-sm font-medium"
        >
          ∃ugenio © {new Date().getFullYear()}
        </a>
      </footer>
      
      {/* Eye icon to toggle buttons visibility */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={() => setShowButtons(!showButtons)}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 border border-white/20"
        >
          <i className={`fas ${showButtons ? 'fa-eye' : 'fa-eye-slash'} text-white text-xl`}></i>
        </button>
      </div>
    </div>
  )
}
