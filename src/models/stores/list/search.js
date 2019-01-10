import { search } from '@/api/movie';
import Base from './base';

class Search extends Base {
  constructor() {
    super(null, search);
    this.keyword = '';
  }

  execSearch = (keyword) => {
    this.keyword = keyword;
    this.data = [];
    this.scrollPos = 0;
    this.fetchData({
      keyword: this.keyword,
      offset: 0,
    });
  }

  loadMore = () => {
    this.fetchData({
      keyword: this.keyword,
      offset: this.data.length,
    });
  }
}

export default new Search();
