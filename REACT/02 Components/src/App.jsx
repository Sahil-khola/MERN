import "./App.css";
import Book from "./Book";
import book from "./book.json";

function App() {
  return (
    <div className="main">
      {book.map((Element) => {
        return (
          <Book
            image={Element.image}
            title={Element.title}
            publisher={Element.publisher}
            price={Element.price}
            key={Element.title}
          />
        );
      })}
    </div>
  );
}

export default App;
