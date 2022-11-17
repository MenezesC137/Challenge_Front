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
    api_client.get(``).then((res) => {
      setUser(res.data.results[0])
      console.log(res.data.results[0])
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="h-screen">
      <div className="bg-purple-600 h-1/3">
        <div className="flex flex-col justify-center h-14 border-b-2 border-purple-700 shadow-md md:px-36 xsm:px-4">
          <p className="text-white text-2xl">Usuários_como.eu</p>
        </div>
        <div className="md:mx-36 xsm:mx-4 mt-5">
          <p className="md:text-4x xsm:text-2xl text-center text-white">Encontre novos usuários como você</p>
        </div>
      </div>
      <div className="md:mx-36 xsm:mx-4 h-2/3 -mt-20">
        <div className="flex flex-col h-2/3 border-4">
          <div className="bg-cover h-1/2 flex items-center justify-center" style={{ backgroundImage: `url(${user?.picture?.large}` }} >
            <div className="rounded-full -mb-10">
              <img className="rounded-full md:h-52 md:w-52 xsm:h-40 xsm:w-40" src={user?.picture?.large} alt="foto" />
            </div>
          </div>
          <div className="flex flex-col items-center md:mt-12 h-1/2 md:gap-y-2">
            <div className="xsm:flex w-full xsm:flex-col items-center justify-center md:grid md:grid-cols-3 xsm:mt-5 md:mt-0">
              <div className="text-white text-center col-start-2">
                <button className="bg-blue-600 w-36 h-10 rounded-md ">Curtir</button>
              </div>
              <div className="flex items-center justify-center xsm:my-2">
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
        <div className="flex md:flex-row xsm:flex-col md:h-1/3 pt-2">
          <div className="md:w-1/2 xsm:w-full md:mr-1 border-4 xsm:h-40">
            <div className="h-2/3">
              <p className="m-2 text-lg font-bold">Informações pessoais</p>
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
            <div className=" md:w-1/2 xsm:w-full border-4 md:mt-0 xsm:mt-2 xsm:h-40">
              <div className="h-2/3 ">
                <p className="m-2 text-lg font-bold ">Informações de contato</p>
                <div className="flex gap-x-2 ml-2">
                  <p>Telefone: </p>
                  <p>{user?.cell}</p>
                </div>
                <div className="flex  gap-x-2 ml-2">
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
