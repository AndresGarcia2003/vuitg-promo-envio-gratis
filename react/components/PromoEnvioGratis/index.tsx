/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import axios from 'axios'

import { ProgressBar } from './ProgressBar'

export const PromoEnvioGratis = () => {
  // eslint-disable-next-line prettier/prettier
  const {
    orderForm: { totalizers },
  } = useOrderForm()
  const [totalOrder, setTotalOrder] = useState(0)
  const [goal, setGoal] = useState(0)
  const promoId = '31da3c11-b693-43fc-a41d-b42ac4b27062'

  useEffect(() => {
    axios
      .get(`https:/api/rnb/pvt/calculatorconfiguration/${promoId}`)
      .then((response) => {
        setGoal(response.data.totalValueFloor)
        setTotalOrder(totalizers[0]?.value / 100)
      })
  }, [totalizers])

  return (
    <>
      <ProgressBar
        percentage={totalOrder < goal ? (totalOrder / goal) * 100 : 100}
      />
      {totalOrder >= goal ? (
        <div>El envio de tu compra es totalmente gratis</div>
      ) : (
        <div>
          Te hace falta {`$${(goal - totalOrder).toLocaleString('de-DE')}`} para
          disfrutar del envio gratis
        </div>
      )}
    </>
  )
}
