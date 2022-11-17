import React, { useEffect, useState } from "react"

import api_client from "../API/client_api"

//Icons 
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"

export default function Home() {

  const [user, setUser] = useState([])

  useEffect(() => {
   nextProfile()
  }, [])

  function nextProfile() {
    api_client.get(`https://randomuser.me/api/`).then((res) => {
      setUser(res.data.results[0])
      console.log(res.data.results[0])
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="h-screen">
      <div className="bg-purple-600 h-1/3">
        <div className="flex flex-col justify-center h-14 border-b-2 border-stone-600 px-36">
          <p className="text-white text-2xl ">Usuários_como.eu</p>
        </div>
        <div className="mx-36 mt-5">
          <p className="text-4xl text-center text-white">Encontre novos usuários como você</p>
        </div>
      </div>
      <div className="mx-36 h-2/3 -mt-20">
        <div className="flex flex-col h-2/3 border-4">
          <div className="bg-cover h-1/2 flex items-center justify-center" style={{ backgroundImage: `url(${user?.picture?.large}` }} >
            <div className="rounded-full h-52 w-52 -mb-10">
              <img className="rounded-full h-52 w-52" src={user?.picture?.large} alt="foto" />
            </div>
          </div>
          <div className="flex flex-col items-center mt-10 h-1/2 gap-y-3">
            <div className="flex flex-row w-full justify-between mt-2">
              <div className="text-white w-1/3">easter-egg</div>
              <div className="text-white text-center w-1/3">
                <button className="bg-blue-600 w-36 h-10 rounded-md ">Curtir</button>
              </div>
              <div className="flex items-center justify-center w-1/3">
                <button className="border-2 h-8 w-52 rounded-md" onClick={() => nextProfile()}>Proximo Perfil</button>
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold">{user?.name?.first} {user?.name?.last}</p>
            </div>
            <div>
              <p className="text-xl">{user?.location?.city}, {user?.location?.country}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row h-1/3 pt-2">
          <div className=" w-1/2 mr-1 border-4 ">
            <div className="h-2/3 ">
              <p className="m-2 text-lg font-bold ">informações pessoais</p>
              <div className="flex gap-x-2 ml-2">
                <p>Nacionalidade: </p>
                <p>{user?.location?.country}</p>
              </div>
              <div className="flex gap-x-2 ml-2">
                <p>Idade: </p>
                <p>{user?.dob?.age}</p>
              </div>
            </div>
            <div className="flex items-center justify-center pl-2 border-t-2 h-1/3">
              <button >
                <p className="text-blue-600 flex items-center hover:text-blue-300"><MdKeyboardArrowDown /> Ver mais</p>
              </button>
            </div>
          </div>
            <div className=" w-1/2 border-4">
              <div className="h-2/3 ">
                <p className="m-2 text-lg font-bold ">informações de contato</p>
                <div className="flex gap-x-2 ml-2">
                  <p>Telefone: </p>
                  <p>{user?.cell}</p>
                </div>
                <div className="flex gap-x-2 ml-2">
                  <p>E-mail: </p>
                  <p>{user?.email}</p>
                </div>
              </div>
              <div className="flex items-center justify-center pl-2 border-t-2 h-1/3">
                <button >
                  <p className="text-blue-600 flex items-center hover:text-blue-300"><MdKeyboardArrowDown /> Ver mais</p>
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
