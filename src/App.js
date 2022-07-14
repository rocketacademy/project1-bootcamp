import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Home from "./Home";
import { Container } from "./App.styles";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return <Container>{code ? <Home code={code} /> : <Login />}</Container>;
}

export default App;
