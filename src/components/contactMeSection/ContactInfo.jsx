import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="marziayarzada2@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+93 797967831" Image={FiPhone} />
      <SingleInfo text="Marzia, Afghanistan" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
