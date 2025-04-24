"use client"
import { useState } from "react"
import { FaFolder, FaFolderOpen } from "react-icons/fa"

interface MenuGroupProps {
  icon?: string
  title: string
  children: React.ReactNode
}

export function MenuGroup({ title, children }: MenuGroupProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-1">
      <div 
        className="flex items-center px-2 py-1 hover:bg-[#000080] hover:text-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-6 h-6 mr-2 flex items-center justify-center">
          {isOpen ? <FaFolderOpen className="text-black" /> : <FaFolder className="text-black" />}
        </div>
        <span>{title}</span>
        <span className="ml-auto">{isOpen ? "▼" : "▶"}</span>
      </div>
      
      {isOpen && (
        <div className="pl-4">
          {children}
        </div>
      )}
    </div>
  )
}