import { Fragment } from 'react';
import {Link} from 'react-router-dom';

export default function Description() {
    console.log('description');
    return (
        <Fragment>
            <Link to='/'>Home</Link>
        </Fragment>
    )
}