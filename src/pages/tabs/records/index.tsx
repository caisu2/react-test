import React, {useState, useEffect} from 'react'

const Records = () => {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');
  
    useEffect(() => {
      // This effect runs whenever 'count' changes
      setMessage(`Count is now: ${count}`);
    }, [count]); // 'count' is specified as a dependency
  
    const handleIncrement = () => {
      setCount(count + 1);
    };
  
    const handleDecrement = () => {
      setCount(count - 1);
    };
  
    return (
      <div>
        <p>{message}</p>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    );

}

export default Records