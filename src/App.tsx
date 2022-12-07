import { Link, useRoutes } from "react-router-dom"
import routes from "./router"

function App() {
  const outlet = useRoutes(routes)

  return (
    <div className="App">
      {outlet}
    </div>
  )
}

export default App
