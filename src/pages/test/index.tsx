import { useState } from 'react'
import SampleComponent from './test'

const TestComponent = () => {

    const [ test, setTest ] = useState<string>('')
    

  return (
    <>
        <div>Hello World Test</div>
        <SampleComponent name={test} />
        <button onClick={() => setTest('Tabs')}>Click Me</button>
    </>
    
  )
}

export default TestComponent