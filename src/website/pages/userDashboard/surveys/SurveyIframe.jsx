import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SurveyIframe = () => {
  const [iframeURL, setIframeURL] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('opinionUser'));
    const userId = user?.id;

    if (userId) {
      if (id === '1') {
        const url = `https://opinionuniverse.com/offerwall?pubId=16&SID=${userId}&appId=ID_772c7277afcf5a8b3a3daae25d9ffef3`;
        setIframeURL(url);
      } else if (id === '2') {
        const url = `https://wall.lootably.com/?placementID=clf9hx9950tyb011f5hh313k3&sid=${userId}`;
        setIframeURL(url);
      }
      // else if (id === '3') {
      //   const url = `https://torox.io/ifr/show/30558/${userId}/16325`;
      //   setIframeURL(url);
      // }
      else if (id === '4') {
        const url = `https://torox.io/ifr/show/30558/${userId}/16325`;
        setIframeURL(url);
      }
      // else if (id === '5') {
      //   const url = `http://offerwall.hangmyads.com/offerwall.php?pubid=4563&subid=${userId}`;
      //   setIframeURL(url);
      // }
      // else if (id === '6') {
      //   const url = `http://offerwall.hangmyads.com/offerwall.php?pubid=4563&subid=${userId}`;
      //   setIframeURL(url);
      // }
      // else if (id === '7') {
      //   const url = `http://offerwall.hangmyads.com/offerwall.php?pubid=4563&subid=${userId}`;
      //   setIframeURL(url);
      // }
      // else if (id === '8') {
      //   const url = `http://offerwall.hangmyads.com/offerwall.php?pubid=4563&subid=${userId}`;
      //   setIframeURL(url);
      // }
      else if (id === '9') {
        const url = `https://offers.cpx-research.com/index.php?app_id=8640&ext_user_id=${userId}`;
        setIframeURL(url);
      }
      else if (id === '10') {
        const url = `https://web.bitlabs.ai/?uid=${userId}&token=91561264-f25b-4212-8284-59e9b44596d8`;
        setIframeURL(url);
      }
    }
  }, [id]); // Don't forget to include `id` as a dependency!

  return (
    <div className="md:p-6 p-4">
      {iframeURL ? (
        <>
          <iframe
            title="Partner Offer Wall"
            allow="clipboard-write"
            src={iframeURL}
            width="100%"
            height="1000px"
            style={{ border: 0, padding: 0, margin: 0 }}
            scrolling="auto"
            frameBorder="0"
          />
          <p style={{ color: 'white', marginTop: '10px' }}>
            iFrames are required to see this page.{' '}
            <a href={iframeURL} target="_blank" rel="noopener noreferrer">
              Click here if it's not loading.
            </a>
          </p>
        </>
      ) : (
        <p style={{ color: 'white' }}>Loading offer wall...</p>
      )}
    </div>
  );
};

export default SurveyIframe;
