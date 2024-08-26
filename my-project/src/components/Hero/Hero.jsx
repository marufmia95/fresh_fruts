import React from 'react';

const Hero = () => {
    return (
        <section>
            <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px]'>
                {/* Brand Info */}
                <div className='flex flex-col justify-center py-14 md:py-0 relative z-10'>
                    <div className='text-center md:text-left space-y-6 lg:max-w-[400px]'>
                        <h1 className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia'>
                             Helthy
                        <br />
                            Fresh <span className='text-secondary'>Fruits!</span>
                        </h1>
                        <p className='text-2xl tracking-wide'>Order Now For Fresh Health Life</p>
                        <p className='text-gray-400'>
                            Healthy and yummy food for fresh morning breakfast Eat Daily for
                            good health and mind Order now and get 20% off on your first order
                        </p>
                        {/*     Button section */}
                        <div>
                            <button className='primary-btn'>Order Noew</button>
                        </div>
                    </div>
                </div>
                {/* Hero Images */}
            </div>
        </section>
    );
};

export default Hero;