import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";
import email from '../../../public/images/email-image.png'
const ContactMeRight = () => {
  return (
    <div className="flex-col items-center justify-center gap-12 ">
      <img src={email} alt="Contact Me"  className="max-w-[300px] mb-3"/>
      <ContactInfo/>
      <ContactSocial/>
    </div>
  );
};

export default ContactMeRight;
