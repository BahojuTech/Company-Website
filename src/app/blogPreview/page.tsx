import React, { ReactNode } from 'react';

type Section = {
    head?: ReactNode;
    body?: ReactNode;
    list?: ReactNode[];
};

const sections: Section[] = [
    { body: (<p className='text-xl'>In today's fast-paced digital world, traditional marketing methods alone no longer suffice. Businesses must adapt to ever-evolving technologies and customer behaviors to remain competitive. Enter <b>digital marketing</b> - a dynamic, data-driven approach to connecting brands with their audiences across digital platforms.</p>) },
    { head: (<h2 className='text-xl font-bold'>What is Digital Marketing?</h2>), body: (<p className='text-xl mt-2'>In today's fast-paced digital world, traditional marketing methods alone no longer suffice. Businesses must adapt to ever-evolving technologies and customer behaviors to remain competitive. Enter <b>digital marketing</b> - a dynamic, data-driven approach to connecting brands with their audiences across digital platforms.</p>) },
    {
        head: (<h2 className='text-xl font-bold'>What is Digital Marketing Essential?</h2>),
        list: [
            (<li className='text-xl mt-2 list-none' key={1}><b>1. Global Reach:</b> Digital marketing breaks geographical barriers, allowing businesses to reach audiences worldwide.</li>),
            (<li className='text-xl mt-2 list-none' key={2}><b>2. Cost- Effectiveness: </b>Compared to traditional marketing, digital strategies often deliver better results at a lower cost.</li>),
            (<li className='text-xl mt-2 list-none' key={3}><b>3. Social Media Marketing:</b> Promotes brand awareness and engagement on platforms like Instagram, Facebook, and LinkedIn.</li>),
            (<li className='text-xl mt-2 list-none' key={4}><b>4. Email Marketing:</b> Nurtures relationships with personalized communication and targeted campaigns.</li>),
            (<li className='text-xl mt-2 list-none' key={5}><b>5. Pay-per-Click Advertising (PPC):</b> Generates immediate traffic with cost-effective paid campaigns on Google, Bing, and social Platforms.</li>)
        ]
    },
    {
        head: (<h2 className='text-xl font-bold'>Core Components of  Digital Marketing</h2>),
        list: [
            (<li className='text-xl mt-2 list-none' key={1}><b>1. Search Engine Optimization (SEO):</b> Boosts your website's visibility on search engines, driving organic traffic.</li>),
            (<li className='text-xl mt-2 list-none' key={2}><b>2. Content Marketing:</b> Engages audiences with valuable, relevant content, building trust and loyalty.</li>),
            (<li className='text-xl mt-2 list-none' key={3}><b>3. Social Media Marketing:</b> Promotes brand awareness and engagement on platforms like Instagram, Facebook, and LinkedIn.</li>),
            (<li className='text-xl mt-2 list-none' key={4}><b>4. Email Marketing:</b> Nurtures relationships with personalized communication and targeted campaigns.</li>),
            (<li className='text-xl mt-2 list-none' key={5}><b>5. Pay-per-Click Advertising (PPC):</b> Generates immediate traffic with cost-effective paid campaigns on Google, Bing, and social Platforms.</li>)
        ]
    },
    {
        head: (<h2 className='text-xl font-bold'>Trends Shaping the Future of Digital Marketing</h2>),
        list: [
            (<li className='text-xl mt-2 list-none' key={1}><b>1. Al and Automation:</b> From chatbots to predictive analytics, Al streamlines marketing processes and enhances customer experiences</li>),
            (<li className='text-xl mt-2 list-none' key={2}><b>2. Voice Search Optimization:</b> With the rise of smart assistants, optimizing for voice search is more critical than ever</li>),
            (<li className='text-xl mt-2 list-none' key={3}><b>3. Video Content:</b> Short-form videos and live streams dominate platforms, engaging audiences effectively.</li>),
            (<li className='text-xl mt-2 list-none' key={4}><b>4. Personalization:</b> Tailored content and recommendations improve customer satisfaction and loyalty..</li>)
        ]
    },
    { head: (<h2 className='text-xl font-bold'>Conclusion</h2>), body: (<p className='text-xl'>Digital marketing is no longer optional, it's an essential part of modern business success. Whether you're a small startup or an established enterprise, leveraging digital marketing strategies can help you build a stronger connection with your audience, drive measurable growth, and stay ahead of the competion<br /><br />Are you ready to take your business to the next level? At <b>BAHOJU</b>, we specialize in crafting innovative digital marketing solutions tailored to your unique goals. Let's grow together!</p>) }
];

const page = () => {
    return (
        <>
            <main className='w-full bg-gray-200'>
                <section className='lg:px-20 md:px-10 px-5 md:pb-12 pt-16 w-full max-w-[95rem] mx-auto'>
                    <img src="/blimg.jpg" alt="blog image" className='w-full rounded-xl' />
                </section>
                {
                    sections.map((section, index) => (
                        <section key={index} className='lg:px-20 md:px-10 px-5 py-7 border-b-2 border-black w-full max-w-[95rem] mx-auto'>
                            {section?.head}
                            {section?.body}
                            {section?.list?.map((li) => li)}
                        </section>
                    ))
                }
            </main>
        </>
    )
}

export default page