import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {loadServicesList} from '../actions/actionCreators';


function List() {
    const { list, loading } = useSelector(state => state.list);
    // console.log('json');
    // console.log(json);
    // console.log('json');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadServicesList());
        // const getFetch= async () => {
        //     const respons = await fetch(`${process.env.REACT_APP_SEARCH_URL}/services`);
        //     const json = await respons.json();
        //     dispatch(loadServicesList(json));
        // };
        // getFetch();
        
        //dispatch(loadServicesList)
    }, [])
    return (null)
};

export default List;