import React from 'react'
import { Spinner } from '@chakra-ui/react'

const Loader = () => {
  return (
    <div className='spinner-container'>
      <div className='spinner'>
        <Spinner size='xl'  />
      </div>
    </div>
  )
}

export default Loader