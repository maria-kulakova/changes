import { observable, action, computed } from 'mobx';

class NameStore {

  @observable name = 'Mary';
  @observable countOfChangingName = 0;

  @action changeName = (newName) => {
    this.name = newName;
    this.countOfChangingName++;
  }

  @computed get areYouLucky() {
    let answer = false;
    if (this.countOfChangingName % 2 === 0) {
      answer = true;
    }
    return answer;
  }
}

const store = new NameStore();
export default store;
