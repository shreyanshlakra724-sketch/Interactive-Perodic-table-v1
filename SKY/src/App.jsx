import './App.css';
import {useState, useEffect} from 'react';



function Navbar () {
  return (
    <nav id="navbar">
    <h1>Interactive Perodic Table</h1>
    <div className="nav-links">
        <a href="#">Elements</a>
        <a href="#">Blocks</a>
        <a href="#">Groups</a>
    </div>
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

    f

    return (
        <div className="grid-maker">
            {elements.map((element) => (
                <ElementID
                    key={element.symbol}
                    symbol={element.symbol}
                    gridColumn={element.grid_column}
                    gridRow={element.grid_row}
                />
            ))}
            <div
            className = "ElementID"
            style = {{gridColumn:3, gridRow : 6}}
            >
                57-71
            </div>

            <div
            className = "ElementID"
            style = {{gridColumn:3, gridRow : 7}}
            >
                89-103
            </div>




            



        </div>
    )
}

function ElementID({symbol, gridColumn, gridRow}) {
    return (
        <div className = "ElementID" style = {{gridColumn: gridColumn, gridRow: gridRow}}>
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