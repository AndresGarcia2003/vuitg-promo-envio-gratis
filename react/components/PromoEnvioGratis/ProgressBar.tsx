/* eslint-disable prettier/prettier */
import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import './ProgressBar.css'

interface IProgressBar {
  percentage: number
}

export const ProgressBar = ({ percentage }: IProgressBar) => {
  const [style, setStyle] = React.useState({})

  setTimeout(() => {
    const newStyle = {
      opacity:1,
      width:`${percentage}%`
    }

    setStyle(newStyle)
  },1000)

  const CSS_HANDLES = ['progressb', 'progress-done']
  // eslint-disable-next-line padding-line-between-statements
  const handles = useCssHandles(CSS_HANDLES)
  // eslint-disable-next-line padding-line-between-statements
  return (
    <div className={handles['progressb']}>
      <div className={handles['progress-done']}style={style}>
          {percentage}%
      </div>
    </div>
  )
}
