"use client"

import React, { useState } from "react"
import { Menu } from "@/components/menu"
import { YearProgress } from "@/components/year-progress"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-[#018281]">
      <div className="w-full min-h-screen flex flex-col justify-start">
        <div className="flex-1 flex items-center justify-center">
          <YearProgress />
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
              <span className="text-xl mr-1">🦋</span>
              <span className="font-bold">Start</span>
            </button>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
