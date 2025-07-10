import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='w-full relative'>
        <div className="md:p-20 md:py-32 pt-32 px-5 relative backdrop-blur-xl flex flex-col md:gap-10 gap-5">
            <div className="md:w-full mb-5">
                <h1 className="text-2xl md:text-8xl font-bold leading-normal md:leading-snug">Terms & Conditions</h1>
                <p className="md:text-xl text-xl">Welcome to Choplife. These Terms and Conditions ("Terms") govern your use of our website, mobile app, and all related services provided by Choplife ("we," "us," or "our"). By using our services, you agree to these Terms.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">1. Eligibility</p>
                <p className='md:text-lg text-sm'>By using our services, you confirm that you are at least 16 years old or have reached the legal age of majority in your jurisdiction. If you are using Choplife on behalf of a business or organization, you confirm that you have teh authority to accept these Terms on their behalf.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">2. Use of Services</p>
                <p className='md:text-lg text-sm'>You agree to use Choplife only for lawful purposes and in accordance with all applicable laws and regulations. You must not:</p>
                <p className='text-sm'>Use our services for fraudulent, harmful, or illegal activities</p>
                <p className='text-sm'>Interfere with or disrupt our systems or networks</p>
                <p className='text-sm'>Attempt to gain unauthorized access to any part of our services</p>
                <p className='text-sm'>Provide false or misleading information or impersonate another person</p>

            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">3. Accounts and Security</p>
                <p className='md:text-lg text-sm'>Some features of Choplife may require you to create an account. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.</p>
                <p className='md:text-lg text-sm'>If you believe your account has been compromised, contact us immediately. Choplife is not responsible for losses resulting from unauthorized access cause by your failure to protect your account information.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">4. Orders and Payments</p>
                <p className="font-bold md:text-xl text-lg">4.1 Placing an Order</p>
                <p className='md:text-lg text-sm'>When placing an order, you confirm that all information provided is accurate and complete. Orders are subject to availability, and we reserve the right to cancel or refuse an order for any reason</p>
                <p className="font-bold md:text-xl text-lg">4.2 Payments</p>
                <p className='md:text-lg text-sm'>We accept various payment methods, including credit/debit cards and digital payment platforms. By submitting payment details, you authorize Choplife or our third-party payment providers to access your payment. All transactions are encrypted and secure.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">5. Delivery and Pickup</p>
                <p className="font-bold md:text-xl text-lg">5.1 Delivery</p>
                <p className='md:text-lg text-sm'>Estimated delivery times are provided at checkout but may vary due to factors beyond our control. You are responsible for providing accurate delivery details. We reserve the right to limit delivery locations or cancel orders if delivery is not feasible.</p>
                <p className="font-bold md:text-xl text-lg">5.2 Pickup</p>
                <p className='md:text-lg text-sm'>If you select the pickup option, you agree to collect your order within the specified time. Failure to do so may result in your order being discarded, and no refund may be issued.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">6. Cancellation, Returns & Refunds</p>
                <p className="font-bold md:text-xl text-lg">6.1 Cancellations</p>
                <p className='md:text-lg text-sm'>You may cancel your order shortly after placing it. If the order is already being prepared, cancellation may not be possible.</p>
                <p className="font-bold md:text-xl text-lg">6.2 Refunds</p>
                <p className='md:text-lg text-sm'>If you are unhappy with your order or experience a problem, please contac tus at info@chop-life.com within 24 hours. We will review your request and may offer a refund or replacement at our discretion.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">7. Intellectual Property</p>
                <p className='md:text-lg text-sm'>All content on Choplife's platform——including text, images, branding, and media——is the property of Choplife or our content partners and is protected by intellectual property laws. You may not copy, reproduce, or distribute our content without prior written permission.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">8. Third-Party Links</p>
                <p className='md:text-lg text-sm'>Choplife may include links to third-party websites or services. We do not control or endorse these sites and are not responsible for their content or practices. Your interactions with third parties are your responsibility.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">9. Limitation of Liability</p>
                <p className='md:text-lg text-sm'>To the fullest extent permitted by law, Choplife and its affiliates are not liable for indirect, incidental, or consequential damages, including lost profits or data, resulting from your use of our services.</p>
                <p className='md:text-lg text-sm'>Our total liability to you for any claim related to an order will not exceed the amount paid for that order.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">10. Disclaimer of Warranties</p>
                <p className='md:text-lg text-sm'>Our services are provided "as is" and "as available" without warranties of any kind. We do not guarantee uninterrupted access, error-free functionality, or the absence of harmful components. Use our services at your own risk.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">11. Indemnification</p>
                <p className='md:text-lg text-sm'>You agree to indemnify and hold Choplife and its affiliates harmless from any claims, damages, or losses resulting from your use of the services, your violation of these Terms, or your infringement of any third-party rights.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">12. Governing Law</p>
                <p className='md:text-lg text-sm'>These Terms are governed by the laws of Nigeria, without regard to conflict of law rules. Any disputes shall be subject to the jurisdiction of courts located in Rivers State, Nigeria.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">13. Termination</p>
                <p className='md:text-lg text-sm'>We reserve the right to suspend or terminate your access to Choplife at any time, without notice, if we believe you have violated these Terms or acted in a way that harms other users or our business.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">14. Contact Us</p>
                <p className='md:text-lg text-sm'>If you have any questions or concerns about these Terms, please contact us:</p>
                <p className='md:text-lg text-sm'>Choplife</p>
                <p className='md:text-lg text-sm'>46, Oriogwe Road</p>
                <p className='md:text-lg text-sm'>Obio Akpor, Rivers, 500102</p>
                <p className='md:text-lg text-sm'>Nigeria</p>
                <p className='md:text-lg text-sm'>Email: info@chop-life.com</p>
            </div>
        </div>
    </div>
  )
}

export default page
