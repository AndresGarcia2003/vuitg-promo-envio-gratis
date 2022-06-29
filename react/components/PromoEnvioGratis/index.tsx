import React from 'react';
import { ProgressBar } from './ProgressBar';
import { ProgressMessage } from './ProgressMessage'

export const PromoEnvioGratis = () => {
  return (
    <>
      <ProgressBar
        percentage={89.23}
      />
      <ProgressMessage
        completed={false}
        remainValue={20000}
      />
    </>
  )
};
