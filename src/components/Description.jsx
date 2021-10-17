import { Fragment } from 'react';
import {Link} from 'react-router-dom';

export default function Description() {
    console.log('description');
    return (
        <Fragment>
            <p class="text-xl-start">Start aligned text on viewports sized XL (extra-large) or wider.</p>
            <Link to='/'><button type="button" class="btn btn-info btn-lg">Home</button></Link>
        </Fragment>
    )
}