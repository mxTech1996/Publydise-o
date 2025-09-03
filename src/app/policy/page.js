import Container from '../../components/atoms/Container';
import Navbar from '../../components/organisms/Navbar';
import Footer from '../../components/organisms/Footer';

export default function Policy() {
  return (
    <main>
      <Navbar />

      <Container className='my-20 md:my-24 flex flex-col items-center gap-3'>
        <h1 className='text-3xl font-medium text-black mt-5 mb-3 text-center lg:text-start'>
          Privacy Policy
        </h1>

        <div className='mt-10 flex flex-col gap-4 text-secondary'>
          <p className='text-black font-medium'>
            Effective Date: September 13, 2023
          </p>

          <p>
            At Golarzep, we take the protection of your privacy and the security
            of your personal data very seriously. This Privacy Policy aims to
            provide you with clear and transparent information on how we
            collect, use, share, and protect your personal data when you visit
            our website or use our services. Please read this policy carefully
            and review it periodically, as we may update it to reflect changes
            in our privacy practices.
          </p>

          <h6 className='text-black font-medium'>1. Information We Collect</h6>

          <p>
            {' '}
            1.1. Personal Information: We collect personal information that you
            provide to us directly, such as your name, email address, phone
            number, and other information necessary to provide our services,
            such as enrolling in courses or subscribing to newsletters.
          </p>
          <p>
            1.2. Usage Information: We collect information about how you use our
            website, including browsing data, visited pages, visit duration, and
            similar information.
          </p>
          <p>
            {' '}
            1.3. Device Information: We may collect information about the device
            you use to access our website, such as IP address, browser type,
            operating system, and device identification.
          </p>

          <h6 className='text-black font-medium'>2. Use of Information</h6>

          <p>We use the information we collect for the following purposes:</p>
          <p>
            {' '}
            2.1. Service Provision: We use your personal data to provide our
            services, such as course enrollment, payment processing, and sending
            relevant content.
          </p>
          <p>
            2.2. Communication: We may use your information to send you
            communications related to our services, such as enrollment
            confirmations, updates, and newsletters.
          </p>
          <p>
            2.3. Improvement of Our Services: We use the collected information
            to analyze and improve our services, including customizing your
            experience on our website.
          </p>

          <h6 className='text-black font-medium'>3. Sharing Information</h6>

          <p>
            We do not sell or rent your personal information to third parties.
            However, we may share your information in the following situations:
          </p>
          <p>
            3.1. Service Providers: We work with third-party service providers
            who assist us in providing our services, such as payment processors
            and web hosting services. These providers have limited access to
            your information and only use it for agreed-upon purposes.
          </p>
          <p>
            3.2. Legal Compliance: We may disclose your information if we are
            legally obligated to do so to comply with legal requirements, court
            orders, or legal processes.
          </p>

          <h6 className='text-black font-medium'>4. Data Security</h6>

          <p>
            We take reasonable measures to protect your personal data and
            maintain its confidentiality. We use appropriate technical and
            organizational security measures to protect your information against
            loss, unauthorized use, or disclosure.
          </p>

          <h6 className='text-black font-medium'>5. Your Rights</h6>

          <p>
            You have rights regarding your personal data, including access,
            rectification, deletion, and objection to processing. You can
            exercise these rights by sending us a written request to the address
            provided in the contact section.
          </p>

          <h6 className='text-black font-medium'>
            6. Changes to the Privacy Policy
          </h6>

          <p>
            We reserve the right to modify this Privacy Policy at any time. The
            changes will take effect as soon as they are published on our
            website. We recommend checking this policy regularly to stay
            informed of any updates.
          </p>

          <h6 className='text-black font-medium'>7. Contact</h6>

          <p>
            If you have any questions or concerns about our Privacy Policy or
            how we handle your personal data, please contact us at
            golarzep@gmail.com.
          </p>

          <p>
            {' '}
            Thank you for trusting Golarzep. Your privacy is important to us,
            and we are committed to protecting it responsibly.
          </p>
        </div>
      </Container>

      <Footer />
    </main>
  );
}
