import { createContext, useContext, useState } from "react";

const CounterContext = createContext<{
  count: number;
  increment: () => void;
  decrement: () => void;
}>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

const CounterProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounterContext = () => {
  const context = useContext(CounterContext);

  if (context === undefined) {
    throw new Error("useCounterContext must be used within a CounterProvider");
  }
  return context;
};

export { CounterProvider, useCounterContext };
