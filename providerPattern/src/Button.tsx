import { useEffect } from "react";
import { useCounterContext } from "./context/counter";

const IncrementButton = () => {
  const { increment } = useCounterContext();

  useEffect(() => {
    console.log("IncrementButton mounted");
  }, []);

  useEffect(() => {
    console.log("IncrementButton updated");
  }, [increment]);

  return <button onClick={increment}>Increment</button>;
};

const DecrementButton = () => {
  const { decrement } = useCounterContext();

  useEffect(() => {
    console.log("DecrementButton updated");
  }, [decrement]);

  useEffect(() => {
    console.log("DecrementButton mounted");
  }, []);

  return <button onClick={decrement}>Decrement</button>;
};

export { IncrementButton, DecrementButton };
