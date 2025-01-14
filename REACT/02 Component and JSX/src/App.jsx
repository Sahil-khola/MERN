import New from "./New"

function App() {
  const book = 
    {
       img : "img.jpg",
       bookName : "CBSE Sample Paper",
       authonName : 'OSWAAL BOOKS',
    }
    
  return(
    <>
    <New image={book.img} authorName={book.authonName} bookName={book.authonName}  />
    <New />
    <New />
    <New />
    </>
  )
}
export default App