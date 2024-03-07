import { useEffect, useState } from "react";
import style from "./app.module.css";
import axios from "axios";
import Card from "../Card/Card";
import NavBar from "../NavBar/NavBar";

const BASE_URL = "https://jsonplaceholder.typicode.com/photos";
const visibleElements = 9;

function App() {
  const [data, setData] = useState();
  const [pages, setPages] = useState(0);

  useEffect(() => {
    axios.get(BASE_URL).then(({ data }) => setData(data));
  }, []);

  return (
    <div className={style.app}>
      {data && (
        <>
          <div className={style.appContainerCard}>
            {data
              .slice(
                pages * visibleElements,
                pages * visibleElements + visibleElements
              )
              .map((elem) => (
                <Card
                  key={elem.id}
                  title={elem.title}
                  url={elem.url}
                  id={elem.id}
                />
              ))}
          </div>
          <NavBar
            visibleElements={visibleElements}
            setPages={setPages}
            pagesLength={data.length}
            pages={pages}
          />
        </>
      )}
    </div>
  );
}

export default App;
