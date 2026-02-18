import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white font-thin">
      <div className="py-5 px-[10%]">
        <Navbar />
        <Mainroutes />
      </div>
    </div>
  );
};

export default App;