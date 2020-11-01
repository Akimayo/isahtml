import React from 'react';

export const Progress = () => {
  return (
    <div className="progress">
      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
    </div>
  )
}
