import React from 'react';
import BannerPng from "../../assets/fruits-splash.png"
import { motion } from 'framer-motion';
import { FadeLeft, FadeRight, FadeUp } from '../utility/animation';

// Banner Component  - Fade Up Animation on the initial render.  'FadeUp' is a custom animation defined in 'animation.js' file.  'motion' library is used for creating smooth animations.  'initial' and 'animate' are variants for the animation.  'exit' is the variant for the animation when the component is removed from the DOM.  'transition' is used for the animation duration.  'keyframes' is used for creating custom animations.
const Banner = () => {
    return (
        <section className='bg-secondary/10'>
            <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
                {/* banner Image */}
                <div className='flex justify-center items-center'>
                <motion.img
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{ type: "spring", stiffness: 100, delay: 0.2}}
                     src={BannerPng} alt=""  className='w-[300px] md:max-w-[400px] h-full object-cover drop-shadow'/>
                </div>

                {/* banner Info */}
                <div className='flex flex-col justify-center'>
                    <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
                        <motion.h1
                        variants={FadeUp(0.5)}
                        initial='hidden'
                        animate='visible'
                        viewport={{once: true}}
                        className='text-3xl lg-text-6xl font-bold uppercase'>Brand Info</motion.h1>
                        <motion.p
                        variants={FadeUp(0.7)}
                        initial='hidden'
                        animate='visible'
                        viewport={{once: true}}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, pariatur corporis ullam iure, voluptatibus voluptatem,
                             atque fuga consequatur placeat voluptates incidunt delectus ipsam. Voluptates similique perspiciatis aliquam sint temporibus!
                        </motion.p>
                        <motion.p
                        variants={FadeUp(0.9)}
                        initial='hidden'
                        animate='visible'
                        viewport={{once: true}}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tenetur earum in ipsum dolorem odio sunt iste officiis, 
                        </motion.p>
                         {/*     Button section */}
                         <motion.div
                        variants={FadeRight(1.1)}
                        initial='hidden'
                        animate='visible'
                        >
                            <button className='primary-btn'>  Learn More</button>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};
export default Banner;
