import { NgoActions, NgoActionTypes } from '@stateManagement/actions/ngo.action'
import { createFeatureSelector, createSelector } from '@ngrx/store';

// State for this feature (Product)
export interface NgoState {
    items: [],
    errors: null,
    isLoading: false,
}

export let initialState = {
    items: [],
    errors: null,
    isLoading: false,
};
if (JSON.parse(localStorage.getItem('ngo'))) {
    initialState = JSON.parse(localStorage.getItem('ngo'))
}
// Selector functions
const getNgoFeatureState = createFeatureSelector<NgoState>('ngo');
export const getData = createSelector(
    getNgoFeatureState,
    state => state.items
);

export function ngoReducer(state = initialState, action: NgoActions) {
    switch (action.type) {
        case NgoActionTypes.NGO_SUCCESS_LOADED: {
            return {
                ...state,
                items: action.payload,
                isLoading: false
            };
        }
        case NgoActionTypes.NGO_SIGNUP_FORM_ONE: {
            return {
                ...state,
                'stepOne':action.payload,
                isLoading: false
            };
        }
        case NgoActionTypes.NGO_SIGNUP_FORM_TWO: {
            return {
                ...state,
                'stepTwo': action.payload,
                isLoading: false
            };
        }
        case NgoActionTypes.NGO_SIGNUP_FORM_THREE: {
            return {
                ...state,
                'stepThree': action.payload,
                isLoading: false
            };
        }
        case NgoActionTypes.NGO_SIGNUP_FORM_FOUR: {
            return {
                ...state,
                items: action.payload,
                isLoading: false
            };
        }
        case NgoActionTypes.NGO_STORY: {
            return {
                ...state,
                items: action.payload,
                isLoading: false
            }

        }
        case NgoActionTypes.DELETE_STORY_BY_ID: {
            return {
                ...state,
                items: action.payload,
                isLoading: false,
            }
        }
        case NgoActionTypes.VIEW_STORY_BY_ID: {
            return {
                ...state,
                items: action.payload,
                isLoading: false,
            }
        }
        case NgoActionTypes.SAVE_EVENT: {
            return {
                ...state,
                items: action.payload,
                isLoading: false,
            }
        }
        case NgoActionTypes.DELETE_EVENT_BY_ID: {
            return {
                ...state,
                items: action.payload,
                isLoading: false,
            }
        }
        case NgoActionTypes.VIEW_EVENT_BY_ID: {
            return {
                ...state,
                items: action.payload,
                isLoading: false,
            }
        }
        case NgoActionTypes.SAVE_GALLERY_IMAGE: {
            return {
                ...state,
                items: action.payload,
                isLoading: false,
            }
        }
        case NgoActionTypes.UPDATE_GALLERY_IMAGE_TITLE: {
            return {
                ...state,
                items: action.payload,
                isLoading: false,
            }
        }
        case NgoActionTypes.DELETE_GALLERY_IMAGE: {
            return {
                ...state,
                items: action.payload,
                isLoading: false,
            }
        }
        default:
            return state;
    }
   
}