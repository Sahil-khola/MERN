import New from "./New"

function App() {
  const books = [
    {
      img : "img.jpg",
      bookName : "CBSE Sample Paper",
      authonName : 'OSWAAL BOOKS',
    },
    {
      img : "book2.jpg",
      bookName : "The ART OF BEING ALONE",
      authonName : 'RENUKA GAVRANI',
    },
   {
     img : "book3.jpg",
     bookName : "The ART OF BEING ALONE",
     authonName : 'NICK TRENTON',
    } 
  ]
    
  return(
    <>
     {
      books.map((items)=>(
        <New details = {items} />
      ))
     }
    </>
  )
}
export default App