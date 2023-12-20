import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [time, setTime] = useState('')

  const formatTime = (value) => {
    return value < 10 ? `0` : '';
  };


  const tick = () => {
    const date = new Date()
    const hour = date.getHours()
    const minuts = date.getMinutes()
    const seconds = date.getSeconds()
    setTime(formatTime(hour) + hour + ':' + formatTime(minuts) + minuts + ':' + formatTime(seconds) + seconds);
  }

  useEffect(() => {
    const timerId = setInterval(tick, 1000)
    return () => {
      clearInterval(timerId)
    }
  }, [])

  return (
    <>
      <div className='bg-gray-200 min-w-[100vw] min-h-[100vh] flex flex-col justify-center gap-5 px-4'>
        <h1 className='text-center text-gray-500 font-extrabold text-[30px]'>
          Reloj Digital
        </h1>
        <div className='mx-auto w-full bg-green-800 h-24 flex flex-col items-center justify-center p-5 rounded-lg max-w-[500px]'>
          <h2 className='text-white w-full text-center bg-slate-800 h-full text-[35px] font-bold'>
            {time !== '' ? time : 'Loading'}
          </h2>
        </div>
      </div>
    </>
  )
}

export default App
