import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { loadServicesList } from '../actions/actionCreators';
import { useDispatch } from 'react-redux';
import Load from "./Load";
import List from "./List";
import Description from "./Description";
import Test from "./Test";
//объединенный компонент с роутами
function UnionComponent(): JSX.Element {
    const dispatch = useDispatch();
    dispatch(loadServicesList());// обошёлся без useEffect

    return (
        <Router>
            <main className="main-container">
                <Switch>
                    <Route path="/list/:id" exact component={Description} />
                    <Route path="/test" exact component={Test} />
                    <Route path="/list" exact component={List} />
                    <Route path="/" exact component={Load} />
                </Switch>
            </main>
        </Router>
    )
}

export default UnionComponent