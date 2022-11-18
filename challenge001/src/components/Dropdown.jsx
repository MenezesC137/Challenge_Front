import React, { useEffect, useState } from "react"

export default function Dropdown( ) {  
  const [users, setUsers] = useState([])

  useEffect(() => {
    setUsers(localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [])
  }, [])

  return (
    <div className="absolute mr-36 mt-[54px] top-0 right-0 rounded-lg h-auto w-auto shadow-2xl bg-white">
      {users?.map((user) => (
        <div className="flex rounded-lg border" key={user?.login?.username} >
          <div className="items-center flex pl-1">
            <img className="rounded-full h-16 w-16  " src={user?.picture?.large} alt="foto" />
          </div>
          <div className="w-52 pl-2">
            <div className="flex flex-row h-[40px] items-end gap-x-1">
              <p>{user?.name?.first}</p>
              <p>{user?.name?.last}</p>
            </div>
            <div className="flex flex-row h-[40px] items-start gap-x-1">
              <p>{user?.location?.city},</p>
              <p>{user?.location?.country}</p>
            </div>
          </div>
          <div className="flex items-center w-24 justify-center">
            <button className="bg-red-500 w-20 rounded-md">
              Descurtir
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}