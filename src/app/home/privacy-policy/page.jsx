import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='w-full relative'>
        <div className="md:p-20 md:py-32 pt-32 px-5 relative backdrop-blur-xl flex flex-col md:gap-10 gap-5">
            <div className="md:w-full mb-5">
                <h1 className="text-2xl md:text-8xl font-bold leading-normal md:leading-snug">Privacy Policy</h1>
                <p className="md:text-xl text-xl">At <span className='font-bold'>Choplife</span>, we value your privacy and are committed to protecting your personal information. this Privacy Policy outlines how we collect, use, store, and protect your data when you use our website, mobile application, and services (collectively, the "Services").</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">1. Information We Collect</p>
                <p className='md:text-lg text-sm'>We may collect the folowing types of personal information:</p>
                <div className="flex flex-col gap-1">
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'>Personal Identification Information: <span className="font-light">Name, email address, phone number, mailing address, and other contact details when you create an account, place an order, or sign up for newsletters.</span></p>
                    </div>
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'>Payment Information: <span className="font-light">Credit card details, billing address, and transaction history, which are securely processed through third-party payment processors.</span></p>
                    </div>
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'>Usage Data: <span className="font-light">Information about how you use our Services, such as IP address, browser type, device information, and pages visited, collected through cookies and similar technologies.</span></p>
                    </div>
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'>Location Data: <span className="font-light">If you allow us, we may collect your device's location to provide location-specific services, such as earby restaurant locations and delivery areas.</span></p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">2. How We Use Your Information</p>
                <p className='md:text-lg text-sm'>We use the personal information we collect for the following purposes:</p>
                <div className="flex flex-col gap-1">
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'>To Process Orders: <span className="font-light">Your data is used to fulfill and deliver your orders, process payments, and provide customers support.</span></p>
                    </div>
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'>To Improve Our Services: <span className="font-light">We use your feedback and data to enhance user experience, develop new features, and refine our services.</span></p>
                    </div>
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'>For Marketing Communications: <span className="font-light">With your consent, we may send promotional emails, special offers, and newsletters. You can unsubscribe at any time by following the instructions in the emails.</span></p>
                    </div>
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'>To Comply with Legal Obligations: <span className="font-light">We may use your data to comply with applicable laws and regulations</span></p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">3. Sharing Your Information</p>
                <p className='md:text-lg text-sm'>We do not sell or rent your personal information to third parties. However, we may share your data with:</p>
                <div className="flex flex-col gap-1">
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'>Services Providers: <span className="font-light">Third-party companies that help us operate our business, such as payment processors, delivery partners, and IT service providers. Tey are only given the information necessary to perform their services.</span></p>
                    </div>
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'>Legal Authorities: <span className="font-light">If required by law, we may share your personal information with law enforcement or other government authories.</span></p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">4. Cookies and Tracking Technologies</p>
                <p className='md:text-lg text-sm'>We take data security seriously and use appropriate measures to protect your personal information. This includes encryption, secure servers, and restricted access to sensitive data.</p>
                <p className='md:text-lg text-sm'>You can control the use of cookies through your browser settings. Please note that disabling cookies may limit certain functionalities of our Services.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">5. Data Security</p>
                <p className='md:text-lg text-sm'>We take data security seriously and use appropriate measures to protect your personal information. This includes encryption, secure servers, and restricted access to sensitive data.</p>
                <p className='md:text-lg text-sm'>Despire our efforts, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">6. Your Rights</p>
                <p className='md:text-lg text-sm'>You have the following rights concerning your personal information:</p>
                <div className="flex flex-col gap-1">
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'>Access and Correction: <span className="font-light">You can request access to the personal data we hold about you and ask for corrections if necessary.</span></p>
                    </div>
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'>Deletion: <span className="font-light">You may request the deletion of your personal information unless we are required by law to retain it.</span></p>
                    </div>
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'>Opt-Out of Marketing: <span className="font-light">You can unsubscribe from marketing communications at any time using the link provided in the emails.</span></p>
                    </div>
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'>Data Portability: <span className="font-light">You have the right to request a copy of your data in a structured, machine-readable format.</span></p>
                    </div>
                </div>
                <p className="font-light md:text-lg text-sm">To exercise any of these rights, please contact us at <span className='font-bold'>[Insert Contact Email].</span></p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">7. Third-Party Links</p>
                <p className='md:text-lg text-sm'>Our website may contain links to third-party websites, including social media platforms. This Privacy Policy does not apply to those websites, and we are not responsible for their content or privacy practices. Please review the privacy policy of those third parties before sharing any personal information.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">8. Children's Privacy</p>
                <p className='md:text-lg text-sm'>Pepper's Services are not directed to individuals under the age of 16, and we do not knowingly collect personal information from children. If we become aware that a child has provided us with personal data, we will take steps to delete such information.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">8. Children's Privacy</p>
                <p className='md:text-lg text-sm'>Pepper's Services are not directed to individuals under the age of 16, and we do not knowingly collect personal information from children. If we become aware that a child has provided us with personal data, we will take steps to delete such information.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">9. Changes to This Privacy Policy</p>
                <p className='md:text-lg text-sm'>We may update this Privacy Policy from time to time to reflect changes in our practices, legal obligations, or the Services we provide. We encourage you to review this page regularly to stay informed about how we protect your information.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">10. Contact Us</p>
                <p className='md:text-lg text-sm'>If you have any questions or concerns about this Privacy Policy, please contact us at:Choplife</p>
                <p className='md:text-lg text-sm'>46, Oroigwe Road <br /> Obio Akpor, Rivers, 500102 <br /> Nigeria</p>
            </div>
            <p className="text-gray-400">Contact Us</p>
        </div>
    </div>
  )
}

export default page
