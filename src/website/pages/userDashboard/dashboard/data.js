
const auth  =  JSON.parse(localStorage.getItem('opinionUser'))

const partnersData = {
    "partners": [
      {
        "id": 1,
        "name": "Opinion Universe",
        "image": "https://www.opinionuniverse.com/assets/opinionuniverse_logo-BUDVpw3E.png",
        "rating": "$300",
        "iframeUrl": `https://opinionuniverse.com/offerwall.php?pubid=3&sid=[user_id]&app_id=ID_666aaea5254cd1.79214671&apikey=[apikey]`,
        gradientBackground: "linear-gradient(180deg, #384152, #FF5300)"
      },
      {                                                                                             
        "id": 2,
        "name": "Lootably",
        "image": "/offerwall/lootably-black.png",
        "rating": "$300",
        "iframeUrl": `https://wall.lootably.com/?placementID=clf9hx9950tyb011f5hh313k3&sid=[user_id]`,
         gradientBackground: "linear-gradient(180deg, #384152, #FFC107)"
      },
      {
        "id": 3,
        "name": "Adgate",
        "image": "/offerwall/timewall-logo.png",
        "rating": "$300",
        "iframeUrl": ` 9y9y9 87m `,
         gradientBackground: "linear-gradient(180deg, #384152, #4BB170)"
      },
      {
        "id": 4,
        "name": "Hang My Ads",
        "image": "/offerwall/torox.png",
        "rating": "$300",
        "iframeUrl": `https://opinionuniverse.com/offerwall.php?pubid=3&sid=[user_id]&app_id=ID_666aaea5254cd1.79214671&apikey=[apikey]`,
         gradientBackground: "linear-gradient(180deg, #384152, #9552FF)"
      },
      {
        "id": 5,
        "name": "Notik",
        "image": "/offerwall/hangmyads.png",
        "rating": "$300",
        "iframeUrl": `https://opinionuniverse.com/offerwall.php?pubid=3&sid=[user_id]&app_id=ID_666aaea5254cd1.79214671&apikey=[apikey]`,
        gradientBackground: "linear-gradient(180deg, #384152, #ff007f)"
      },
      {
        "id": 6,
        "name": "Adgem",
        "image": "/offerwall/AdGemGlow.jpg",
        "rating": "$300",
        "iframeUrl": `https://opinionuniverse.com/offerwall.php?pubid=3&sid=[user_id]&app_id=ID_666aaea5254cd1.79214671&apikey=[apikey]`,
        gradientBackground: "linear-gradient(180deg, #384152, #d48cff)"
      },
      {
        "id": 7,
        "name": "Kiwi-wall",
        "image": "/offerwall/kiwi-wall.png",
        "rating": "$300",
        "iframeUrl": `https://opinionuniverse.com/offerwall.php?pubid=3&sid=[user_id]&app_id=ID_666aaea5254cd1.79214671&apikey=[apikey]`,
        gradientBackground: "linear-gradient(180deg, #384152, #A3D900)"
      },
      {
        "id": 8,
        "name": "Pollfish",
        "image": "https://opiniontrue.com/templates/53/img/offerwalls/pollfish.png",
        "rating": "$300",
        "iframeUrl": `https://opinionuniverse.com/offerwall.php?pubid=3&sid=[user_id]&app_id=ID_666aaea5254cd1.79214671&apikey=[apikey]`,
        gradientBackground: "linear-gradient(180deg, #384152, #E43E3E)"
      },
      {
        "id": 9,
        "name": "CPX Research",
        "image": "https://www.cpx-research.com/main/en/assets/img/logo.svg",
        "rating": "$300",
        "iframeUrl": `https://offers.cpx-research.com/index.php?app_id=8640&ext_user_id=<?php echo $[user_id];?pubid=3&sid=[user_id]>&secure_hash=<?php echo md5($user_id.'-lTgrS37T3hwfK4ffhJpmCV1CcgBqYjoY);?>&username=<?php echo $user_name;?>&email=<?php echo $email;?>&subid_1=&subid_2`,
        gradientBackground: "linear-gradient(180deg, #384152, #00C2FF)"
      },
      {
        "id": 10,
        "name": "Bitlabs",
        "image": "https://cdn.prod.website-files.com/603902f0b6e52132b1b427ed/6059d0bc11e1ff723389cefe_bitlabs-logo-white-blue.svg",
        "rating": "$300",
        "iframeUrl": `https://web.bitlabs.ai/?uid=[user_id]&token=91561264-f25b-4212-8284-59e9b44596d8`,
        gradientBackground: "linear-gradient(180deg, #384152, #007BFF)"
      }
    ]
  }

  export default partnersData
  