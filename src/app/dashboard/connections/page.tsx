import { Suspense } from 'react'
import { getConnections } from '~/cs/connections'
import { ConnectionsList } from '~/widgets/connections-list'

export default async function Connections() {
  const data = await getConnections()
  return (
    <>
      <Suspense fallback={<p>Loading feed...</p>}>
        <ConnectionsList data={data}/>
      </Suspense>

      <h1>COnnections</h1>
    </>
  )
}
