import React from "react"

export default function Dropdown({ unfollow, followUsers }) {
  return (
    <div className="absolute md:mr-36 mt-[54px] top-0 right-0 rounded-lg md:w-auto xsm:w-full shadow-2xl bg-white max-h-72 overflow-auto">
      {followUsers?.map((user) => (
        <div className="flex rounded-lg border" key={user?.id} >
          <div className="items-center flex pl-1">
            <img className="rounded-full h-16 w-16 " src={user?.photo} alt="foto" />
          </div>
          <div className="w-52 pl-2">
            <div className="flex flex-row h-[40px] items-end gap-x-1">
              <p>{user?.name}</p>
            </div>
            <div className="flex flex-row h-[40px] items-start gap-x-1">
              <p>{user?.city},</p>
              <p>{user?.country}</p>
            </div>
          </div>
          <div className="flex items-center w-24 justify-center">
            <button onClick={() => unfollow(user?.id)} className="bg-red-500 w-20 rounded-md text-white">
              Unfollow
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}