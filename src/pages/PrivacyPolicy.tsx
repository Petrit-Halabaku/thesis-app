import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p>
        This Privacy Policy describes how your personal information is
        collected, used, and shared when you visit or make a purchase from our
        site.
      </p>
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
        <p>
          We collect Device Information using the following technologies:
          <ul className="list-disc ml-6">
            <li>Cookies</li>
            <li>Log files</li>
            <li>Web beacons</li>
          </ul>
        </p>
      </section>
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">
          How We Use Your Information
        </h2>
        <p>
          We use the information we collect to fulfill any orders placed through
          the site, communicate with you, and screen our orders for potential
          risk or fraud.
        </p>
      </section>
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">
          Sharing Your Personal Information
        </h2>
        <p>
          We share your Personal Information with third parties to help us use
          your Personal Information, as described above.
        </p>
      </section>
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
        <p>
          If you are a European resident, you have the right to access personal
          information we hold about you and to ask that your personal
          information be corrected, updated, or deleted.
        </p>
      </section>
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Data Retention</h2>
        <p>
          When you place an order through the site, we will maintain your Order
          Information for our records unless and until you ask us to delete this
          information.
        </p>
      </section>
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Changes</h2>
        <p>
          We may update this privacy policy from time to time in order to
          reflect, for example, changes to our practices or for other
          operational, legal, or regulatory reasons.
        </p>
      </section>
      <p>
        For more information about our privacy practices, if you have questions,
        or if you would like to make a complaint, please contact us by e-mail at
        privacy@example.com.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
