import React, {useState, useEffect, useMemo} from 'react'


interface Breed {
breed: string
coat: string
country: string
origin: string
pattern: string
}

const Student = () => {

    const [items , setItems] = useState<Breed[]>()

    const fetchBreeds = async () => {
        try {
          const response = await fetch('https://catfact.ninja/breeds');
          const data = await response.json();
            
          setItems(data.data)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };


      useEffect(() => {
        fetchBreeds()
      },[])

      const sample = useMemo(() => {
        return 'sample'
      },[])

  return (
    <div>
        {sample}
        { items && items.map((item: Breed) => (
            <div>
                <span>{item.breed}</span> <br />
                <span>{item.coat}</span> <br />
                <span>{item.country}</span> <br />
                <span>{item.origin}</span> <br />
            </div>
        ))}

    </div>
  )
}

export default Student