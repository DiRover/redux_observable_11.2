import Context from "./Context";
import {loadDescription} from "../actions/actionCreators";
import { useSelector, useDispatch } from 'react-redux';

export default function Provider(prop) {
    const dispatch = useDispatch();
    const getDescription = (id) => {
        console.log('provider')
        console.log(id)
        console.log('provider')
        dispatch(loadDescription(id));
    }
    return(
        <Context.Provider value={{getDescription}}>
            {prop.children}
        </Context.Provider>
    )
}

