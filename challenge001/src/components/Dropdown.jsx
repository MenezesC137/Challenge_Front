import React, { useState } from "react"

export default function Dropdown({unfollow}) {
  const [users] = useState(localStorage.getItem("followUsers") ? JSON.parse(localStorage.getItem("followUsers")) : [])

  return (
    <div className="absolute md:mr-36 mt-[54px] top-0 right-0 rounded-lg md:w-auto xsm:w-full shadow-2xl bg-white">
        {users?.map((user) => (
          <div className="flex rounded-lg border" key={user?.login?.username} >
            <div className="items-center flex pl-1">
              <img className="rounded-full h-16 w-16 " src={user?.picture?.large} alt="foto" />
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
              <button onClick={() => unfollow()} className="bg-red-500 w-20 rounded-md text-white">
                Unfollow
              </button>
            </div>
          </div>
        ))}
      </div>
  );
}