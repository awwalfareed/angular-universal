import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap, switchMap } from 'rxjs/operators';
import { ActionTypes, OnSuccessLoaded } from '../actions/user.action';
import { GetError } from '../actions/error.action'
import { UserService } from '@common/services/user.service';
import { NgoService } from '@common/services/ngo.service';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {
  errors: any = {};

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private router: Router
  ) { }
  // NGO Login
  @Effect()
  loginUser$ = this.actions$.pipe(
    ofType(ActionTypes.LOGIN_USER),
    mergeMap(({ payload }) =>
      this.userService.ngoLogin(payload).pipe(
        map((user) => { return (new OnSuccessLoaded(payload)) }),
        tap(() => this.router.navigate(['/ngo-login-verify'])),
        catchError((errors) => of(new GetError(errors.error)))
      )
    )
  );

  // NGO Login Verifications
  @Effect()
  ngoLoginVerification$ = this.actions$.pipe(
    ofType(ActionTypes.LOGIN_USER_VERIFICATION),
    mergeMap(({ payload }) =>
      this.userService.ngoLoginVerification(payload).pipe(
        map(user => {
          return { type: ActionTypes.SET_TOKEN, payload: user };
        }),
        tap(() => this.router.navigate(['/ngobackend/dashboard'])),
        catchError((errors) => of(new GetError(errors.error)))
      )
    )
  );

  // NGO Registration
  @Effect()
  ngoRegister$ = this.actions$.pipe(
    ofType(ActionTypes.NGO_REGISTER),
    switchMap(({ payload }) =>
      this.userService.ngoSignup(payload).pipe(
        map((user) => { return (new OnSuccessLoaded(payload)) }),
        tap(() => this.router.navigate(['/ngo-signup-verify'])),
        catchError((errors) => of(new GetError(errors.error)))
      )
    )
  )

  // NGO Registration Verification
  @Effect()
  ngoRegisterVerification$ = this.actions$.pipe(
    ofType(ActionTypes.NGO_REGISTER_VERIFICATION),
    mergeMap(({ payload }) =>
      this.userService.verifySignupNgo(payload).pipe(
        map(user => {
          return { type: ActionTypes.SET_TOKEN, payload: user };
        }),
        tap(() => this.router.navigate(['/signupform/step1'])),
        catchError((errors) => of(new GetError(errors.error)))
      )
    )
  );

  // Volunteer Registration
  @Effect()
  volunteerRegister$ = this.actions$.pipe(
    ofType(ActionTypes.VOLUNTEER_REGISTER),
    mergeMap(({ payload }) =>
      this.userService.volunteerRegister(payload).pipe(
        map((user) => { return (new OnSuccessLoaded(payload)) }),
        tap(() => this.router.navigate(['/volunteer-verify-email'])),
        catchError((errors) => of(new GetError(errors.error)))
      )
    )
  );

  // Volunteer Login
  @Effect()
  loginVolunteer$ = this.actions$.pipe(
    ofType(ActionTypes.LOGIN_VOLUNTEER),
    mergeMap(({ payload }) =>
      this.userService.volunteerCustomLogin(payload).pipe(
        map((user) => { return (new OnSuccessLoaded(payload)) }),
        tap(() => this.router.navigate(['/volunteer-verify-otp'])),
        catchError((errors) => of(new GetError(errors.error)))
      )
    )
  );

  // Volunteer Login Verification
  @Effect()
  loginVolunteerVerification$ = this.actions$.pipe(
    ofType(ActionTypes.LOGIN_VOLUNTEER_VERIFICATION),
    mergeMap(({ payload }) =>
      this.userService.verifyLoginVolunteer(payload).pipe(
        map((user) => { return (new OnSuccessLoaded(payload)) }),
        tap(() => this.router.navigate(['/volunteer/volunteer-form'])),
        catchError((errors) => of(new GetError(errors.error)))
      )
    )
  );

  // NGO Login Verifications from ngo profile
  @Effect()
  ngoLoginVerificationprofile$ = this.actions$.pipe(
    ofType(ActionTypes.LOGIN_USER_VERIFICATION_FROM_PROFILE),
    mergeMap(({ payload }) =>
      this.userService.ngoLoginVerification(payload).pipe(
        map(user => {
          return { type: ActionTypes.SET_TOKEN, payload: user };
        }),
        catchError((errors) => of(new GetError(errors.error)))
      )
    )
  );

  // NGO Signup Verifications from ngo profile
  @Effect()
  ngoSignupVerificationprofile$ = this.actions$.pipe(
    ofType(ActionTypes.NGO_SIGNUP_VERIFICATION_FROM_PROFILE),
    mergeMap(({ payload }) =>
      this.userService.verifySignupNgo(payload).pipe(
        map(user => {
          return { type: ActionTypes.SET_TOKEN, payload: user };
        }),
        catchError((errors) => of(new GetError(errors.error)))
      )
    )
  );
}
