import React, { useState } from 'react';

const AppServer = () => {
  const [count, setCount] = useState(0);

  console.log('RENDER')

  return (
    <div>
      <h1>Hello from Server-Side Rendered React App! {count}</h1>
      <button onClick={() => {
        console.log('clikc')
        setCount(count + 1)
        }}>Increment</button>
        <input onChange={() => console.log('change')}/>
    </div>
  );
};

export default AppServer;