import { useState } from "react";
import "./home.scss";
import Navbar from "../../components/navbar";
import Featured from "../../components/featured";
import List from "../../components/list";

interface IHome {
  type?: string;
}

export default function Home({ type }: IHome) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
}
