import React, { useState } from "react";
import translate from "google-translate-api-x";

const PrivacyPolicy = () => {
  const [selectedLang, setSelectedLang] = useState("en");
  const [translatedContent, setTranslatedContent] = useState(null);

  const languages = {
    en: "English",
    es: "Spanish",
    fr: "French",
    de: "German",
    hi: "Hindi",
    zh: "Chinese",
    ja: "Japanese",
    ru: "Russian",
    ar: "Arabic",
    it: "Italian",
  };

  const content = {
    title: "Privacy Policy",
    sections: [
      {
        heading: "1. Information Collection",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet ipsum sed velit consectetur dictum.",
      },
      {
        heading: "2. Use of Information",
        text: "Proin facilisis turpis nec turpis cursus, id gravida nulla elementum. Morbi aliquam libero sed dui ultrices.",
      },
      {
        heading: "3. Data Protection",
        text: "Curabitur ut lorem vitae eros dapibus tincidunt. Phasellus sed elit at elit elementum facilisis.",
      },
      {
        heading: "4. Contact Us",
        text: "If you have any questions about this Privacy Policy, please contact us at: example@example.com",
      },
    ],
  };

  const translatePage = async () => {
    try {
      const translatedTitle = await translate(content.title, { to: selectedLang });
      const translatedSections = await Promise.all(
        content.sections.map(async (section) => ({
          heading: await translate(section.heading, { to: selectedLang }).then((res) => res.text),
          text: await translate(section.text, { to: selectedLang }).then((res) => res.text),
        }))
      );

      setTranslatedContent({
        title: translatedTitle.text,
        sections: translatedSections,
      });
    } catch (error) {
      console.error("Translation Error:", error);
    }
  };

  const displayContent = translatedContent || content;

  return (
    <div className="min-h-screen bg-slate-800 p-4 md:p-10 flex justify-center">
      <div className="max-w-4xl w-full bg-white p-6 md:p-10 rounded-2xl shadow-lg text-left">
        
        {/* Language Selector */}
        <div className="mb-4 flex gap-3">
          <select
            className="p-2 border border-gray-300 rounded-md"
            value={selectedLang}
            onChange={(e) => setSelectedLang(e.target.value)}
          >
            {Object.entries(languages).map(([key, lang]) => (
              <option key={key} value={key}>
                {lang}
              </option>
            ))}
          </select>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            onClick={translatePage}
          >
            Translate Page
          </button>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-6">{displayContent.title}</h1>

        {displayContent.sections.map((section, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">
              {section.heading}
            </h2>
            <p className="text-gray-600">{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
