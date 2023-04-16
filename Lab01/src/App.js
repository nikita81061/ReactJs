import './App.css';
import {Color} from "./components/Color";
import {Table} from "./components/Table";
import {Product} from "./components/Product";
import {CityList} from "./components/CityList";
import {CardsContainer} from "./components/CardsContainer";

const product1 = {name: 'Mouse', 'price': 20}

const products = [
    {
        id: 1,
        name: 'Сковорода De Buyer',
        price: 19629
    },
    {
        id: 2,
        name: 'Сковорода De Buyer',
        price: 20629
    },
    {
        id: 3,
        name: 'Сковорода De Buyer',
        price: 25629
    },
    {
        id: 4,
        name: 'Сковорода De Buyer',
        price: 23629
    },
    {
        id: 5,
        name: 'Сковорода De Buyer',
        price: 22629
    },
];

const cities = [
    {
        id: 1,
        name: 'Chicago',
        image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.travelandleisure.com%2Fthmb%2FO5JN2kT-Zs6X4nakZPDvAT4ANfo%3D%2F1800x1012%2Fsmart%2Ffilters%3Ano_upscale()%2Fchicago-illinois-CHITG0221-e448062fc5164da0bba639f9857987f6.jpg&imgrefurl=https%3A%2F%2Fwww.travelandleisure.com%2Ftravel-guide%2Fchicago&tbnid=uXUXiDJq74VyEM&vet=12ahUKEwiEn-bToZb6AhXssosKHZmODkUQMygFegUIARDHAQ..i&docid=3phaT8CmOgR_dM&w=1800&h=1012&q=chicago&ved=2ahUKEwiEn-bToZb6AhXssosKHZmODkUQMygFegUIARDHAQ'
    },
    {
        id: 2,
        name: 'Los Angeles',
        image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F3%2F32%2F20190616154621%2521Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FLos_Angeles_County%2C_California&tbnid=uJI7L2KSc9GT_M&vet=12ahUKEwik6b3zoZb6AhVjhosKHcgxDE0QMygHegUIARDNAQ..i&docid=aG0rDIWqFebSLM&w=3992&h=2242&q=Los%20Angeles&ved=2ahUKEwik6b3zoZb6AhVjhosKHcgxDE0QMygHegUIARDNAQ'
    },
    {
        id: 3,
        name: 'New York',
        image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa5%2FWest_side_of_Manhattan_from_Hudson_Commons_%252895103p%2529.jpg%2F1200px-West_side_of_Manhattan_from_Hudson_Commons_%252895103p%2529.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FNew_York_City&tbnid=frt_4qcIwqZl9M&vet=12ahUKEwjvr8SAopb6AhUGl4sKHanbCKoQMygEegUIARDGAQ..i&docid=CNXi28oHbZhMkM&w=1200&h=644&itg=1&q=New%20York&ved=2ahUKEwjvr8SAopb6AhUGl4sKHanbCKoQMygEegUIARDGAQ'
    },
];
const colors = [
    {
        id: 1,
        color: 'black'
    },
    {
        id: 2,
        color: 'green'
    },
    {
        id: 3,
        color: 'red'
    },
    {
        id: 4,
        color: 'yellow'
    },
    {
        id: 5,
        color: 'purple'
    },
];

function App() {
    return (
        <div className='App'>
            <Table/>
            <Product product={product1}/>
            <CardsContainer title='Останні переглянуті товари' products={products}/>
            <CardsContainer title='Реклама' products={products}/>
            <CityList cities={cities}/>
            <Color colors={colors}/>
        </div>
    );
}

export default App;
