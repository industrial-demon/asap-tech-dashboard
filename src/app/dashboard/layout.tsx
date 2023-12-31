import { Header } from '~/components/header/header'
import { SearchBoxController } from '~/features/search-box'
import { RootSoreContext, RootStoreProvider } from '~/providers/store-provider'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RootStoreProvider>
      <div className="dasboard">
      <Header />
        Dashboard
        {children}
      </div>
    </RootStoreProvider>
  )
}
