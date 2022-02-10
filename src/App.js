import React from 'react'
import cat from './images.png';
import './App.css';


function App() {
  const [isCalculating, setIsCalculating] = React.useState(false)
  const [isMouseUp, setIsMouseUp] = React.useState(false)
  const [clientX, setClientX] = React.useState(null)
  const [clientY, setClientY] = React.useState(null)
  const [height, setHeight] = React.useState(null)
  const [width, setWidth] = React.useState(null)
  const [calcHeight, setCalcHeight] = React.useState(null)
  const [calcWidth, setCalcWidth] = React.useState(null)
  const [showBox, setShowBox] = React.useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <div onMouseDown={(e) => 
          {
            setIsCalculating(true)
            setShowBox(true)
            setClientX(e.clientX)
            setClientY(e.clientY)
            setHeight("0")
            setWidth("0")
          }}            
          onMouseMove={(e) => {
            if (isCalculating) {
              console.log(e)
              setCalcWidth(e.clientX - clientX)
              setCalcHeight(e.clientY- clientY)
            }
            
          }}
          onMouseUp = {() => {
            setIsCalculating(false)
            setHeight(calcHeight)
            setWidth(calcWidth)
          }}
          style={{position: 'relative', height: '100vh', width: "100vw"}}
          >
        <div >
          <div>
            <img src={cat} />
          
          {
            showBox &&
            <div style={{position: 'absolute', top: clientY, left: clientX, color: "black", borderStyle: "solid", height: isCalculating ? calcHeight : height, width : isCalculating ? calcWidth: width}}></div>
          }
          </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
