import { ActionsError, ActionErrorTypes } from '@stateManagement/actions/index';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface GlobalErrors {
    errors: {},
    isLoading: false,
}

export let initialState = {
    errors: {},
    isLoading: false,
};
// Selector functions
// const getErrorFeatureState = createFeatureSelector<GlobalErrors>('error');
// export const getErrors = createSelector(
//     getErrorFeatureState,
//     state => state.errors
// );
export function errorReducer(state = initialState, action: ActionsError) {
    // switch (action.type) {
    //     case ActionErrorTypes.GET_ERRORS: {
    //         console.log('err state-->',state)
    //         return {
    //             ...state,
    //             errors: action.payload,
    //             isLoading: false
    //         }
    //     }
    //     default:
    //         return state;
    // }
}
