import { observable, action } from 'mobx';

class Count {
  @observable count = 0;

  @action
  addCount = () => {
    this.count++;
  }
}

export default new Count();
