import React from 'react';
import images from '../../../constant/images';

const Contact = () => {
    return (
        <div>
            <div
                className="pt-30 pb-20 flex-col w-full height-[200px] min-height-[200px] text-center"
                style={{ backgroundImage: `url(${images.banner})`, backgroundSize: 'cover', backgroundPosition: 'center 0', backgroundRepeat: 'no-repeat', }}>
                <h2 className="text-5xl text-white font-bold">Contact</h2>
            </div>
        </div>
    );
};

export default Contact;