import { HomePageAction, IHomePageState } from "./interfaces";

export const HomePageInitialState: IHomePageState = {
    [HomePageAction.toggleHomePageSearch]: {
      isOpen: false,
      className: "nav__mobile search"
    }
} as const;