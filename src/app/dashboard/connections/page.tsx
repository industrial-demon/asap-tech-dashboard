import { Suspense } from 'react'
import { getConnections } from '~/api/connections'

export default function Connections() {
  return (
    <>
      <Suspense fallback={<p>Loading feed...</p>}>
        <ConnectionsList />
      </Suspense>

      <h1>COnnections</h1>
    </>
  )
}

async function ConnectionsList() {
  const data = await getConnections()
  console.log(data.meta.total)
  return (
    <ul>
      {data.meta.total}
      {data?.result?.map(connection => (
        <li key={connection.id}>{connection.name}</li>
      ))}
    </ul>
  )
}
