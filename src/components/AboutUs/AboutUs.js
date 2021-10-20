import "./AboutUs.css";

function AboutUs() {
   return (
      <div className="AboutUs flex-row">
         <div className="AboutUs-text flex-column">
            <h1> BRINGING YOU THE <span style={{ color: "#d87d4a" }}>BEST</span> AUDIO GEAR </h1>
            <p>
               Located at the heart of New York City, Audiophile is the
               premier store for high end headphones, earphones, speakers,
               and audio accessories. We have a large showroom and luxury
               demonstration rooms available for you to browse and
               experience a wide range of our products. Stop by our store
               to meet some of the fantastic people who make Audiophile
               the best place to buy your portable audio equipment
            </p>
         </div>
         <img src="/images/shared/desktop/image-best-gear.jpg" alt="imageBestGear" />
      </div> /* end AboutUs */
   );
}

export default AboutUs;
