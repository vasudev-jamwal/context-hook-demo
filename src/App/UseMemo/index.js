import React, {Fragment, useMemo, useState} from "react";

const someHeavyComputation = (a) => {
    console.log(`Crunching numbers.... for ${a}`);
    return a + 10;
};

export const UseMemoExample = () => {

    const someProperty = 100;
    const someOtherProperty = 200;

    const [update, justUpdate] = useState(0);

    const foo = someHeavyComputation(someProperty);
    const bar = useMemo(() => someHeavyComputation(someOtherProperty), [someOtherProperty]);

    return (
        <Fragment>
            <p>{`Evaluated Value : ${foo}`}</p>
            <p>{`Memoized Value : ${bar}`}</p>
            <button
                type="button" className="btn btn-primary"
                onClick={() => {
                    justUpdate((prev) => prev + 1);
                }}
            >
                Rerender
            </button>
        </Fragment>
    );
};
