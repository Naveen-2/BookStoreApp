
import './App.css';
import Header from "../src/components/header/header";
import Footer from "../src/components/footer/footer";
import BookList from './components/book-list/book-list';
import CartPage from './components/cart-page/cart-page';

function App() {
  return (
    <>
    
      <Header />
      {/* <BookList /> */}
      <CartPage />
      <Footer />

    </>
    
  );
}

export default App;
