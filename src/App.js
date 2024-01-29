import Header from "./components/Header"
import Card from "./components/Card"
import './App.css';
import data from "./data"
function App() {
  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            {...item}
        />
    )
}) 
  return (
    <div className="App">
        <Header />
        <div className="cards">
          {cards}
        </div>
    </div>
  );
}

export default App;
