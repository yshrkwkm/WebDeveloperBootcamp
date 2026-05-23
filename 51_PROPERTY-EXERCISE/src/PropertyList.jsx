import './PropertyList.css';
import Property from "./Property";

export default function PropertyList({properties}) {
    return (
        <div className="PropertyList">
            {properties.map((p) => {
                return <Property key={p.id} name={p.name} price={p.price} rating={p.rating} />
            })}
        </div>
    );
}