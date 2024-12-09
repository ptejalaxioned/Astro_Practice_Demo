import React, { useState } from 'react';
import SaleCountdown from './SaleCountdown';
import Image1 from '../assets/images/shop0.jpg';
import Image2 from '../assets/images/shop1.jpg';
import Image3 from '../assets/images/shop2.jpg';
import Image4 from '../assets/images/shop3.jpg';
import Image5 from '../assets/images/shop4.jpg';
import Image6 from '../assets/images/shop5.jpg';
import Image7 from '../assets/images/shop6.jpg';
import Image8 from '../assets/images/shop7.jpg';

export default function ShopSection() {
  // Initial items data
  const initialItems = [
    { id: 1, name: 'Smart Watch', price: 46, img: Image1 },
    { id: 2, name: 'Fitness Tracker', price: 25, img: Image2 },
    { id: 3, name: 'Air Pods', price: 76, img: Image3 },
    { id: 4, name: 'Phone', price: 55, img: Image4 },
    { id: 5, name: 'Notebook', price: 23, img: Image5 },
    { id: 6, name: 'Mouse', price: 98, img: Image6 },
    { id: 7, name: 'Media Player', price: 22, img: Image7 },
    { id: 8, name: 'Red Cap', price: 55, img: Image8 },
  ];

  // States for sorting, filtering, and price range
  const [items, setItems] = useState(initialItems);
  const [minPrice, setMinPrice] = useState(22);
  const [maxPrice, setMaxPrice] = useState(98);

  // Sorting functions
  const sortByPriceLowToHigh = () => {
    const sortedItems = [...items].sort((a, b) => a.price - b.price);
    setItems(sortedItems);
  };

  const sortByPriceHighToLow = () => {
    const sortedItems = [...items].sort((a, b) => b.price - a.price);
    setItems(sortedItems);
  };

  const revertToDefaultOrder = () => {
    setItems(initialItems);
  };

  // Filtering function based on price range
  const filterItemsByPrice = () => {
    const filteredItems = initialItems.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );
    setItems(filteredItems);
  };

  // Show all items
  const showAllItems = () => {
    setItems(initialItems);
  };

  // Handle range input changes
  const handleRangeChange = (e) => {
    const { name, value } = e.target;
    if (name === 'min') setMinPrice(parseInt(value));
    if (name === 'max') setMaxPrice(parseInt(value));
  };

  return (
    <>
      <section className="sale-countdown">
        <div className="wrapper">
          <SaleCountdown />
          <div className="sale-countdown-down">
            <div className="sort-buttons">
              <a
                href="#FIXME"
                class="button sort-button default-sort"
                target="_self"
                title="Default Sorting">
                default sorting
              </a>
              <a
                href="#FIXME"
                class="button sort-button sort-low-high"
                target="_self"
                title="Price Low To High">
                price: low to high
              </a>
              <a
                href="#FIXME"
                class="button sort-button sort-high-low"
                target="_self"
                title="Price High To Low">
                price: high to low
              </a>
            </div>
            <div className="filter-range">
              <div className="filter-range-left">
                <ul className="item-list">
                  {items.map((item) => (
                    <li key={item.id} className="items">
                      <figure>
                        <img src={item.img.src} alt={item.name} />
                      </figure>
                      <span className="item-name">{item.name}</span>
                      <span className="item-price">${item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="filter-range-right">
                <h5 className="first-letter-caps range-heading">
                  Best Sellers
                </h5>
                <div className="price-range">
                  <h5 className="first-letter-caps range-heading">
                    Price Range
                  </h5>
                  <ul class="low-high">
                    <li class="low">22</li>
                    <li class="high">98</li>
                  </ul>
                  <div class="range">
                    <input
                      type="range"
                      min="22"
                      max="98"
                      value="22"
                      class="min input"
                    />
                    <input
                      type="range"
                      min="22"
                      max="98"
                      value="98"
                      class="max input"
                    />
                  </div>
                  <div className="range-buttons">
                    <a
                      href="#FIXME"
                      class="button orange-button single-letter-caps click-filter"
                      target="_self"
                      title="Filter">
                      filter
                    </a>
                    <a
                      href="#FIXME"
                      class="button blue-button single-letter-caps show-all"
                      target="_self"
                      title="Show All">
                      show all
                    </a>
                  </div>
                </div>
                <div className="filter">
                  <h5 className="first-letter-caps range-heading">Filter</h5>
                  <ul class="filter-list">
                    <li>
                      <a
                        href="#FIXME"
                        class="single-letter-caps all"
                        target="_self"
                        title="All">
                        all
                      </a>
                    </li>
                    <li>
                      <a
                        href="#FIXME"
                        class="single-letter-caps awesome"
                        target="_self"
                        title="Awesome">
                        awesome
                      </a>
                    </li>
                    <li>
                      <a
                        href="#FIXME"
                        class="single-letter-caps wonderful"
                        target="_self"
                        title="Wonderful">
                        wonderful
                      </a>
                    </li>
                    <li>
                      <a
                        href="#FIXME"
                        class="single-letter-caps creative"
                        target="_self"
                        title="Creative">
                        creative
                      </a>
                    </li>
                    <li>
                      <a
                        href="#FIXME"
                        class="single-letter-caps responsive"
                        target="_self"
                        title="Responsive">
                        responsive
                      </a>
                    </li>
                    <li>
                      <a
                        href="#FIXME"
                        class="single-letter-caps animated"
                        target="_self"
                        title="Animated">
                        animated
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
