'use client'

import { useEffect, useState } from "react"
import { PictureLoader } from "./PictureLoader"
import { json } from "stream/consumers"

const ImageSlot = ({ src, style }: any) => {
  return (
    <div className={"flex " + style}>
      <img className="rounded-md flex-1 justify-items-stretch object-cover" src={src}></img>
    </div>
  )
}

const OutlinedPhoto = ({ source, label }: any) => {
  //className="border-white border-8 rounded-md bg-white">

  return <div>
    <img className="object-fill max-h-64 border-0 rounded-md" src={source} />
    <div className="pt-4 font-mono text-center">{label}</div>
  </div>
}

const RandomCat = () => {
  const [picture, setPicture] = useState("")
  const [count, setCount] = useState(0)

  const randomCat = () => {
    fetch("https://cataas.com/cat?json=true")
      .then(data => {
        return data.json();
      })
      .then(json => {
        let id = json._id;
        setPicture("https://cataas.com/cat/" + id)
      }).catch(e => { })
  }

  useEffect(randomCat, []);
  useEffect( () => {
    fetch("https://cataas.com/api/count")
    .then( data => data.json() )
    .then( json => {
      setCount(json.count)
    } );
  }, [] )

  return <div className="flex flex-col pt-16 pb-16 pr-8 pl-8 h-fit min-h-screen gap-8">
    <div className="text-black font-mono text-4xl text-center font-bold">CAT AS A SERVICE</div>

    <div className="text-black font-mono text-body md:text-2xl md:text-center text-justify">Для работы сайта используется API cataas.com. Этот сайт предоставляет более {count-1} фото со смешными котами. Каждый кот уникален и совсем не похож на другого.</div>

    <div></div>

    <div className="flex flex-1 flex-col justify-center items-center gap-8">
      <img className="rounded-md h-64" src={picture}/>
      <button onClick={randomCat} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md w-fit"> Дайте мне случайного кота </button>
    </div>
  </div>
}

export default function Home() {

  return <main>

    <div className="flex h-fit min-h-screen">

      {/* Лево */}
      <div className="flex-1 flex flex-col md:mr-16">
        <div className="ml-4 mt-4 select-none flex gap-2">
          <span className="material-symbols-outlined" style={{ fontSize: 48 }}> mood </span>
          <span className="font-mono font-bold self-center text-2xl">Ыыы коты</span>
        </div>

        <div className="flex-1 flex flex-col items-center md:items-start justify-center gap-4">
          <div className="text-center md:text-left text-white font-mono text-4xl md:text-8xl w-fit pr-8 pl-4 rounded-md ml-4
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Фото со<br />смешными<br />котами
          </div>
          <span className="font-mono ml-8 text-2xl">Так смешно</span>
        </div>
      </div>

      {/* Право */}
      <div className="flex-1 object-cover hidden md:grid grid-cols-3 grid-rows-3 gap-x-2 gap-y-2 p-2 h-screen">


        <ImageSlot src="https://cataas.com/cat/fgsrtdE4IVTV6dp6" />
        <ImageSlot style="row-span-2" src="https://cataas.com/cat/1TYt4A7YqwaeMUEF" />
        <ImageSlot style="-mb-8" src="https://cataas.com/cat/1si02A2ZNdeNH3yo" />

        <ImageSlot style="-ml-16" src="https://cataas.com/cat/xk5oZn0fNpfD5J1Q" />
        <ImageSlot style="mt-8 -mb-8" src="https://cataas.com/cat/OuA1OJrpLqk9156q" />

        <ImageSlot style="col-span-2 ml-8" src="https://cataas.com/cat/NKeOpRP8H27fyhSO" />
        <ImageSlot style="mt-8" src="https://cataas.com/cat/xDhz2ykbH8wXJw9X" />

      </div>
      {/* <img className="flex-1 object-cover hidden md:block" src="https://cataas.com/cat/pQ9yAWvYnet83GRN"></img> */}

    </div>

    <div className="flex flex-col items-stretch pt-16 pb-16 pl-4 pr-4
     bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

      <span className="text-white font-mono text-4xl text-center font-bold">Что мы?</span>
      <span className="text-white font-mono text-body md:text-2xl mt-8 text-justify md:text-center">Добро пожаловать на [вставьте имя сайта] — ваш ежедневный источник смеха и радости, приправленный шалостями наших мурлыкающих друзей. Мы здесь, чтобы делиться смехом, любовью и безграничной милотой через смешные фотографии котов со всего мира.</span>

    </div>

    {/* <div className="flex-1 grow"></div>

      <div className="relative top-24 flex-1 flex gap-8 justify-evenly">

        <OutlinedPhoto label="Кот спит" source="https://cataas.com/cat/mACGUDVn2tlR1z2B"/>
        <OutlinedPhoto label="Кот просыпается" source="https://cataas.com/cat/FBENjGWtqyGWqRYA"/>
        <OutlinedPhoto label="Кот работает" source="https://cataas.com/cat/FhBXgwOJCesSPRtg"/>

      </div> */}

    <div className="flex flex-col p-16 h-fit min-h-screen gap-16">
      <div className="text-black font-mono text-4xl text-center font-bold">Как это работает?</div>
      <div className="flex-1 flex flex-col md:flex-row items-center justify-around gap-16">

        <OutlinedPhoto label="Кот спит" source="https://cataas.com/cat/mACGUDVn2tlR1z2B" />

        <div className="hidden md:block"><span style={{ fontSize: 48 }} className="material-symbols-outlined mb-8"> chevron_right </span></div>

        <OutlinedPhoto label="Кот просыпается" source="https://cataas.com/cat/FBENjGWtqyGWqRYA" />

        <div className="hidden md:block"><span style={{ fontSize: 48 }} className="material-symbols-outlined mb-8"> chevron_right </span></div>

        <OutlinedPhoto label="Кот работает" source="https://cataas.com/cat/FhBXgwOJCesSPRtg" />

      </div>
    </div>

    <div className="p-16 pt-16 pb-16 pl-4 pr-4
     bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

      <div className="text-white font-mono text-4xl text-center font-bold">Не надо связываться с нами!</div>

      <div className="flex flex-col md:flex-row items-center md:justify-around mt-16 gap-8">

        <div className="flex flex-row items-center text-white gap-4">
          <span className="material-symbols-outlined"> call </span>
          <span className="text-body md:text-2xl font-mono"> +7 (967) 730 25-32 </span>
        </div>

        <div className="flex flex-row items-center text-white gap-4">
          <span className="material-symbols-outlined"> mail </span>
          <span className="text-body md:text-2xl font-mono"> mail.mail@mail.ru </span>
        </div>

      </div>

    </div>


    <RandomCat />


    <div className="p-16 pt-16 pb-16 pl-4 pr-4 mb-16
     bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

      <div className="text-white font-mono text-4xl text-center font-bold">Готовы увидеть котов?</div>
      <div className="text-white font-mono text-body md:text-2xl text-center mt-8">Внизу вы найдете фотографии котов.</div>

    </div>

    <PictureLoader />
  </main>
}
