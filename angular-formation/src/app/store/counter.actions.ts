import {createAction, props} from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrease = createAction('[Counter] Decrease');
export const reset = createAction('[Counter] Reset');
export const incrementByNumber = createAction('[Counter] Increment by a number', props<{combien: number}>());