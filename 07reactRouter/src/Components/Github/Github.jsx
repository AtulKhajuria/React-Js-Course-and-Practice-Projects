import React from "react";
import { useState, useEffect } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/AtulKhajuria")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="text-3xl bg-gray-700 font-bold rounded-xl text-white p-8 shadow-2xl">
      Github Followers : {data.followers}
      <img
        className="rounded-2xl"
        src={data.avatar_url}
        alt="Git picture"
        width={300}
      />
    </div>
  );
}
export default Github;
