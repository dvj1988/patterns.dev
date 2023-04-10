import { useEffect } from "react";

const OtherComponent = () => {
  useEffect(() => {
    console.log("OtherComponent mounted");
  }, []);

  useEffect(() => {
    console.log("OtherComponent updated");
  }, []);

  return <div>Other Component</div>;
};

export default OtherComponent;
