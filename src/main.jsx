import { createRoot } from "react-dom/client"
import "./styles.css"
import App from "./app"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)
