"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "../ui/button";
import Icon from "./Icon";
import { Input } from "../ui/input";

export default function CommitsPerDay() {
   const [value, setValue] = useState<number | null>(null);

   const increment = () => {
      setValue((prev) => (prev === null ? 1 : prev + 1));
   };

   const decrement = () => {
      setValue((prev) => (prev === null ? 0 : Math.max(0, prev - 1)));
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;

      if (inputValue === "") {
         setValue(null);
      } else {
         const newValue = Number.parseInt(inputValue);
         if (!isNaN(newValue) && newValue >= 0) {
            setValue(newValue);
         }
      }
   };

   return (
      <div className="flex items-center space-x-2">
         <Button
            variant={"outline"}
            className="p-2"
            onClick={decrement}
            aria-label="Decrease value"
         >
            <Icon styles="stroke" name="arrow-left-01-stroke-standard" />
         </Button>
         <Input
            className="w-30 text-center"
            value={value === null ? "" : value}
            onChange={handleChange}
            type="number"
            min={0}
            placeholder="100"
         />
         <Button
            variant={"outline"}
            className="p-2"
            onClick={increment}
            aria-label="Increase value"
         >
            <Icon styles="stroke" name="arrow-right-01-stroke-standard" />
         </Button>
      </div>
   );
}
