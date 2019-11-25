import { observable, action, computed } from 'mobx';
import { throttle } from 'lodash';
import menuConfig from '@/configs/menu';
import history from '@/context/history';

const isMobile = () => window.innerWidth < 600;

class App {
  menus = menuConfig;
  @observable isMobile = isMobile();
  @observable showNav = false;
  @observable currMenu = {};
  @observable topTitle = '';

  constructor() {
    window.addEventListener('resize', throttle(this.updateMobile, 500));
    this.updateCurrMenu();
    history.listen(this.updateCurrMenu);
  }

  @action
  toggleDrawer = open => {
    this.showNav = open;
  };

  @action
  updateMobile = () => {
    if (isMobile()) {
      if (!this.isMobile) {
        this.isMobile = true;
      }
    } else if (this.isMobile) {
      this.isMobile = false;
      this.toggleDrawer(false);
    }
  };

  @action
  updateCurrMenu = () => {
    const {
      location: { pathname },
    } = history;
    const currMenu = this.menus.find(menu => new RegExp(`^${menu.path}`, 'i').test(pathname));
    if (currMenu) {
      this.currMenu = currMenu;
      this.topTitle = currMenu.name;
      this.toggleDrawer(false);
    }
  };

  @computed
  get defaultPath() {
    const defaultMenu = this.menus.find(menu => menu.default);
    if (!defaultMenu) throw new Error('未找到默认菜单');
    return defaultMenu.path;
  }
}

export default new App();
