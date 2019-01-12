import { observable, flow } from 'mobx';
import { getMovieInfo } from '@/api/movie';
import appConfig from '@/configs/app';
import history from '@/context/history';

class Detail {
  @observable loading = false
  @observable errorMsg = ''
  @observable data
  cache = {}

  constructor() {
    this.init();
  }

  init = () => {
    const callOnload = (pathname) => {
      const res = pathname.match(/detail\/(\d+)/);
      if (res && parseInt(res[1], 10)) {
        this.onPageLoad(res[1]);
      }
    };
    callOnload(history.location.pathname);
    history.listen(({ pathname }) => callOnload(pathname));
  }

  onPageLoad = flow(function* fetchDetail(movieId) {
    const cacheData = this.cache[movieId];
    if (cacheData && (Date.now() - cacheData.updatedAt) < appConfig.cacheTime * 1000) {
      this.data = cacheData.data;
    } else {
      this.loading = true;
      try {
        const data = yield getMovieInfo(movieId);
        this.errorMsg = '';
        this.cache[movieId] = {
          data,
          updatedAt: Date.now(),
        };
        this.data = data;
      } catch (error) {
        console.error(error);
        this.errorMsg = '数据加载失败';
      }
      this.loading = false;
    }
  })
}

export default new Detail();
