import React from 'react';

interface IProgressBar {
    percentage:number,
}

export const ProgressBar = ({percentage}:IProgressBar) => {
    return (
        <progress value={percentage} max="100" />
    )
}
