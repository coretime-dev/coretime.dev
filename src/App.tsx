import { DynamicMenu } from "./components/dynamic-menu";
import MainPage from "./pages/main";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-10 my-20 md:mx-0 md:my-0">
      <MainPage />
      {/* <CoretimePage /> */}
      <DynamicMenu />
    </div>
  );
}

export default App;
