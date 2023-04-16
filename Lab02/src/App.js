import './App.css';
import {MyCounter} from "./components/MyCounter";
import {Cart} from "./components/Cart";
import {GuessNumber} from "./components/GuessNumber";

const counters = [
    {id: 1, initial: 6, min: -5, max: 10},
    {id: 2, initial: 5},
    {id: 3},
];

const products = [
    {id: 1, name: "Constructor Lego", price: 300, min: 1, max: 10},
    {id: 2, name: "Train Station", price: 200, min: 1, max: 10},
    {id: 3, name: "Hot Wheels Track", price: 150, min: 1, max: 10},
];

function App() {
    return (
        <div className="App" >
            {
                counters.map(counter => <MyCounter key={counter.id} counter={counter}/>)
            }
            <Cart products={products}/>
            <GuessNumber/>
        </div>
    );
}

export default App;
