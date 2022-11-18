import React, { useState } from "react"

//Dependencies
import api_client from "../API/client_api"

//Image
import photo from "../img/perfil.jpg"

//Icons 
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdLocalGasStation } from "react-icons/md"

//Components
import Dropdown from "../components/Dropdown"

export default function Home() {

  const [dropdown, setDropdown] = useState(false)
  const [userApi, setUserApi] = useState([])
  const [localUsers, setLocalUsers] = useState([])
  const user = [
    {
      name: "Carlos",
      lastName: "Santos",
      age: 22,
      city: "Santos",
      country: "Brasil",
      email: 'iamcarloseduardo@hotmail.com',
      cell: '(13) 99777-7777',
    }
  ]

  function nextProfile() {
    api_client.get(``).then((res) => {
      setUserApi(res.data.results[0])
    }).catch((err) => {
      console.log(err)
    })
  }

  const follow = () => {
    let array = localUsers
    array.push(userApi)
    setLocalUsers(array)
    localStorage.setItem("users", JSON.stringify(localUsers))
  }

  return (
    <>
      <div className="h-screen">
        <div className="bg-purple-600 h-1/3">
          <div className="flex flex-row justify-between h-14 border-b-2 border-purple-700 shadow-md md:px-36 xsm:px-4 text-white items-center">
            <p className="text-2xl ">Usuários_como.eu</p>
            <button onClick={() => {dropdown ? setDropdown(false) : setDropdown(true)}} className="flex items-center text-xl">
              Seguindo 
              { dropdown ? <MdKeyboardArrowUp size={25} /> : <MdKeyboardArrowDown size={25} /> }
            </button>
          </div>
          <div className="md:mx-36 xsm:mx-4 mt-5">
            <p className="md:text-4xl xsm:text-2xl text-center text-white">Encontre novos usuários como você</p>
          </div>
        </div>
        <div className="md:mx-36 xsm:mx-4 h-2/3 -mt-20">
          <div className="flex flex-col h-2/3 border-4">
            <div className="bg-cover h-1/2 flex items-center justify-center" style={{ backgroundImage: `url(${userApi?.picture?.large ? userApi?.picture?.large : photo}` }} >
              <div className="rounded-full -mb-10">
                <img className="rounded-full md:h-52 md:w-52 xsm:h-40 xsm:w-40" src={userApi?.picture?.large ? userApi?.picture?.large : photo} alt="foto" />
              </div>
            </div>
            <div className="flex flex-col items-center md:mt-12 h-1/2 md:gap-y-2">
              <div className="xsm:flex w-full xsm:flex-col items-center justify-center md:grid md:grid-cols-3 xsm:mt-5 md:mt-0">
                {userApi?.name ?
                  <div className="text-white text-center col-start-2">
                    <button onClick={() => follow()} className="bg-blue-600 hover:opacity-90 w-36 h-10 rounded-md ">Curtir</button>
                  </div>
                  : <div className="text-white flex items-center justify-center col-start-2">
                    <p className="bg-green-600 flex w-36 h-10 rounded-md  items-center justify-center">Meu perfil</p>
                  </div>
                }
                <div className="flex items-center justify-center xsm:my-2">
                  <button className="border-2 h-8 w-52 rounded-md hover:bg-stone-100" onClick={() => nextProfile()}>Proximo Perfil</button>
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold">{userApi?.name ? userApi?.name?.first : user[0].name} {userApi?.name ? userApi?.name?.last : user[0].lastName}</p>
              </div>
              <div>
                <p className="text-xl">{userApi?.location ? userApi?.location?.city : user[0].city}, {userApi?.location ? userApi?.location?.country : user[0].country}</p>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row xsm:flex-col md:h-1/3 pt-2">
            <div className="md:w-1/2 xsm:w-full md:mr-1 border-4 xsm:h-40">
              <div className="h-2/3">
                <p className="m-2 text-lg font-bold">Informações pessoais</p>
                <div className="flex gap-x-2 ml-2">
                  <p>Nacionalidade: </p>
                  <p>{userApi?.location ? userApi?.location?.country : user[0].country}</p>
                </div>
                <div className="flex gap-x-2 ml-2">
                  <p>Idade: </p>
                  <p>{userApi?.dob ? userApi?.dob?.age : user[0].age}</p>
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
                  <p>{userApi?.cell ? userApi?.cell : user[0].cell}</p>
                </div>
                <div className="flex  gap-x-2 ml-2">
                  <p>E-mail: </p>
                  <p>{userApi?.email ? userApi?.email : user[0].email}</p>
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
        <div className="mx-36 pb-20">
          <p className="text-2xl">Sugestões para você</p>
        </div>
      </div>
      { dropdown ? <Dropdown /> : null }
      
    </>
  )
}
