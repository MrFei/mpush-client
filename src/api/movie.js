import request from '@/utils/request';
import appConfig from '@/configs/app';

export const getComing = ({ offset, limit = appConfig.pagingLimit } = {}) =>
  request({
    url: '/data/coming',
    params:
      offset === undefined
        ? undefined
        : {
            limit,
            offset,
          },
  });

export const getGood = ({ offset, limit = appConfig.pagingLimit } = {}) =>
  request({
    url: '/data/good',
    params:
      offset === undefined
        ? undefined
        : {
            limit,
            offset,
          },
  });

export const getRes = ({ offset, limit = appConfig.pagingLimit } = {}) =>
  request({
    url: '/data/res',
    params:
      offset === undefined
        ? undefined
        : {
            limit,
            offset,
          },
  });

export const getMonitor = ({ offset, limit = appConfig.pagingLimit } = {}) =>
  request({
    url: '/data/spider',
    params:
      offset === undefined
        ? undefined
        : {
            limit,
            offset,
          },
  });

export const getAll = ({ offset = 0, limit = appConfig.pagingLimit, type = 'pubdate', order = 'desc' } = {}) =>
  request({
    url: '/data/all',
    params: {
      limit,
      offset,
      type,
      order,
    },
  });

export const getMovieInfo = async movieId => {
  const [data] = await request({
    url: `/data/info/${movieId}`,
  });
  return data;
};

export const search = ({ keyword, offset, limit = appConfig.pagingLimit } = {}) =>
  request({
    url: `/data/search/${keyword}`,
    params:
      offset === undefined
        ? undefined
        : {
            limit,
            offset,
          },
  });
