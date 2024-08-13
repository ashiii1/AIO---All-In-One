import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { StateContext } from '../../Context'

const Categories = () => {
  const { state, dispatch } = useContext(StateContext)
  return (
    <>
      <div class="featured-category-section flex-hz flex-wrap">
        {state.categories.map(item => {
          return (
            <>
              <Link to="/productlistingpage" className='links' onClick={(e) => dispatch({ type: 'SET_CATEGORY', payload: item.categoryName }, dispatch({ type: 'SET_SUB_CATEGORY', payload: null }))}>
                <div class="category">
                  <img class="category-img img-responsive" src={item.img} alt="category-img" />
                  <div className='category-text'> <h5 class="category-title-text">{item.categoryName}</h5><p className='category-text-secondary'>{item.description}</p></div>
                </div>
              </Link>
            </>
          )
        })}
      </div>
    </>
  )
}

export { Categories }