import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {NestedProps} from "./NestedProps";
import {ContextExample} from "./ContextExample";
import {UseStateCounter} from "./UseState";
import {UseReducerExample} from "./UseReducer";
import {ContextAndHookExample} from "./ContextAndHooks";
import {UseEffectMount} from "./UseEffect/useEffectMount";
import "./style.scss";

export const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul className="pagination">
                        <li>
                            <Link to="/drilling">Props Drilling</Link>
                        </li>
                        <li>
                            <Link to="/context">Context</Link>
                        </li>
                        <li>
                            <Link to="/useStateHook">Use State Hook</Link>
                        </li>
                        <li>
                            <Link to="/useReducerHook">Use Reducer Hook</Link>
                        </li>
                        <li>
                            <Link to="/contextAndHook">Context and Hooks combined</Link>
                        </li>
                        <li>
                            <Link to="/useEffectMount">useEffect - LifeCycle methods</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/drilling">
                        <NestedProps/>
                    </Route>
                    <Route path="/context">
                        <ContextExample/>
                    </Route>
                    <Route path="/useStateHook">
                        <UseStateCounter/>
                    </Route>
                    <Route path="/useReducerHook">
                        <UseReducerExample/>
                    </Route>
                    <Route path="/contextAndHook">
                        <ContextAndHookExample/>
                    </Route>
                    <Route path="/useEffectMount">
                        <UseEffectMount/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

function Home() {
    return <h2>Select Example</h2>;
}
