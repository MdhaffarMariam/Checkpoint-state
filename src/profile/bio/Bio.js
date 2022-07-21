import React from 'react'

const bio = ({biblio}) => {
  return (
    <div>
        <p style = {{fontSize:25 , margin:20}}>{biblio.bio}</p>
    </div>
  )
}

export default bio