import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Setting from "./Pages/Settings/Setting";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Single />
      <Write />
      <Setting />
      <Login />
      <Register />
    </div>
  );
}

export default App;
