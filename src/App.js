import { Player } from "./components/Player";
import { Sidebar } from "./components/Sidebar";
import './App.css';

export default function App() {
  return <>
    <div className="h-[100vh] w-[100%] bg-black nunito-bold relative">
      <div className="w-[25%] h-[87%] p-1">
        <Sidebar />
      </div>
      <div className="absolute bottom-0 z-10 bg-black w-full">
        <Player />
      </div>
    </div>
  </>
}