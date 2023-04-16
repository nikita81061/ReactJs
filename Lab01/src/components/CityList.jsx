export function CityList(props) {
    return (
        <select name="" id="cities">
            {props.cities.map((city) => <option key={city.id} value="">{city.name}</option>)}
        </select>
    )
}