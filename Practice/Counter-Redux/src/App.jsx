import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Container from "../Components/Container";
import Header from "../Components/Header";
import CounterContent from "../Components/CounterContent";
import CounterButton from "../Components/CounterButton";

function App() {
  

  return (
    <center>
      <Container>
        <Header></Header>
        <CounterContent></CounterContent>
        <CounterButton></CounterButton>
      </Container>
    </center>
  )
}

export default App
