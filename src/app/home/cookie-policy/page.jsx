import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='w-full relative'>
        <div className="md:p-20 md:py-32 pt-32 px-5 relative backdrop-blur-xl flex flex-col md:gap-10 gap-5">
            <div className="md:w-full mb-5">
                <h1 className="text-2xl md:text-8xl font-bold leading-normal md:leading-snug">Cookie Policy</h1>
                <p className="md:text-xl text-xl">At <span className='font-bold'>Choplife</span>, we use cookies and similar tracking technologies to enhance your experience, analyze site usage, and personalize content. This Cookie Policy explains with cookies are, how we use them, and how you can manage your preferences.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">1. What Are Cookies?</p>
                <p className='md:text-lg text-sm'>Cookies are small text files that are stored on your device (computer, smartphone, or tablet) when you visit website. They are used to store and track information about your actions and preferences, enabling the website to function properly and deliver a personalized experience.</p>
                <p className='md:text-lg text-sm'>There are several types of cookies:</p>
                <div className="flex flex-col gap-1">
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'>Session Cookies: <span className="font-light">Temporary cookies that empire once you close your browser. These are use to track your activity during a single session.</span></p>
                    </div>
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'>Persistent Cookies: <span className="font-light">These cookies remain on your device until they expire or are delted, allowing the website to remember your preferences sessions.</span></p>
                    </div>
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'>First-party Cookies: <span className="font-light">Cookies set by the website you are visiting.</span></p>
                    </div>
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'>Third-party Cookies: <span className="font-light">Cookies set by a domain other than the website you are visiting, often used for advertising and analytics purposes.</span></p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">2. How Pepper Uses Cookies</p>
                <p className='md:text-lg text-sm'>We use the personal information we collect for the following purposes:</p>
                <div className="flex flex-col gap-1">
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'>Essential Cookies: <span className="font-light">These cookies are necessary for the website to function properly. they allow you to navigate the site and use its features, such as accessing secure areas and completing transactions.</span></p>
                    </div>
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'>Performance and Analytics Cookies: <span className="font-light">These cookies help us understand how visitors interact with our website by collecting information on site traffic, page views, and other key metrics. This data is used to improve the website's performance and usability.</span></p>
                    </div>
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'>Functionality Cookies: <span className="font-light">These cookies allow the website to remember your preferences and provide enhanced, personalized features. For example, they may remember your login details or language settings.</span></p>
                    </div>
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'>Targeting and Advertising Cookies: <span className="font-light">These cookies are used to deliver relevant advertisements based on your browsing habits and to measure the effectiveness of our marketing campaigns. They may track your visit across different websites.</span></p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">3. Third-Party Cookies</p>
                <p className='md:text-lg text-sm'>We may allow third-party service provides, such as Google Analytics or social media platforms, to place cookies on your device to track usage, improve site functionality,and deliver targeted ads. These thuird parties may have access to certain information about your browsing habits but will not be able to identify your personally from this data.</p>
                <p className='md:text-lg text-sm'>We recommend reviewing the privacy policies of these third parties to unerstand how they handle your data.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">4. Your Cookie Choices</p>
                <p className='md:text-lg text-sm'>You have the right to accept or reject cookies. When you visit our website for the first time. you will be asked to consent to the use of cookies through a cookie banner. You can also manage or disable cookies by adjusting your browser settings.</p>
                <p className='md:text-lg text-sm'>Here's how you can control cookies in popular browsers:</p>
                <div className="flex flex-col gap-1">
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'>Google Chrome: <span className="font-light">Go to <span className="italic">Settings &gt; Privacy and Security &gt; Cookies and other site data</span></span></p>
                    </div>
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'>Mozilla Firefox: <span className="font-light">Go to <span className="italic">Options &gt; Privacy and Security &gt; Cookies and site data</span></span></p>
                    </div>
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'>Microsoft Edge: <span className="font-light">Go to <span className="italic">Settings &gt; Site Permissions &gt; Cookies and other site data</span></span></p>
                    </div>
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'>Google Chrome: <span className="font-light">Go to <span className="italic">Preferences &gt; Privacy &gt; Cookies and website data</span></span></p>
                    </div>
                </div>
                <p className='md:text-lg text-sm'>Please note that disabling certain cookies may affect the functionality of our website and limit your ability to use some of its features.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">5. Managing Cookies on Pepper</p>
                <p className='md:text-lg text-sm'>You can manage your cookie preferences at any time by clicking on the "Cookie Settings" link in the footer of our website. From there, you can opt out of non-essential cookies, such as performance and marketing cookies.</p>
                <p className='md:text-lg text-sm'>If you do not want to receive cookies, you can also modify your browser settings to notify you when cookies are being used or to block cookies altogether. However,  please be aware that some parts of our website may not function properly if you block essential cookies.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">6. Changes to This Cookies Policy</p>
                <p className='md:text-lg text-sm'>We may update this Cookie Policy from time to time to reflect changes in our practices, legal requirements, or the services we offer. We encourage you to review this page periodically to stay informed about how we used cookies.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">7. Contact Us</p>
                <p className='md:text-lg text-sm'>If you have any questions or concerns about this Privacy Policy, please contact us at:Choplife</p>
                <p className='md:text-lg text-sm'>46, Oroigwe Road <br /> Obio Akpor, Rivers, 500102 <br /> Nigeria</p>
            </div>
            <p className="text-gray-400">Contact Us</p>
        </div>
    </div>
  )
}

export default page
