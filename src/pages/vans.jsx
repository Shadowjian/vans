export const VanCard = ({ vans }) => {
  const vanElements = vans.map((van) => (
    <div key={van.id} className="van-tile">
      <img src={van.imageUrl} />
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>${van.price}/day</p>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
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
      <VanCard vans={vans} />
    </>
  )
}
