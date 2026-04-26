import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

function loading() {
  return (
    <div className="flex w-full max-w-3xl flex-col gap-4 px-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div className="flex flex-col gap-3 w-full sm:flex-row" key={index}>
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 w-full sm:w-20" />
          <Skeleton className="h-10 w-full sm:w-20" />
          <Skeleton className="h-10 w-full sm:w-20" />
        </div>
      ))}
    </div>
  )
}

export default loading
