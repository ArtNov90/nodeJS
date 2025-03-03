import {createReducer, on} from '@ngrx/store';
import {increment, decrease, reset, incrementByNumber} from './counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(
    initialState,
    on(increment, (state, combien) => state + 1),
    on(decrease, (state) => state - 1),
    on(reset, () => initialState),
    on(incrementByNumber, (state, {combien}) => state + combien)
)

export function counterReducer(state: any, action: any){
    return _counterReducer(state, action);
}