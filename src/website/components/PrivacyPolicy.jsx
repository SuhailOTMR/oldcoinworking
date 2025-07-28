import React, { useEffect } from 'react'

const PrivacyPolicy = () => {

  // Modified this side effect of languages

  // useEffect(() => {
  //   const initializeGoogleTranslate = () => {
  //     if (window.google?.translate) {
  //       new window.google.translate.TranslateElement(
  //         {
  //           pageLanguage: "en",
  //           includedLanguages: "es,fr,de,hi,zh", // Add more languages if needed
  //           layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
  //         },
  //         "google_translate_element"
  //       );
  //     }
  //   };

  //   const addGoogleTranslateScript = () => {
  //     if (document.getElementById("google-translate-script")) return; // Prevent duplicate script loading

  //     const script = document.createElement("script");
  //     script.id = "google-translate-script";
  //     script.src =
  //       "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  //     script.async = true;
  //     document.body.appendChild(script);

  //     window.googleTranslateElementInit = initializeGoogleTranslate;
  //   };

  //   addGoogleTranslateScript();
  // }, []);


  // end side effect

  return (
    <div className="min-h-screen bg-slate-800 p-4 md:p-10 flex justify-center" style={{paddingTop:"20vh"}}>
      <div className="max-w-4xl w-full bg-white p-6 md:p-10 rounded-2xl shadow-lg text-left">
        {/* Google Translate Dropdown */}
        {/* <div id="google_translate_element" className="mb-4"></div> */}

        <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae justo vehicula ultricies.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">1. Information Collection</h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet ipsum sed velit consectetur dictum.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">2. Use of Information</h2>
        <p className="text-gray-600 mb-4">
          Proin facilisis turpis nec turpis cursus, id gravida nulla elementum. Morbi aliquam libero sed dui ultrices.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">3. Data Protection</h2>
        <p className="text-gray-600 mb-4">
          Curabitur ut lorem vitae eros dapibus tincidunt. Phasellus sed elit at elit elementum facilisis.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">4. Contact Us</h2>
        <p className="text-gray-600 mb-4">
          If you have any questions about this Privacy Policy, please contact us at: example@example.com
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy