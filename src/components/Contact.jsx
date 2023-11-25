import { FaWhatsappSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="fixed bottom-5 right-5 bg-white rounded-lg">
      <a
        href="https://wa.link/dsvzoj"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-full text-5xl text-[#33bc46] md:text-6xl">
          <FaWhatsappSquare />
        </div>
      </a>
    </div>
  );
};

export default Contact;
