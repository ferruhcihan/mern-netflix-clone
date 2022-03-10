import { useState, useEffect } from "react";
import "./home.scss";
import Navbar from "../../components/navbar";
import Featured from "../../components/featured";
import List from "../../components/list";
import axios from "axios";

interface IHome {
  type?: string;
}

export default function Home({ type }: IHome) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

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
