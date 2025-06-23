import type { ReactNode } from 'react'

function Container({ children }: { children: ReactNode }): ReactNode {
  return (
    <div className="mx-auto my-12 max-w-2xl rounded-xl bg-[#ffffff0b] p-8 shadow-lg ring-1 ring-[#ffffff0b] backdrop-blur-md">
      {children}
    </div>
  )
}

export default function OnYourMarksPrivacyPolicy() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#23243a] to-[#181a20] px-4 py-12">
      <Container>
        <h1 className="mb-6 text-4xl font-bold text-[#81ACEC]">Privacy Policy</h1>
        <section className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold text-white">Introduction</h2>
          <p className="text-lg text-gray-300">
            Our privacy policy will help you understand what information we collect at <span className="font-semibold">On Your Marks</span>, how <span className="font-semibold">On Your Marks</span> uses it, and what choices you have.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold text-white">Information Collection and Use</h2>
          <p className="text-lg text-gray-300">
            For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to users name, email address, gender, location, pictures. The information that we request will be retained by us and used as described in this privacy policy.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold text-white">Cookies</h2>
          <p className="text-lg text-gray-300">
            Cookies are files with small amount of data that is commonly used as an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your device&apos;s internal memory.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold text-white">Location Information</h2>
          <p className="text-lg text-gray-300">
            Some of the services may use location information transmitted from users&apos; mobile phones. We only use this information within the scope necessary for the designated service.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold text-white">Device Information</h2>
          <p className="text-lg text-gray-300">
            We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold text-white">Security</h2>
          <p className="text-lg text-gray-300">
            We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold text-white">Children&apos;s Privacy</h2>
          <p className="text-lg text-gray-300">
            This Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold text-white">Changes to This Privacy Policy</h2>
          <p className="text-lg text-gray-300">
            We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold text-white">Contact Us</h2>
          <p className="text-lg text-gray-300">
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
          </p>
          <p className="text-lg text-gray-300">
            Contact Information:<br />
            Email: <span className="font-semibold">hello@enaut.dev</span>
          </p>
        </section>
      </Container>
    </div>
  )
}

