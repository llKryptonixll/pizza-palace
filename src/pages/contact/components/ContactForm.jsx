import { React, useState } from 'react'

const ContactForm = () => {

    const informationHeaderStyles = "text-xl font-bold";
    const inputContainerStyles = "grid gap-1";
    const inputStyles = "h-[50px] border-soft-grey border-[1px] rounded-md pl-[20px] focus:outline-accent";
    const labelStyles = "font-bold text-gray-600";
    const submitButtonStyles = "bg-accent text-softWhite w-[160px] h-[60px] rounded-md font-bold text-lg border-2 border-accent hover:bg-white hover:text-accent transition-[250ms]";
    const errorStyles = "text-[#DA2036]"

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nameEmptyError, setNameEmptyError] = useState(false);
    const [nameWrongFormatError, setNameWrongFormatError] = useState(false);
    const [emailEmptyError, setEmailEmptyError] = useState(false);
    const [emailWrongFormatError, setEmailWrongFormatError] = useState(false);
    const [messageEmptyError, setMessageEmptyError] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        nameInputError();
        emailInputError();
        messageInputError();

        if(name === "" || email === "" || name.match(/[0-9]+/) || !email.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)){

        }
        else{
            alert("please note down that this is just a template");
        }
    }

    function nameInputError() {
        name === "" ? setNameEmptyError(true) : setNameEmptyError(false);
        name.match(/[0-9]+/) ? setNameWrongFormatError(true) : setNameWrongFormatError(false);
    }

    function emailInputError() {
        email === "" ? setEmailEmptyError(true) : setEmailEmptyError(false);
        !email.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/) ? setEmailWrongFormatError(true) : setEmailWrongFormatError(false);
    }

    function messageInputError() {
        message === "" ? setMessageEmptyError(true) : setMessageEmptyError(false);
    }

    return (
        <div className='grid items-center text-softDark min-h-[850px] lg:pl-[70px] pl-[20px] lg:pr-[70px] pr-[20px]'>
            <div className='grid gap-5 lg:pr-[70px] pr-[20px] sm:pt-0 pt-12'>
                <p className='font-bold text-4xl'>Contact Us</p>
                <div className='grid sm:grid-cols-2 gap-5'>
                    <div>
                        <p className={informationHeaderStyles}>Lunch Time</p>
                        <p>Monday to Sunday</p>
                        <p>10.30am - 3:00pm</p>
                    </div>
                    <div>
                        <p className={informationHeaderStyles}>Dinner Time</p>
                        <p>Monday to Sunday</p>
                        <p>5.30pm - 11:00pm</p>
                    </div>
                    <div>
                        <p className={informationHeaderStyles}>Location</p>
                        <p>20095 Hamburg Altstadt</p>
                        <p>Hermannstraße 5</p>
                    </div>
                    <div>
                        <p className={informationHeaderStyles}>Contact</p>
                        <p>Tel: +49(323)541-97-40</p>
                        <p>E-mail: pizza-palace.com</p>
                    </div>
                </div>
            </div>

            <form className='grid gap-8 lg:pr-[70px] pr-[20px] sm:pt-0 pt-12' action="">
                <div className={inputContainerStyles}>
                    <label className={labelStyles} htmlFor="name">Your name*</label>
                    <input onChange={(e) => setName(e.target.value)} className={inputStyles} placeholder='e.g. Lucas Cerri' name='name' type="text" />
                    {nameEmptyError === true && <span className={errorStyles}>This field can not be empty!</span>}
                    {nameWrongFormatError === true && <span className={errorStyles}>This field can not contain numbers!</span>}
                </div>
                <div className={inputContainerStyles}>
                    <label className={labelStyles} htmlFor="email">Your email*</label>
                    <input onChange={(e) => setEmail(e.target.value)} className={inputStyles} placeholder='e.g. yourmail@mail.com' name='email' type="text" />
                    {emailEmptyError === true && <span className={errorStyles}>This field can not be empty!</span>}
                    {emailWrongFormatError === true && <span className={errorStyles}>Please enter an right email!</span>}
                </div>
                <div className={inputContainerStyles}>
                    <label className={labelStyles} htmlFor="message">Your message*</label>
                    <textarea onChange={(e) => setMessage(e.target.value)} className="resize-none border-soft-grey border-[1px] rounded-md pl-[20px] focus:outline-accent" rows={"5"} placeholder='e.g. I want a delicious Pizza.' name="message"></textarea>
                    {messageEmptyError === true && <span className={errorStyles}>This field can not be empty!</span>}
                </div>
                <button onClick={handleSubmit} className={submitButtonStyles} type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default ContactForm