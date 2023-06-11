import { IMG_CDN_URL } from "../constants";
const DummyRestauarantCardFromObj = ({ name, avgRating, cloudinaryImageId }) => {
    return (
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId}></img>
            <h2> {name} </h2>
            <h4> {avgRating} stars </h4>
        </div>
    )
}

export default DummyRestauarantCardFromObj;