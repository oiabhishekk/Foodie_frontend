import React from 'react'

const FoodItem = ({ item }) => {
  const { _id:id, name, image, description, price } = item
  console.log(name)
  return (
    <>
      <div>{name}</div>
      <img src={image} alt="" /></>
  )
}

export default FoodItem