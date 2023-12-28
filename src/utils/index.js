export const active = {
  fontWeight: "bold",
  textDecoration: "underline",
  color: "#161616",
}

import "../server"

export const fetcher = (url, setter) => {
  fetch(url)
    .then(res => res.json)
    .then(data => setter(data))
}
