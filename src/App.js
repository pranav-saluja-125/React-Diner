import './App.css';
import React, { useState } from 'react';
import Menu from './component/Menu';
import Categories from './component/Categories';
import items from './component/data';
import Footer from "./component/Footer.js";
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className='mainheading title'>
          STARK's DINER
        </div>
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
      <div>
          <Footer/>
      </div>
    </main>
  );
}

export default App;