import { HomePageAction, IHomePageState } from "./interfaces";

export class HomePageSelectors {
  public static getSearchClassName(state: IHomePageState) {
    return state[HomePageAction.toggleHomePageSearch].className;
  }
}