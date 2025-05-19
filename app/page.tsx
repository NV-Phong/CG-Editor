"use client";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import { DatePicker } from "@/components/ui/date-picker";
import React from "react";

export default function Home() {
   return (
      <div className="relative min-h-screen">
         <div className="relative z-10 flex items-center justify-center min-h-screen">
            <div className="flex flex-col items-center justify-center">
               <div className="mb-9 max-w-7xl mx-auto w-full pt-20 md:pt-0 text-center">
                  <h1 className="h-40 text-xl md:text-3xl font-bold text-neutral-600">
                     Wellcome !
                     <GradualSpacing
                        className="font-display text-center text-5xl font-bold -tracking-widest text-neutral-900 md:text-7xl md:leading-[5rem]"
                        text="CG-Editor"
                     />
                     <br />
                  </h1>
                  <p className="font-normal text-base text-neutral-700 max-w-3xl mx-auto">
                     This Contribution Graph Editor, built with NextJS, provides
                     an intuitive interface with auto-commit functionality. Remember checkout the Github Contribution 
                     Graph to make sure you choose the true date to make commit changes.
                  </p>
               </div>
               <DatePicker />
            </div>
         </div>
      </div>
   );
}
