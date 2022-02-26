import React, { useState, useEffect } from "react";

function NavBar() {

  const [tabType, setTabType] = useState('Posts');
  const [datas, setDatas] = useState([]);



  useEffect(() => {
    const fetchData = () => {
      fetch(`https://jsonplaceholder.typicode.com/${tabType}`)
        .then(response => response.json())
        .then(json => setDatas(json))
    }
    fetchData()
    const interval = setInterval(() => {
      fetchData()
      console.log("fetched")
    }, 1000)
    return () => clearInterval(interval)
  }, [tabType])


  return (
    <div>
      <h1>Rzagram</h1>
      <button onClick={() => setTabType("Posts")}>Posts</button>
      <button onClick={() => setTabType("Users")}>Users</button>
      <button onClick={() => setTabType("Comments")}>Comments</button>
      <h2>{tabType}</h2>
      {datas.map(data => {
        return <pre>{JSON.stringify(data)}</pre>
      })}
    </div>
  )
}
export default NavBar;