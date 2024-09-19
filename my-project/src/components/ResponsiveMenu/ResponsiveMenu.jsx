import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({open}) => {
    return (
        <AnimatePresence mode='wait'>
            {
                open &&(
                 <motion.div
                 initial={{ opacity: 0, y: -100}}
                 animate={{ opacity: 1, y: 0}}
                 exit={{opacity: 0, y: -100}}
                 transition={{ duration: 0.3}}
                 className='absolute top-10 right-0 w-[40%] h-screen z-20'>
                     <div className='text-xl font-semibold uppercase bg-[#88D66C] text-white py-10 m-8 rounded-tl-[150px] rounded-br-[130px] '>
                         <ul className='flex flex-col items-center gap-8'>
                            <a href=""><li>Home</li></a> 
                            <a href=""><li>About</li></a>
                            <a href=""><li>Services</li></a> 
                            <a className='mb-4' href=""><li>Contact</li></a> 
                         </ul>
                     </div>
                 </motion.div>
                )
            }
        </AnimatePresence>
    );
};
export default ResponsiveMenu;