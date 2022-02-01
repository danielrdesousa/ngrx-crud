import { IUser } from "src/app/models/user.model";
import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";

import * as fromUsersActions from './users.actions';

export interface UsersState {
    users: IUser[],
    user: IUser | null,
    error: string | ''
}

export const initialState: UsersState = {
    users: [],
    user: null,
    error: ''
}

const _usersReducer = createReducer(
    initialState,
    on(fromUsersActions.LoadUsersSuccess, (state, { payload }) => ({ ...state, users: payload, error: '' })),
    on(fromUsersActions.LoadUsersFailed, (state, { error }) => ({ ...state, error: error })),

    on(fromUsersActions.LoadUserSuccess, (state, { payload }) => ({ ...state, user: payload, error: '' })),
    on(fromUsersActions.LoadUserFailed, (state, { error }) => ({ ...state, error: error })),
    
    on(fromUsersActions.CreateUserSuccess, (state, { payload }) => ({ ...state, users: [...state.users, payload], error: '' })),
    on(fromUsersActions.CreateUserFailed, (state, { error }) => ({ ...state, error: error })),

    on(fromUsersActions.UpdateUserSuccess, (state, { payload }) => ({ 
        ...state, 
        users: [...state.users].map((row) => {
            if (row.id == payload.id) {
                return  payload;
            } else {
                return row;
            }
        }),
        error: '' 
    })),
    on(fromUsersActions.UpdateUserFailed, (state, { error }) => ({ ...state, error: error })),


    on(fromUsersActions.DeleteUserSuccess, (state, { payload }) => ({ 
        ...state, 
        users: [...state.users].filter((row) => row.id !== payload), 
        error: '' 
    })),
    on(fromUsersActions.DeleteUserFailed, (state, { error }) => ({ ...state, error: error })),
);

export function usersReducer(state = initialState, action: Action) {
    return _usersReducer(state, action);
}

const getUsersFeatureState = createFeatureSelector<UsersState>(
    'users'
);

export const getUsers = createSelector(
    getUsersFeatureState,
    (state: UsersState) => state.users
);

export const getUser = createSelector(
    getUsersFeatureState,
    (state: UsersState) => state.user
);

export const getUsersError = createSelector(
    getUsersFeatureState,
    (state: UsersState) => state.error
);