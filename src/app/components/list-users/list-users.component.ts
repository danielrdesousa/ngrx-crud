import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { IUser } from './../../models/user.model';

import { Store } from '@ngrx/store';
import { AppState } from './../../store/state';
import * as fromUsersActions from './../../store/users/users.actions';
import * as fromUsersSelectors from './../../store/users/users.reducer';


@Component({
  selector: 'ngrx-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  users$: Observable<IUser[]> = this.store.select(fromUsersSelectors.getUsers);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(fromUsersActions.LoadUsers());
  }

  edit(id: string) {
    this.store.dispatch(fromUsersActions.LoadUser({ payload: id }));
  }

  remove(id: string) {
    this.store.dispatch(fromUsersActions.DeleteUser({ payload: id }));
  }

}
