import { BackendURL } from '~/shared/config/constants'
import { getAccessTokenCookie } from '~/shared/lib/auth/access-token'

export async function getConnections() {
  const res = await fetch(`${BackendURL}/api/connections`, {
    headers: {
      Authorization: `Bearer ${getAccessTokenCookie()}`,
    },
    next: {},
    cache: 'no-store',
  })

  getAccessTokenCookie()
  if (!res.ok) {
 
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`Failed to fetch data ${res.status}`, {
    
    })
  }

  return res.json()
}
