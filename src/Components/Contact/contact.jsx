import { useState } from "react"; 


function Contact(){

    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputNumber, setInputNumber] = useState('');
    const [inputMessage, setInputMessage] = useState('');
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validate = () => {

        if (inputName == '' || inputEmail == '' || inputNumber == '' || inputMessage == '') {
            alert('Something in the form fields is missing.');
        }
        else if (!emailPattern.test(inputEmail)) {
            alert('Please enter a valid email address.');
        }
    
    }


    return (

        <div className="contact-outer">
            <div className="container">
                <h2 className="h2-title">Get In Touch With Us!</h2>

                <div className="contact-inner">

                    <div className="write-to-us">
                        <form className='write-to-us-form'>
                            <h3 className="h3-title">Write Us</h3>


                            <input id='inputName'
                                   type="text" 
                                   placeholder="Name"
                                   className="input-details"
                                   onChange={(e) => setInputName(e.target.value)} />

                            <input id='inputEmail'
                                    type="email"
                                    placeholder="Email"
                                    className="input-details"
                                    onChange={(e) => setInputEmail(e.target.value)} />

                            <input id='inputNumber'
                                   type="number"
                                   placeholder="Contact No."
                                   className="input-details"
                                   onChange={(e) => setInputNumber(e.target.value)} />

                            <textarea id='inputMessage'
                                      placeholder="Your Message (150 words)"
                                      className="input-details input-message"
                                      onChange={(e) => setInputMessage(e.target.value)} />

                            <input onClick={validate}
                                    type='button'
                                    className="input-details input-button"
                                    value='Send' />
                        
                        
                        </form>

                    </div>

                    <div className="our-info">
                        <h3 className="h3-title">Contact Us</h3>

                        <p className="contact-us-details"> <b> Address: </b>  Your Home Address  </p>
                        <p className="contact-us-details"> <b> Phone: </b>  +92 000 000 0000  </p>
                        <p className="contact-us-details"> <b> Email: </b> mywebsite@gmail.com   </p>
                        <p className="contact-us-details"> <b> Website: </b>  www.mywebsite.com  </p>

                    </div>

                </div>

            </div>
        </div>

    )
}

export default Contact