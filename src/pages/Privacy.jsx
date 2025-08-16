import React from "react";
const Privacy = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last Updated: August 16, 2025</p>
      <p className="mb-4">
        Your privacy is important to us. This Privacy Policy explains how we
        collect, use, and protect your personal information when you use
        FlixStream.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        1. Information We Collect
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          Personal Information: Name, email, account details when you register.
        </li>
        <li>
          Usage Data: Pages visited, time spent, and device info for analytics.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        2. How We Use Your Data
      </h2>
      <p className="mb-4">
        We use your data to provide our services, improve your experience, and
        ensure platform security.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        3. Sharing Your Information
      </h2>
      <p className="mb-4">
        We do not sell your data. We only share it with trusted service
        providers under strict confidentiality agreements.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Security Measures</h2>
      <p className="mb-4">
        We use industry-standard encryption and security protocols to protect
        your data.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, contact us at
        support@flixstream.com.
      </p>
    </div>
  );
};

export default Privacy;
