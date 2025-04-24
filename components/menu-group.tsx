"use client"
import { useState, useRef } from "react"
import { FaFolder, FaFolderOpen } from "react-icons/fa"

interface MenuGroupProps {
  icon?: string
  title: string
  children: React.ReactNode
}

export function MenuGroup({ title, children }: MenuGroupProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  return (
    <div className="mb-1 relative" ref={menuRef}>
      <div 
        className="flex items-center px-2 py-1 hover:bg-[#000080] hover:text-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-6 h-6 mr-2 flex items-center justify-center">
          {isOpen ? <FaFolderOpen className="text-black" /> : <FaFolder className="text-black" />}
        </div>
        <span>{title}</span>
        <span className="ml-auto">▶</span>
      </div>
      
      {isOpen && (
        <div className="absolute left-full top-0 bg-[#c0c0c0] border-2 border-[#ffffff] border-r-[#808080] border-b-[#808080] min-w-[150px] z-10">
          {children}
        </div>
      )}
    </div>
  )
}