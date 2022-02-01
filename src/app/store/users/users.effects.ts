import { Injectable } from "@angular/core";
import { catchError, exhaustMap, map, of } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import * as fromUsersActions from './users.actions';
import { UsersService } from "./../../services/users.service";

@Injectable()
export class UsersEffects {
    constructor(
        private actions$: Actions,
        private service: UsersService
    ) { }

    loadUsers$ = createEffect(
        () => this.actions$.pipe(
            ofType(fromUsersActions.usersTypeActions.LOAD_USERS),
            exhaustMap(() => this.service.getAll()
                .pipe(
                    map(payload => 
                        fromUsersActions.LoadUsersSuccess({ payload }),
                        catchError(error => of(fromUsersActions.LoadUsersFailed({ error })))
                    )
                )
            )
        )
    );

    loadUser$ = createEffect(
        () => this.actions$.pipe(
            ofType(fromUsersActions.usersTypeActions.LOAD_USER),
            exhaustMap((user: any) => this.service.findById(user.payload)
                .pipe(
                    map(payload => 
                        fromUsersActions.LoadUserSuccess({ payload }),
                        catchError(error => of(fromUsersActions.LoadUserFailed({ error })))
                    )
                )
            )
        )
    );

    createUser$ = createEffect(
        () => this.actions$.pipe(
            ofType(fromUsersActions.usersTypeActions.CREATE_USER),
            exhaustMap((user: any) => this.service.create(user.payload)
                .pipe(
                    map(payload => 
                        fromUsersActions.CreateUserSuccess({ payload }),
                        catchError(error => of(fromUsersActions.CreateUserFailed({ error })))
                    )
                )
            )
        )
    );

    updateUser$ = createEffect(
        () => this.actions$.pipe(
            ofType(fromUsersActions.usersTypeActions.UPDATE_USER),
            exhaustMap((user: any) => this.service.update(user.payload)
                .pipe(
                    map(payload => 
                        fromUsersActions.UpdateUserSuccess({ payload }),
                        catchError(error => of(fromUsersActions.UpdateUserFailed({ error })))
                    )
                )
            )
        )
    );

    deleteUser$ = createEffect(
        () => this.actions$.pipe(
            ofType(fromUsersActions.usersTypeActions.DELETE_USER),
            exhaustMap((user: any) => this.service.delete(user.payload)
                .pipe(
                    map(() => 
                        fromUsersActions.DeleteUserSuccess({ payload: user.payload }),
                        catchError(error => of(fromUsersActions.DeleteUserFailed({ error })))
                    )
                )
            )
        )
    );
}