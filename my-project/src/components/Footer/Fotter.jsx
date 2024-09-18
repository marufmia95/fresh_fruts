import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLeaf, FaTwitter } from 'react-icons/fa6';

const Fotter = () => {
    return (
        <footer className='bg-primary/20 py-6 mt-10'>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1, delay:0.2}}
            className="container flex justify-between items-center">
{/*################Logo Section #################*/}
                <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                    <p className='text-primary'>Fruit</p>
                    <p className='text-secondary'>Store</p>
                    <FaLeaf className='text-green-500' />
                </div>
{/*############# Social icon Section ############*/}
                <div className='text-3xl flex items-center gap-4 mt-6 '>
                   <a className='text-[#1877F2]' href=""><FaFacebook/></a>
                   <a className='text-[#f219f9]' href=""><FaInstagram/></a>
                   <a className='text-black' href="">𝕏</a>
                   <a className='text-green-500' href=""><FaLeaf/></a>
                </div>
            </motion.div>
        </footer>
    );
};
export default Fotter;