"use client"
import { useState, useRef, useEffect, createContext, useContext } from "react"
import { FaFolder, FaFolderOpen } from "react-icons/fa"

const MenuContext = createContext<{
  openMenuId: string | null;
  setOpenMenuId: (id: string | null) => void;
}>({ openMenuId: null, setOpenMenuId: () => { } });

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  return (
    <MenuContext.Provider value={{ openMenuId, setOpenMenuId }}>
      {children}
    </MenuContext.Provider>
  );
}

interface MenuGroupProps {
  icon?: string
  title: string
  children: React.ReactNode
  id?: string
}

export function MenuGroup({ title, children, id = title }: MenuGroupProps) {
  const { openMenuId, setOpenMenuId } = useContext(MenuContext);
  const isOpen = openMenuId === id;
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    if (isOpen) {
      setOpenMenuId(null);
    } else {
      setOpenMenuId(id);
    }
  };

  return (
    <div className="mb-1 relative" ref={menuRef}>
      <div
        className="flex items-center px-2 py-1 pr-2 hover:bg-[#000080] hover:text-white cursor-pointer"
        onClick={toggleMenu}
      >
        <div className="w-6 h-6 mr-2 flex items-center justify-center">
          {isOpen ? <FaFolderOpen className="text-black" /> : <FaFolder className="text-black" />}
        </div>
        <span>{title}</span>
        {!isOpen {/*&& <span className="ml-3">&gt;</span>*/}}
      </div>

      {isOpen && (
        <div className="absolute left-full top-0 bg-[#c0c0c0] border-2 border-[#ffffff] border-r-[#808080] border-b-[#808080] z-10 whitespace-nowrap">
          {children}
        </div>
      )}
    </div>
  )
}