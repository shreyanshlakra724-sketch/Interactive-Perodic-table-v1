import './App.css';
import {useState, useEffect} from 'react';



function Navbar () {
  return (
    <nav id="navbar">
    <h1>Interactive Perodic Table</h1>
    </nav>
  );  
} 

function GridMaker() {
    const [elements, setElements] = useState([])

    useEffect(() => {
        fetch("https://api.periodictableofelements.org/elements/")
            .then((response) => response.json())
            .then((data) => setElements(data))
            .catch((error) => console.error("Error fetching elements:", error))
    }, [])

    return (
        <div className="grid-maker">
            {elements.map((element) => (
                <ElementID
                    key={element.symbol}
                    symbol={element.symbol}
                    group={element.group}
                    period={element.period}
                />
            ))}
        </div>
    )
}

function ElementID({symbol, group, period}) {
    return (
        <div className = "ElementID" style = {{gridColumn: group, gridRow: period}}>
            {symbol}


        </div>




    )
}


function App() {
  return (
    <div>
      <Navbar />
      <GridMaker/>
    </div>
  )
}

export default App;