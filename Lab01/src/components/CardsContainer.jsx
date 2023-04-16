import {Card} from "./Card";

export function CardsContainer(props) {
    return (
        <div style={{marginBottom: "80px"}}>
            <h3>{props.title}</h3>

            <div className='cards'>
                {props.products.map((el) =>
                    <Card key={el.id} name={el.name} price={el.price}/>)
                }
            </div>
            <a href='#' style={{float: 'right'}}>Показати ще</a>
        </div>
    )
}