import { ActionsUnion, ActionTypes } from '@stateManagement/actions/index';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface UserState {
  items: [],
  errors: null,
  isLoading: false,
}
export let initialState = {
  items: [],
  errors: null, 
  isLoading: false,
};
if (JSON.parse(localStorage.getItem('user'))) {
  initialState = JSON.parse(localStorage.getItem('user'))
}
// Selector functions
const getUserFeatureState = createFeatureSelector<UserState>('user');
export const getUserData = createSelector(
  getUserFeatureState,
  state => state.items
);
export function userReducer(state = initialState, action: ActionsUnion) {
  switch (action.type) {
    case ActionTypes.LOGIN_USER: {
      return {
        ...state,
        items: action.payload,
        isLoading: false
      };
    }
    // case ActionTypes
    case ActionTypes.LOGIN_USER_VERIFICATION: {
      return {
        ...state,
        items: action.payload,
        isLoading: false
      };
    }
    case ActionTypes.SET_TOKEN: {
      return {
        ...state,
        items: action.payload
      };
    }
    case ActionTypes.VOLUNTEER_REGISTER: {
      return {
        ...state,
        items: action.payload,
        isLoading: false
      };
    }
    case ActionTypes.LOGIN_VOLUNTEER: {
      return {
        ...state,
        items: action.payload,
        isLoading: false
      };
    }
    case ActionTypes.LOGIN_VOLUNTEER_VERIFICATION: {
      return {
        ...state,
        items: action.payload,
        isLoading: false
      };
    }
    case ActionTypes.NGO_REGISTER: {
      return {
        ...state,
        items: action.payload,
        isLoading: false
      };
    }

    case ActionTypes.NGO_REGISTER_VERIFICATION: {
      return {
        ...state,
        items: action.payload,
        isLoading: false
      };
    }
    case ActionTypes.LOGIN_USER_VERIFICATION_FROM_PROFILE: {
      return {
        ...state,
        items: action.payload,
        isLoading: false
      };
    }
    case ActionTypes.NGO_SIGNUP_VERIFICATION_FROM_PROFILE: {
      return {
        ...state,
        items: action.payload,
        isLoading: false
      };
    }
    case ActionTypes.LOADING: {
      return {
        state,
        isLoading: true
      }
    }
    case ActionTypes.ON_SUCCESS_LOADED: {
      return {
        ...state,
        items: action.payload,
        isLoading: false
      }
    }
    default:
      return state;
  }
}