import React, { useState, useEffect, createContext, useContext } from 'react';
import './App.scss';
import { Desktop, Mobile } from './components';

const viewPortContext = createContext({});

const ViewportProvider = ({children}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewPortContext.Provider value={{ width, height }}>
      {children}
    </viewPortContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = useContext(viewPortContext);
  return { width, height };
};

const Webpage = () => {
  const { width } = useViewport();
  const breakpoint = 950;

  return width < breakpoint ? <Mobile/> : <Desktop/>;
}

function App() {
  return (
    <div className="App">
      <ViewportProvider>
        <Webpage/>
      </ViewportProvider>
    </div>
  );
}

export default App;
