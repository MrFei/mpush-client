import loadable from 'react-loadable';
import { LoadingBar } from '@/components/Loading';

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
      loading: LoadingBar,
    }),
    default: true,
  },
  {
    name: 'Search',
    icon: SearchIcon,
    path: '/search',
    component: loadable({
      loader: () => import('@/pages/Search'),
      loading: LoadingBar,
    }),
  },
  {
    name: 'Setting',
    icon: SettingIcon,
    path: '/setting',
    component: loadable({
      loader: () => import('@/pages/Setting'),
      loading: LoadingBar,
    }),
  },
];
