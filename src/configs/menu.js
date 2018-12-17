import loadable from 'react-loadable';
import { Circular } from '@/components/Loading';

import StarIcon from '@material-ui/icons/Star';
import SearchIcon from '@material-ui/icons/Search';
import SettingIcon from '@material-ui/icons/Settings';

export default [
  {
    name: 'Good',
    icon: StarIcon,
    path: '/good',
    component: loadable({
      loader: () => import('@/pages/GoodMovie'),
      loading: Circular,
    }),
    default: true,
  },
  {
    name: 'Search',
    icon: SearchIcon,
    path: '/search',
    component: loadable({
      loader: () => import('@/pages/Search'),
      loading: Circular,
    }),
  },
  {
    name: 'Setting',
    icon: SettingIcon,
    path: '/setting',
    component: loadable({
      loader: () => import('@/pages/Setting'),
      loading: Circular,
    }),
  },
];
