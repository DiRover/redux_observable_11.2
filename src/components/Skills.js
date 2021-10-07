import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchField } from '../actions/actionCreators';

export default function Skills() {
    const { items, loading, error, search } = useSelector(state => state.skills);
    //console.log('search')
    //console.log(typeof(search))
    //console.log('search')
    const dispatch = useDispatch();

    const handleSearch = evt => {
        //console.log(evt.target.value);
        const { value } = evt.target;
        dispatch(changeSearchField(value));
    };

    const hasQuery = search.trim() !== '';
   // console.log(hasQuery, 'hasQuery')
    return (
        <Fragment>
            <div><input type="search" value={search} onChange={handleSearch} /></div>
            {!hasQuery && <div>Type something to search</div>}
            {hasQuery && loading && <div>searching...</div>}
            {error ? <div>Error occured</div> : <ul>{items.map(o => <li key={o.id}>{o.name}</li>)}</ul>}
        </Fragment>
    )
}
