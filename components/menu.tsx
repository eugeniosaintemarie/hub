"use client"
import { MenuItem } from "@/components/menu-item"
import { MenuGroup, MenuProvider } from "@/components/menu-group"
import { YearProgress } from "@/components/year-progress"

export function Menu() {
  return (
    <MenuProvider>
      <div className="bg-[#c0c0c0] border-2 border-[#ffffff] border-r-[#808080] border-b-[#808080] shadow-lg w-fit">
        <div className="border-r-2 border-[#808080] w-8 h-full absolute left-0 top-0 bg-[#818181] flex flex-col items-center pt-2">
          <span
            className="text-white font-bold text-lg writing-mode-vertical transform rotate-180"
            style={{ writingMode: "vertical-rl" }}
          >
            ∃ugenio hub
          </span>
        </div>

        <div className="pl-10 py-2 whitespace-nowrap w-fit">




          <MenuGroup title="Tools">
            <MenuItem icon="coffee" text="Coffeedoro" href="https://coffee-doro.vercel.app/?ref=hub" />
            <MenuItem icon="stopwatch" text="Pomodoro" href="https://pomodoro-esm.netlify.app/#/" />
            <MenuItem
              icon="message"
              text="Number2WhatsApp"
              href="https://eugeniosaintemarie.github.io/whatsapp-chat?ref=hub"
            />
          </MenuGroup>

          <MenuGroup title="Games">
            <MenuItem
              icon="skull"
              text="Amigos de mierda"
              href="https://eugeniosaintemarie.github.io/amigos-de-mierda?ref=hub"
            />
            <MenuItem icon="dice" text="Generala tracker" href="https://generala-tracker.vercel.app?ref=hub" />
            <MenuItem icon="trophy" text="Baza tracker" href="https://baza-tracker.vercel.app?ref=hub" />
          </MenuGroup>

          <MenuItem icon="notes" text="Notes" href="https://eugeniosaintemarie.github.io/notes?ref=hub" />
          <MenuItem icon="quote" text="Quotes" href="https://eugeniosaintemarie.github.io/quotes?ref=hub" />
          <MenuItem icon="camera" text="Photos" href="https://eugeniosaintemarie.github.io/photos?ref=hub" />
          <MenuItem icon="pinterest" text="Pinterest" href="https://www.pinterest.es/eugeniosaintemarie" />
          <MenuItem icon="music" text="Spotify" href="https://open.spotify.com/user/eugeniosaintemarie/playlists" />

          <div className="h-[1px] bg-[#808080] my-1 mx-2"></div>

          { /*
      <MenuItem icon="portfolio" text="Portfolio" href="https://eugeniosaintemarie.github.io/portfolio?ref=hub" />
      */ }

          <MenuItem icon="shutdown" text="Shut Down" onClick={() => window.close()} />



        </div>
      </div>
    </MenuProvider>
  )
}
