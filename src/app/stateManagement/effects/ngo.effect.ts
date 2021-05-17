import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as ngoAction from '../actions/ngo.action';
import { GetError } from '../actions/error.action'
import { NgoService } from '@common/services/ngo.service';
import { Router } from '@angular/router';
import { TreeDragDropService } from 'primeng';

@Injectable()
export class NgoEffects {
    errors: any = {};

    constructor(
        private actions$: Actions,
        private ngoService: NgoService,
        private router: Router
    ) { }

    // Get NGO Categories
    @Effect()
    getCategories$ = this.actions$.pipe(
        ofType(ngoAction.NgoActionTypes.GET_NGO_CATEGORIES),
        mergeMap(action =>
            this.ngoService.getAllNgoCategories().pipe(
                map(categories => (new ngoAction.NgoSuccessLoaded(categories))),
                catchError((errors) => of(new GetError(errors.error)))
            )
        )
    )
    // submit all steps of ngo form
    @Effect()
    submitNgoFormData$ = this.actions$.pipe(
        ofType(ngoAction.NgoActionTypes.NGO_SIGNUP_FORM_FOUR),
        mergeMap(({ payload }) =>
            this.ngoService.saveNgoFormAllSteps(payload).pipe(
                map(categories => (new ngoAction.NgoSuccessLoaded(categories))),
                catchError((errors) => of(new GetError(errors.error)))
            )
        )
    )
    @Effect()
    NgoStory$ = this.actions$.pipe(
        ofType(ngoAction.NgoActionTypes.NGO_STORY),
        mergeMap(({ payload }) =>
            this.ngoService.saveNgoStoryData(payload).pipe(
                map((res) => { return (new ngoAction.NgoSuccessLoaded(res)) }),
                catchError((err) => of(new GetError(err.error)))
            )
        )
    );
    // Delete Story
    @Effect()
    deleteStory$ = this.actions$.pipe(
        ofType(ngoAction.NgoActionTypes.DELETE_STORY_BY_ID),
        mergeMap(({ payload }) =>
            this.ngoService.deleteStoryById(payload).pipe(
                map((res) => { return (new ngoAction.NgoSuccessLoaded(res)) }),
                tap(() => this.router.navigate(['/ngobackend/story/desk'])),
                catchError((err) => of(new GetError(err.error)))
            )
        )
    );
    // View Story
    @Effect()
    viewStory$ = this.actions$.pipe(
        ofType(ngoAction.NgoActionTypes.VIEW_STORY_BY_ID),
        mergeMap(({ payload }) =>
            this.ngoService.viewStoryById(payload).pipe(
                map((res) => { return (new ngoAction.NgoSuccessLoaded(res)) }),
                tap(() => this.router.navigate(['/ngobackend/story/view'])),
                catchError((err) => of(new GetError(err.error)))
            )
        )
    );
    // Save NGO Event Data
    @Effect()
    saveEvent$ = this.actions$.pipe(
        ofType(ngoAction.NgoActionTypes.SAVE_EVENT),
        mergeMap(({ payload }) =>
            this.ngoService.saveEventData(payload).pipe(
                map((res) => { return (new ngoAction.NgoSuccessLoaded(res)) }),
                catchError((err) => of(new GetError(err.error)))
            )
        )
    );

    // Delete Event
    @Effect()
    deleteEvent$ = this.actions$.pipe(
        ofType(ngoAction.NgoActionTypes.DELETE_EVENT_BY_ID),
        mergeMap(({ payload }) =>
            this.ngoService.deleteEventById(payload).pipe(
                map((res) => { return (new ngoAction.NgoSuccessLoaded(res)) }),
                tap(() => this.router.navigate(['/ngobackend/event/desk'])),
                catchError((err) => of(new GetError(err.error)))
            )
        )
    );

    // View Events by id
    @Effect()
    viewEvent$ = this.actions$.pipe(
        ofType(ngoAction.NgoActionTypes.VIEW_EVENT_BY_ID),
        mergeMap(({ payload }) =>
            this.ngoService.viewEventById(payload).pipe(
                map((res) => {
                    return (new ngoAction.NgoSuccessLoaded(res))
                }),
                tap(() => this.router.navigate(['/ngobackend/event/view'])),
                catchError((err) => of(new GetError(err.error)))
            )
        )
    );

    // Save Gallery Image
    @Effect()
    saveGallery$ = this.actions$.pipe(
        ofType(ngoAction.NgoActionTypes.SAVE_GALLERY_IMAGE),
        mergeMap(({ payload }) =>
            this.ngoService.saveGalleryImage(payload).pipe(
                map((res) => {
                    return (new ngoAction.NgoSuccessLoaded(res))
                }),
                catchError((err) => of(new GetError(err.error)))
            )
        )
    );

    // Delete Gallery Image
    @Effect()
    deleteGalleryImg$ = this.actions$.pipe(
        ofType(ngoAction.NgoActionTypes.DELETE_GALLERY_IMAGE),
        mergeMap(({ payload }) =>
            this.ngoService.deleteGalleryImage(payload).pipe(
                map((res) => {
                    return (new ngoAction.NgoSuccessLoaded(res))
                }),
                catchError((err) => of(new GetError(err.error)))
            )
        )
    );

    // Update Gallery Image Name
    @Effect()
    updateGalleryImgName$ = this.actions$.pipe(
        ofType(ngoAction.NgoActionTypes.UPDATE_GALLERY_IMAGE_TITLE),
        mergeMap(({ payload }) =>
            this.ngoService.updateGalleryImageName(payload).pipe(
                map((res) => {
                    return (new ngoAction.NgoSuccessLoaded(res))
                }),
                catchError((err) => of(new GetError(err.error)))
            )
        )
    );

    @Effect()
    getNgoDetail$ = this.actions$.pipe(
        ofType(ngoAction.NgoActionTypes.NGO_ABOUT_AND_IMAGE_APPROVEL),
        mergeMap(({ payload }) =>
            this.ngoService.getNgoDetail().pipe(
                map((res) => {
                    return (new ngoAction.NgoSuccessLoaded(res))
                }),
                catchError((err) => of(new GetError(err.error)))
            )
        )
    );
}
