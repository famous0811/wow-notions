import Loginstore from "./LoginStore";

class useStore {
  LoginStore;
  constructor() {
    this.LoginStore = new Loginstore();
  }
}
const UseStore = new useStore();
export default UseStore;
