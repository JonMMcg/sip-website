import React from 'react';

const TermsOfService = () => {
  return (
    <div className="bg-white text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Terms of Service</h1>
        <p className="text-center text-gray-500 mb-10">Effective Date: June 23, 2025</p>

        <div className="space-y-8">
          <section>
            <p>Welcome to Sip! By accessing or using our platform, you agree to be bound by these Terms of Service (the 'Terms') provided by Sip Inc. (“Sip”, “we”, “us”). If you do not agree, please refrain from using Sip.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Eligibility</h2>
            <p>Sip is available to users who are at least 18 years old and located within the United States. By using Sip, you confirm that you meet these eligibility requirements.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">User Accounts</h2>
            <p>To use Sip, you must create an account and provide accurate, up-to-date information. You are responsible for maintaining the confidentiality of your account and password. If you become aware of any unauthorized use of your account, you must notify Sip immediately.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Use of the Service</h2>
            <p>Sip is designed to foster meaningful and respectful interactions among its users. By using Sip, you agree to engage with the platform in compliance with all applicable local, state, and federal laws. Users are expected to refrain from posting content that is abusive, harassing, discriminatory, obscene, or otherwise objectionable, and from engaging in behaviors that harm other users or disrupt the functionality of the platform. Sip enforces a no-tolerance policy for objectionable content and abusive behavior, ensuring that violations are addressed promptly and decisively. By using the platform, you agree to use its features and tools responsibly and in a manner that supports the safety and integrity of the community.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">License Grant</h2>
            <p>Sip grants you a limited, non-exclusive, revocable license to access and use the Sip platform and mobile application for personal, non-commercial purposes, subject to these Terms. This license is granted solely to enable you to use Sip in accordance with its intended purpose. You may not use Sip for any unlawful or unauthorized purpose.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">License Restrictions</h2>
            <p>Sip grants users a limited, non-exclusive, and revocable license to access and use its platform and mobile application for personal, non-commercial purposes. However, this license is subject to specific restrictions. Users are prohibited from reverse engineering, decompiling, or disassembling any part of the Sip platform. Additionally, users may not modify, adapt, or create derivative works based on Sip’s software or services. Redistribution, sublicensing, leasing, selling, or transferring access to the platform is strictly prohibited. Automated tools such as bots, crawlers, or scraping software may not be used to collect or extract data from Sip. Users are also prohibited from circumventing, disabling, or interfering with any security or functionality features of the platform, as well as attempting unauthorized access to Sip systems, accounts, or data. Any violations of these restrictions may result in suspension or termination of access to the platform.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Software Updates</h2>
            <p>Sip may, from time to time, provide updates, enhancements, bug fixes, or other modifications to improve the platform. These updates will be installed automatically without additional notice or consent. By using Sip, you agree to receive such updates as part of your use of the platform.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-3">Reporting and Enforcement</h2>
            <p>Sip is committed to maintaining a safe and respectful environment for its users. To ensure compliance with our Terms of Service, we provide tools for reporting violations, including objectionable content or abusive behavior. Users can report such violations directly through the in-app reporting feature or by contacting our support team at support@sipaway.io. Once a report is submitted, Sip’s moderation team will promptly review the content and take appropriate action, which may include removing the reported content, issuing warnings, or suspending or terminating the offending account. Sip strives to address all reports in a timely manner, typically within 24 to 48 hours. Our strict no-tolerance policy ensures that users who engage in objectionable or abusive behavior are held accountable, safeguarding the integrity of the platform and its community.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Ownership</h2>
            <p>The Sip platform, mobile application, and all associated intellectual property rights—including trademarks, copyrights, designs, and software code—are the sole property of Sip Inc. You acknowledge that you are granted a license to use Sip and do not acquire ownership rights.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Termination of License</h2>
            <p>Sip reserves the right to suspend or terminate your access to the platform for violations of these Terms or applicable laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Third-Party Software</h2>
            <p>Sip may incorporate or interact with third-party software, such as Google Firebase, for data storage and analytics. Your use of these services is subject to their respective terms, and Sip is not responsible for their functionality. Our use of third-party payment processors is detailed in the "Payments, Subscriptions, and Payouts on Sip" section.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Privacy and Data Usage</h2>
            <p>Your use of Sip is subject to our Privacy Policy. Sip collects and processes data in accordance with this policy (available at <a href="https://www.sip-us.com/others/privacy-policy" className="text-blue-600 hover:underline">https://www.sip-us.com/others/privacy-policy</a>) to improve the platform and ensure compliance with legal standards.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Payments, Subscriptions, and Payouts</h2>
            <p className="mb-4">Creators on Sip have multiple avenues to generate income, including offering their group chats as subscribable content, engaging in affiliate marketing, and securing brand sponsorships. All financial transactions related to subscriptions are governed by the terms below.</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Billing and Payment Processing:</strong> All payments made on Sip for subscriptions are processed exclusively through Apple's App Store and are subject to the Apple Media Services Terms and Conditions. By initiating a subscription, you agree to be bound by Apple's terms, which can be found at <a href="https://www.apple.com/legal/internet-services/itunes/" className="text-blue-600 hover:underline">https://www.apple.com/legal/internet-services/itunes/</a>.
              </li>
              <li>
                <strong>Automatic Renewal:</strong> Subscriptions are offered on a monthly basis and will automatically renew each month for the same duration and price, unless you cancel at least 24 hours before the end of the current billing period.
              </li>
              <li>
                <strong>Cancellation:</strong> You may manage and cancel your subscriptions at any time. To do so, you must go to your Apple ID Account Settings on your device. You can also cancel upon request from Sip by emailing support.
              </li>
              <li>
                <strong>Price Changes:</strong> Subscription prices are set by the content creators. If a creator modifies the price of a subscription you are subscribed to, we will provide you with advance notice of the new price. For any price increases, your explicit consent will be required to continue the subscription at the new price. If you do not agree to the price change, your subscription will not renew at the end of your current billing period and will be terminated.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Disclaimer of Software Warranties</h2>
            <p>The Sip platform is provided “as is” and “as available.” Sip makes no warranties regarding the functionality, availability, or accuracy of the platform.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Sip shall not be liable for any damages resulting from the use or inability to use the platform. Sip’s total liability shall not exceed $100.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-3">Governing Law and Dispute Resolution</h2>
            <p>These Terms are governed by the laws of the State of California. Users agree to resolve disputes through binding arbitration or small claims court.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-3">Updates to the Terms of Service</h2>
            <p>Sip reserves the right to update these Terms at any time. Updates will take effect immediately upon posting. Your continued use of Sip after any such updates constitutes your acceptance of the new Terms. We encourage you to periodically review these Terms.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
            <p>For questions or concerns regarding these Terms, Sip, or our services, please contact us at <a href="mailto:support@sipaway.io" className="text-blue-600 hover:underline">support@sipaway.io</a> or find us at <a href="https://www.sip-us.com/" className="text-blue-600 hover:underline">https://www.sip-us.com/</a></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
