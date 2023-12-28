export default function Dashboard() {
  return (
    <div style={container}>
      <section style={{ padding: "10px" }}>
        <h2>Welcome!</h2>
        <p>Income last 30days</p>
        <h1>$2,260</h1>
      </section>
      <section>
        <div style={flx10whitegblue}>
          <p>Review score</p>
          <p>Details</p>
        </div>
      </section>
    </div>
  )
}

const container = {
  backgroundColor: "#FFEACF",
}

const flx10whitegblue = {
  display: "flex",
  gap: "10px",
  padding: "10px",
  color: "#151710",
  backgroundColor: "#FEDEB2",
}
