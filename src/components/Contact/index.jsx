import ContactForm from "./ContactForm";
import contact from "../../assets/contact.png";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center pt-20 pb-20"
    >
      <h1 className="text-5xl font-bold text-[#3bc9db]" data-aos="fade-up">
        Contact Me
      </h1>
      <div className="mt-10 w-full">
        <div className="bg-[#222] rounded-lg max-w-[1080px] m-auto p-5 gap-0 md:gap-10 lg:p-10 grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          <div
            className="h-full justify-center items-center hidden md:flex"
            data-aos="fade-right"
          >
            <img src={contact} alt="" className="transform -scale-x-100" />
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
