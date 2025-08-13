import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10" style={{ fontFamily: 'Lato, sans-serif', color: '#002649' }}>Privacy Policy</h1>
        <p className="text-center mb-8 text-sm" style={{ fontFamily: 'Lato, sans-serif', color: '#002649' }}>Last updated: June 23, 2025</p>
        <div className="space-y-6" style={{ fontFamily: 'Lato, sans-serif', color: '#002649' }}>
          <p className="leading-relaxed">
            Welcome to Sip ("App"), operated by Sip Inc. ("Company," "we," "us," or "our"). This Privacy Policy explains how we collect, use, share, and protect your information when you use our app or visit our website at https://sipaway.io ("Website"). By using the App, you agree to this Privacy Policy. If you have questions or concerns, please contact us at support@sipaway.io.
          </p>
          
          <div>
            <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
            <p className="leading-relaxed">
              To facilitate subscription transactions within the App, payment information is collected and processed securely by Apple through its App Store. When you subscribe to a group using Apple Pay or another payment method, your payment details (such as credit card number, expiration date, and billing address) are provided directly to Apple. Sip does not collect or store your full payment card details on its servers. We may receive transaction confirmation data from Apple to confirm a purchase, but we do not have access to your sensitive financial information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">2. Purpose of Data Processing</h2>
            <p className="leading-relaxed">
              We process your information to create and manage your user account, enhance and personalize your experience within the App, and handle payment transactions. For subscriptions and other purchases made within the app, we use trusted third-party payment processors, including Apple (for In-App Purchases) and Stripe, to securely handle billing and financial transactions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">3. Data Sharing</h2>
            <p className="leading-relaxed mb-4">
              Sip uses Google Firebase for backend support, including data storage and analytics, to improve the platform's functionality and performance. Firebase employs industry-standard security measures to protect your data.
            </p>
            <p className="leading-relaxed mb-4">
              For payment processing, we share necessary information with trusted third-party payment processors to complete your transactions securely. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Apple: For handling all in-app subscriptions and payments made via Apple Pay. We do not receive your sensitive payment details from Apple.</li>
              <li>Stripe: For processing payment transactions. Your payment information is provided directly to Stripe and is governed by its own privacy policy.</li>
            </ul>
            <p className="leading-relaxed mt-4">
              We do not sell your personal information to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">4. Third-Party Payment Processor</h2>
            <p className="leading-relaxed mb-4">
              For your convenience and security, Sip handles payments through trusted third-party processors.
            </p>
            <p className="leading-relaxed mb-4">
              Our primary method for all in-app subscriptions and purchases is Apple's In-App Purchase system, which includes Apple Pay. When you make a purchase within the app, your payment information is provided directly to Apple. Sip does not store or have access to your full payment card details. All such transactions are subject to the Apple Media Services Terms and Conditions.
            </p>
            <p className="leading-relaxed">
              For transactions, we previously utilized Stripe as our payment processor. When Stripe is used, your payment information is provided directly to Stripe and handled in accordance with its privacy policy and security standards available at https://stripe.com/privacy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">5. User Rights (California Residents)</h2>
            <p className="leading-relaxed mb-4">
              Under the California Privacy Rights Act (CPRA), California residents have the right to know what personal information is collected, how it is used, and with whom it is shared. You also have the right to request the deletion of your personal information, subject to certain exceptions, and to correct inaccuracies. While Sip does not sell personal information, you may contact us to confirm this or inquire about data usage.
            </p>
            <p className="leading-relaxed">
              Currently, we do not provide self-service tools for accessing, correcting, or deleting data, but we may offer such tools in the future. To submit a request or ask questions about your rights, email us at support@sipaway.io.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">6. Do Not Track (CalOPPA Disclosure)</h2>
            <p className="leading-relaxed">
              At this time, Sip does not respond to "Do Not Track" (DNT) signals sent by web browsers. We may revisit this policy as technology and industry standards evolve.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">7. Data Security</h2>
            <p className="leading-relaxed mb-4">
              Sip prioritizes your data security by using secure authentication methods, including Google and Apple Sign-In. Data stored with Google Firebase is encrypted both in transit and at rest, providing an additional layer of protection.
            </p>
            <p className="leading-relaxed">
              Furthermore, sensitive payment information is handled by industry-leading third-party processors. For all in-app subscriptions, we use Apple's secure In-App Purchase system, which includes Apple Pay, to ensure your financial data is managed according to the highest security standards. For other payment services, we may use Stripe, a PCI DSS Level 1 certified processor, to maintain the same level of security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">8. Data Retention</h2>
            <p className="leading-relaxed">
              We retain your data only as long as necessary to fulfill the purposes described in this Privacy Policy, including providing our services, complying with our legal obligations (such as for tax and accounting purposes related to transactions), resolving disputes, and enforcing our agreements, unless a longer retention period is required or permitted by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">9. Policy Updates</h2>
            <p className="leading-relaxed">
              This Privacy Policy may be updated periodically to reflect changes to our practices or for other operational, legal, or regulatory reasons. Any updates will be posted on the Website and within the App, with the "Last updated" date revised. By continuing to use the App after updates are posted, you agree to the revised Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">10. Children's Privacy</h2>
            <p className="leading-relaxed">
              Sip is intended for users aged 18 and older. We do not knowingly collect personal information from users under 18. If you believe that we have collected data from a minor, please contact us at support@sipaway.io, and we will take steps to address the issue.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">11. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions or comments about this Privacy Policy, you can contact us via email at support@sipaway.io.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
