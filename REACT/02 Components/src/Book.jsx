import React from 'react'

const Book = (props) => {
 const {image,price,title,publisher,key}= props
  return (
    <>
      <figure className='main-fig' key={key}>
        <img src={image} alt="" />
        <figcaption className='book-info'>
        <h2>{title}</h2>
        <p>by {publisher}</p>
        <p>{price}</p>
        <button>Add to Cart</button>
        </figcaption>
      </figure>
    </>
  )
}

export default Book;