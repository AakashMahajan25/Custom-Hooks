import React from 'react'
import ReactDOM from 'react-dom/client'
// import Data from './App.jsx'
// import Online from './useIsOnline.jsx'
// import Dimensions from './useDimensions'
// import Interval from './useInterval'
import Debounce from './useDebounce'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Data /> */}
    {/* <Online /> */}
    {/* <Dimensions /> */}
    {/* <Interval /> */}
    <Debounce />
  </React.StrictMode>,
)
