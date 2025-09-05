import { Link } from "react-router-dom";

const PrivacyPolicy = () => (
  <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold mb-6 text-primary">Privacy Policy</h1>
    <p className="mb-6 text-muted-foreground">
      Last updated: {new Date().toLocaleDateString()}
    </p>

    <div className="space-y-6 text-base leading-relaxed text-foreground">
      <section>
        <h2 className="font-semibold text-xl mb-2">1. Introduction</h2>
        <p>
          At Yume Japanese Language School, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or use our services.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-xl mb-2">2. Information We Collect</h2>
        <ul className="list-disc pl-6">
          <li>
            <strong>Personal Information:</strong> Name, email address, phone number, and other contact details when you fill out forms, register, or contact us.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about how you use our website, such as pages visited, time spent, and device information (e.g., browser, IP address).
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold text-xl mb-2">3. How We Use Your Information</h2>
        <ul className="list-disc pl-6">
          <li>To provide and manage our services and courses.</li>
          <li>To communicate with you regarding your queries, enrollment, or support.</li>
          <li>To improve our website, services, and user experience.</li>
          <li>For marketing and updates (with your consent).</li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold text-xl mb-2">4. Information Sharing</h2>
        <p>
          We do not sell or rent your personal information. We may share information with trusted service providers who assist us in operating our site and conducting our business, provided they agree to keep your information confidential. We may also disclose information if required by law.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-xl mb-2">5. Security</h2>
        <p>
          We take reasonable steps to protect your information from unauthorized access, alteration, or disclosure. However, no data transmission over the internet is 100% secure.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-xl mb-2">6. Your Choices & Rights</h2>
        <ul className="list-disc pl-6">
          <li>You may request to view, update, or delete your personal information by contacting us.</li>
          <li>You may opt out of marketing communications at any time.</li>
        </ul>
      </section>

      <section>
        <h2 className="font-semibold text-xl mb-2">7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy occasionally. Changes will be posted on this page with a revised effective date.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-xl mb-2">8. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or your data, please contact us at: <br />
          <a href="mailto:yumejapaneseschool@gmail.com" className="text-primary underline">yumejapaneseschool@gmail.com</a>
        </p>
      </section>
    </div>

    <div className="mt-8 text-center">
      <Link to="/" className="text-primary font-semibold hover:underline">&larr; Back to Home</Link>
    </div>
  </div>
);

export default PrivacyPolicy;
