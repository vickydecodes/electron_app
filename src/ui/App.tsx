import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({});

  useEffect(() => {
    window.electron.subscribeStatistics((stats) => setData(stats));
  }, []);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <ul>
        {console.log({data: data})}
        <li><b style={{marginRight: '10px'}}>Cpu Usage:   </b>{data?.cpuUsage}</li>
        <li><b style={{marginRight: '10px'}}>Ram Usage:   </b>{data?.ramUsage}</li>
        <li><b style={{marginRight: '10px'}}>Storage Usage:    </b>{data?.storageUsage}</li>
      </ul>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
