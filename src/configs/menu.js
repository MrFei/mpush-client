import loadable from 'react-loadable';
import { Circular } from '@/components/Loading';

import ComingIcon from '@material-ui/icons/Today';
import GoodIcon from '@material-ui/icons/LocalPlay';
import ResIcon from '@material-ui/icons/CloudDownload';
import ListIcon from '@material-ui/icons/ListAlt';
import SearchIcon from '@material-ui/icons/Search';

export default [
  {
    name: '即将上映',
    icon: ComingIcon,
    path: '/coming',
    component: loadable({
      loader: () => import('@/pages/ComingList'),
      loading: Circular,
    }),
    default: true,
  },
  {
    name: '高分电影',
    icon: GoodIcon,
    path: '/good',
    component: loadable({
      loader: () => import('@/pages/GoodList'),
      loading: Circular,
    }),
    default: true,
  },
  {
    name: '电影资源',
    icon: ResIcon,
    path: '/resource',
    component: loadable({
      loader: () => import('@/pages/ResourceList'),
      loading: Circular,
    }),
    default: true,
  },
  {
    name: '监控列表',
    icon: ListIcon,
    path: '/monitor',
    component: loadable({
      loader: () => import('@/pages/MonitorList'),
      loading: Circular,
    }),
    default: true,
  },
  {
    name: '搜索',
    icon: SearchIcon,
    path: '/search',
    component: loadable({
      loader: () => import('@/pages/SearchList'),
      loading: Circular,
    }),
  },
];
