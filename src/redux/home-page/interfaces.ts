// Action 
export enum HomePageAction {
  toggleHomePageSearch = "TOGGLE_HOME_PAGE_SEARCH"
}
export const HomePageActions = Object.values(HomePageAction);
export const HomePageActionsSet = new Set(HomePageActions);

// State
export interface IHomePageState {
  [HomePageAction.toggleHomePageSearch]: IToggleOpenedState
}

// Toggle Opened State
export interface IToggleOpenedState {
  isOpen: boolean,
  className: string
}