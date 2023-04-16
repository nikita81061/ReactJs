import {useState} from "react";

export function Color(props) {
    const [color, setColor] = useState('black');
    return (
        <div>
            <h1 style={{color: color}}>
                {color}
            </h1>
            <select onChange={(e) => {
                setColor(e.target.value)
            }} name="" id="colors">
                {props.colors.map((color) => <option key={color.id} value={color.color}>{color.color}</option>)}
            </select>
        </div>
    )
}