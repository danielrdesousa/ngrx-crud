import { createAction, props } from "@ngrx/store";
import { IUser } from "./../../models/user.model";

export const enum usersTypeActions {
    LOAD_USERS = '[LOAD_USERS] Loading Users',
    LOAD_USERS_SUCCESS = '[LOAD_USERS_SUCCESS] Loading Users Success',
    LOAD_USERS_FAILED = '[LOAD_USERS_FAILED] Loading Users Failed',

    LOAD_USER = '[LOAD_USER] Loading a User',
    LOAD_USER_SUCCESS = '[LOAD_USER_SUCCESS] Loading a User Success',
    LOAD_USER_FAILED = '[LOAD_USER_FAILED] Loading a User Failed',

    CREATE_USER = '[CREATE_USER] Create a User',
    CREATE_USER_SUCCESS = '[CREATE_USER_SUCCESS] Create a User Success',
    CREATE_USER_FAILED = '[CREATE_USERS_FAILED] Create a User Failed',

    UPDATE_USER = '[UPDATE_USER] Update a User',
    UPDATE_USER_SUCCESS = '[UPDATE_USER_SUCCESS] Update a User Success',
    UPDATE_USER_FAILED = '[UPDATE_USERS_FAILED] Update a User Failed',

    DELETE_USER = '[DELETE_USER] Delete a User',
    DELETE_USER_SUCCESS = '[DELETE_USER_SUCCESS] Delete a User Success',
    DELETE_USER_FAILED = '[DELETE_USERS_FAILED] Delete a User Failed',
}

/*************************************
************ LOAD USERS **************
**************************************/
export const LoadUsers = createAction(
    usersTypeActions.LOAD_USERS
);

export const LoadUsersSuccess =  createAction(
    usersTypeActions.LOAD_USERS_SUCCESS,
    props<{ payload: IUser[] }>()
);

export const LoadUsersFailed =  createAction(
    usersTypeActions.LOAD_USERS_FAILED,
    props<{ error: string }>()
);


/*************************************
************* LOAD USER **************
**************************************/
export const LoadUser = createAction(
    usersTypeActions.LOAD_USER,
    props<{ payload: string }>()
);

export const LoadUserSuccess =  createAction(
    usersTypeActions.LOAD_USER_SUCCESS,
    props<{ payload: IUser }>()
);

export const LoadUserFailed =  createAction(
    usersTypeActions.LOAD_USER_FAILED,
    props<{ error: string }>()
);


/*************************************
************ CREATE USER *************
**************************************/
export const CreateUser = createAction(
    usersTypeActions.CREATE_USER,
    props<{ payload: IUser }>()
);

export const CreateUserSuccess =  createAction(
    usersTypeActions.CREATE_USER_SUCCESS,
    props<{ payload: IUser }>()
);

export const CreateUserFailed =  createAction(
    usersTypeActions.CREATE_USER_FAILED,
    props<{ error: string }>()
);


/*************************************
************ DELETE USER *************
**************************************/
export const DeleteUser = createAction(
    usersTypeActions.DELETE_USER,
    props<{ payload: string }>()
);

export const DeleteUserSuccess =  createAction(
    usersTypeActions.DELETE_USER_SUCCESS,
    props<{ payload: string }>()
);

export const DeleteUserFailed =  createAction(
    usersTypeActions.DELETE_USER_FAILED,
    props<{ error: string }>()
);


/*************************************
************ UPDATE USER *************
**************************************/
export const UpdateUser = createAction(
    usersTypeActions.UPDATE_USER,
    props<{ payload: string }>()
);

export const UpdateUserSuccess =  createAction(
    usersTypeActions.UPDATE_USER_SUCCESS,
    props<{ payload: IUser }>()
);

export const UpdateUserFailed =  createAction(
    usersTypeActions.UPDATE_USER_FAILED,
    props<{ error: string }>()
);
