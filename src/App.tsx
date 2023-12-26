import { useEffect, useState } from 'react'
import { useIsDarkMode } from './useIsDarkMode';
import { Map } from '@pansy/react-amap';

function App() {
  const isDarkMode = useIsDarkMode();
  const [theme, setTheme] = useState("amap://styles/light");
  useEffect(() => {
    if (isDarkMode) {
      console.log("dark mode");
      setTheme("amap://styles/grey");
    } else {
      console.log("light mode");
      setTheme("amap://styles/fresh");
    }
  }, [isDarkMode]);

  return (
    <div style={{ height: 500 }}>
      <Map mapStyle={theme} />
    </div>
  );
}

export default App
