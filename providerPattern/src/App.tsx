import "./App.css";
import Count from "./Count";
import { CounterProvider } from "./context/counter";
import { IncrementButton, DecrementButton } from "./Button";
import OtherComponent from "./OtherComponent";

function App() {
  return (
    <CounterProvider>
      <Count />
      <IncrementButton />
      <DecrementButton />
      <OtherComponent />
    </CounterProvider>
  );
}

export default App;
