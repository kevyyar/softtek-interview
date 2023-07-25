import { useEffect, useState } from "react";
import ITodo from "../interfaces/Todo";

function Todo() {
  const [data, setData] = useState<ITodo[]>([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
      const jsonData: ITodo[] = await res.json();
      setData(jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Todos Title</h1>
      <ul>
        {data.length > 0
          ? data.map((item) => <li key={item.id}>{item.title}</li>)
          : "no data"}
      </ul>
    </>
  );
}

export default Todo;
