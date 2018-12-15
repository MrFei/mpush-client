import { observable, action } from 'mobx';
import { throttle } from 'lodash';

const isMobile = () => window.innerWidth < 600;

class App {
  @observable isMobile = isMobile();

  constructor() {
    window.addEventListener('resize', throttle(this.updateMobile, 500));
  }

  @action
  updateMobile = () => {
    if (isMobile()) {
      if (!this.isMobile) {
        this.isMobile = true;
      }
    } else if (this.isMobile) {
      this.isMobile = false;
    }
  }
}

export default new App();
