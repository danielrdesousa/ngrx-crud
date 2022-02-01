import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IUser } from 'src/app/models/user.model';

import { Store } from '@ngrx/store';
import { AppState } from './../../store/state';
import * as fromUsersActions from './../../store/users/users.actions';
import * as fromUsersSelectors from './../../store/users/users.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngrx-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  userForm!: FormGroup;
  
  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      age: ['', Validators.required],
      profile: ['', Validators.required]
    });

    this.store.select(fromUsersSelectors.getUser).subscribe((user) => {
      (user) ? this.userForm.patchValue(user) : null;
    })
  }

  create() {
    if (this.userForm.invalid) return;

    if (!this.userForm.get('id')?.value) {
      this.store.dispatch(fromUsersActions.CreateUser({ payload: this.userForm.value }))
    } else {
      this.store.dispatch(fromUsersActions.UpdateUser({ payload: this.userForm.value }))
    }

    this.userForm.reset();
  }
}
