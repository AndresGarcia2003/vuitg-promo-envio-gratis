/* eslint-disable import/order */
/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
import React from 'react'
import { ProgressBar } from './ProgressBar'
import { ProgressMessage } from './ProgressMessage'

export const PromoEnvioGratis = () => {
  return (
    <>
     <ProgressBar percentage={70} />
     <ProgressMessage completed={false} remainValue={20000} />
    </>

  )
}
