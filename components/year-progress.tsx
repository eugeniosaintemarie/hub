"use client"
import { useEffect, useState } from "react"

export function YearProgress({ title, targetDate }: { title: string; targetDate: Date }) {
  const [progress, setProgress] = useState(0)
  const [percentage, setPercentage] = useState("0%")
  const [remainingDays, setRemainingDays] = useState(0);

  useEffect(() => {
    const calculateYearProgress = () => {
      const getArgentinaDate = () => {
        const now = new Date();
        return new Date(now.toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }));
      };
      
      const now = getArgentinaDate();
      const startOfYear = new Date(now.getFullYear(), 0, 1);
      const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59);
      
      const totalMilliseconds = endOfYear.getTime() - startOfYear.getTime();
      const elapsedMilliseconds = now.getTime() - startOfYear.getTime();
      
      let calculatedProgress = Math.floor((elapsedMilliseconds / totalMilliseconds) * 100);
      calculatedProgress = Math.max(0, Math.min(calculatedProgress, 100));
      setProgress(calculatedProgress);
      setPercentage(`${calculatedProgress}%`);
      
      const remainingDays = Math.max(0, Math.ceil((targetDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
      setRemainingDays(remainingDays);
    }

    calculateYearProgress()
    const interval = setInterval(calculateYearProgress, 60000)

    return () => clearInterval(interval)
  }, [targetDate]);

  return (
    <div className="bg-[#c0c0c0] border-2 border-[#ffffff] border-r-[#808080] border-b-[#808080] mb-2 w-64 mx-auto shadow-md relative">
      <div className="bg-[#000080] text-white px-1 py-0.5 text-xs grid grid-cols-[auto_1fr_auto] items-center mb-1 w-full">
        <span>{title}</span>
        <span className="text-center">{percentage}</span>
        <span className="text-xs cursor-pointer justify-self-end">✕</span>
      </div>
      <div className="px-2 pb-2">
        <div className="text-center mb-1 text-black font-sans text-[0.8rem]">{remainingDays} días restantes para el {targetDate.toLocaleDateString('es-AR', {day: 'numeric', month: 'numeric', year: 'numeric'})}</div>
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