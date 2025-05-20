"use client";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import CommitsPerDay from "@/components/ui-engineer/commits-per-day";
import ContributionGraph from "@/components/ui-engineer/contribution-graph";
import { Button } from "@/components/ui/button";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { DatePicker } from "@/components/ui/date-picker";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";

export default function Home() {
   const [currentTab, setCurrentTab] = useState("calendar");
   return (
      <div className="relative min-h-screen">
         <div className="relative z-10 flex items-center justify-center min-h-screen">
            <div className="flex flex-col items-center justify-center">
               <div className="mb-9 max-w-7xl mx-auto w-full pt-20 md:pt-0 text-center">
                  <h1 className="h-40 text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-900 bg-opacity-50">
                     Wellcome !
                     <GradualSpacing
                        className="font-display text-center text-5xl font-bold -tracking-widest text-neutral-900 md:text-7xl md:leading-[5rem]"
                        text="CG-Editor"
                     />
                     <br />
                  </h1>
                  <p className="font-normal text-base text-neutral-700 max-w-3xl mx-auto">
                     This Contribution Graph Editor, built with NextJS, provides
                     an intuitive interface with auto-commit functionality.
                     Remember checkout the Github Contribution Graph to make
                     sure you choose the true date to make commit changes.
                  </p>
               </div>
               <Tabs defaultValue={currentTab} onValueChange={setCurrentTab}>
                  <div className="flex justify-center">
                     <TabsList className="bg-primary/15 border border-primary/20">
                        <TabsTrigger value="calendar" className="text-primary">
                           Calendar
                        </TabsTrigger>
                        <TabsTrigger value="graph" className="text-primary">
                           Graph
                        </TabsTrigger>
                     </TabsList>
                  </div>

                  <TabsContent value="calendar" className="flex justify-center">
                     <Card className="w-xl">
                        <CardHeader>
                           <CardTitle className="text-xl">CALENDAR</CardTitle>
                           <CardDescription>
                              Make changes to your account here. Click save when
                              you&apos;re done.
                           </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-5">
                           <div className="space-y-2 flex justify-between">
                              <div className="space-y-2">
                                 <Label>Stack Dates</Label>
                                 <DatePicker />
                              </div>
                              <div className="space-y-2">
                                 <Label>Commits Per Day</Label>
                                 <CommitsPerDay/>
                              </div>
                           </div>
                        </CardContent>
                        <CardFooter className="align justify-between">
                           <Button
                              variant="outline"
                              className="w-2/5"
                              type="button"
                           >
                              Clear
                           </Button>
                           <Button className="w-2/5" type="submit">
                              Commit Changes
                           </Button>
                        </CardFooter>
                     </Card>
                  </TabsContent>

                  <TabsContent value="graph" className="flex justify-center">
                     <ContributionGraph />
                  </TabsContent>
               </Tabs>
            </div>
         </div>
      </div>
   );
}
