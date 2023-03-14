
import React from 'react'
import Card from '../ui/card/Card'
import './List.css'


const List = ({ users }) => {
  return (

    <>

      <Card className="list">
        {
          users?.map((user, i) => {

            return (
              <input
                key={i}
                value={`${user.name}, ${user.age} years`}
                type="text" readOnly />
            )
          })
        }

      </Card>
    </>


  )
}

export default List