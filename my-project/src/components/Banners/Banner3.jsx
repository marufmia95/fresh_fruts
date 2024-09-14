import React from 'react';
import BannerPng from "../../assets/banner-bg.jpg";
import { motion } from 'framer-motion';
import { FadeUp, FadeRight } from '../utility/animation';

const bgStyle = {
    backgroundImage: `url(${BannerPng})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};

// Banner Component - Fade Up Animation on the initial render
const Banner3 = () => {
    return (
        <section className=''>
            <div
                style={bgStyle}
                className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 w-2/3 rounded-3xl"
            >
                {/* blank div */}
                <div></div>



                {/* Banner Image */}
                {/* <div className='flex justify-center items-center'>
                    <motion.img
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                        src={BannerPng} alt="Banner"
                        className='w-[300px] md:max-w-[400px] h-full object-cover drop-shadow'
                    />
                </div> */}

                {/* Banner Info */}
                <div className='flex flex-col justify-center'>
                    <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                        <motion.h1
                            variants={FadeUp(0.5)}
                            initial='hidden'
                            animate='visible'
                            viewport={{ once: true }}
                            className='text-3xl lg-text-6xl font-bold uppercase'
                        >
                            Brand Info
                        </motion.h1>
                        <motion.p
                            variants={FadeUp(0.7)}
                            initial='hidden'
                            animate='visible'
                            viewport={{ once: true }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, pariatur corporis ullam iure, voluptatibus voluptatem,
                            atque fuga consequatur placeat voluptates incidunt delectus ipsam. Voluptates similique perspiciatis aliquam sint temporibus!
                        </motion.p>
                        {/* <motion.p
                            variants={FadeUp(0.9)}
                            initial='hidden'
                            animate='visible'
                            viewport={{ once: true }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tenetur earum in ipsum dolorem odio sunt iste officiis,
                        </motion.p> */}
                        {/* Button Section */}
                        <motion.div
                            variants={FadeRight(0.9)}
                            initial='hidden'
                            animate='visible'
                        >
                            <button className='primary-btn'> Learn More</button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner3;
