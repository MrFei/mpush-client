import { observable, action, flow } from 'mobx';
import history from '@/context/history';

class Base {
  @observable data = []
  @observable pageLoading = false
  @observable moreLoading = false
  @observable allLoaded = false
  @observable scrollPos = 0
  @observable errorMsg = ''

  constructor(matchPath, apiFunc) {
    this.matchPath = matchPath;
    this.apiFunc = apiFunc;
    if (matchPath && apiFunc) {
      this.init();
    }
  }

  init = () => {
    const callOnload = (pathname) => {
      if (pathname.toLowerCase() === this.matchPath) {
        this.onLoad();
      }
    };
    callOnload(history.location.pathname);
    history.listen(({ pathname }) => callOnload(pathname));
  }

  fetchData = flow(function* fetchList(params) {
    if (this.allLoaded) return;
    if (!this.data.length) {
      this.pageLoading = true;
    } else {
      this.moreLoading = true;
    }
    this.errorMsg = '';
    try {
      const data = yield this.apiFunc(params);
      if (data.length) {
        this.data = this.data.concat(data);
      } else {
        this.allLoaded = true;
      }
    } catch (error) {
      console.error(error);
      this.errorMsg = '数据加载失败';
    }
    this.pageLoading = false;
    this.moreLoading = false;
  })

  onLoad = () => {
    if (!this.data.length) {
      this.fetchData({ offset: 0 });
    }
  }

  loadMore = () => {
    this.fetchData({ offset: this.data.length });
  }

  @action
  setScrollPos = (pos) => {
    this.scrollPos = pos;
  }
}

export default Base;
