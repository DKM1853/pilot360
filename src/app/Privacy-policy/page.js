import { Playwrite_CA } from "next/font/google";
import Navbar from "../Components/Navbar";

export const metadata = {
  title: "Pilot 360 Privacy Policy - Your Data Protection & Security",
  description:
    "Read Pilot 360's privacy policy to understand how we collect, use, and protect your data while providing top-quality pilot training services",
  keywords: "Pilot 360: Simplifying Your Journey to Becoming a Pilot",
  openGraph: {
    title: "Pilot 360 Privacy Policy - Your Data Protection & Security",
    description:
      "Read Pilot 360's privacy policy to understand how we collect, use, and protect your data while providing top-quality pilot training services",
    url: "http://localhost:3000/Privacy-policy",
    siteName: "Pilot360",
    locale: "en_US",
    type: "website",
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <diV className="font-onest">
        <Navbar />
        <div className="max-w-3xl mx-auto py-10 px-6">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <p className="mb-4">Last updated: January 01, 2025</p>
          <p className="mb-4">
            This Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your information when You use the
            Service and tells You about Your privacy rights and how the law
            protects You.
          </p>
          <p>
            We use Your Personal data to provide and improve the Service. By
            using the Service, You agree to the collection and use of
            information in accordance with this Privacy Policy.
          </p>
          {/* Interpretation and Definitions Section */}
          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Interpretation and Definitions
          </h2>

          {/* Interpretation */}
          <h3 className="text-xl font-semibold mt-4 mb-3">Interpretation</h3>
          <p className="mb-4">
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </p>

          {/* Definitions */}
          <h3 className="text-xl font-semibold mt-4 mb-3">Definitions</h3>
          <p className="mb-4">For the purposes of this Privacy Policy:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Account:</strong> A unique account created for You to
              access our Service or parts of our Service.
            </li>
            <li>
              <strong>Affiliate:</strong> An entity that controls, is controlled
              by, or is under common control with a party, where "control" means
              ownership of 50% or more of the shares, equity interest, or other
              securities entitled to vote for election of directors or other
              managing authority.
            </li>
            <li>
              <strong>Company:</strong> (referred to as either "the Company",
              "We", "Us" or "Our" in this Agreement) refers to Pilot 360, SF-202
              Dynasty Corporate Park, Nr. Stadium Circle, Chimanlal Girdharlal
              Rd, Navrangpura, Ahmedabad, Gujarat 380009.
            </li>
            <li>
              <strong>Cookies:</strong> Small files that are placed on Your
              computer, mobile device, or any other device by a website,
              containing details of Your browsing history among other uses.
            </li>
            <li>
              <strong>Country:</strong> Refers to Gujarat, India.
            </li>
            <li>
              <strong>Device:</strong> Any device that can access the Service
              such as a computer, a cellphone, or a digital tablet.
            </li>
            <li>
              <strong>Personal Data:</strong> Any information that relates to an
              identified or identifiable individual.
            </li>
            <li>
              <strong>Service:</strong> Refers to the Website.
            </li>
            <li>
              <strong>Service Provider:</strong> Any natural or legal person who
              processes data on behalf of the Company. It includes third-party
              companies or individuals employed by the Company to facilitate the
              Service, provide the Service on behalf of the Company, perform
              services related to the Service, or assist the Company in
              analyzing how the Service is used.
            </li>
            <li>
              <strong>Third-party Social Media Service:</strong> Any website or
              social network website through which a User can log in or create
              an account to use the Service.
            </li>
            <li>
              <strong>Usage Data:</strong> Data collected automatically, either
              generated by the use of the Service or from the Service
              infrastructure itself (for example, the duration of a page visit).
            </li>
            <li>
              <strong>Website:</strong> Refers to Pilot 360, accessible from{" "}
              <a
                href="https://pilot360.co/"
                className="text-blue-500 hover:underline"
              >
                https://pilot360.co/
              </a>
              .
            </li>
            <li>
              <strong>You:</strong> The individual accessing or using the
              Service, or the company or other legal entity on behalf of which
              such individual is accessing or using the Service, as applicable.
            </li>
          </ul>
          {/* Collecting and Using Your Personal Data */}
          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Collecting and Using Your Personal Data
          </h2>

          {/* Types of Data Collected */}
          <h3 className="text-xl font-semibold mt-4 mb-3">
            Types of Data Collected
          </h3>

          {/* Personal Data */}
          <h4 className="text-lg font-semibold mt-3 mb-2">Personal Data</h4>
          <p className="mb-4">
            While using Our Service, We may ask You to provide Us with certain
            personally identifiable information that can be used to contact or
            identify You. Personally identifiable information may include, but
            is not limited to:
          </p>
          <ul className="list-disc list-inside">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Address, State, Province, ZIP/Postal code, City</li>
            <li>Usage Data</li>
          </ul>
          {/* Usage Data */}
          <h4 className="text-lg font-semibold mt-6 mb-2">Usage Data</h4>
          <p className="mb-4">
            Usage Data is collected automatically when using the Service.
          </p>
          <p className="mb-4">
            Usage Data may include information such as Your Device's Internet
            Protocol address (e.g. IP address), browser type, browser version,
            the pages of our Service that You visit, the time and date of Your
            visit, the time spent on those pages, unique device identifiers, and
            other diagnostic data.
          </p>
          <p className="mb-4">
            When You access the Service by or through a mobile device, We may
            collect certain information automatically, including, but not
            limited to, the type of mobile device You use, Your mobile device
            unique ID, the IP address of Your mobile device, Your mobile
            operating system, the type of mobile Internet browser You use,
            unique device identifiers, and other diagnostic data.
          </p>
          <p className="mb-4">
            We may also collect information that Your browser sends whenever You
            visit our Service or when You access the Service by or through a
            mobile device.
          </p>
          {/* Information from Third-Party Social Media Services */}
          <h4 className="text-lg font-semibold mt-6 mb-2">
            Information from Third-Party Social Media Services
          </h4>
          <p className="mb-4">
            The Company allows You to create an account and log in to use the
            Service through the following Third-party Social Media Services:
          </p>
          <ul className="list-disc list-inside ms-8">
            <li>Google</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
          <p className="mb-4">
            If You decide to register through or otherwise grant Us access to a
            Third-Party Social Media Service, We may collect Personal Data that
            is already associated with Your Third-Party Social Media Service's
            account, such as Your name, Your email address, Your activities, or
            Your contact list associated with that account.
          </p>
          <p className="mb-4">
            You may also have the option of sharing additional information with
            the Company through Your Third-Party Social Media Service's account.
            If You choose to provide such information and Personal Data, during
            registration or otherwise, You are giving the Company permission to
            use, share, and store it in a manner consistent with this Privacy
            Policy.
          </p>
          {/* Tracking Technologies and Cookies */}
          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Tracking Technologies and Cookies
          </h2>
          <p className="mb-4">
            We use Cookies and similar tracking technologies to track activity
            on Our Service and store certain information. Tracking technologies
            used include beacons, tags, and scripts to collect and track
            information and to improve and analyze Our Service. The technologies
            We use may include:
          </p>

          {/* Types of Tracking Technologies */}
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Cookies or Browser Cookies:</strong> A cookie is a small
              file placed on Your Device. You can instruct Your browser to
              refuse all Cookies or to indicate when a Cookie is being sent.
              However, if You do not accept Cookies, You may not be able to use
              some parts of our Service. Unless you have adjusted Your browser
              setting to refuse Cookies, our Service may use Cookies.
            </li>
            <li>
              <strong>Web Beacons:</strong> Certain sections of our Service and
              our emails may contain small electronic files known as web beacons
              (also referred to as clear gifs, pixel tags, and single-pixel
              gifs). These allow the Company to count users who have visited
              specific pages or opened an email and track website statistics
              (for example, recording the popularity of a certain section and
              verifying system and server integrity).
            </li>
          </ul>

          {/* Persistent and Session Cookies */}
          <p className="mt-4">
            Cookies can be <strong>Persistent</strong> or{" "}
            <strong>Session</strong> Cookies.
            <strong>Persistent Cookies</strong> remain on Your personal computer
            or mobile device when You go offline, while
            <strong>Session Cookies</strong> are deleted as soon as You close
            Your web browser.
          </p>
          <p className="mt-4">
            You can learn more about cookies from the{" "}
            <a
              href="https://www.termsfeed.com/blog/cookies/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              TermsFeed website article
            </a>
            .
          </p>
          <p className="mt-4 mb-4">
            We use both Session and Persistent Cookies for the purposes set out
            below:
          </p>
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Necessary / Essential Cookies</strong> (Session Cookies,
              Administered by Us): These Cookies are essential to provide You
              with services available through the Website, help authenticate
              users, and prevent fraudulent activity.
            </li>
            <li>
              <strong>Cookies Policy / Notice Acceptance Cookies</strong>{" "}
              (Persistent Cookies, Administered by Us): Identify if users have
              accepted the use of cookies.
            </li>
            <li>
              <strong>Functionality Cookies</strong> (Persistent Cookies,
              Administered by Us): These allow us to remember choices You make,
              such as login details and language preferences.
            </li>
          </ul>

          {/* Use of Personal Data */}
          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Use of Your Personal Data
          </h2>
          <p className="mb-4">
            The Company may use Personal Data for the following purposes:
          </p>
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>To provide and maintain our Service</strong>, including to
              monitor the usage of our Service.
            </li>
            <li>
              <strong>To manage Your Account:</strong> to manage Your
              registration as a user of the Service. The Personal Data You
              provide can give You access to different functionalities of the
              Service that are available to You as a registered user.
            </li>
            <li>
              <strong>For the performance of a contract:</strong> the
              development, compliance and undertaking of the purchase contract
              for the products, items or services You have purchased or of any
              other contract with Us through the Service.
            </li>
            <li>
              <strong>To contact You:</strong> To contact You by email,
              telephone calls, SMS, or other equivalent forms of electronic
              communication, such as a mobile application's push notifications
              regarding updates or informative communications related to the
              functionalities, products or contracted services, including the
              security updates, when necessary or reasonable for their
              implementation.
            </li>
            <li>
              <strong>To provide You</strong> with news, special offers and
              general information about other goods, services and events which
              we offer that are similar to those that you have already purchased
              or enquired about unless You have opted not to receive such
              information.
            </li>
            <li>
              <strong>To manage Your requests:</strong> Addressing user
              inquiries.
            </li>
            <li>
              <strong>For business transfers:</strong> We may use Your
              information to evaluate or conduct a merger, divestiture,
              restructuring, reorganization, dissolution, or other sale or
              transfer of some or all of Our assets, whether as a going concern
              or as part of bankruptcy, liquidation, or similar proceeding, in
              which Personal Data held by Us about our Service users is among
              the assets transferred.
            </li>
            <li>
              <strong>For other purposes:</strong> We may use Your information
              for other purposes, such as data analysis, identifying usage
              trends, determining the effectiveness of our promotional campaigns
              and to evaluate and improve our Service, products, services,
              marketing and your experience.
            </li>
          </ul>

          {/* Sharing Personal Data */}
          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Sharing Your Personal Data
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>With Service Providers:</strong> We may share Your
              personal information with Service Providers to monitor and analyze
              the use of our Service, to contact You.
            </li>
            <li>
              <strong>For business transfers:</strong> We may share or transfer
              Your personal information in connection with, or during
              negotiations of, any merger, sale of Company assets, financing, or
              acquisition of all or a portion of Our business to another
              company.
            </li>
            <li>
              <strong>With Affiliates:</strong> We may share Your information
              with Our affiliates, in which case we will require those
              affiliates to honor this Privacy Policy. Affiliates include Our
              parent company and any other subsidiaries, joint venture partners
              or other companies that We control or that are under common
              control with Us.
            </li>
            <li>
              <strong>With business partners:</strong> We may share Your
              information with Our business partners to offer You certain
              products, services or promotions.
            </li>
            <li>
              <strong>With other users:</strong> when You share personal
              information or otherwise interact in the public areas with other
              users, such information may be viewed by all users and may be
              publicly distributed outside. If You interact with other users or
              register through a Third-Party Social Media Service, Your contacts
              on the Third-Party Social Media Service may see Your name,
              profile, pictures and description of Your activity. Similarly,
              other users will be able to view descriptions of Your activity,
              communicate with You and view Your profile.
            </li>
            <li>
              <strong>With Your consent:</strong> We may disclose Your personal
              information for any other purpose with Your consent.
            </li>
          </ul>

          {/* Retention of Data */}
          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Retention of Your Personal Data
          </h2>
          <p className="mb-4">
            The Company will retain Your Personal Data only for as long as is
            necessary for the purposes set out in this Privacy Policy. We will
            retain and use Your Personal Data to the extent necessary to comply
            with our legal obligations (for example, if we are required to
            retain your data to comply with applicable laws), resolve disputes,
            and enforce our legal agreements and policies.
          </p>
          <p className="mb-4">
            The Company will also retain Usage Data for internal analysis
            purposes. Usage Data is generally retained for a shorter period of
            time, except when this data is used to strengthen the security or to
            improve the functionality of Our Service, or We are legally
            obligated to retain this data for longer time periods.
          </p>
          {/* Retention of Data */}
          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Transfer of Your Personal Data{" "}
          </h2>
          <p className="mb-4">
            Your information, including Personal Data, is processed at the
            Company's operating offices and in any other places where the
            parties involved in the processing are located. It means that this
            information may be transferred to — and maintained on — computers
            located outside of Your state, province, country or other
            governmental jurisdiction where the data protection laws may differ
            than those from Your jurisdiction.
          </p>
          <p className="mb-4">
            Your consent to this Privacy Policy followed by Your submission of
            such information represents Your agreement to that transfer.
          </p>
          <p className="mb-4">
            The Company will take all steps reasonably necessary to ensure that
            Your data is treated securely and in accordance with this Privacy
            Policy and no transfer of Your Personal Data will take place to an
            organization or a country unless there are adequate controls in
            place including the security of Your data and other personal
            information.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Delete Your Personal Data
          </h2>
          <p className="mb-4">
            You have the right to delete or request that We assist in deleting
            the Personal Data that We have collected about You.
          </p>
          <p className="mb-4">
            Our Service may give You the ability to delete certain information
            about You from within the Service.
          </p>
          <p className="mb-4">
            You may update, amend, or delete Your information at any time by
            signing in to Your Account, if you have one, and visiting the
            account settings section that allows you to manage Your personal
            information. You may also contact Us to request access to, correct,
            or delete any personal information that You have provided to Us.
          </p>
          <p className="mb-4">
            Please note, however, that We may need to retain certain information
            when we have a legal obligation or lawful basis to do so.
          </p>
          {/* Collecting and Using Your Personal Data */}
          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Disclosure of Your Personal Data
          </h2>

          {/* Types of Data Collected */}
          <h3 className="text-xl font-semibold mt-4 mb-3">
            Business Transactions
          </h3>
          <p className="mb-4">
            If the Company is involved in a merger, acquisition or asset sale,
            Your Personal Data may be transferred. We will provide notice before
            Your Personal Data is transferred and becomes subject to a different
            Privacy Policy.
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-3">Law enforcement </h3>
          <p className="mb-4">
            Under certain circumstances, the Company may be required to disclose
            Your Personal Data if required to do so by law or in response to
            valid requests by public authorities (e.g. a court or a government
            agency).
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-3">
            Other legal requirements
          </h3>
          <p>
            The Company may disclose Your Personal Data in the good faith belief
            that such action is necessary to:
          </p>
          <ul className="list-disc list-inside space-y-3">
            <li>Comply with a legal obligation</li>
            <li>Protect and defend the rights or property of the Company</li>
            <li>
              Prevent or investigate possible wrongdoing in connection with the
              Service
            </li>
            <li>
              Protect the personal safety of Users of the Service or the public
            </li>
            <li>Protect against legal liability</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4 mb-3">
            Security of Your Personal Data{" "}
          </h3>
          <p className="mb-4">
            The security of Your Personal Data is important to Us, but remember
            that no method of transmission over the Internet, or method of
            electronic storage is 100% secure. While We strive to use
            commercially acceptable means to protect Your Personal Data, We
            cannot guarantee its absolute security.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Children's Privacy
          </h2>
          <p className="mb-4">
            Our Service does not address anyone under the age of 13. We do not
            knowingly collect personally identifiable information from anyone
            under the age of 13. If You are a parent or guardian and You are
            aware that Your child has provided Us with Personal Data, please
            contact Us. If We become aware that We have collected Personal Data
            from anyone under the age of 13 without verification of parental
            consent, We take steps to remove that information from Our servers.
          </p>
          <p className="mb-4">
            If We need to rely on consent as a legal basis for processing Your
            information and Your country requires consent from a parent, We may
            require Your parent's consent before We collect and use that
            information.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Links to Other Websites{" "}
          </h2>
          <p className="mb-4">
            Our Service may contain links to other websites that are not
            operated by Us. If You click on a third party link, You will be
            directed to that third party's site. We strongly advise You to
            review the Privacy Policy of every site You visit.
          </p>
          <p className="mb-4">
            We have no control over and assume no responsibility for the
            content, privacy policies or practices of any third party sites or
            services.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Changes to this Privacy Policy{" "}
          </h2>
          <p className="mb-4">
            We may update Our Privacy Policy from time to time. We will notify
            You of any changes by posting the new Privacy Policy on this page.
          </p>
          <p className="mb-4">
            We will let You know via email and/or a prominent notice on Our
            Service, prior to the change becoming effective and update the "Last
            updated" date at the top of this Privacy Policy.
          </p>
          <p className="mb-4">
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, You can contact
            us:
          </p>
          <ul className="list-disc list-inside">
            <li>By email: [email protected]</li>
            <li>
              By visiting this page on our website:
              <a
                href="https://pilot360.co/Contact-us"
                className="text-blue-500 hover:underline"
              >
                https://pilot360.co/Contact-us
              </a>
            </li>
            <li>By phone number: +91 8490008834</li>
            <li>
              By mail: SF 202 Dynasty Corporate Park, Nr. Stadium Circle,
              Chimanlal Girdharlal Rd, Navrangpura, Ahmedabad, Gujarat 380009
            </li>
          </ul>
        </div>
      </diV>
    </>
  );
}
