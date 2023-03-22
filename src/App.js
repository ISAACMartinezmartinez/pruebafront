import { Routes,Route } from "react-router-dom";
import EditarDoc from "./componets/EditarDoc";
import Login from "./componets/Login";
import Menulateral from "./componets/Menulateral";
import Nav from "./componets/Nav";
import Subirdoc from "./componets/Subirdoc";
import Visualizaciondoc from "./componets/Visualizaciondoc";


function App() {
  return (
    <>
      <Login/>
      <Routes>
        <Route path="/nuevo" element={<EditarDoc/>}/>
      </Routes>
    </>
  );
}

export default App;
