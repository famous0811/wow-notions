import { action, makeAutoObservable, observable } from "mobx";

export default class LoginStore {
  token = window.localStorage.getItem("token");

  constructor() {
    makeAutoObservable(this, {
      token: observable,
      SetToken: action,
    });
  }
  SetToken(token: string) {
    window.localStorage.setItem("token", token);
    this.token = token;
  }
}
