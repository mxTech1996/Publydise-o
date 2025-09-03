import Container from '../../components/atoms/Container';
import Navbar from '../../components/organisms/Navbar';
import Footer from '../../components/organisms/Footer';

export default function Terms() {
  return (
    <main>
      <Navbar />

      <Container className='my-20 md:my-24 flex flex-col items-center gap-3'>
        <h1 className='text-3xl font-medium text-black mt-5 mb-3 text-center lg:text-start'>
          Terms and Conditions
        </h1>

        <div className='mt-10 flex flex-col gap-4 text-secondary'>
          <p className='text-black font-medium'>
            Effective Date: September 13, 2023
          </p>

          <p>
            Please read these Terms and Conditions carefully before using the
            Golarzep website (we, our, or Golarzep). By accessing or using our
            website, you agree to comply with these Terms and Conditions. If you
            do not agree with any of the terms below, please do not use our
            website.
          </p>

          <h6 className='text-black font-medium'>1. Use of the Site</h6>

          <p>
            1.1. Access and Registration: To access certain features of our
            website, it may be necessary to register and provide personal
            information. You are responsible for maintaining the confidentiality
            of your login information and all activities that occur in your
            account.
          </p>
          <p>
            1.2. User Content: By uploading, posting, or submitting content to
            our website, you warrant that you have the necessary rights to such
            content and grant Golarzep a non-exclusive license to use, modify,
            display, and distribute such content in connection with our
            services.
          </p>

          <h6 className='text-black font-medium'>2. User Behavior</h6>

          <p>
            2.1. Proper Use: You agree to use our website appropriately and in
            accordance with all applicable laws and regulations. You must not
            use our website for illegal, fraudulent, or harmful activities.
          </p>
          <p>
            2.2. Prohibitions: The use of our website for any purpose that may
            damage, overload, or disrupt its operation is prohibited. The use of
            any device, software, or routine that interferes or attempts to
            interfere with the proper functioning of the site is also
            prohibited.
          </p>

          <h6 className='text-black font-medium'>
            3. Content and Intellectual Property
          </h6>

          <p>
            3.1. Property Rights: All intellectual property rights on our
            website and its content (including text, graphics, logos, images,
            and software) are owned by Golarzep or third parties with a license.
            You agree not to copy, reproduce, modify, distribute, or otherwise
            use such content without our consent.
          </p>
          <p>
            3.2. Trademarks: All trademarks, trade names, and logos used on our
            website are the property of Golarzep or third parties. No rights are
            granted to you to use these marks without our written consent.
          </p>

          <h6 className='text-black font-medium'>4. Privacy Policy</h6>

          <p>
            The use of our website is subject to our Privacy Policy, which
            describes how we collect, use, and protect your personal
            information. Please read our Privacy Policy to understand how we
            handle your data.
          </p>

          <h6 className='text-black font-medium'>5. Changes to the Terms</h6>

          <p>
            We reserve the right to modify these Terms and Conditions at any
            time. Any changes will be posted on our website and will take effect
            immediately after publication. We recommend reviewing these terms
            periodically.
          </p>

          <h6 className='text-black font-medium'>6. Termination</h6>

          <p>
            We reserve the right to suspend or cancel your access to our website
            at any time and for any reason, without prior notice.
          </p>

          <h6 className='text-black font-medium'>7. Applicable Law</h6>

          <p>
            These Terms and Conditions are governed by the laws of Mexico, and
            any dispute arising from these terms will be subject to the
            exclusive jurisdiction of the courts of Mexico.
          </p>

          <p>
            Thank you for trusting Golarzep. Your privacy is important to us,
            and we are committed to protecting it responsibly.
          </p>

          <h6 className='text-black font-medium'>8. Contact</h6>

          <p>
            If you have any questions or concerns about these Terms and
            Conditions, please contact us at golarzep@gmail.com.
          </p>

          <p>
            Thank you for using Golarzep. These terms and conditions are
            designed to ensure proper and fair use of our website.
          </p>
        </div>
      </Container>

      <Footer />
    </main>
  );
}
