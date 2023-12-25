import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function VanDetail({ vans }) {
  // const [van, setVan] = useState({})
  const params = useParams()
  // can also use filter, by utilizing the fetched vans from the parent component app
  const van = vans.filter((van) => van.id === params.id)[0] // this one is faster

  console.log(van)

  // can use useEffect to get van based from params.id
  // useEffect(() => {
  //   fetch(`/api/vans/${params.id}`)
  //     .then((res) => res.json())
  //     .then((data) => setVan(data.vans))
  // }, [params.id])

  return (
    <div className="van-detail-container">
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  )
}
