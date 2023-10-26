import React, { FC, useState } from 'react'

interface Props {
    name: string;
}

const SampleComponent: FC<Props> = (props) => {

    const { name } = props

    const [ sum, setSum ] = useState<number>(0);
    const [ val1, setVal1 ] = useState<number>(0);
    const [ val2, setVal2 ] = useState<number>(0);


    const onClickAdd = () => {
        const sum = (+val1 + +val2)

        console.log(sum)

        setSum(sum)
    }

  return (
    <div> 
        <input className='' type="text" onChange={(e: any) => setVal1(e.target.value)} /> 
        <input type="text" onChange={(e: any) => setVal2(e.target.value)}/>
        <button onClick={() => onClickAdd()}>Add</button>
        { sum }
    </div>
  )
}

export default SampleComponent