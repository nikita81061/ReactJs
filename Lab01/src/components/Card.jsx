import {Price} from "./Price";
export function Card(props) {
    return (
        <div className='card'>
            <span style={{textAlign: 'right'}}>Like</span>
            <img src="https://content1.rozetka.com.ua/goods/images/big/255227981.jpg" alt="" width='150px'/>
            <div style={{textAlign: "center"}}>
                <div>{props.name}</div>
                <Price price={props.price}/>
            </div>
        </div>
    )
}