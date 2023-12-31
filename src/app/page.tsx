
import Image from 'next/image'
import Link from 'next/link'
import { TCard } from '~/components/card'
import { Header } from '~/components/header/header'
import { SearchBoxController } from '~/features/search-box'

export default function Home() {
  return (
    <>
      <TCard />
      <SearchBoxController />
      <Link href='/auth'>Sign in</Link>
    </>
  )

}
