import React from 'react'

interface IProgressMessage {
  completed: boolean
  remainValue: number
}

export const ProgressMessage = ({
  completed,
  remainValue,
}: IProgressMessage) => {
  return (
    <p>
      {completed === true
        ? 'Tienes envío gratis'
        : `Te hace falta ${remainValue} para completar tu compra`}
    </p>
  )
}
