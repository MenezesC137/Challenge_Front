import React from "react";

export default function Dropdown({ user }) {
  return (
    <div className="absolute mr-36 mt-[54px] top-0 right-0 rounded-lg h-auto w-aut">
      <div className="">
        <img className="rounded-full md:h-52 md:w-52 xsm:h-40 xsm:w-40" src={user?.picture.large} alt="foto" />

      </div>
    </div>
  );
}