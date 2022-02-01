import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from './../../store/state';
import * as fromUsersActions from './../../store/users/users.actions';
import * as fromUsersSelectors from './../../store/users/users.reducer';

import { IUser } from './../../models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  create(user: IUser): void {
    // this.service.create(user).subscribe();
  }

}
