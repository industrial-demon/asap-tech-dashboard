import { v4 as uuidv4 } from 'uuid'
import DashboardIcon from '~/icons/dashboard.svg'
import ManageIcon from '~/icons/manage.svg'
import MonitorIcon from '~/icons/monitor.svg'
import ConnectionsIcon from '~/icons/connections.svg'
import AdminIcon from '~/icons/admin.svg'

export const routes = [
  {
    href: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
    id: uuidv4(),
  },
  {
    href: 'manage',
    title: 'Manage',
    icon: <ManageIcon />,
    id: uuidv4(),
  },
  {
    href: 'monitor',
    title: 'Monitor',
    icon: <MonitorIcon />,
    id: uuidv4(),
  },

  {
    href: 'connections',
    title: 'Connections',
    icon: <ConnectionsIcon />,
    id: uuidv4(),
  },
  {
    href: 'admin',
    title: 'Admin',
    icon: <AdminIcon />,
    id: uuidv4(),
  },
]
