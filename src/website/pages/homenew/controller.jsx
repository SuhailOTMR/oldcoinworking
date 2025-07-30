import React, { useRef } from "react";

const Carousel = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = carouselRef.current.offsetWidth / 1.2;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="carousel-container mb-[50px] -mt-[120px]" style={{ marginTop: "-30px" }}
    >

      <div className="carousel-wrapper" ref={carouselRef}>
        <div className="carousel-card" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <h1 className="text-white" style={{fontSize:"22px",fontWeight:"bold",textAlign:"center"}}>
            Excellent
          </h1>
          <img src="/trust.webp" alt="" style={{height:"40px"}}/>
          <p className="text-white">Based on 15099 reviews</p>
          <img src="/trustpilotLogo.svg" alt="" />
        </div>
        <div className="carousel-card" >

          <div style={{ display: "flex",gap:"5px" }}>
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
          </div>
          <h2 className="text-white text-left" style={{ fontSize: "22px", fontWeight: "bold" }}>Coinlooty is the best </h2>
          <p className="text-white text-left" style={{ fontSize: "14px" }}>
            This company is doing everything well including allowing people to make money. The speed in which they payout when that time comes is exceptional. Thanks Coinlooty!

          </p>
          <h2 className="text-white text-left" style={{ fontWeight: "bold",fontSize:"17px" }}>Suhial@opinion</h2>
          <small className="text-white text-left" style={{ margin: "-10px 5px" }}>3 year ago</small>
        </div>
        <div className="carousel-card" >

          <div style={{ display: "flex",gap:"5px" }}>
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
          </div>
          <h2 className="text-white text-left" style={{ fontSize: "22px", fontWeight: "bold" }}>Coinlooty is the best </h2>
          <p className="text-white text-left" style={{ fontSize: "14px" }}>
            This company is doing everything well including allowing people to make money. The speed in which they payout when that time comes is exceptional. Thanks Coinlooty!

          </p>
          <h2 className="text-white text-left" style={{ fontWeight: "bold",fontSize:"17px" }}>Suhial@opinion</h2>
          <small className="text-white text-left" style={{ margin: "-10px 5px" }}>3 year ago</small>
        </div>
            <div className="carousel-card" >

          <div style={{ display: "flex",gap:"5px" }}>
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
          </div>
          <h2 className="text-white text-left" style={{ fontSize: "22px", fontWeight: "bold" }}>Coinlooty is the best </h2>
          <p className="text-white text-left" style={{ fontSize: "14px" }}>
            This company is doing everything well including allowing people to make money. The speed in which they payout when that time comes is exceptional. Thanks Coinlooty!

          </p>
          <h2 className="text-white text-left" style={{ fontWeight: "bold",fontSize:"17px" }}>Suhial@opinion</h2>
          <small className="text-white text-left" style={{ margin: "-10px 5px" }}>3 year ago</small>
        </div>
        <div className="carousel-card" >

          <div style={{ display: "flex",gap:"5px" }}>
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
          </div>
          <h2 className="text-white text-left" style={{ fontSize: "22px", fontWeight: "bold" }}>Coinlooty is the best </h2>
          <p className="text-white text-left" style={{ fontSize: "14px" }}>
            This company is doing everything well including allowing people to make money. The speed in which they payout when that time comes is exceptional. Thanks Coinlooty!

          </p>
          <h2 className="text-white text-left" style={{ fontWeight: "bold",fontSize:"17px" }}>Suhial@opinion</h2>
          <small className="text-white text-left" style={{ margin: "-10px 5px" }}>3 year ago</small>
        </div>
        <div className="carousel-card" >

          <div style={{ display: "flex",gap:"5px" }}>
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
          </div>
          <h2 className="text-white text-left" style={{ fontSize: "22px", fontWeight: "bold" }}>Coinlooty is the best </h2>
          <p className="text-white text-left" style={{ fontSize: "14px" }}>
            This company is doing everything well including allowing people to make money. The speed in which they payout when that time comes is exceptional. Thanks Coinlooty!

          </p>
          <h2 className="text-white text-left" style={{ fontWeight: "bold",fontSize:"17px" }}>Suhial@opinion</h2>
          <small className="text-white text-left" style={{ margin: "-10px 5px" }}>3 year ago</small>
        </div>
        <div className="carousel-card" >

          <div style={{ display: "flex",gap:"5px" }}>
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
          </div>
          <h2 className="text-white text-left" style={{ fontSize: "22px", fontWeight: "bold" }}>Coinlooty is the best </h2>
          <p className="text-white text-left" style={{ fontSize: "14px" }}>
            This company is doing everything well including allowing people to make money. The speed in which they payout when that time comes is exceptional. Thanks Coinlooty!

          </p>
          <h2 className="text-white text-left" style={{ fontWeight: "bold",fontSize:"17px" }}>Suhial@opinion</h2>
          <small className="text-white text-left" style={{ margin: "-10px 5px" }}>3 year ago</small>
        </div>
        <div className="carousel-card" >

          <div style={{ display: "flex",gap:"5px" }}>
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
          </div>
          <h2 className="text-white text-left" style={{ fontSize: "22px", fontWeight: "bold" }}>Coinlooty is the best </h2>
          <p className="text-white text-left" style={{ fontSize: "14px" }}>
            This company is doing everything well including allowing people to make money. The speed in which they payout when that time comes is exceptional. Thanks Coinlooty!

          </p>
          <h2 className="text-white text-left" style={{ fontWeight: "bold",fontSize:"17px" }}>Suhial@opinion</h2>
          <small className="text-white text-left" style={{ margin: "-10px 5px" }}>3 year ago</small>
        </div>
        <div className="carousel-card" >

          <div style={{ display: "flex",gap:"5px" }}>
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
          </div>
          <h2 className="text-white text-left" style={{ fontSize: "22px", fontWeight: "bold" }}>Coinlooty is the best </h2>
          <p className="text-white text-left" style={{ fontSize: "14px" }}>
            This company is doing everything well including allowing people to make money. The speed in which they payout when that time comes is exceptional. Thanks Coinlooty!

          </p>
          <h2 className="text-white text-left" style={{ fontWeight: "bold",fontSize:"17px" }}>Suhial@opinion</h2>
          <small className="text-white text-left" style={{ margin: "-10px 5px" }}>3 year ago</small>
        </div>
        <div className="carousel-card" >

          <div style={{ display: "flex",gap:"5px" }}>
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
          </div>
          <h2 className="text-white text-left" style={{ fontSize: "22px", fontWeight: "bold" }}>Coinlooty is the best </h2>
          <p className="text-white text-left" style={{ fontSize: "14px" }}>
            This company is doing everything well including allowing people to make money. The speed in which they payout when that time comes is exceptional. Thanks Coinlooty!

          </p>
          <h2 className="text-white text-left" style={{ fontWeight: "bold",fontSize:"17px" }}>Suhial@opinion</h2>
          <small className="text-white text-left" style={{ margin: "-10px 5px" }}>3 year ago</small>
        </div>
        <div className="carousel-card" >

          <div style={{ display: "flex",gap:"5px" }}>
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
          </div>
          <h2 className="text-white text-left" style={{ fontSize: "22px", fontWeight: "bold" }}>Coinlooty is the best </h2>
          <p className="text-white text-left" style={{ fontSize: "14px" }}>
            This company is doing everything well including allowing people to make money. The speed in which they payout when that time comes is exceptional. Thanks Coinlooty!

          </p>
          <h2 className="text-white text-left" style={{ fontWeight: "bold",fontSize:"17px" }}>Suhial@opinion</h2>
          <small className="text-white text-left" style={{ margin: "-10px 5px" }}>3 year ago</small>
        </div>
        <div className="carousel-card" >

          <div style={{ display: "flex",gap:"5px" }}>
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
          </div>
          <h2 className="text-white text-left" style={{ fontSize: "22px", fontWeight: "bold" }}>Coinlooty is the best </h2>
          <p className="text-white text-left" style={{ fontSize: "14px" }}>
            This company is doing everything well including allowing people to make money. The speed in which they payout when that time comes is exceptional. Thanks Coinlooty!

          </p>
          <h2 className="text-white text-left" style={{ fontWeight: "bold",fontSize:"17px" }}>Suhial@opinion</h2>
          <small className="text-white text-left" style={{ margin: "-10px 5px" }}>3 year ago</small>
        </div>
        <div className="carousel-card" >

          <div style={{ display: "flex",gap:"5px" }}>
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
          </div>
          <h2 className="text-white text-left" style={{ fontSize: "22px", fontWeight: "bold" }}>Coinlooty is the best </h2>
          <p className="text-white text-left" style={{ fontSize: "14px" }}>
            This company is doing everything well including allowing people to make money. The speed in which they payout when that time comes is exceptional. Thanks Coinlooty!

          </p>
          <h2 className="text-white text-left" style={{ fontWeight: "bold",fontSize:"17px" }}>Suhial@opinion</h2>
          <small className="text-white text-left" style={{ margin: "-10px 5px" }}>3 year ago</small>
        </div>
        
      </div>

      <div className="carousel-nav">
        <button className="carousel-button" onClick={() => scroll("left")}>
          &#8249;
        </button>
        <button className="carousel-button" onClick={() => scroll("right")}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Carousel;