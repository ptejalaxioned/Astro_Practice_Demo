// header section start
import features from '../pages/features.astro';
import blogs from '../pages/blogs.astro';
import shop from '../pages/shop.astro';
import demos from '../pages/demos.astro';
export default function ReactSection() {
  return (
    <>
      <header>
        <div className="wrapper">
          <div className="hamburger">
            <span className="line line1">line1</span>
            <span className="line line2">line2</span>
            <span className="line line3">line3</span>
          </div>
          <div className="header-content">
            <nav className="header-left">
              <ul className="nav-list">
                <li>
                  <a
                    href="/https://github.com/ptejalaxioned/Astro_Project_Demo.git/"
                    title="Home"
                    className="all-caps home nav-menu"
                    target="_self">
                    home
                  </a>
                </li>
                <li>
                  <a
                    href="/https://github.com/ptejalaxioned/Astro_Project_Demo.git/features"
                    title="Features"
                    className="all-caps features nav-menu"
                    target="_self">
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="/https://github.com/ptejalaxioned/Astro_Project_Demo.git/blogs"
                    title="Blogs"
                    className="all-caps blogs nav-menu"
                    target="_self">
                    blogs
                  </a>
                </li>
                <li>
                  <a
                    href="/https://github.com/ptejalaxioned/Astro_Project_Demo.git/shop"
                    title="Shop"
                    className="all-caps shop nav-menu"
                    target="_self">
                    shop
                  </a>
                </li>
                <li className="demo-list">
                  <a
                    href="/https://github.com/ptejalaxioned/Astro_Project_Demo.git/demos"
                    title="Demos"
                    className="all-caps demos nav-menu"
                    target="_self">
                    demos
                  </a>
                </li>
              </ul>
            </nav>
            <div className="header-center">
              <a href="#FIXME" className="button" target="_self">
                contact us
              </a>
            </div>
            <div className="header-right">
              <ul className="icons-list">
                <li>
                  <a href="#FIXME" title="Cart" target="_self" className="cart">
                    cart
                  </a>
                </li>
                <li>
                  <a
                    href="#FIXME"
                    title="Search"
                    target="_self"
                    className="search">
                    search
                  </a>
                </li>
                <li>
                  <a
                    href="#FIXME"
                    title="Earth"
                    target="_self"
                    className="earth">
                    earth
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
// header section end
