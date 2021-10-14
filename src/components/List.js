import {useState, useEffect, Fragment} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {loadServicesList} from '../actions/actionCreators';


function List() {
    const { list, loading } = useSelector(state => state.list);
    console.log(list);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadServicesList());
    }, [])
    return (
        <Fragment>
            {loading && <div class="d-flex justify-content-center">
            <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
</div>}
        </Fragment>
        
    )
};

export default List;