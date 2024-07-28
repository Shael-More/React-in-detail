import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import { books } from './data';
import Book from './Book';

function Booklist() {
  // const getBook = (id) => {
  //   const book = books.find((book) => book.id === id);
  //   console.log(book);
  // };

  return (
    <>
      <h1>Amazon best sellers</h1>
      <section className='booklist-grid'>
        {books.map((book, index) => {
          // return <Book author={author} title={title} img={img} key={id}/> or
          return <Book {...book} key={book.id} number={index} />; // spread operator
        })}
      </section>
    </>
  );
}

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<Booklist />);
