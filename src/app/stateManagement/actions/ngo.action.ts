import { Action } from '@ngrx/store';

export enum NgoActionTypes {
    GET_NGO_CATEGORIES = 'NgoCategories[] get NGO Categories Data',
    NGO_SIGNUP_FORM_ONE = 'Add NGO Signup One Form Data In LocalStorage',
    NGO_SIGNUP_FORM_TWO = 'Add NGO Signup Two Form Data In LocalStorage',
    NGO_SIGNUP_FORM_THREE = 'Add NGO Signup Three Form Data In LocalStorage',
    NGO_SIGNUP_FORM_FOUR = 'Add NGO Signup Form All Data in DB',
    NGO_SUCCESS_LOADED = 'NGO Success Loading',
    NGO_LOADING = 'NGO Data Loading',
    NGO_STORY = 'Add NGO story Data',
    DELETE_STORY_BY_ID = 'Delete STORY Event By Id',
    VIEW_STORY_BY_ID = 'VIEW STORY Event By Id',
    SAVE_EVENT = 'Save NGO Events Data',
    DELETE_EVENT_BY_ID = 'Delete NGO Event By Id',
    VIEW_EVENT_BY_ID = 'VIEW NGO Event By Id',
    SAVE_GALLERY_IMAGE = 'Save NGO Gallery Images',
    DELETE_GALLERY_IMAGE = 'Delete Gallery Image By Id',
    UPDATE_GALLERY_IMAGE_TITLE = 'Update Gallery Image Name',
    NGO_ABOUT_AND_IMAGE_APPROVEL = 'View ngo image and detail',
}
export class NgoLoading implements Action {
    readonly type = NgoActionTypes.NGO_LOADING;
    constructor(public payload: null) { }
}
export class NgoSuccessLoaded implements Action {
    readonly type = NgoActionTypes.NGO_SUCCESS_LOADED;
    constructor(public payload: any) { }
}
export class GetNgoCategories implements Action {
    readonly type = NgoActionTypes.GET_NGO_CATEGORIES;
}
export class NgoSignupFormOne implements Action {
    readonly type = NgoActionTypes.NGO_SIGNUP_FORM_ONE;
    constructor(public payload:any){}
}
export class NgoSignupFormTwo implements Action {
    readonly type = NgoActionTypes.NGO_SIGNUP_FORM_TWO;
    constructor(public payload: any) { } 
} 
export class NgoSignupFormThree implements Action {
    readonly type = NgoActionTypes.NGO_SIGNUP_FORM_THREE;
    constructor(public payload: any) { }
} 
export class NgoSignupFormFour implements Action {
    readonly type = NgoActionTypes.NGO_SIGNUP_FORM_FOUR;
    constructor(public payload: any) { }
} 
export class SaveEvent implements Action {
    readonly type = NgoActionTypes.SAVE_EVENT;
    constructor(public payload: any) { }
}
export class NgoStory implements Action {
    readonly type = NgoActionTypes.NGO_STORY;
    constructor(public payload: any) { }
}
export class DeleteNgoStory implements Action {
    readonly type = NgoActionTypes.DELETE_STORY_BY_ID;
    constructor(public payload: any) { }
}
export class ViewStoryById implements Action {
    readonly type = NgoActionTypes.VIEW_STORY_BY_ID;
    constructor(public payload: any) { }
}
export class DeleteNgoEvent implements Action {
    readonly type = NgoActionTypes.DELETE_EVENT_BY_ID;
    constructor(public payload: any) { }
}

export class ViewEventById implements Action {
    readonly type = NgoActionTypes.VIEW_EVENT_BY_ID;
    constructor(public payload: any) { }
}

export class SaveGalleryImages implements Action {
    readonly type = NgoActionTypes.SAVE_GALLERY_IMAGE;
    constructor(public payload: any) { }
}

export class DeleteGalleryImage implements Action {
    readonly type = NgoActionTypes.DELETE_GALLERY_IMAGE;
    constructor(public payload: any) { }
}

export class UpdateGalleryImageName implements Action {
    readonly type = NgoActionTypes.UPDATE_GALLERY_IMAGE_TITLE;
    constructor(public payload: any) { }
}

export class ViewNgoAboutAndImageApprovel implements Action {
    readonly type = NgoActionTypes.NGO_ABOUT_AND_IMAGE_APPROVEL;
}


export type NgoActions = GetNgoCategories
    | NgoSignupFormOne
    | NgoSignupFormTwo
    | NgoSignupFormThree 
    | NgoSignupFormFour
    | NgoStory
    | DeleteNgoStory
    | ViewStoryById
    | NgoLoading
    | NgoSuccessLoaded
    | SaveEvent
    | DeleteNgoEvent
    | ViewEventById
    | SaveGalleryImages
    | DeleteGalleryImage
    | UpdateGalleryImageName
    | ViewNgoAboutAndImageApprovel
