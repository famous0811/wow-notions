import { action, makeAutoObservable, observable } from "mobx";

export default class LoginStore {
  token = window.localStorage.getItem("token");
  name = "";
  email = "";

  constructor() {
    makeAutoObservable(this, {
      token: observable,
      name: observable,
      email: observable,
      SetToken: action,
    });
  }
  SetToken(token: string) {
    window.localStorage.setItem("token", token);
    this.token = token;
  }
  setUser(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
  LogOut() {
    window.localStorage.removeItem("token");
    this.name = "";
    this.email = "";
    this.token = null;
  }
}
