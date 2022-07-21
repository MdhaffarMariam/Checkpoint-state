import React from 'react'

const FullName = ({ons,jabeur}) => {
  return (
    <div >
        <h1 style ={{fontSize:50, color:'green'}}>{ons.FullName}</h1>
        <img style = {{height : 400  , width:300 , borderRadius:100}}src='https://i0.wp.com/celebrity.tn/wp-content/uploads/2018/09/ons-jabeur-6.jpg?fit=662%2C828&ssl=1' alt='pic'/>
    <button style = {{borderRadius:12 , padding:10 , backgroundColor : 'green', color: 'white' }}onClick={()=>jabeur(ons.FullName)}>Salut</button>
    </div>
  )
}

export default FullName