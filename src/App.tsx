import { useState, FC, ReactNode } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import s from "./App.module.scss";

type Props = {
  onClick?: () => void;
  label?: "primary" | "secondary";
  children: ReactNode;
};

const Button: FC<Props> = (props) => {
  return <>{props.children}</>;
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={s.ccccccc}>asdasdas</div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
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
      <Button label="secondary">coś</Button>
    </>
  );
}

export default App;
