import { useEffect, useState } from "react";

const useDimensions = () => {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

  useEffect(() => {
    setDimensions({ height: window.innerHeight, width: window.innerWidth });
  }, []);

  return dimensions;
};

function App() {
  const dimensions = useDimensions();

  return (
    <>
      Your Height and Width are {dimensions.height} & {dimensions.width}
    </>
  );
}

export default App;
