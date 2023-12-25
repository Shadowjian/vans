import { Link } from "react-router-dom"

export const VanCard = ({ vans }) => {
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
      <div className="van-list">{vanElements}</div>
    </div>
  )
}

export default function Vans({ vans }) {
  return (
    <>
      <h1>Expore our van options</h1>
      {vans ? <VanCard vans={vans} /> : <h2>Loading...</h2>}
    </>
  )
}
