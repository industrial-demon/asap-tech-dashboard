import { Header } from '~/components/header/header'
import { SearchBoxController } from '~/features/search-box'

export default async function Dashboard() {
  return (
    <>
      <SearchBoxController />
      <h1>Dash</h1>
    </>
  )
}
