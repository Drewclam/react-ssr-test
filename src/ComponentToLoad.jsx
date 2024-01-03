import logo from './logo.svg';

const ComponentToLoad = () => {
  for (let i = 0; i < 100000; i++) {
    // simulate process
  }
  return <>
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </>
}

export default ComponentToLoad;