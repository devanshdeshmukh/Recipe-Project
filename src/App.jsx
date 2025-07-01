import Mainroutes from "./routes/Mainroutes"
import Navbar from "./components/Navbar"
const App = () => {
  return (
    <div className="py-10 px-[10%] w-screen h-screen text-white font-thin bg-orange-800">
        <Navbar />
        <Mainroutes />
    </div>
  )
}

export default App