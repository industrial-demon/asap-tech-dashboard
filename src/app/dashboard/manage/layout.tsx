import { SearchBoxController } from '~/features/search-box'
import { RootSoreContext, RootStoreProvider } from '~/providers/store-provider'

export default function ManageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RootStoreProvider>
      <div className="dasboard">
      <SearchBoxController />
        Dashboard
        {children}
      </div>
    </RootStoreProvider>
  )
}
