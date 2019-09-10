import React, { Component, Suspense } from 'react';

class MyComponent extends Component {
    render() {
        const FirstComponent = React.lazy(() => import('./FirstComponent'));
        const SecondComponent = React.lazy(() => import('./SecondComponent'));

        return (
            <>
                <Suspense fallback={<div>Loading……</div>}>
                    <FirstComponent />
                    <SecondComponent />
                </Suspense>

            </>
        )
    }
}

export default MyComponent;
