import { ConnectionsPageStore } from './connections-page.store'
import { ManagePageStore } from './manage-page.store'
import { MonitorPageStore } from './monitor-page.store'

export class RootStore {
  constructor(
    readonly managePage: ManagePageStore,
    readonly monitorPage: MonitorPageStore,
    readonly connectionsPage: ConnectionsPageStore,
  ) {}
}

export function initStore(): RootStore {
  return new RootStore(
    new ManagePageStore(),
    new MonitorPageStore(),
    new ConnectionsPageStore(),
  )
}
