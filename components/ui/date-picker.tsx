"use client";

import * as React from "react";
import { subDays, format, differenceInDays } from "date-fns";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/ui/popover";
import Icon from "../ui-engineer/Icon";
import { DateSelectionList } from "./date-selection-list";

type DateSelection = Date | DateRange | undefined;

// Constants
const DATE_FORMAT = "LLL dd, y";
const INITIAL_DATE = {
   from: subDays(new Date(), 7),
   to: new Date(),
};

export function DatePicker({ className }: React.HTMLAttributes<HTMLDivElement>) {
   const [date, setDate] = React.useState<DateSelection>(INITIAL_DATE);
   const [dateSelections, setDateSelections] = React.useState<DateSelection[]>([]);

   const formatDate = (date: Date | undefined) => date ? format(date, DATE_FORMAT) : "";

   const formatDateDisplay = React.useCallback((selection: DateSelection): string => {
      if (!selection) return "";
      if (selection instanceof Date) return formatDate(selection);
      return selection.from && selection.to
         ? `${formatDate(selection.from)} - ${formatDate(selection.to)}`
         : formatDate(selection.from);
   }, []);

   const calculateTotalDays = React.useCallback((dateSelections: DateSelection[]): number => {
      return dateSelections.reduce((total, selection) => {
         if (!selection) return total;
         
         if (selection instanceof Date) return total + 1;
         
         if ('from' in selection && selection.from) {
            if (!selection.to) return total + 1;
            
            return format(selection.from, 'yyyy-MM-dd') === format(selection.to, 'yyyy-MM-dd')
               ? total + 1
               : total + Math.abs(differenceInDays(selection.to, selection.from)) + 1;
         }
         return total;
      }, 0);
   }, []);

   const handleAddToStack = React.useCallback(() => {
      if (!date) return;
      const dateRange = date instanceof Date 
         ? { from: date, to: date }
         : date;
      setDateSelections(prev => [...prev, dateRange]);
      setDate(undefined);
   }, [date]);

   const handleClear = React.useCallback(() => {
      setDate(undefined);
      setDateSelections([]);
   }, []);

   const handleRemoveSelection = React.useCallback((index: number) => {
      setDateSelections(prev => prev.filter((_, i) => i !== index));
   }, []);

   const totalDays = React.useMemo(() => 
      calculateTotalDays(dateSelections), [dateSelections, calculateTotalDays]);

   const triggerDisplayText = React.useMemo(() => {
      if (dateSelections.length === 0) {
         return date ? formatDateDisplay(date) : <span>Pick a Date</span>;
      }
      const firstSelection = formatDateDisplay(dateSelections[0]);
      return dateSelections.length > 1 
         ? <span>{firstSelection} ...</span>
         : <span>{firstSelection}</span>;
   }, [date, dateSelections, formatDateDisplay]);

   const calendarComponent = React.useMemo(() => (
      <Calendar
         initialFocus
         mode="range"
         defaultMonth={date instanceof Date ? date : date?.from}
         selected={date instanceof Date ? { from: date, to: date } : date as DateRange}
         onSelect={setDate}
         numberOfMonths={2}
      />
   ), [date]);

   return (
      <div className={cn("grid gap-2 w-fit", className)}>
         <Popover>
            <PopoverTrigger asChild>
               <Button
                  id="date"
                  variant="outline"
                  className={cn(
                     "justify-start text-left p-2",
                     !date && !dateSelections.length && "text-muted-foreground"
                  )}
               >
                  <Icon styles="two-tone" name="calendar-02-twotone-rounded" />
                  {triggerDisplayText}
               </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-3" align="center">
               {calendarComponent}
               <div className="flex gap-4 pt-2">
                  <div className="flex-1 min-w-[260px]">
                     <DateSelectionList
                        dateSelections={dateSelections}
                        onRemove={handleRemoveSelection}
                     />
                  </div>
                  <div className="flex flex-col gap-2 min-w-[200px]">
                     <div className="text-center p-2 bg-muted rounded-md text-sm font-medium">
                        Total Days • {totalDays}
                     </div>
                     <div className="flex items-center justify-end gap-3">
                        <Button
                           variant="outline"
                           onClick={handleClear}
                           className="w-20"
                        >
                           Clear
                        </Button>
                        <Button onClick={handleAddToStack}>Add to Stack</Button>
                     </div>
                  </div>
               </div>
            </PopoverContent>
         </Popover>
      </div>
   );
}
