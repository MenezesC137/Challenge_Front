import React from "react"

export default function Slide({ sugUsers, follow }) {
  const users = sugUsers?.filter(user => user?.id !== 1)
  return (
    <div className="flex gap-x-2">
      {users?.map((user) => (
        <div className="w-60 h-72 border-2 rounded-md shadow-x snap-start " key={user?.name}>
          <div className="flex items-start pt-3 justify-center h-1/3">
            <img src={user?.photo} alt="Foto do perfil" className="w-28 h-28 rounded-full" />
          </div>
          <div className="h-1/3">
            <p className="flex gap-x-1 pt-7 justify-center text-xl font-bold">
              {user?.name}
            </p>
            <p className="flex gap-x-1 justify-center">
              {user?.city} {user?.state}, {user?.country}
            </p>
          </div>
          <div className="h-1/3">
            <div className="h-full w-full flex justify-center items-center">
              <button 
                className="bg-blue-500 hover:opacity-80 w-28 rounded h-8" 
                onClick={() => follow(user?.id)}  
              >
                <p className="text-white">Follow</p>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}