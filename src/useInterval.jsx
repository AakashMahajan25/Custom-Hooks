import { useEffect } from "react";

const useInterval = (callback, delay) => {
  useEffect(() => {
    const intervalId = setInterval(callback, delay);

    return () => clearInterval(intervalId);
  }, [callback, delay]);
};

function App() {
  const callback = () => {
    console.log('Interval executed');
    // Add any logic you want to run on each interval tick here
  };

  useInterval(callback, 1000); // Pass the callback and delay to useInterval

  return (
    <>
      Your App is running.
    </>
  );
}

export default App;
