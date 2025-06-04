import React from 'react';
import images from '../../../constant/images';

const About = () => {
    return (
        <div>
            <div
                className="pt-30 pb-20 flex-col w-full height-[200px] min-height-[200px] text-center"
                style={{ backgroundImage: `url(${images.about})`, backgroundSize: 'cover', backgroundPosition: 'center 0', backgroundRepeat: 'no-repeat', }}>
                <h2 className="text-5xl text-white font-bold">About</h2>
            </div>

            <section className="bg-white pt-16 pb-10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row -mx-4">

                        <div className="md:w-1/3 px-4 mb-8 md:mb-0">
                            <div className="overflow-hidden hover:scale-105 transition-transform duration-300 h-[90%]">
                                <img src={images.shopy4} alt="Our story" className="w-full h-[90%]"/>
                            </div>
                        </div>

                        <div className="md:w-2/3 px-4">
                            <h3 className="text-3xl font-semibold pt-4 pb-4">Our story</h3>
                            <p className="mb-6 text-gray-700 ">
                                Phasellus egestas nisi nisi, lobortis ultricies risus semper nec.
                                Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla
                                dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque
                                porta est ac neque bibendum viverra. Vivamus lobortis magna ut
                                interdum laoreet. Donec gravida lorem elit, quis condimentum ex
                                semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet
                                sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque
                                congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis
                                lectus a arcu facilisis, eu sodales lectus sagittis. Etiam
                                pellentesque, magna vel dictum rutrum, neque justo eleifend elit,
                                vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo
                                efficitur, quam velit convallis ipsum, et maximus enim ligula ac
                                ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices
                                orci.
                            </p>

                            <div className="border-l-2 pl-4 ml-2 mb-4 border-gray-400  text-gray-600">
                                <p className="mb-2">
                                    Creativity is just connecting things. When you ask creative
                                    people how they did something, they feel a little guilty because
                                    they didn't really do it, they just saw something. It seemed
                                    obvious to them after a while.
                                </p>
                                <span className="text-sm font-medium">- Steve Job’s</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;