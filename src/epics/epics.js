import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, tap, retry, filter, debounceTime, switchMap, catchError } from 'rxjs/operators';
import { LOAD_SERVICES_LIST } from '../actions/actionTypes';
import { loadSuccess, searchServiceSuccess } from '../actions/actionCreators';
import { of } from 'rxjs';

export const listEpic = action$ => action$.pipe(
    ofType(LOAD_SERVICES_LIST),
    switchMap(() => {
        ajax.getJSON(`http://localhost:7070/api/search/services`)}),
    map(map(respons =>{ 
        loadSuccess(respons)}))
 
);