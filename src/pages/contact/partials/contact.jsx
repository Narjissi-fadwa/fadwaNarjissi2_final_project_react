import React from 'react';
import images from '../../../constant/images';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_adk0htp', 'template_tdm7754', e.target, 'RVLtZ8b5ggP-q_rax')
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
            }, (error) => {
                console.log(error.text);
                alert("Failed to send message.");
            });
    };
    return (
        <div>
            <div
                className="pt-30 pb-20 flex-col w-full height-[200px] min-height-[200px] text-center"
                style={{ backgroundImage: `url(${images.banner})`, backgroundSize: 'cover', backgroundPosition: 'center 0', backgroundRepeat: 'no-repeat', }}>
                <h2 className="text-5xl text-white font-bold">Contact</h2>
            </div>

            <div className="container">
                <div className="flex  flex-row px-8 py-6 gap-8">
                    <div className="col-md-6 p-b-30 w-[50%]">
                        <div className="p-r-20 p-r-0-lg">
                            <div className="contact-map size21">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.6822073234102!2d-83.71685604946924!3d42.30664594636449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883cac2c20114b69%3A0x96fe590afa21efb6!2s2300+Traverwood+Dr%2C+Ann+Arbor%2C+MI+48105!5e0!3m2!1sen!2s!4v1461260551915"
                                    width="100%" height="503" frameBorder="0" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 p-b-30 w-[50%]">
                        <form action="/contact" id="contact_form " onSubmit={sendEmail} >
                            <h4 className="font-bold text-2xl p-b-36 p-t-15">Send us your message</h4>


                            <div className="py-6 flex flex-col gap-6">
                                <input type="text" id="contactFormName" name="contact[name]" placeholder="Name"
                                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                                />

                                <input type="text" id="contactFormEmail" name="contact[email]" placeholder="Email" autoCorrect="off" autoCapitalize="off"
                                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                                />

                                <input type="text" id="contactFormPhone" name="contact[phone]" placeholder="Phone"
                                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                                />

                                <textarea id="contactFormMessage" name="contact[body]" placeholder="Message"
                                    className="w-full border border-gray-300 rounded-md px-4 py-3 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-black text-sm"
                                ></textarea>

                                <button type="submit" className="bg-black text-white px-10 py-3 rounded-full hover:bg-gray-800 transition duration-300">
                                    SEND
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Contact;