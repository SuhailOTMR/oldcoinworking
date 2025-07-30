import React from 'react';
import { useDispatch } from 'react-redux';
import { openPopup } from '../../../redux/user/popupSlice';
import Scroller from './scroller/scroller';
import Carousel from './controller';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeNew = () => {
  const dispatch = useDispatch();
  
  const starStyle = {
    color: '#FFA900',
    fontSize: '25px',
    marginTop: '3px',
    marginLeft: '5px',
  };

  const cards = ['zoo100.png', 'zoo101.png', 'zoo102.png', 'zoo103.png', 'zoo104.png', 'zoo105.png', 'zoo106.png', 'zoo107.png', 'zoo108.png', 'soo2003.png', 'soo101.png', 'soo2002.png'];
  const card1 = ['zoo109.png', 'zoo110.png', 'zoo111.png', 'zoo112.png', 'zoo113.png', 'zoo114.png', 'zoo115.png', 'zoo116.png', 'zoo117.png'];

  return (
    <>
      {/* Hero background section */}
      <div className="w-screen bg-cover bg-center" style={{ backgroundImage: "url('/hero.png')" }}>



        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center text-white pt-[140px] text-center space-y-5">

            {/* Narrowed width for h1 and p */}
            <div className="max-w-xl w-full">
              <h1 className="font-bold font-sans " style={{ fontSize: "30px" }}>
                <span className="text-[#FFA900]">Earn Rewards</span> By Sharing Your Opinion & Exploring New Apps
              </h1>
              <p className="mt-3">
                Earn money by testing apps, games and taking surveys. Earn up to{' '}
                <b className="text-[#FFA900]">$50.40</b> per offer 494 available offers now. Get started today!
              </p>
            </div>

            <button className="w-[200px] bg-[#FFA900] rounded-full shadow-lg py-2 font-semibold text-black" onClick={() => dispatch(openPopup('signup'))}>
              Sign UP
            </button>

          </div>

        </div>


        <Scroller />

        <div className="container mx-auto px-4">
          <div className="yo">
            <div>
              <span className="text-2xl font-bold">$60,000,000+</span>
              <span>Paid Out to Users</span>
            </div>
            <div>
              <span className="text-2xl font-bold">1M+</span>
              <span>Active Users Worldwide</span>
            </div>
            <div>
              <span className="text-2xl font-bold">4.6 EXCELLENT</span>
              <div className="flex">
                <FaStar style={starStyle} />
                <FaStar style={starStyle} />
                <FaStar style={starStyle} />
                <FaStar style={starStyle} />
                <FaStarHalfAlt style={starStyle} />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Stats section */}
      {/* <div className="container mx-auto px-4">
        <div className="yo">
          <div>
            <span className="text-2xl font-bold">$60,000,000+</span>
            <span>Paid Out to Users</span>
          </div>
          <div>
            <span className="text-2xl font-bold">1M+</span>
            <span>Active Users Worldwide</span>
          </div>
          <div>
            <span className="text-2xl font-bold">4.6 EXCELLENT</span>
            <div className="flex">
              <FaStar style={starStyle} />
              <FaStar style={starStyle} />
              <FaStar style={starStyle} />
              <FaStar style={starStyle} />
              <FaStarHalfAlt style={starStyle} />
            </div>
          </div>
        </div>
      </div> */}

      {/* Offer instructions */}
      <div className="container mx-auto px-4 mt-12" id='how'>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="text-white space-y-4">
            <h1 className="font-bold font-sans text-xl text-left">1. CHOOSE AN OFFER</h1>
            <p className="w-[90%] ml-5 text-left">Take your pick from the tasks on the earn page. We list the best offers from companies who want to advertise their apps, surveys, and products.
            </p>

            <img src="/pandafinal.png" alt="" className="img-fluid yopanda rounded-2xl" />

            <h3 className="font-bold font-sans mt-3 text-xl text-left">2. COMPLETE OFFER</h3>
            <p className="w-[90%] ml-5 text-left">Most offers are very simple and have already earned money for thousands of people. Most offers take around 5-10 minutes to complete.</p>

            <h3 className="font-bold font-sans mt-3 text-xl text-left">3. GET PAID</h3>
            <p className="w-[90%] ml-5 text-left">For each task you complete, you’ll be rewarded with coins: 1000 coins = $1,00. Cashout the coins and get your hands on your free cash!</p>
          </div>

          <div className="contentWrapper secondSection flex flex-col gap-4 text-white">
            <h2 className="text-center font-bold font-sans w-[80%] mx-auto forpadding"

            >
              WANT TO POCKET SOME QUICK CASH? FIND OUT <span className="text-[#FFA900]">HOW HERE</span>
            </h2>
            <button className="bg-[#FFA900] text-black font-bold text-xl py-2 w-[280px] rounded-full mx-auto" onClick={() => dispatch(openPopup('signin'))}>
              Start earning now
            </button>
            <img src="/yoyo.png" alt="" className="img-fluid pandaimg rounded-2xl mt-4" />
          </div>
        </div>
      </div>

      {/* Highlighted section */}
      <div className="col col-11 col-lg-5 mx-auto mt-8 custom2heading">
        <h2 className="text-white font-bold font-sans text-center" style={{ fontSize: "25px" }}>
          WE'RE THE ROP SPOT TO BOOST YOUR EARNING. <span className="text-[#FFA900]">DISCOVER WHY</span>
        </h2>
      </div>

      {/* Image triplet */}
      <div className="container mx-auto px-4 mt-8 grid sm:grid-cols-3 gap-4 customtriple" id='earn'>
        {['zoo2.png', 'zoo3.png', 'zoo1.png'].map((img, i) => (
          <img key={i} src={`/${img}`} alt="" className="img-fluid yopanda  mx-auto imgfor" />
        ))}
      </div>

      {/* Earning Cards */}
      {/* <div className="container mx-auto px-4 mt-10 grid md:grid-cols-3 gap-6">
                {[
                    { img: 'zoo4.png', title: 'Play & Win', value: '$1.00-$120.00', desc: 'Play Games. Earn Cash...' },
                    { img: 'zoo5.png', title: 'Complete offers', value: '$1.00 - $75.00', desc: 'Try New Apps...' },
                    { img: 'zoo6.png', title: 'Join surveys', value: '$1.00', desc: 'Your Opinion Matters!' },
                ].map((card, index) => (
                    <div key={index} className="bg-[#1E1E2E] rounded-2xl p-6 text-center text-white flex flex-col items-center gap-3">
                        <div
                            className="rounded-full h-40 w-40 bg-cover bg-center mx-auto"
                            style={{ backgroundImage: `url('/${card.img}')` }}
                        />
                        <span className="text-2xl font-bold font-sans">{card.title}</span>
                        <p className="w-[90%] mx-auto">{card.desc}</p>
                        <h3 className="text-[#27FD6A] font-bold">{card.value}</h3>
                        <button className="bg-[#FFA900] text-black font-bold py-2 w-[220px] rounded-full">
                            Start Playing & Earning
                        </button>
                    </div>
                ))}
            </div> */}

      <h1 style={{ color: "white", fontSize: "30px", textAlign: "center", margin: "20px 0px", fontWeight: "bold" }} className='font-sans' >EXCITED WAYS TO <span style={{ color: "#FFA900" }}>MAKE MONEY!</span></h1>

      <div className="container mx-auto px-4 mt-10 grid md:grid-cols-3 gap-6 justify-center" >
        {[
          { img: 'zoo4.png', title: 'Play & Win', value: '$1.00-$120.00', desc: 'Play Games. Earn Cash. It’s that simple—try out exciting new games and get rewarded.' },
          { img: 'zoo5.png', title: 'Complete offers', value: '$1.00 - $75.00', desc: 'Try New Apps. Get Paid Instantly. Making money has never been this easy.' },
          { img: 'zoo6.png', title: 'Join surveys', value: '$1.00', desc: 'Your Opinion Matters! Companies pay you to improve their products and services.' },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-[#1E1E2E] rounded-2xl p-6 text-center text-white flex flex-col items-center gap-3 mx-auto max-w-[305px] w-full" style={{ padding: "40px 0px" }}
          >
            <div
              className="rounded-full h-40 w-40 bg-cover bg-center mx-auto"
              style={{ backgroundImage: `url('/${card.img}')` }}
            />
            <span className="text-2xl font-bold font-sans">{card.title}</span>
            <p className="w-[90%] mx-auto" style={{ textAlign: "center" }}>{card.desc}</p>
            <h3 className="text-[#27FD6A] font-bold" style={{ fontSize: "25px" }}>{card.value}</h3>
            <button className="bg-[#FFA900] text-black font-bold py-2 w-[220px] rounded-full" onClick={() => dispatch(openPopup('signin'))}>
              Start Playing & Earning
            </button>
          </div>
        ))}
      </div>


      {/* Partners */}
      <div className="container mx-auto px-4 mt-12 text-center text-white font-bold">
        <h3 style={{ fontSize: "30px" }}>INTEGRATED <span className="text-[#FFA900]">PARTNER</span></h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 py-4 ">
          {cards.map((img, i) => (
            <img key={i} src={`/${img}`} alt="" className="w-[90%] mx-auto customway" />
          ))}
        </div>
      </div>

      {/* Cashout */}
      <div className="container mx-auto px-4 mt-12 text-center text-white font-bold" id='cashout'>
        <h3 style={{ fontSize: "30px" }}>CASHOUT <span className="text-[#FFA900]">VIA</span></h3>
        <div className="flex flex-wrap justify-center mt-6 gap-4 youCard">
          {/* {card1.map((img, index) => (
                        <img
                            key={index}
                            src={`/${img}`}
                            alt=""
                            className="customLogocards w-[100px] h-auto mx-auto"
                        />
                    ))} */}
          <img
            src='/zoo109.png'
            alt=""
            className="customLogocards w-[100px] h-auto mx-auto"
          />
          <img
            src='/zoo110.png'
            alt=""
            className="customLogocards w-[100px] h-auto mx-auto"
          />
          <img
            src='/zoo111.png'
            alt=""
            className="customLogocards w-[100px] h-auto mx-auto"
          />
          <img
            src='/zoo112.png'
            alt=""
            className="customLogocards w-[100px] h-auto mx-auto"
          />
          <img
            src='/zoo113.png'
            alt=""
            className="customLogocards w-[100px] h-auto mx-auto"
          />
          <img
            src='/zoo114.png'
            alt=""
            className="customLogocards w-[100px] h-auto mx-auto"
          />
          <img
            src='/zoo115.png'
            alt=""
            className="customLogocards w-[100px] h-auto mx-auto"
          />
          <img
            src='/zoo116.png'
            alt=""
            className="customLogocards w-[100px] h-auto mx-auto"
          />
          <img
            src='/zoo117.png'
            alt=""
            className="customLogocards w-[100px] h-auto mx-auto hiddlelogoformobile"
          />
        </div>

        <div >
          <img src="/zoo700.png" alt="" className="img-fluid mt-20" style={{ width: "1000px", margin: "60px auto" }} />
        </div>

        {/* <CashoutDashboard/> */}
      </div>

      {/* Carousel section */}
      <Carousel />



      {/* Community section */}
      <div
        className="w-full bg-cover bg-center py-12 px-4"
        style={{ backgroundImage: `url('/zoo2000.png')`, marginTop: "0px" }}
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
          <img src="/zoo2001.png" alt="" className="img-fluid mx-auto" />
          <div className="text-white space-y-4 text-left">
            <h3 className="font-bold font-sans footPara text-xl" >Join the community</h3>
            <p className="footPara1 w-[80%]">
              When you sign up for Freecash, you join a community of millions of people who choose to make money online. This amazing community can help you to complete the offers fast and earn more money.
              In this video, one of our community members shares how to get started on Freecash now.
            </p>
          </div>
        </div>
      </div>






      {/*  */}
    </>
  );
};

export default HomeNew;
