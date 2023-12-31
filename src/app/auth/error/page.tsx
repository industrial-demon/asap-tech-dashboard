
'use client'

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { AuthForm } from "~/features/auth/auth-form";
export default function Auth({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const a = useSearchParams()
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
  console.log(a.get("error"))
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}
