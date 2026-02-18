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
}

export function getAppConfig(slug: string): AppPrivacyConfig | undefined {
  return appsConfig[slug]
}

export function getAllAppSlugs(): string[] {
  return Object.keys(appsConfig)
}
