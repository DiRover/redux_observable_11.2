import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {loadServicesList} from '../actions/actionCreators';


function List() {
    const { list, loading } = useSelector(state => state.list);
    console.log(list);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadServicesList());
    }, [])
    return (null)
};

export default List;