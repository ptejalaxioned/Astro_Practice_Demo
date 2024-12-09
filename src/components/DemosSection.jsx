import Image1 from '../assets/images/shop0.jpg';
import Image2 from '../assets/images/shop1.jpg';
import Image3 from '../assets/images/shop2.jpg';
import Image4 from '../assets/images/shop3.jpg';
import Image5 from '../assets/images/shop4.jpg';
import Image6 from '../assets/images/shop5.jpg';
import Image7 from '../assets/images/shop6.jpg';
import Image8 from '../assets/images/shop7.jpg';

// products section starts

export default function DemosSection() {
  return (
    <>
      <section className="products">
        <div className="wrapper">
          <div className="product-up">
            <p className="single-letter-caps common-para">
              lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              adipisci pariatur accusantium non id ut nesciunt maiores minima
              quo laudantium recusandae voluptates odio, modi nulla voluptatem
              nobis earum culpa obcaecati quae rerum doloremque! Deserunt
              perspiciatis error, aspernatur officiis quo quae quibusdam
              mollitia delectus?
            </p>
            <p className="single-letter-caps common-para">
              lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              adipisci pariatur accusantium non id ut nesciunt maiores minima
              quo laudantium recusandae voluptates odio, modi nulla voluptatem
              nobis earum culpa obcaecati quae rerum doloremque! Deserunt
              perspiciatis error, aspernatur officiis quo quae quibusdam
              mollitia delectus.
            </p>
          </div>
          <div className="product-down">
            <ul className="product-list">
              <li>
                <img src={Image1.src} alt="Watch" />
              </li>
              <li>
                <img src={Image2.src} alt="Smart Watch" />
              </li>
              <li>
                <img src={Image3.src} alt="Airpodes" />
              </li>
              <li>
                <img src={Image4.src} alt="Iphone" />
              </li>
              <li>
                <img src={Image5.src} alt="Laptop" />
              </li>
              <li>
                <img src={Image6.src} alt="Mouse" />
              </li>
              <li>
                <img src={Image7.src} alt="Phone" />
              </li>
              <li>
                <img src={Image8.src} alt="Coffee" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
// products section end
