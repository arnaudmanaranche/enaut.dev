export interface AppPrivacyConfig {
  name: string
  slug: string
  accentColor: string
  email: string
  sections: {
    title: string
    content: string
  }[]
}

export const appsConfig: Record<string, AppPrivacyConfig> = {
  'on-your-marks': {
    name: 'On Your Marks',
    slug: 'on-your-marks',
    accentColor: '#81ACEC',
    email: 'hello@enaut.dev',
    sections: [
      {
        title: 'Introduction',
        content:
          'Our privacy policy will help you understand what information we collect at {appName}, how {appName} uses it, and what choices you have.',
      },
      {
        title: 'Information Collection and Use',
        content:
          'For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to users name, email address, gender, location, pictures. The information that we request will be retained by us and used as described in this privacy policy.',
      },
      {
        title: 'Cookies',
        content:
          "Cookies are files with small amount of data that is commonly used as an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your device's internal memory.",
      },
      {
        title: 'Location Information',
        content:
          "Some of the services may use location information transmitted from users' mobile phones. We only use this information within the scope necessary for the designated service.",
      },
      {
        title: 'Device Information',
        content:
          'We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.',
      },
      {
        title: 'Security',
        content:
          'We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.',
      },
      {
        title: "Children's Privacy",
        content:
          'This Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.',
      },
      {
        title: 'Changes to This Privacy Policy',
        content:
          'We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.',
      },
    ],
  },
  'little-nook': {
    name: 'Little Nook',
    slug: 'little-nook',
    accentColor: '#81ACEC',
    email: 'hello@enaut.dev',
    sections: [
      {
        title: 'Introduction',
        content:
          'Our privacy policy helps you understand how Little Nook handles information. We are committed to protecting your privacy by ensuring that your data stays exclusively on your device.',
      },
      {
        title: 'Information Collection and Use',
        content:
          'Little Nook does not collect or store any of your personal information on external servers. All data you enter, including your child’s name, gender, and expected arrival date, is stored locally on your mobile device. This information is used solely to provide personalized clothing recommendations based on birth season and to help you track your wardrobe inventory, such as bodies, pajamas, and socks.',
      },
      {
        title: 'Cookies',
        content:
          'Little Nook operates as a local mobile application and does not use cookies to track your activity.',
      },
      {
        title: 'Location Information',
        content:
          'This service does not use, request, or transmit any location information from your mobile device.',
      },
      {
        title: 'Device Information and Third Parties',
        content:
          'We do not share your information with third parties. Your wardrobe data, including categories and item quantities, remains private on your device. There is currently no third-party tracking or advertising integrated into the app.',
      },
      {
        title: 'Security',
        content:
          'Since Little Nook stores your data locally, its security relies on the protection of your own device. We recommend using your device’s built-in security features, such as passcodes or biometrics, to safeguard your information.',
      },
      {
        title: "Children's Privacy",
        content:
          'Little Nook is designed for parents and does not knowingly collect identifiable information from children under 13. Because all data is stored locally on the parent’s device, no such information is ever transmitted to or stored on our servers.',
      },
      {
        title: 'Changes to This Privacy Policy',
        content:
          'We may update our Privacy Policy periodically. You are encouraged to review this page for any changes. Updates are effective immediately once they are posted on this page.',
      },
    ],
  },
}

export function getAppConfig(slug: string): AppPrivacyConfig | undefined {
  return appsConfig[slug]
}

export function getAllAppSlugs(): string[] {
  return Object.keys(appsConfig)
}
