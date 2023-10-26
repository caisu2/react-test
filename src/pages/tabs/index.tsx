import React, { useState } from 'react'
import Records from './records'
import Student from './student'

const Tabs = () => {

    const [ active, setActive ] = useState<any>(0)

  return (
    <div>
        <button onClick={() => setActive(1)}> Student Active </button>
        <button onClick={() => setActive(0)}  > Records Active </button>
        { active === 0  && (<Records/>)}
        { active === 1  && (<Student/>)}
    </div>
  )
}

export default Tabs