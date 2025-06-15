"use client"
import {
  FaCoffee,
  FaStopwatch,
  FaSkull,
  FaDice,
  FaTrophy,
  FaCommentAlt,
  FaStickyNote,
  FaQuoteRight,
  FaCamera,
  FaThumbtack,
  FaMusic,
  FaBriefcase,
  FaCompactDisc,
} from "react-icons/fa"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface MenuItemProps {
  icon: string
  text: string
  hasSubmenu?: boolean
  onClick?: () => void
  href?: string
}

export function MenuItem({ icon, text, hasSubmenu = false, onClick, href }: MenuItemProps) {
  const handleClick = () => {
    if (href) {
      window.open(href, "_blank")
    } else if (onClick) {
      onClick()
    }
  }

  const getIcon = () => {
    switch (icon) {
      case "coffee":
        return <FaCoffee className="text-black" />
      case "stopwatch":
        return <FaStopwatch className="text-black" />
      case "skull":
        return <FaSkull className="text-black" />
      case "dice":
        return <FaDice className="text-black" />
      case "trophy":
        return <FaTrophy className="text-black" />
      case "message":
        return <FaCommentAlt className="text-black" />
      case "notes":
        return <FaStickyNote className="text-black" />
      case "quotes":
        return <FaQuoteRight className="text-black" />
      case "camera":
        return <FaCamera className="text-black" />
      case "pinterest":
        return <FaThumbtack className="text-black" />
      case "spotify":
        return <FaMusic className="text-black" />
      case "set":
        return <FaCompactDisc className="text-black" />
      default:
        return <FaBriefcase className="text-black" />
    }
  }

  return (
    <div
      className="flex items-center px-2 py-1 hover:bg-[#000080] hover:text-white cursor-pointer pr-2"
      onClick={handleClick}
    >
      <div className="w-6 h-6 mr-2 flex items-center justify-center">{getIcon()}</div>
      <span>{text}</span>
      {hasSubmenu && <span className="ml-auto">{">"}</span>}
    </div>
  )
}
