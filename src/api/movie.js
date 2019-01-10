import request from '@/utils/request';
import appConfig from '@/configs/app';

export const getComing = () => request({
  url: '/data/coming',
});

export const getGood = ({ offset, limit = appConfig.pagingLimit } = {}) => request({
  url: '/data/good',
  params: offset === undefined ? undefined : {
    limit,
    offset,
  },
});

export const getRes = ({ offset, limit = appConfig.pagingLimit } = {}) => request({
  url: '/data/res',
  params: offset === undefined ? undefined : {
    limit,
    offset,
  },
});

export const getSpider = ({ offset, limit = appConfig.pagingLimit } = {}) => request({
  url: '/data/spider',
  params: offset === undefined ? undefined : {
    limit,
    offset,
  },
});

export const getAll = ({
  offset = 0,
  limit = appConfig.pagingLimit,
  type = 'pubdate',
  order = 'desc',
} = {}) => request({
  url: '/data/all',
  params: {
    limit,
    offset,
    type,
    order,
  },
});

export const getMovieInfo = movieId => request({
  url: `/data/info/${movieId}`,
});

export const search = ({ keyword, offset, limit = appConfig.pagingLimit } = {}) => request({
  url: `/data/search/${keyword}`,
  params: offset === undefined ? undefined : {
    limit,
    offset,
  },
});
