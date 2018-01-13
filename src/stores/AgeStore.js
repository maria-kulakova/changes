import { observable, action } from 'mobx';

class AgeStore {
  @observable age = 18;

  @action getOlder = () => {
    this.age++;
  }
}

const store = new AgeStore();
export default store;
