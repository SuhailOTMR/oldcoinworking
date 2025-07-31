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
        <div className="carousel-card" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <h1 className="text-white" style={{ fontSize: "22px", fontWeight: "bold", textAlign: "center" }}>
            Excellent
          </h1>
          <img src="/trust.webp" alt="" style={{ height: "40px" }} />
          <p className="text-white">Based on 15099 reviews</p>
          <img src="/trustpilotLogo.svg" alt="" />
        </div>
        <div className="carousel-card" >

          <div style={{ display: "flex", gap: "5px" }}>
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
          </div>
          <h2 className="text-white text-left" style={{ fontSize: "22px", fontWeight: "bold" }}>Earned My First Reward Instantly!</h2>
          <p className="text-white text-left" style={{ fontSize: "14px" }}>
            CoinLooty is genuinely one of the easiest ways I’ve found to earn money online. The surveys are simple, and the payouts are real. I’ve already redeemed twice!

          </p>
          <h2 className="text-white text-left" style={{ fontWeight: "bold", fontSize: "17px" }}>Ravi Sharma</h2>
          <small className="text-white text-left" style={{ margin: "-5px 0px" }}>12 may 2025</small>
        </div>
        <div className="carousel-card" >

          <div style={{ display: "flex", gap: "5px" }}>
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
          </div>
          <h2 className="text-white text-left" style={{ fontSize: "22px", fontWeight: "bold" }}>Perfect Side Income for Students</h2>
          <p className="text-white text-left" style={{ fontSize: "14px" }}>
            I'm a college student, and CoinLooty helps me cover my mobile bills just by completing simple tasks and referring friends. Easy, transparent, and fast payouts every time.

          </p>
          <h2 className="text-white text-left" style={{ fontWeight: "bold", fontSize: "17px" }}>Aditya Raj </h2>
          <small className="text-white text-left" style={{ margin: "-5px 0px" }}>April 22, 2025</small>
        </div>
        <div className="carousel-card" >

          <div style={{ display: "flex", gap: "5px" }}>
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
          </div>
          <h2 className="text-white text-left" style={{ fontSize: "22px", fontWeight: "bold" }}>Honestly Impressed with the UI</h2>
          <p className="text-white text-left" style={{ fontSize: "14px" }}>
            CoinLooty’s clean interface and fast coin crediting system impressed me. I’ve used many reward apps, but this one really stands out in terms of reliability and user experience.

          </p>
          <h2 className="text-white text-left" style={{ fontWeight: "bold", fontSize: "17px" }}>Fatima Sheikh</h2>
          <small className="text-white text-left" style={{ margin: "-5px 0px" }}>March 9, 2025</small>
        </div>
        <div className="carousel-card" >

          <div style={{ display: "flex", gap: "5px" }}>
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
          </div>
          <h2 className="text-white text-left" style={{ fontSize: "22px", fontWeight: "bold" }}>Legit Platform, Fast Payouts!</h2>
          <p className="text-white text-left" style={{ fontSize: "14px" }}>
            I’ve tried CoinLooty for about three weeks now. I’ve earned enough to order from Amazon twice. Offers are legit and support is very responsive. Great platform!

          </p>
          <h2 className="text-white text-left" style={{ fontWeight: "bold", fontSize: "17px" }}>Neeraj Verma </h2>
          <small className="text-white text-left" style={{ margin: "-5px 0px" }}>28 may 2025</small>
        </div>
        <div className="carousel-card" >

          <div style={{ display: "flex", gap: "5px" }}>
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
          </div>
          <h2 className="text-white text-left" style={{ fontSize: "22px", fontWeight: "bold" }}>Daily Use, Daily Rewards!</h2>
          <p className="text-white text-left" style={{ fontSize: "14px" }}>
            CoinLooty made earning so much easier! I complete a few surveys during lunch breaks and get rewarded the same day. The experience is smooth and worth your time.

          </p>
          <h2 className="text-white text-left" style={{ fontWeight: "bold", fontSize: "17px" }}>Tanya Joshi</h2>
          <small className="text-white text-left" style={{ margin: "-5px 0px" }}>February 14, 2025</small>
        </div>
        <div className="carousel-card" >

          <div style={{ display: "flex", gap: "5px" }}>
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
          </div>
          <h2 className="text-white text-left" style={{ fontSize: "22px", fontWeight: "bold" }}>Didn’t Expect It To Be This Good</h2>
          <p className="text-white text-left" style={{ fontSize: "14px" }}>
            At first, I was skeptical about CoinLooty. But after completing a few offers and getting instant rewards, I was totally convinced. Highly recommended for daily extra income.

          </p>
          <h2 className="text-white text-left" style={{ fontWeight: "bold", fontSize: "17px" }}>Simran Kaur</h2>
          <small className="text-white text-left" style={{ margin: "-5px 0px" }}>June 2, 2025</small>
        </div>
        <div className="carousel-card" >

          <div style={{ display: "flex", gap: "5px" }}>
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
          </div>
          <h2 className="text-white text-left" style={{ fontSize: "22px", fontWeight: "bold" }}>Got Paid in 24 Hours!</h2>
          <p className="text-white text-left" style={{ fontSize: "14px" }}>
            I found CoinLooty while browsing and gave it a shot. Trust me, it's real. Got my first payment within 24 hours. Love the instant gratification model they follow!

          </p>
          <h2 className="text-white text-left" style={{ fontWeight: "bold", fontSize: "17px" }}>Kunal Mehta </h2>
          <small className="text-white text-left" style={{ margin: "-5px 0px" }}>January 5, 2025

          </small>
        </div>
        <div className="carousel-card" >

          <div style={{ display: "flex", gap: "5px" }}>
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
          </div>
          <h2 className="text-white text-left" style={{ fontSize: "22px", fontWeight: "bold" }}>Great for Beginners in Online Earnings</h2>
          <p className="text-white text-left" style={{ fontSize: "14px" }}>
            As someone new to GPT (get-paid-to) sites, CoinLooty made onboarding super easy. Simple steps, clean dashboard, and no hidden rules. I now log in daily to earn.

          </p>
          <h2 className="text-white text-left" style={{ fontWeight: "bold", fontSize: "17px" }}>Alisha Pandey</h2>
          <small className="text-white text-left" style={{ margin: "-5px 0px" }}>April 3, 2025</small>
        </div>
        <div className="carousel-card" >

          <div style={{ display: "flex", gap: "5px" }}>
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
          </div>
          <h2 className="text-white text-left" style={{ fontSize: "22px", fontWeight: "bold" }}>Refer & Earn Works Wonderfully</h2>
          <p className="text-white text-left" style={{ fontSize: "14px" }}>
            I’ve already invited five friends and earned bonus rewards. CoinLooty’s refer & earn feature is awesome. I wish I’d found this platform earlier. Great for side income.

          </p>
          <h2 className="text-white text-left" style={{ fontWeight: "bold", fontSize: "17px" }}>Manish Rathi</h2>
          <small className="text-white text-left" style={{ margin: "-5px 0px" }}>March 19, 2025</small>
        </div>
        <div className="carousel-card" >

          <div style={{ display: "flex", gap: "5px" }}>
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
          </div>
          <h2 className="text-white text-left" style={{ fontSize: "22px", fontWeight: "bold" }}>Earned While Testing Apps!</h2>
          <p className="text-white text-left" style={{ fontSize: "14px" }}>
            CoinLooty is fun, engaging, and rewarding. Whether it’s apps, games, or surveys, you can earn in your free time. Perfect platform for anyone looking to make extra cash.

          </p>
          <h2 className="text-white text-left" style={{ fontWeight: "bold", fontSize: "17px" }}>Divya Patel</h2>
          <small className="text-white text-left" style={{ margin: "-5px 0px" }}>June 15, 2025</small>
        </div>
        <div className="carousel-card" >

          <div style={{ display: "flex", gap: "5px" }}>
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
          </div>
          <h2 className="text-white text-left" style={{ fontSize: "22px", fontWeight: "bold" }}>Real Rewards, No Nonsense</h2>
          <p className="text-white text-left" style={{ fontSize: "14px" }}>
            I’m impressed by how quickly CoinLooty credits rewards. No delays, no false promises. Plus, their customer support actually listens and resolves quickly. It’s a 5-star app in my books!

          </p>
          <h2 className="text-white text-left" style={{ fontWeight: "bold", fontSize: "17px" }}>Rehan Qureshi</h2>
          <small className="text-white text-left" style={{ margin: "-5px 0px" }}>May 4, 2025</small>
        </div>
        <div className="carousel-card" >

          <div style={{ display: "flex", gap: "5px" }}>
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
            <img src="https://www.nationaldebtrelief.com/wp-content/themes/hjs-blocks/images/trustpilot-star-rating.png" alt="" style={{ height: "40px" }} />
          </div>
          <h2 className="text-white text-left" style={{ fontSize: "22px", fontWeight: "bold" }}>Earned ₹1500 in My First Month</h2>
          <p className="text-white text-left" style={{ fontSize: "14px" }}>
            CoinLooty helped me earn over ₹1500 in just under a month. Legit surveys, no spammy ads, and everything is simple to use. Perfect platform for daily earnings.

          </p>
          <h2 className="text-white text-left" style={{ fontWeight: "bold", fontSize: "17px" }}>Sneha Nair</h2>
          <small className="text-white text-left" style={{ margin: "-5px 0px" }}>July 1, 2025</small>
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