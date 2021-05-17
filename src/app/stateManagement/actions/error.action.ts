import { Action } from '@ngrx/store';

export enum ActionErrorTypes {
    GET_ERRORS = 'GET_ERRORS',
}

export class GetError implements Action {
    readonly type = ActionErrorTypes.GET_ERRORS;
    constructor(public payload: any) {}
}

export type ActionsError = GetError ; 