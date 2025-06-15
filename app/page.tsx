"use client"

import React, { useState, useEffect } from "react"
import { Menu } from "@/components/menu"
import dynamic from 'next/dynamic';
import { YearProgress } from "@/components/year-progress";
const DateProgress = dynamic(() => import('@/components/date-progress').then(mod => mod.DateProgress), { ssr: false })

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()

    window.addEventListener('resize', checkIfMobile)

    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-between" style={{ backgroundImage: "url('/vintage-computer-bg.jpg')", backgroundPosition: isMobile ? "left center" : "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
        <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>
        <div className="w-full min-h-screen flex flex-col justify-start relative z-10">
          <div className="flex-1 flex items-center justify-center pt-4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center w-full">
              <YearProgress
                title="year_progress"
                targetDate={new Date(2025, 11, 31)}
              />
              {/* <DateProgress
                title="Feos.exe"
                targetDate={new Date(2025, 5, 7)}
              /> */}
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <div className="relative w-full">
              {isMenuOpen && (
                <div className="absolute bottom-full left-0 w-[75%] max-w-[320px]">
                  <Menu />
                </div>
              )}
              <div className="w-full h-10 bg-[#c0c0c0] border-t-2 border-[#ffffff] flex items-center justify-between px-1">
                <button
                  onClick={toggleMenu}
                  className="h-8 px-2 flex items-center bg-[#c0c0c0] border-[1px] border-[#ffffff] border-r-[#808080] border-b-[#808080] active:border-[#808080] active:border-r-[#ffffff] active:border-b-[#ffffff] focus:outline-none"
                >
                  <span className="text-xl mr-1">   </span>
                  <i className="fa-solid fa-box"></i>
                  <span className="text-xl mr-1">   </span>
                </button>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
