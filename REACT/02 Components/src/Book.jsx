import React from 'react'

const Book = () => {
  const image = "./book1.jpg"
  const title = "The science of Getting Started"
  const publisher = 'Patrick King'
  const price="$120"
  return (
    <>
      <figure className='main-fig'>
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