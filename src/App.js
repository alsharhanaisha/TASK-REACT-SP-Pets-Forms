import "./App.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap-5.0.0-beta2.min.css";
import "./assets/css/LineIcons.2.0.css";
import "./assets/css/main.css";
import "./assets/css/tiny-slider.css";
import PetsList from "./Components/PetsList";
import petStore from "./petStore";
import PetCreateModal from "./Components/PetCreateModal";

function App() {
  const pets = petStore.pets;
  return (
    <div className="App">
      <br />
      <PetCreateModal />
      <PetsList pets={pets} />
    </div>
  );
}

export default App;
