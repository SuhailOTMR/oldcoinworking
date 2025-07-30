import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const Faq = () => {
  const [openSections, setOpenSections] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const toggleSection = (index) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter((i) => i !== index));
    } else {
      setOpenSections([...openSections, index]);
    }
  };

  const faqSections = [
    {
      title: "How much can you earn on Coin Looty?",
      content:
        "On Coin Looty, you can earn coins by completing surveys, offers, downloading apps, and testing games. Some offers can reward you up to $50, depending on availability and task type. Daily earnings depend on your engagement and task completion rate.",
    },
    {
      title: "What is the minimum amount you can withdraw?",
      content:
        "Users can typically request a withdrawal after reaching a certain threshold (e.g., ₹1000 coins ≈ $1 USD). The exact amount depends on platform terms and chosen payout method.",
    },
    {
      title: "How is Coin Looty able to pay users?",
      content:
        "Coin Looty earns commission from advertisers for every completed offer or survey. This revenue is shared with users in the form of coins, which can be converted to cash or gift cards. It’s a transparent model supported by verified advertiser partnerships.",
    },
    {
      title: "How quickly will you get paid after making a withdrawal?",
      content:
        "Withdrawal speed depends on the selected payment method: E-wallet or PayPal: within 24 hours. Bank transfer: 3–5 business days. You can track your withdrawal status in your transaction history.",
    },
    {
      title: "Does Coin Looty have an age restriction?",
      content:
        "Yes, users must be at least 18 years old to sign up and use the platform. Some payment methods may require identity verification (KYC) for withdrawals.",
    },
    {
      title: "Which offers give the highest rewards?",
      content:
        "Featured offers, app downloads, and referral-based tasks usually give the highest number of coins.",
    },
    {
      title: "I completed a survey but didn’t get coins — what should I do?",
      content:
        "If you were disqualified or there's a delay in payout, contact Live Support. Most issues are resolved quickly through support.",
    },
    {
      title: "Are multiple accounts allowed?",
      content:
        "No, having more than one account per user is usually against the policy. Violations may lead to suspension. Always check with support if you're unsure.",
    },
    {
      title: "Why are my completed tasks on hold?",
      content:
        "Some high-value tasks may be held for manual review. You can speed up the process by submitting proof or contacting support.",
    },
    {
      title: "Why is my balance negative?",
      content:
        "Negative balances can result from fees, penalties, reversed offers, or withdrawal charges. Check your transaction history for details.",
    },
  ];

  return (
    <div
      className="bg-[#141524] min-h-screen py-20 px-4 text-white"
      style={{ paddingTop: "100px" }}
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqSections.map((section, index) => {
            const isOpen = openSections.includes(index);
            return (
              <div
                key={index}
                className="border border-gray-700 rounded-xl transition-all duration-300 overflow-hidden "
                style={{ backgroundColor: "#1E1E2E" }}
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
                >
                  <span className="text-lg font-medium">{section.title}</span>
                  <span
                    className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                      }`}
                  >
                    <HiChevronDown size={24} />
                  </span>
                </button>
                <div
                  className={`px-6 pb-5 text-gray-300 transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  {isOpen && <p>{section.content}</p>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-center mt-10" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Link to="/" className="text-amber-400 underline hover:text-amber-300" style={{ display: "flex", textDecoration: "none" }}>
          <IoMdArrowRoundBack style={{ fontSize: "22px" }} />Back to home
        </Link>

      </div>
    </div>
  );
};

export default Faq;

