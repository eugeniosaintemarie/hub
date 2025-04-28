"use client"
import { useEffect, useState } from "react"

export function YearProgress() {
  const [progress, setProgress] = useState(0)
  const [percentage, setPercentage] = useState("0%")
  const [endOfYear, setEndOfYear] = useState<Date>(new Date(new Date().getFullYear() + 1, 0, 0));
  const [remainingDays, setRemainingDays] = useState(0);

  useEffect(() => {
    const calculateYearProgress = () => {
      const now = new Date()
      const startOfYear = new Date(now.getFullYear(), 0, 1)
      const newEndOfYear = new Date(now.getFullYear() + 1, 0, 0);
      setEndOfYear(newEndOfYear);

      const totalMilliseconds = endOfYear.getTime() - startOfYear.getTime()
      const elapsedMilliseconds = now.getTime() - startOfYear.getTime()

      const calculatedProgress = Math.floor((elapsedMilliseconds / totalMilliseconds) * 100)
      setProgress(calculatedProgress)
      setPercentage(`${calculatedProgress}%`)

      const remainingDays = Math.ceil((endOfYear.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
      setRemainingDays(remainingDays)
    }

    calculateYearProgress()
    const interval = setInterval(calculateYearProgress, 3600000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-[#c0c0c0] border-2 border-[#ffffff] border-r-[#808080] border-b-[#808080] mb-2 w-64 mx-auto shadow-md relative">
      <div className="bg-[#000080] text-white px-1 py-0.5 text-xs flex justify-between items-center mb-1">
        <span>yearProgress.exe {percentage}</span>
        <span className="text-xs cursor-pointer">✕</span>
      </div>
      <div className="px-2 pb-2">
        <div className="text-center mb-1 text-black font-sans text-sm">{remainingDays} días restantes para el {endOfYear.toLocaleDateString()}</div>
        <div className="border border-[#808080] bg-white h-5 relative overflow-hidden">
          <div className="flex h-5 items-center pl-[2px]">
            {Array.from({ length: Math.ceil(progress / 5) }).map((_, index) => (
              <div
                key={index}
                className="h-4 w-[10px] bg-[#0000ff] mr-[2px]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}