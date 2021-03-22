import { Action } from "redux";
import { HomePageAction } from "./interfaces";

export default class HomePageActions {
  public static toggleSearch(): Action {
    return this.toggleOpenedAction();
  }

  private static toggleOpenedAction(): Action {
    return {
      type: HomePageAction.toggleHomePageSearch,
    };
  }
}