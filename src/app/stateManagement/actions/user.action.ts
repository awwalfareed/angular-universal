import { Action } from '@ngrx/store';
import { Login } from '@common/models/Ngo';
import { Volunteer } from '@common/models/Volunteer'

export enum ActionTypes {
  LOGIN_USER = 'LOGIN_USER',
  LOGIN_USER_VERIFICATION = 'LOGIN_USER_VERIFICATION',
  SET_TOKEN = 'SET_TOKEN',
  NGO_REGISTER = 'NGO_REGISTER',
  NGO_REGISTER_VERIFICATION = 'NGO_REGISTER_VERIFICATION',
  VOLUNTEER_REGISTER = 'VOLUNTEER_REGISTER',
  LOGIN_VOLUNTEER = 'LOGIN_VOLUNTEER',
  LOGIN_VOLUNTEER_VERIFICATION = 'LOGIN_VOLUNTEER_VERIFICATION',
  ON_SUCCESS_LOADED = 'ON_SUCCESS_LOADED',
  LOGIN_USER_VERIFICATION_FROM_PROFILE = 'LOGIN_USER_VERIFICATION_FROM_PROFILE',
  NGO_SIGNUP_VERIFICATION_FROM_PROFILE = 'NGO_SIGNUP_VERIFICATION_FROM_PROFILE',
  LOADING = 'LOADING',
}

export class LoginUser implements Action {
  readonly type = ActionTypes.LOGIN_USER;
  constructor(public payload: Login) { }
}
export class LoginUserVerification implements Action {
  readonly type = ActionTypes.LOGIN_USER_VERIFICATION;
  constructor(public payload: any) { }
}
export class SetToken implements Action {
  readonly type = ActionTypes.SET_TOKEN;
  constructor(public payload: any) { }
}
export class NgoRegister implements Action {
  readonly type = ActionTypes.NGO_REGISTER;
  constructor(public payload: any) { }
}
export class NgoRegisterVerification implements Action {
  readonly type = ActionTypes.NGO_REGISTER_VERIFICATION;
  constructor(public payload: any) { }
}
export class VolunteerRegister implements Action {
  readonly type = ActionTypes.VOLUNTEER_REGISTER;
  constructor(public payload: Volunteer) { }
}
export class LoginVolunteer implements Action {
  readonly type = ActionTypes.LOGIN_VOLUNTEER;
  constructor(public payload: any) { }
}
export class LoginVolunteerVerification implements Action {
  readonly type = ActionTypes.LOGIN_VOLUNTEER_VERIFICATION;
  constructor(public payload: any) { }
}
export class LoginUserVerificationFromProfile implements Action {
  readonly type = ActionTypes.LOGIN_USER_VERIFICATION_FROM_PROFILE;
  constructor(public payload: any) { }
}
export class NgoSignupVerificationFromProfile implements Action {
  readonly type = ActionTypes.NGO_SIGNUP_VERIFICATION_FROM_PROFILE;
  constructor(public payload: any) { }
}
export class Loading implements Action {
  readonly type = ActionTypes.LOADING;
  constructor(public payload: null) { }
}
export class OnSuccessLoaded implements Action {
  readonly type = ActionTypes.ON_SUCCESS_LOADED;
  constructor(public payload: any) {}
}

export type ActionsUnion = LoginUser
  | LoginUserVerification
  | Loading
  | OnSuccessLoaded
  | NgoRegister
  | NgoRegisterVerification
  | VolunteerRegister
  | LoginVolunteer
  | LoginVolunteerVerification
  | LoginUserVerificationFromProfile
  | NgoSignupVerificationFromProfile
  | SetToken;
