import reactLogo from "./assets/react.svg";
import "./App.css";
import { useAppSelector } from "./hooks/redux";
import { useTriggerMultipleActions } from "./hooks/use-trigger-multiple-actions";

function App() {
  const counter = useAppSelector((store) => store.counter);
  const { isProcessing, trigger } = useTriggerMultipleActions();

  if (isProcessing === "done") {
    if (counter.value !== 13) throw new Error("Counter should be 13");
    console.log("counter value is 13", counter);
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={trigger}>Start multiple actions</button>
        <div>count is {counter.value}</div>
        <div>
          {isProcessing === "processing" && "Processing Multiple actions"}
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
