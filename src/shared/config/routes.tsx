import { v4 as uuidv4 } from 'uuid'
import {
  AdminIcon,
  ConnectionsIcon,
  DashboardIcon,
  ManageIcon,
  MonitorIcon,
} from '~/icons'

export const routes = [
  {
    href: '/dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
    id: uuidv4(),
  },
  {
    href: '/dashboard/manage',
    title: 'Manage',
    icon: <ManageIcon />,
    id: uuidv4(),
  },
  {
    href: '/dashboard/monitor',
    title: 'Monitor',
    icon: <MonitorIcon />,
    id: uuidv4(),
  },

  {
    href: '/dashboard/connections',
    title: 'Connections',
    icon: <ConnectionsIcon />,
    id: uuidv4(),
  },
  {
    href: 'dashboard/admin',
    title: 'Admin',
    icon: <AdminIcon />,
    id: uuidv4(),
  },
]
