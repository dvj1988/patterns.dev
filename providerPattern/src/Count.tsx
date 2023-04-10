import { useEffect } from "react";
import { useCounterContext } from "./context/counter";

const Count = () => {
  const { count } = useCounterContext();

  useEffect(() => {
    console.log("Count mounted");
  }, []);

  useEffect(() => {
    console.log("Count updated");
  }, [count]);

  return <div>{count}</div>;
};

export default Count;
