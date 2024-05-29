import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [search, setSearch] = useState('');

  const loadFoodItems = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/auth/foodData", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      response = await response.json();
      setFoodItems(response[0]);
      setFoodCat(response[1]);
    } catch (error) {
      console.error('Failed to fetch food items:', error);
    }
  };

  useEffect(() => {
    loadFoodItems();
  }, []);

  return (
    <div>
      <Navbar />
      <Carousel search={search} setSearch={setSearch} />
      <div className='container'>
        {foodCat.length > 0 ? foodCat.map((data) => (
          <div key={data._id} className='row mb-3'>
            <div className='fs-3 m-3'>
              {data.CategoryName}
            </div>
            <hr id="hr-success" style={{ height: "4px", backgroundImage: "linear-gradient(to right, lightBlue, lightPink)" }} />
            {foodItems.length > 0 ? foodItems
              .filter((item) => item.CategoryName === data.CategoryName && item.name.toLowerCase().includes(search.toLowerCase()))
              .map(filteredItem => (
                <div key={filteredItem._id} className='col-12 col-md-6 col-lg-3'>
                  <Card foodName={filteredItem.name} item={filteredItem} options={filteredItem.options[0]} ImgSrc={filteredItem.img} />
                </div>
              )) : <div>No Such Data</div>}
          </div>
        )) : ""}
      </div>
      <Footer />
    </div>
  );
}
