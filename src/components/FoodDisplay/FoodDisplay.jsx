import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = () => {
  const food_list = useContext(StoreContext);
  console.log(food_list);

  return (
    <div className='food-display' id='food-display' >
      <h2>Top dishes near You</h2>
      <div className="food-display-list">
        {food_list.map((item, i) => {
          return <FoodItem key={item._id} item={item} />
        })}
      </div>
    </div>
  )
}

export default FoodDisplay