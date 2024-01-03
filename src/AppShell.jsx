import React, { Suspense, lazy } from 'react';

const HeavyApp = lazy(async () => {
   await new Promise((resolve) => setTimeout(() => {resolve()}, 2000))
    return import('./App') 
});
const AppShell = () => {
    return <Suspense fallback={<h1>I am an AppShell!</h1>}>
        <HeavyApp />
    </Suspense>
}

export default AppShell;