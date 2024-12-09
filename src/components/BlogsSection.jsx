import MobileImg from '../assets/images/01.jpg';
export default function BlogsSection() {
  return (
    <>
      <section class="mobile">
        <div class="wrapper">
          <ul class="mobile-list-left">
            <li>
              <h4 class="first-letter-caps globe">newest models</h4>
              <p class="para-for-h4">
                lorem ipsum dolor sit amet con adipisicing elit non.
              </p>
            </li>
            <li>
              <h4 class="first-letter-caps chat">active community</h4>
              <p class="para-for-h4">
                lorem ipsum dolor sit amet consectetur adipisicing elit non
                alias cupiditate quas enim.
              </p>
            </li>
            <li>
              <h4 class="first-letter-caps project">big project</h4>
              <p class="para-for-h4">
                lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
          </ul>
          <figure class="mobile-center">
            <img src={MobileImg.src} alt="Mobile" />
          </figure>
          <ul class="mobile-list-right">
            <li>
              <h4 class="first-letter-caps security">clients security</h4>
              <p class="para-for-h4">
                lorem ipsum dolor sit amet consectetur adipisicing elit non
                alias cupidit.
              </p>
            </li>
            <li>
              <h4 class="first-letter-caps computer">multifunctional</h4>
              <p class="para-for-h4">
                lorem ipsum dolor sit amet consectetur adipisicing elit non
                alias cupidi.
              </p>
            </li>
            <li>
              <h4 class="first-letter-caps setting">market analysis</h4>
              <p class="para-for-h4">
                lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
// mobile section end
