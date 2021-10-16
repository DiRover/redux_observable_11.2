import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, tap, retry, filter, debounceTime, switchMap, catchError } from 'rxjs/operators';
import { LOAD_SERVICES_LIST, LOAD_DESCRIPTION } from '../actions/actionTypes';
import { loadSuccess, loadDescriptionSuccess } from '../actions/actionCreators';
import { of } from 'rxjs';

export const listEpic = action$ => action$.pipe(
    ofType(LOAD_SERVICES_LIST),
    switchMap(() => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}/services`).pipe(
        map(respons => loadSuccess(respons)),
    )),
);

export const descriptionEpic = action$ => action$.pipe(
    ofType(LOAD_DESCRIPTION),
    map(o => o.payload.id),
    tap(o => console.log(o)),
    //map(o => new URLSearchParams({ q: o })),//нафиш этот квери, потом на сервере сложнее айди вытащить
    switchMap((id) => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}/services/${id}`)),
    map(o => loadDescriptionSuccess(o))
);