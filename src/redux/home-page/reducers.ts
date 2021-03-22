import { Action } from "redux";
import { HomePageAction, IHomePageState, IToggleOpenedState } from "./interfaces";
import { HomePageInitialState } from "./state";

export class HomePageReducer {
	public static reduce(state = HomePageInitialState as IHomePageState, action: Action) {
		switch (action.type) {
			case HomePageAction.toggleHomePageSearch: {
				return {
					...state,
					[HomePageAction.toggleHomePageSearch]: this.toggleOpenedAction(
						state[HomePageAction.toggleHomePageSearch]
					),
				};
			}
			default: {
				return state;
			}
		}
	}

	private static toggleOpenedAction(
		state: IToggleOpenedState
	): IToggleOpenedState {
		let { isOpen, className } = state;
		if (isOpen) {
			className = className.replace(/\bopened\b/i, "");
		} else {
			className = className + " opened";
		}
		isOpen = !isOpen;

		return { isOpen, className };
	}
}
