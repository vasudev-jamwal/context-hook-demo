import React, {useState, useEffect, Fragment} from "react";

export const UseEffectMount = () => {

    const [count, setCount] = useState(0);
    const [update, justUpdate] = useState(0);

    useEffect(() => {
        console.log('useEffect triggered -> fetching fresh data');

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setCount(Object.keys(json).length));

        /*
                return () => {
                    console.log('Runs before next useEffect');
                }
        */

    }); // adding [] here will convert this to componentDidMount

    return (
        <Fragment>
            <p>{`JSON Response length : ${count}`}</p>
            <button type="button" className="btn btn-primary"
                    onClick={() => {
                        justUpdate((prev) => prev + 1);
                    }}
            >
                Rerender
            </button>
        </Fragment>
    );
};
