import './App.css';
import React, { Suspense, lazy, useState } from 'react';

const ComponentToLoad = lazy(() => import('./ComponentToLoad'));

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        Count:{count}
        <button onClick={() => {
          console.log('clikc')
          setCount(count + 1)
          }}>Increment</button>
        <Suspense fallback={<h1>Loading...</h1>}>
          <ComponentToLoad />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
