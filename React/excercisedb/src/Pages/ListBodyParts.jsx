import React, { useState, useEffect } from 'react'
import { getBodyPartList } from '../apis/api'


const ListBodyParts = () => {

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchBodyParts = async () => {
      try {
        const data = await getBodyPartList();
        setBodyParts(data);
      }
      catch (err) {
        console.log(err);
      }
    }

    fetchBodyParts();
  }, []);
  return (
    <div>
      <h1>All body Parts</h1>

      {bodyParts.length > 0 ?
        <div>
          {bodyParts.map((bodyPart) => {
            return (
              <div key={bodyPart}>
                <p>{bodyPart}</p>
              </div>
            )
          })}
        </div>
        : <p>No body Parts available</p>}
    </div>
  )
}

export default ListBodyParts
