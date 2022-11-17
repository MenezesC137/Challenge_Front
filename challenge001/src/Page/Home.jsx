import React, { useEffect, useState } from "react"

import api_client from "../API/client_api"

export default function Home() {

  const [data, setData] = useState([])

  useEffect(() => {
    api_client.get(`https://randomuser.me/api/`).then((res) => {
      setData(res.data.results)
      console.log(res.data.results)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div className="bg">
      <h1>Home</h1>
    </div>
  )
}
