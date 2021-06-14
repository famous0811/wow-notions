import Userstore from "./userStore";

class useStore {
  UserStore;
  constructor() {
    this.UserStore = new Userstore();
  }
}
const UseStore = new useStore();
export default UseStore;
