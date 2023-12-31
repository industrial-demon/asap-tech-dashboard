'use client'

import { useSession } from "next-auth/react";

export const ConnectionsList = ({
  data,
}: {
  data: { result: any[]; meta: any }
}) => {
    const a = useSession()
    console.log(a, "SESSION")
  return (
    <>
      <ul>
        {data.meta.total}
        {data?.result?.map(connection => (
          <li key={connection.id}>{connection.name}</li>
        ))}
      </ul>
    </>
  )
}
