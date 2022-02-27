import "./home.scss";
import Navbar from "../components/navbar";
import Featured from "../components/featured";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Featured />
    </div>
  );
}
