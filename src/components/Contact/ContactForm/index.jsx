import { useRef } from "react";
import Button from "../../Button";
import { BsAt, BsFillChatDotsFill, BsFillPersonFill } from "react-icons/bs";
import { toast } from "react-toastify";

const ContactForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    const clearInputs = () => {
      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
    };

    await fetch(
      "https://portfolio-ac4c1-default-rtdb.firebaseio.com/messages.json",
      {
        method: "POST",
        body: JSON.stringify({
          name: nameRef.current.value,
          email: emailRef.current.value,
          message: messageRef.current.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(toast.success("Data berhasil dikirim.").then(clearInputs()));
  };

  return (
    <div data-aos="fade-left">
      <form
        className="flex flex-col gap-5 w-full text-black"
        onSubmit={submitHandler}
      >
        <label htmlFor="name" className="relative">
          <BsFillPersonFill
            size={30}
            className="pointer-events-none absolute top-[0.6rem] left-2 bottom-2 text-[#333]"
          />
          <input
            id="name"
            type="text"
            placeholder="Nama"
            className="p-3 rounded-md border-[#3bc9db] border w-full ps-12"
            required
            ref={nameRef}
          />
        </label>
        <label htmlFor="email" className="relative">
          <BsAt
            size={30}
            className="pointer-events-none absolute top-[0.6rem] left-2 bottom-2 text-[#333]"
          />
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="p-3 rounded-md border-[#3bc9db] border w-full ps-12"
            required
            ref={emailRef}
          />
        </label>
        <label htmlFor="email" className="relative">
          <BsFillChatDotsFill
            size={25}
            className="pointer-events-none absolute top-[0.6rem] left-[0.6rem] bottom-2 text-[#333]"
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Pesan"
            className="p-3 rounded-md border-[#3bc9db] border w-full ps-12 resize-none"
            required
            ref={messageRef}
          ></textarea>
        </label>
        <div className="flex justify-end">
          <Button title="Kirim pesan" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
