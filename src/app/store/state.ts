import { ActionReducerMap } from "@ngrx/store";

import { UsersEffects } from "./users/users.effects";
import { usersReducer, UsersState } from "./users/users.reducer";

export interface AppState {
    users: UsersState
}

export const appReducer: ActionReducerMap<AppState> = {
    users: usersReducer
}

export const appEffects = [
    UsersEffects
]