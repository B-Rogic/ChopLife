import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='w-full relative'>
        <div className="md:p-20 md:py-32 pt-32 px-5 relative backdrop-blur-xl flex flex-col md:gap-10 gap-5">
            <div className="md:w-full mb-5">
                <h1 className="text-2xl md:text-8xl font-bold leading-normal md:leading-snug">Terms & Conditions</h1>
                <p className="md:text-xl text-xl">At <span className='font-bold'>Choplife</span>, we use cookies and similar trackig technologies to enhance your experience, analyze site usage, and personalize content. This Cookie Policy explains with cookies are, how we use them, and how you can manage your preferences.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">1. Introduction</p>
                <p className='md:text-lg text-sm'>These Terms and Conditions ("Terms") govern your access and use of the <span className="font-bold">Pepper</span> website, mobile app, and any other services provided by <span className="font-bold">Pepper</span> ("we," "us," or "our"). By using our Services, you agree to comply with these Terms.</p>
                <p className='md:text-lg text-sm'>We reserve the right to modify or update these Terms at any time without prior notice. The most recent version of these Terms will always be available on your website. Continued use of the Services after any changes constitute your acceptance of the revised Terms.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">2. Eligibility</p>
                <p className='md:text-lg text-sm'>By using our Services, you fonfirm that you are at least 16 years old or have reached the legal age of majority in your jurisdiction. If you are using the Services on behalf of a business or organization, you represent and warrant that you have the authority to bind that entity to these Terms.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">3. Use of Services</p>
                <p className='md:text-lg text-sm'>You agree to use our Services for lawful purposes only and in compliance with all applicable laws and regulations. You are prohibited from:</p>
                
                <div className="flex flex-col gap-1">
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'><span className="font-light"><span className="italic">Using the Services to engage in any fraudulent or unlawful activity.</span></span></p>
                    </div>
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'><span className="font-light"><span className="italic">Interfering with or disrupting the functionality of our services.</span></span></p>
                    </div>
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'><span className="font-light"><span className="italic">Attempting to gain unauthorized access to our systems, data, or other users' information.</span></span></p>
                    </div>
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'><span className="font-light"><span className="italic">Impersonating any person or entity or providing false information.</span></span></p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">4. Accounts and Security</p>
                <p className='md:text-lg text-sm'>To access certain features of our Services, you may need to create an account with <span className="font-bold">Pepper</span>. You are responsible for maintaining the confidentiality of your account login credentials and for all activities that occur under your account.</p>
                <p className='md:text-lg text-sm'>You agree to notify us immediately if you suspect any unauthorized use of your account or any other breach of security. <span className="font-bold">Pepper</span> will not be liable for any loss or damage resulting from your failure to safeguard your account information.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">5. Orders and Payments</p>
                <p className="font-bold md:text-xl text-lg">5.1 Placing an Order</p>
                <p className='md:text-lg text-sm'>When you place an order through our Services, you agree that all the informcation provided is accurate and complete. All orders are subject to availability, and we reserve the right to cancel or refuse any order for any reason.</p>
                <p className="font-bold md:text-xl text-lg">5.2 Payments</p>
                <p className='md:text-lg text-sm'>We accept various payment methods, including credit cards and online payment services. By providing your payment information, you authorize <span className='font-bold'>Pepper</span> or our third-party payment processors to charge thte total amount for your order, including applicable taxes and delivery fees. All payments are securely processed using industry-standard encryption.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">6. Delivery and Pickup</p>
                <p className="font-bold md:text-xl text-lg">6.1 Delivery</p>
                <p className='md:text-lg text-sm'>Delivery times at the time of ordering are estimates and may vary based on traffic, weather, or other unforeseen circumstances. WE are not liable for delays in delivery times. You are responsible for providing accurate delivery information. <span className="font-bold">Pepper</span> reserves the right to refuse delivery to certain locations.</p>
                <p className="font-bold md:text-xl text-lg">6.2 Pickup</p>
                <p className='md:text-lg text-sm'>When selecting the pickup option, you agree to collect your order within the specified time frame. If you fail to pick up your order, it may be disposed of, and you may not be eligible for a refund.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">7. Returns, Refunds, and Cancellations</p>
                <p className="font-bold md:text-xl text-lg">7.1 Cancellations</p>
                <p className='md:text-lg text-sm'>You may cancel your order within a reasonable time after placing it, subject to the preparation status of the order. If the order has already been prepared, it may not be eligible for cancellation or a refund.</p>
                <p className="font-bold md:text-xl text-lg">7.2 Refunds</p>
                <p className='md:text-lg text-sm'>If you are dissatisfied with your order or believe there has been an error, please contact us at [Insert Contact Email] within 24 hours. We will review your request and, at our discretion, issue a refund or replacement.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">8. Intellectual Property</p>
                <p className='md:text-lg text-sm'>All content on the <span className="font-bold">Pepper</span> website and app, including text, images, logos, graphics, and designs, is the property of <span className="font-bold">Pepper</span> or its licensors and is protected by copyright, trademark, and other intellectual property laws. You are granted a limited, non-exclusive, non-transferable licence to access and use the Services for personal, non-commercial purposes.</p>
                <p className='md:text-lg text-sm'>You may not reproduce, distribute, or publicly display any part of our content without prior written consent from <span className="font-bold">Pepper</span></p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">9. Third-Party Links</p>
                <p className='md:text-lg text-sm'>Our Services may contain links to third-party websites or services that are not owned or controlled by <span className="font-bold">Pepper</span>. We are not responsible for the content, privacy practices, or policies of any third-party websites. Your interactions with these third parties are solely your responsibility.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">10. Limitation of Liability</p>
                <p className='md:text-lg text-sm'>To the fullest extent permitted by law, <span className="font-bold">Pepper</span> and its affiliates, officers, emplyees, and agents will not be liable for any indirect, incidental, special, or consequential damages arising from your use of our Services, including bu tnot limited to loss of profits, data, or goodwill, even if we have been advised of the possibility of such damages.</p>
                <p className='md:text-lg text-sm'>Our total liability to you for any claims arising from the use of our Services will not exceed the amount you paid to Pepper for the relevant order.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">11. Disclaimer of Warranties</p>
                <p className='md:text-lg text-sm'>Our Services are provided "as is" and "as available" without any warranties of any kind, whether express or implied. We do not guarantee that the Services will be available at all times, error-free, or free from viruses or harmful components, Your use of the Services is at your own risk.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">12. Indemnification</p>
                <p className='md:text-lg text-sm'>You agree to indemnify and hold harmless <span className="font-bold">Pepper</span>, its affiliates, officers, employees, and agents from any claims, liabilities, damages, losses, or expenses, including reasonable attorney's fees, arising out of your use of the Services, violation of these Terms, of infringement of any third-party rights.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">13. Governing Law</p>
                <p className='md:text-lg text-sm'>These Terms and any disputes arising out of or related to your use of the Services will be governed by and construed in accordance with the laws of [Insert Country/State], without regard to its conflict of law principles.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">14. Termination</p>
                <p className='md:text-lg text-sm'>We reserve the right to terminate or suspend your access to the Services at our discretion, without notice, for any conduct that we believe violates these Terms or is harmful to our users, us, or third parties.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">15. Contact Us <span className="font-light">If you have any questions about our use of cookies or how to manage your preferences, please contact us at:</span>Choplife</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className='md:text-lg text-sm'>46, Oroigwe Road <br /> Obio Akpor, Rivers, 500102 <br /> Nigeria</p>
            </div>
            <p className="text-gray-400">Contact Us</p>
        </div>
    </div>
  )
}

export default page
