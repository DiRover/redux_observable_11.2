import { useState, useEffect, Fragment, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Provider from '../context/Provider';
import { loadServicesList } from '../actions/actionCreators';
import {Link} from 'react-router-dom';
import Context from '../context/Context';


function List() {
    const { list, loading } = useSelector(state => state.list);
    const { getDescription } = useContext(Context);
    // console.log(list);
    const dispatch = useDispatch();

    return (
        <Fragment>
            <div className="list-group">
            {list.map((item) => {
                return <Link to={`/list/${item.id}`} key={item.id} onClick={() => getDescription(item.id)}   className="list-group-item list-group-item-action list-group-item-info">{item.name}</Link>
            })}
            </div>
            <Link to='/test'>FDFD</Link>
            
        </Fragment>

    )
};

export default List;