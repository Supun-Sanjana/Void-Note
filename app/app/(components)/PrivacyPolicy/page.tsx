// "use client";

import Link from "next/link";

export const metadata = {
  title: "Void Note - Privacy Policy",
};

export default function PrivacyPolicy() {



  return (


    <div className="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200">

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-12 text-center">
          Last Updated: August 17, 2025
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
            <p className="mb-2">
              When you use <span className="font-medium">Void Note</span>, we may
              collect the following information:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Account Information:</strong> such as your name, email address, and login credentials.</li>
              <li><strong>Notes Data:</strong> the content you create, edit, or delete within the app.</li>
              <li><strong>Usage Information:</strong> interactions with the app, including device type, IP address, and performance logs.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Provide, maintain, and improve Void Note.</li>
              <li>Keep your notes securely stored and accessible.</li>
              <li>Personalize your experience.</li>
              <li>Detect and prevent security issues or misuse.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Data Storage and Security</h2>
            <p>
              Your notes and data are stored securely with industry-standard
              encryption. While we take strong precautions, no method of
              transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Sharing of Information</h2>
            <p>
              We do <span className="font-semibold">not</span> sell, rent, or trade
              your data. We may share information only with your consent, to comply
              with legal obligations, or to prevent fraud and misuse.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Your Rights</h2>
            <p className="mb-2">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Access, update, or delete your data.</li>
              <li>Request a copy of your stored information.</li>
              <li>Withdraw consent to data collection at any time.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Third-Party Services</h2>
            <p>
              We may use trusted third-party services (hosting, analytics) that
              are contractually obligated to protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Children’s Privacy</h2>
            <p>
              Void Note is not intended for children under 13. We do not knowingly
              collect personal data from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Updates will
              appear here with a revised "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">9. Contact Us</h2>
            <p>
              If you have questions, please contact us at{" "}
              <Link
                href="mailto:support@voidnote.com"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                support@voidnote.com
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
