import {useEffect, useState} from "react";
import {ReactVirtualizedTable} from "./components/ReactVirtualizedTable";

function App() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((response) => response.json())
            .then((data) => {
                let res = data.filter(word => word.title.split(' ').length < 8);
                setPhotos(res);
            })
            .catch(e => console.log(e));
    }, []);

    return (
        <div>
            <ReactVirtualizedTable photos={photos}/>
        </div>
    );
}

export default App;
