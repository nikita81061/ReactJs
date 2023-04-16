import {GetCard} from "./Card";

export function CardList(props) {
    return (
        <div className="cardList">
            {props.products.map((item) => {
                return <GetCard product={item} focusButton={props.focusButton} key={item.id} open={props.open} setOpen={props.setOpen}/>;
            })}
        </div>
    );
}
