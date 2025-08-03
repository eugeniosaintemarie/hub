"use client"

export default function Portfolio() {
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
      colorClass: "bg-[#ffc107] hover:bg-[#bd9315]",
      link: "https://eugeniosaintemarie.github.io/notes/?ref=hub",
    },
      {
      id: 2,
      title: "Spotify",
      category: "",
      heightClass: "h-[10vh]",
      colorClass: "bg-[#1DB954] hover:bg-[#248847]",
      link: "https://open.spotify.com/user/eugeniosaintemarie/playlists",
    },
    {
      id: 3,
      title: "Set",
      category: "",
      heightClass: "h-[10vh]",
      colorClass: "bg-[#248847] hover:bg-[#25653b]",
      link: "https://eugenioset.vercel.app/?ref=hub",
    },
    {
      id: 4,
      title: "Photos",
      category: "",
      heightClass: "h-[25.5vh]",
      colorClass: "bg-[#833AB4] hover:bg-[#673886]",
      link: "https://eugeniosaintemarie.github.io/photos/?ref=hub",
    },
    {
      id: 5,
      title: "Pins",
      category: "",
      heightClass: "h-[25.5vh]",
      colorClass: "bg-[#E60023] hover:bg-[#a61229]",
      link: "https://es.pinterest.com/eugeniosaintemarie/",
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
    <div className="min-h-screen bg-[#0C0C0C]">
      {/* Masonry Grid */}
      <main className="p-3">
        <div className="max-w-4xl mx-auto">
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
        </div>
      </main>

      {/* Floating contact button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-white text-gray-900 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
