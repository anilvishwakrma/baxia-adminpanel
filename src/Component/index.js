import React from 'react'
import Sitebar from '../page/Sitebar'

const index = ({children}) => {
  return (
    <div>
        <Sitebar/>
        <main>{children}</main>
    </div>
  )
}

export default index