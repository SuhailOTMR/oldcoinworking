import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { openPopup } from '../../redux/user/popupSlice';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';

const TermCondition = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#141524] text-white pt-20 px-4 md:px-10 pb-20">
      <div className="max-w-5xl mx-auto bg-[#1E1E2E] rounded-2xl shadow-lg p-6 md:p-10 space-y-10 border border-gray-700">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-amber-400">Terms & Conditions</h1>
          <p className="text-gray-300 text-sm">Last Updated: 29 July 2025</p>
        </header>

        <Section title="1. Acceptance of the Terms of Service">
          These Terms of Service (“Terms”) are entered into by and between you and OTMR Survey PVT LTD (“Coinlooty”, “we”, “us”, or “our”). They govern your access to and use of www.coinlooty.com and our mobile application (together, the “Website”), including all content, functionality, features, offers, services, and rewards programs provided therein (collectively, the “Services”).
          <br /><br />
          PLEASE READ THESE TERMS CAREFULLY BEFORE USING OUR WEBSITE. By accessing or using the Website, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must not use our Services.
        </Section>

        <Section title="2. Eligibility">
          Coinlooty is only available to users who are at least 16 years of age or older. By using our platform, you affirm that you meet this requirement and are legally able to form a binding agreement. Only one account per person and one account per household is allowed.
        </Section>

        <Section title="3. Updates to Terms">
          We may update or revise these Terms from time to time. All updates will be effective upon posting. Continued use of the Website after changes means you accept the new Terms.
        </Section>

        <Section title="4. Access to the Website">
          We grant you a limited, non-exclusive, non-transferable license to use the Website for your personal, non-commercial use in accordance with these Terms.
        </Section>

        <Section title="5. Rewards Programs">
          Coinlooty offers virtual rewards (e.g. Coins, Dollars, Points) through surveys, tasks, and offers (“Offers”). These rewards (“Rewards”) can be redeemed for gift cards or other digital prizes, subject to availability.
        </Section>

        <Section title="6. Rewards Are Non-Cash and Nontransferable">
          Rewards have no cash value. They cannot be exchanged, sold, transferred, or refunded unless explicitly stated otherwise.
        </Section>

        <Section title="7. Earning Rewards">
          You may earn Rewards by completing Offers. Coinlooty and its partners reserve the right to validate your completion. Rewards will be credited only if the offer conditions are fully met and verified.
        </Section>

        <Section title="8. Redeeming Rewards">
          You may redeem your Rewards for available digital prizes. All redemptions are final. We reserve the right to substitute unavailable prizes with items of equal or greater value.
        </Section>

        <Section title="9. Identity Verification">
          We may require ID verification (e.g., via PAN, Aadhaar, Passport, etc.) before issuing rewards. If verification is denied or incomplete, Coinlooty may cancel or withhold rewards.
        </Section>

        <Section title="10. Redemption & Delivery">
          Rewards will be delivered digitally to the email or account linked to you. Unclaimed or undeliverable prizes may be reversed and the Rewards credited back to your account.
        </Section>

        <Section title="11. Inactive Accounts">
          Accounts inactive for 12 months may be closed and associated Rewards forfeited.
        </Section>

        <Section title="12. Rewards Expiry">
          Coinlooty may implement expiration periods for Rewards, after which they may be removed from your account.
        </Section>

        <Section title="13. Promotions">
          Any contests, giveaways, or promotions on Coinlooty will have additional terms. Participation indicates acceptance of both these Terms and the promotional rules.
        </Section>

        <Section title="14. Taxes">
          You are solely responsible for any tax liabilities resulting from redeemed rewards. We may request your tax details if required by Indian law.
        </Section>

        <Section title="15. Your Account">
          You are responsible for maintaining the confidentiality of your login credentials. You agree to notify us of any unauthorized access or breach.
        </Section>

        <Section title="16. Acceptable Use">
          You agree to use Coinlooty lawfully and ethically. You must not:
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Use a VPN, proxy, emulator, or fake device</li>
            <li>Use false identities or phone numbers</li>
            <li>Spam, hack, or cheat our systems</li>
            <li>Participate in fraud or tampering</li>
          </ul>
          Violations may lead to account suspension, forfeiture of rewards, or legal action.
        </Section>

        <Section title="17. User Content & Behavior">
          Users may post comments or reviews. You agree not to:
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Post illegal, abusive, or harmful content</li>
            <li>Infringe copyrights or trademarks</li>
            <li>Impersonate anyone</li>
            <li>Promote external links or scams</li>
          </ul>
          We reserve the right to remove content or ban users at our discretion.
        </Section>

        <Section title="18. Intellectual Property">
          All content on Coinlooty is owned or licensed by us. You may not copy, reproduce, or reuse any part of the platform without permission.
        </Section>

        <Section title="19. Limitation of Liability">
          Coinlooty is provided “as-is.” We do not guarantee uptime, reward availability, or system error-free performance. We are not liable for any indirect damages, reward delivery failures, or offer rejections.
        </Section>

        <Section title="20. Governing Law">
          These Terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of the courts in New Delhi, India.
        </Section>

        <Section title="21. Contact">
          For any questions or legal concerns, reach out to:
          <br /><br />
          📧 support@coinlooty.com
          <br />
          🏢 OTMR Survey PVT LTD
          <br />
          Upper Ground Floor, B-2, Block A1,
          <br />
          Chhatarpur Extension, New Delhi - 110074, India
        </Section>

        <div className="text-center mt-10 flex justify-center items-center">
          <Link to="/" className="text-amber-400 underline hover:text-amber-300 flex items-center">
            <IoMdArrowRoundBack className="mr-1 text-lg" /> Back to home
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
    <div className="text-gray-300 leading-relaxed text-left text-sm md:text-base">{children}</div>
  </section>
);

export default TermCondition;

