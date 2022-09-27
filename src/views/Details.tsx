import React from 'react'
import Loader from '../components/Loader';
import config from '../config'

const Details = () => {
  return (
    <>
      <div>Details</div>
          <div>{config.BASE_URL}</div>
          <Loader/>
    </>
  );
}

export default Details