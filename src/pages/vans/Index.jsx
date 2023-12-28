import { Link } from "react-router-dom"

const Vans = ({ vans }) => {
  const vanElements = vans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link
        to={van.id}
        aria-label={`View details for ${van.name}, priced at ${van.price} per day`}
      >
        <img src={van.imageUrl} alt={`Image at ${van.name}`} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ))

  return (
    <div className="van-list-container">
      <h1>Expore our van options</h1>
      <div className="van-list">{vanElements}</div>
    </div>
  )
}

export default Vans
