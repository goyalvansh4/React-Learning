import AppName from "./Components/AppName";
import AppQuote from "./Components/AppQuote";
import CurrentTime from "./Components/CurrentTime";

function App() {
  return (
    <div className="container text-center">
     <AppName></AppName> 
     <AppQuote></AppQuote>
     <CurrentTime></CurrentTime>
    </div>
  );
}

export default App;
