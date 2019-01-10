import { observable, action, flow } from 'mobx';
import history from '@/context/history';

class Base {
  @observable data = []
  @observable pageLoading = false
  @observable moreLoading = false
  @observable scrollPos = 0
  @observable errorMsg = ''

  constructor(matchPath, apiFunc) {
    if (matchPath && apiFunc) {
      this.matchPath = matchPath;
      this.apiFunc = apiFunc;
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
    if (!this.data.length) {
      this.pageLoading = true;
    } else {
      this.moreLoading = true;
    }
    try {
      const data = yield this.apiFunc(params);
      this.data = this.data.concat(data);
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
