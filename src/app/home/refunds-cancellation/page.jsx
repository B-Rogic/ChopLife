import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='w-full relative'>
        <div className="md:p-20 md:py-32 pt-32 px-5 relative backdrop-blur-xl flex flex-col md:gap-10 gap-5">
            <div className="md:w-full mb-5">
                <h1 className="text-2xl md:text-8xl font-bold leading-normal md:leading-snug">Refunds & Cancellation</h1>
                <p className="md:text-xl text-xl">At <span className='font-bold'>Choplife</span>, we strive to ensure that every meal we serve meets your expectations. However, we understand that sometimes things don't go as planned. This Refunds & Cancellation Policy outlines the process for cancelling orders, requesting refunds, and how we handle such requests.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">1. Order Cancellations</p>
                <p className="font-bold md:text-xl text-lg">1.1 Cancelling an Order</p>
                <p className='md:text-lg text-sm'>You may cancel your order, but it must be done within a limited time frame. To cancel:</p>
                <div className="flex flex-col gap-1">
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'>For Delivery Orders: <span className="font-light">Cancellations must be made before the restaurant has started preparing your order. Once preparation begins, cancellation is no longer possible.</span></p>
                    </div>
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'>For Pickup Orders: <span className="font-light">You may cancel your order anytime before you arrive for pickup, provided that preparation has not yet started.</span></p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">1.2 How to Cancel</p>
                <p className='md:text-lg text-sm'>To cancel your order, please contact us immediately via <span className='font-bold'>info@chop-life.com</span>, website or call the restaurant directly. If your order is eligible fo rcancellation, we will process it, and you will not be charged.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">1.3 Cancellation Fees</p>
                <p className='md:text-lg text-sm'>In cases where cancellation is possible, no cancellation fees will apply. However, if the preparation of your order has begun, we reserve the right to refuse cancellation, and a full charge may apply.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">2. Refunds</p>
                <p className="font-bold md:text-xl text-lg">2.1 When Refunds are Issued</p>
                <p className='md:text-lg text-sm'>We issue refunds in the following circumstances:</p>
                <div className="flex flex-col gap-1">
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'>Order Issues: <span className="font-light">If you receive an incorrect order, items are missing, or there are significant issues with your food, please contact us within <span className="font-bold">24 hours</span> of delivery or pickup to report the issue</span></p>
                    </div>
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'>Damaged or Unsatisfactory Orders: <span className="font-light">If your order arrives damaged, cold, or otherwise unsatisfactory, we will investigate and may issue a partial or full refund.</span></p>
                    </div>
                </div>
                <p className='md:text-lg text-sm'>Refunds are evaluated on a case-by-case basis and are issued at our discretion.</p>
                <p className="font-bold md:text-xl text-lg">2.2 How to Request a Refund</p>
                <p className='md:text-lg text-sm'>To request a refund, contact us via <span className="font-bold">info@chop-life.com</span>, our customer service phone number, or through the contact form on our website. Be sure to include the following details.</p>
                <div className="flex flex-col gap-1">
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'><span className="font-light">Your name</span></p>
                    </div>
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'><span className="font-light">Order number</span></p>
                    </div>
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'><span className="font-light">Description of the issue (photos or helpful for damaged orders)</span></p>
                    </div>
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'><span className="font-light">Preferred resolution (replacement or refund)</span></p>
                    </div>
                </div>
                <p className="font-bold md:text-xl text-lg">2.3 Refund Processing</p>
                <p className='md:text-lg text-sm'>Once a refund is approved, it will be processed back to the original payment method. Refunds may take up to <span className="font-bold">5-10 business days</span> to appear in your account, depending on your payment provider.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">3. Non-Refundable Items</p>
                <p className='md:text-lg text-sm'>In certain cases, refunds may not be available, including but not limited to:</p>
                <div className="flex flex-col gap-1">
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'><span className="font-light">Orders that have been fully prepared or delivered as requested.</span></p>
                    </div>
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'><span className="font-light">Customer dissatisfaction due to personal taste preferences.</span></p>
                    </div>
                    <div className="flex gap-3">
                        <div className="rounded-full flex-shrink-0 w-[6px] mt-3 h-[6px] bg-[#1a1a1a]"></div>
                        <p className='md:text-lg text-sm font-bold'><span className="font-light">Orders that were cancelled too late, after preparation or delivery.</span></p>
                        <p className='md:text-lg text-sm'>We encourage customers to carefully review their orders and orders and contact us immediately with any issues.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">4. Delivery and Pickup Issues</p>
                <p className="font-bold md:text-xl text-lg">4.1 Delivery Delays</p>
                <p className='md:text-lg text-sm'>If your delivery is delayed beyong the estimated delivery time due to unforeseen circumstances (e.g., weather, traffic, or high demand), please allow additional time. In extreme cases, you may be eligible for a refund or credit if the order arrives significantly late and unsatisfactory.</p>
                <p className="font-bold md:text-xl text-lg">4.2 Incorect Delivery</p>
                <p className='md:text-lg text-sm'>If you receive an incorrect order, please notify us immediately. We will arrange for a replacement or offer a refund for the incorrect items.</p>
                <p className="font-bold md:text-xl text-lg">4.3 Missed Pickup</p>
                <p className='md:text-lg text-sm'>If you miss your pickup window and your order is not collected within the specified time frame. We reserve the right to dispose of the order, and no refund may be issued.</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">5. Changes to Orders</p>
                <p className="font-bold md:text-xl text-lg">5.1 Modifying Orders</p>
                <p className='md:text-lg text-sm'>Once an order is placed, we are unable to modify items, delivery details, or pickup time. If you need to make changes, you will need to cancel your order (if still possible)</p>
            </div>
            <div className="flex flex-col gap-5">
                <p className="font-bold md:text-xl text-lg">6. Contact Us</p>
                <p className="font-light">If you have any questions about our use of Refund and Cancellations Policy or how to manage your orders, please contact us at:<span className="font-bold">info@chop-life.com</span></p>
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
