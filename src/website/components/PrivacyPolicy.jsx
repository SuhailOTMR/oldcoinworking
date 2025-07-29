import React from 'react';
import { useDispatch } from 'react-redux';
import { openPopup } from '../../redux/user/popupSlice';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useEffect } from 'react';

const PrivacyPolicy = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // change to 'auto' if needed
  }, []);


  return (
    <div className="min-h-screen bg-[#141524] text-white pt-20 px-4 md:px-10 pb-20">
      {/* <div id="google_translate_element" className="mb-4"></div> */}
      <div className="max-w-5xl mx-auto bg-[#1E1E2E] rounded-2xl shadow-lg p-6 md:p-10 space-y-10 border border-gray-700">
         
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-amber-400">Privacy Policy</h1>
          <p className="text-gray-300 text-sm">Effective date: 29.07.2025</p>
        </header>

        {/** Section Component */}
        <Section title="Introduction">
          <p className='text-left'>
            Welcome to our website at <strong>coinlooty.com</strong> and our mobile application.
            We respect your privacy and are committed to protecting your personal data.
            This privacy policy informs you how we collect, use, and protect your data, and tells you about your rights and legal protections.
          </p>
        </Section>

        <Section title="Company Details">
          <ul className="list-disc ml-5 space-y-1 text-gray-200">
            <li className="text-left"><strong>Company Name:</strong> OTMR Survey PVT LTD.</li>
            <li className="text-left"><strong>Country of Operation:</strong> India</li>
            <li className="text-left"><strong>Email Address:</strong> <a href="mailto:support@opinionuniverse.com" className="underline text-blue-400">support@coinlooty.com</a></li>
            <li className="text-left"><strong>Postal Address:</strong>  UGF BACK SIDE, B-2 KH NO 818, CHHATTARPUR EXTENSION, CHHATTARPUR EXTENSION, New Delhi, South Delhi, Delhi, 110074</li>
          </ul>
        </Section>

        <Section title="Purpose of this Privacy Policy">
          <p className='text-left'>
            This policy outlines how Coinlooty collects and processes data when you create an account, participate in tasks or offers, use services, or request support.
            <br />
            We do not target children under 16. If you believe we’ve collected data from them, contact us at <a href="mailto:no-reply@coinlooty.com" className="text-blue-400 underline">supprt@coinlooty.com</a>.
          </p>
        </Section>

        <Section title="2. The Data We Collect About You">
          <ul className="list-disc ml-5 space-y-1 text-gray-200">
            <li className='text-left'><strong>Identity Data:</strong> name, username, photo, gender, ID/passport</li>
            <li className='text-left'><strong>Contact Data:</strong> address, email, phone</li>
            <li className='text-left'><strong>Special Categories Data:</strong> optional race or health info (with consent)</li>
            <li className='text-left'><strong>Transaction Data:</strong> payout and redemption info</li>
            <li className='text-left'><strong>Payment Data:</strong> bank, UPI, PayPal or wallet</li>
            <li className='text-left'><strong>Technical Data:</strong> IP, device, browser, OS</li>
            <li className='text-left'><strong>Profile Data:</strong> preferences, surveys, rewards</li>
            <li className='text-left'><strong>Usage Data:</strong> how you use our Website</li>
            <li className='text-left'><strong>Marketing Data:</strong> ad interactions, preferences</li>
          </ul>
          <p className="mt-2 text-gray-300 text-left">We also collect <strong>Aggregated Data</strong> that does not identify you personally.</p>
        </Section>

        <Section title="3. How Is Your Personal Data Collected?">
          <ul className="list-disc ml-5 space-y-1 text-gray-200">
            <li className='text-left'><strong>Directly:</strong> From account creation, tasks, rewards, contact forms</li>
            <li className='text-left'><strong>Automatically:</strong> Cookies, server logs, and analytics</li>
            <li className='text-left'><strong>Third Parties:</strong> Google, Meta, analytics tools</li>
          </ul>
        </Section>

        <Section title="4. How We Use Your Personal Data">
          <div className="overflow-x-auto rounded-md border border-gray-700">
            <table className="table-auto w-full text-sm text-gray-100">
              <thead className="bg-[#2c2c3c] text-amber-300">
                <tr>
                  <th className="px-4 py-2">Purpose</th>
                  <th className="px-4 py-2">Type of Data</th>
                  <th className="px-4 py-2">Legal Basis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td className="px-4 py-2">Register you as a user</td>
                  <td className="px-4 py-2">Identity, Contact</td>
                  <td className="px-4 py-2">Contract</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Run reward programs</td>
                  <td className="px-4 py-2">Identity, Technical, Profile</td>
                  <td className="px-4 py-2">Contract, Legitimate Interests</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Provide support</td>
                  <td className="px-4 py-2">Contact, Technical</td>
                  <td className="px-4 py-2">Legitimate Interests</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Improve services</td>
                  <td className="px-4 py-2">Technical, Usage, Profile</td>
                  <td className="px-4 py-2">Legitimate Interests</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Marketing</td>
                  <td className="px-4 py-2">All (with consent)</td>
                  <td className="px-4 py-2">Legitimate Interests or Consent</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Comply with laws</td>
                  <td className="px-4 py-2">Identity, Contact</td>
                  <td className="px-4 py-2">Legal Obligation</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-2 text-gray-400">You may opt out of marketing at any time.</p>
        </Section>

        <Section title="5. Disclosures of Your Personal Data">
          <ul className="list-disc ml-5 space-y-1 text-gray-200">
            <li className='text-left'>Hosting and infrastructure providers</li>
            <li className='text-left'>SMS, email, and analytics tools</li>
            <li className='text-left'>Marketing partners (with consent)</li>
            <li className='text-left'>Legal and professional advisors</li>
            <li className='text-left'>Authorities (when required by law)</li>
          </ul>
        </Section>

        {[
          {
            title: '6. International Transfers',
            content: 'We work with global partners. Your data may be transferred internationally using safeguards such as Standard Contractual Clauses (SCCs).',
          },
          {
            title: '7. Data Security',
            content: 'We apply encryption, access control, and secure servers. We notify you if a breach occurs as per law.',
          },
          {
            title: '8. Data Retention',
            content: 'We retain your data as long as necessary for services or legal obligations. Then, we securely delete or anonymize it.',
          },
          {
            title: '9. Your Legal Rights',
            content: `You can request:
- Access, correction, deletion of your data
- Restriction or objection to processing
- Data portability or withdraw consent

To exercise your rights, email us at privacy@coinlooty.com. We respond within 30 days.`,
          },
        ].map((sec, i) => (
          <Section key={i} title={sec.title}>
            <p className="whitespace-pre-line text-gray-300 text-left">{sec.content}</p>
          </Section>
        ))}

        <Section title="10. Glossary">
          <ul className="list-disc ml-5 space-y-1 text-gray-200">
            <li className='text-left'><strong>Legitimate Interest:</strong> Operate business effectively and fairly.</li>
            <li className='text-left'><strong>Contract:</strong> Fulfill service obligations to you.</li>
            <li className='text-left'><strong>Legal Obligation:</strong> Compliance with law.</li>
          </ul>
        </Section>

        <Section title="DPO (Data Protection Officer)">
          <p className="text-left">
            In addition and in line with new GDPR compliance guidelines going into effect on <strong>November 19, 2022</strong>,
            Opinion Universe has assigned the role of DPO (Data Protection Officer) to the below individual.
          </p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-200">
            <li className="text-left"><strong>Name:</strong> Rohan Gupta</li>
            <li className="text-left"><strong>Email:</strong> <a href="mailto:dpo@opinionuniverse.com" className="underline text-blue-400">dpo@opinionuniverse.com</a></li>
          </ul>
        </Section>

        <Section title="Changes to This Policy">
          We update this privacy policy periodically. Latest update: <strong>29.07.2025</strong>. Please revisit for changes.
        </Section>

        <div className="text-center mt-10" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Link to="/" className="text-amber-400 underline hover:text-amber-300" style={{ display: "flex", textDecoration: "none" }}>
            <IoMdArrowRoundBack style={{ fontSize: "22px" }} />Back to home
          </Link>

        </div>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <section className="space-y-3">
    <div className="flex items-center gap-2">
      <span className="h-6 w-1.5 bg-amber-400 rounded-sm"></span>
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
    <div className="text-gray-300 leading-relaxed">{children}</div>
  </section>
);

export default PrivacyPolicy;
