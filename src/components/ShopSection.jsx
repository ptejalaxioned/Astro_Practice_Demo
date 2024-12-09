import React from 'react';
import SaleCountdown from './SaleCountdown';
import Image1 from '../assets/images/shop0.jpg';
import Image2 from '../assets/images/shop1.jpg';
import Image3 from '../assets/images/shop2.jpg';
import Image4 from '../assets/images/shop3.jpg';
import Image5 from '../assets/images/shop4.jpg';
import Image6 from '../assets/images/shop5.jpg';
import Image7 from '../assets/images/shop6.jpg';
import Image8 from '../assets/images/shop7.jpg';

// sale-countdown section end
export default function ShopSection() {
  return (
    <>
      <section className="sale-countdown">
        <div className="wrapper">
          <SaleCountdown />
          <div className="sale-countdown-down">
            <div className="sort-buttons">
              <a
                href="#FIXME"
                className="button sort-button default-sort"
                target="_self"
                title="Default Sorting">
                default sorting
              </a>
              <a
                href="#FIXME"
                className="button sort-button sort-low-high"
                target="_self"
                title="Price Low To High">
                price: low to high
              </a>
              <a
                href="#FIXME"
                className="button sort-button sort-high-low"
                target="_self"
                title="Price High To Low">
                price: high to low
              </a>
            </div>
            <div className="filter-range">
              <div className="filter-range-left">
                <ul className="item-list">
                  <li className="items">
                    <figure>
                      <img src={Image1.src} alt="Smart Watch" />
                    </figure>
                    <span className="item-name">smart watch</span>
                    <span className="item-price">$46</span>
                  </li>
                  <li className="items">
                    <figure>
                      <img src={Image2.src} alt="Fitness Watch" />
                    </figure>
                    <span className="item-name">fitness tracker</span>
                    <span className="item-price">$25</span>
                  </li>
                  <li className="items">
                    <figure>
                      <img src={Image3.src} alt="Air Pods" />
                    </figure>
                    <span className="item-name">air pods</span>
                    <span className="item-price">$76</span>
                  </li>
                  <li className="items">
                    <figure>
                      <img src={Image4.src} alt="Phone" />
                    </figure>
                    <span className="item-name">phone</span>
                    <span className="item-price">$55</span>
                  </li>
                  <li className="items">
                    <figure>
                      <img src={Image5.src} alt="Notebook" />
                    </figure>
                    <span className="item-name">notebook</span>
                    <span className="item-price">$23</span>
                  </li>
                  <li className="items">
                    <figure>
                      <img src={Image6.src} alt="Mouse" />
                    </figure>
                    <span className="item-name">mouse</span>
                    <span className="item-price">$98</span>
                  </li>
                  <li className="items">
                    <figure>
                      <img src={Image7.src} alt="Media Player" />
                    </figure>
                    <span className="item-name">media player</span>
                    <span className="item-price">$22</span>
                  </li>
                  <li className="items">
                    <figure>
                      <img src={Image8.src} alt="Red Cap" />
                    </figure>
                    <span className="item-name">red cap</span>
                    <span className="item-price">$55</span>
                  </li>
                </ul>
              </div>
              <div className="filter-range-right">
                <h5 className="first-letter-caps range-heading">
                  best sellers
                </h5>
                <div className="price-range">
                  <h5 className="first-letter-caps range-heading">
                    price range
                  </h5>
                  <ul className="low-high">
                    <li className="low">22</li>
                    <li className="high">98</li>
                  </ul>
                  <div className="range">
                    <input
                      type="range"
                      min="22"
                      max="98"
                      value="22"
                      className="min input"
                    />
                    <input
                      type="range"
                      min="22"
                      max="98"
                      value="98"
                      className="max input"
                    />
                  </div>
                  <div className="range-buttons">
                    <a
                      href="#FIXME"
                      className="button orange-button single-letter-caps click-filter"
                      target="_self"
                      title="Filter">
                      filter
                    </a>
                    <a
                      href="#FIXME"
                      className="button blue-button single-letter-caps show-all"
                      target="_self"
                      title="Show All">
                      show all
                    </a>
                  </div>
                </div>
                <div className="filter">
                  <h5 className="first-letter-caps range-heading">filter</h5>
                  <ul className="filter-list">
                    <li>
                      <a
                        href="#FIXME"
                        className="single-letter-caps all"
                        target="_self"
                        title="All">
                        all
                      </a>
                    </li>
                    <li>
                      <a
                        href="#FIXME"
                        className="single-letter-caps awesome"
                        target="_self"
                        title="Awesome">
                        awesome
                      </a>
                    </li>
                    <li>
                      <a
                        href="#FIXME"
                        className="single-letter-caps wonderful"
                        target="_self"
                        title="Wonderful">
                        wonderful
                      </a>
                    </li>
                    <li>
                      <a
                        href="#FIXME"
                        className="single-letter-caps creative"
                        target="_self"
                        title="Creative">
                        creative
                      </a>
                    </li>
                    <li>
                      <a
                        href="#FIXME"
                        className="single-letter-caps responsive"
                        target="_self"
                        title="Responsive">
                        responsive
                      </a>
                    </li>
                    <li>
                      <a
                        href="#FIXME"
                        className="single-letter-caps animated"
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
//sale-countdown section end
