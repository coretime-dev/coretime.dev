import { DynamicMenu } from "./components/dynamic-menu";
import MainPage from "./pages/main";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <MainPage />
      {/* <CoretimePage /> */}
      <DynamicMenu />
    </div>
  );
}

export default App;
