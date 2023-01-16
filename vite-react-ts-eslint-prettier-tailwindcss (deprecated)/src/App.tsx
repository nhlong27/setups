import React, { useState } from 'react'

function App(): JSX.Element {
  const generateRandomColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16)
  }
  const [chosenColor, setChosenColor] = useState<{
    hexCode: string
    order: number
  }>({ hexCode: generateRandomColor().toString(), order: 0 })

  const [answerStatus, setAnswerStatus] = useState<{previousAnswerStatus: string, correctAnswerNumber: number}>({previousAnswerStatus: '', correctAnswerNumber: 0})

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className='w-[30rem] h-[30rem] bg-white ring-2 ring-white ring-offset-2 ring-offset-white rounded-2xl p-8 flex flex-col justify-start items-center'>
        <div className='w-[50%] h-[50%] flex justify-center items-center '>
          Guess the color code
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default App
