"use client"

import { format } from "date-fns"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePicker({ date, setDate }) {
  const selectedDate = date ?? new Date()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="cursor-pointer justify-between text-left font-normal  bg-transparent border border-white/20 backdrop-blur-xl text-white text-xs sm:text-sm"
        >
          <span>{format(selectedDate, "dd MMM")}</span>
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={(selectedDate) => {
            if (selectedDate) {
              setDate(selectedDate)
            }
          }}
          defaultMonth={selectedDate}
        />
      </PopoverContent>
    </Popover>
  )
}
