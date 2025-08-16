import React from "react";
const Terms = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">Last Updated: August 16, 2025</p>

      <p className="mb-4">
        Welcome to <strong>FlixStream</strong>. These Terms of Service ("Terms")
        govern your access to and use of our website, applications, and services
        (collectively, the "Service"). By accessing or using the Service, you
        agree to these Terms. If you do not agree, you must not use the Service.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">1. Eligibility</h2>
      <p className="mb-4">
        You must be at least 18 years old or the age of majority in your
        jurisdiction to use the Service. By using the Service, you represent and
        warrant that you meet this requirement.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        2. Account Registration
      </h2>
      <p className="mb-4">
        To access certain features, you may need to create an account. You agree
        to provide accurate, complete, and updated information. You are
        responsible for maintaining the confidentiality of your account
        credentials and for all activities that occur under your account.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        3. Use of the Service
      </h2>
      <p className="mb-4">
        You agree to use the Service only for lawful purposes and in compliance
        with all applicable laws and regulations. You must not:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Use the Service for any fraudulent or illegal activity.</li>
        <li>
          Copy, distribute, or reproduce any content without authorization.
        </li>
        <li>
          Attempt to hack, disrupt, or compromise the security of the Service.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        4. Subscription & Payment
      </h2>
      <p className="mb-4">
        Some features require a paid subscription. You agree to pay all
        applicable fees associated with your account. Payments are
        non-refundable except as required by law or stated otherwise in these
        Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        5. Intellectual Property
      </h2>
      <p className="mb-4">
        All content, trademarks, and other intellectual property available
        through the Service are the property of FlixStream or its licensors. You
        are granted a limited, non-exclusive, non-transferable license to use
        the Service for personal, non-commercial purposes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">6. Termination</h2>
      <p className="mb-4">
        We may suspend or terminate your access to the Service at any time
        without prior notice for any violation of these Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        7. Disclaimer of Warranties
      </h2>
      <p className="mb-4">
        The Service is provided "AS IS" and without any warranties, whether
        express or implied. We do not guarantee that the Service will be
        error-free, secure, or uninterrupted.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        8. Limitation of Liability
      </h2>
      <p className="mb-4">
        To the fullest extent permitted by law, FlixStream shall not be liable
        for any indirect, incidental, or consequential damages arising from your
        use of the Service.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        9. Changes to These Terms
      </h2>
      <p className="mb-4">
        We may update these Terms from time to time. The updated version will be
        posted on this page, and the "Last Updated" date will be revised
        accordingly.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">10. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at{" "}
        <a
          href="mailto:support@flixstream.com"
          className="text-blue-600 underline"
        >
          support@flixstream.com
        </a>
        .
      </p>
    </div>
  );
};

export default Terms;
