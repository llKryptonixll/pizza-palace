import React from 'react';
import useDomTitleChange from '../../hooks/useDomTitleChange';
import HeadBanner from "../../layout/HeadBanner";
import ContactForm from './components/ContactForm';
import Mapbox from './components/Mapbox';

const Contact = ({ isOpenEffect }) => {

  useDomTitleChange("Contact us")

  return (
    <main className={isOpenEffect}>
      <HeadBanner 
        image={"public/images/pizza-contact-banner.webp"}
        textTop={"Get in"}
        textBottom={"Contact"}
      />

      <section className='grid lg:grid-cols-2'>
        <ContactForm />
        <Mapbox />
      </section>
    </main>
  )
}

export default Contact