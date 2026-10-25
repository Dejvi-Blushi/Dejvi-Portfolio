import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useForm} from "react-hook-form";

import emailjs from "@emailjs/browser";
import {useState} from "react";

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<FormStatus>("idle");

  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting}
  } = useForm<FormInputs>();

  useGSAP(() => {
    gsap.fromTo(
      "#contact",
      {opacity: 0},
      {
        opacity: 1,
        duration: 1,
        delay: 0.4,
        scrollTrigger: {trigger: "#contact"}
      }
    );
  });

  const onSubmit = async (data: FormInputs) => {
    try {
      const response = await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmitStatus("success");
        return;
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    }
  };

  const getButtonText = () => {
    if (isSubmitting) return "Sending Message...";
    if (submitStatus === "success") return "Message Sent Successfully";
    return "Send Message";
  };

  return (
    <section id="contact" className="section-padding">
      <div className="w-full h-full md:px-10">
        <h1 className="font-semibold md:text-5xl text-3xl text-center mb-6 md:mb-10">
          Get in Touch with Me
        </h1>

        <div>
          <div className="max-w-4xl mx-auto card-border rounded-xl px-4 py-6 md:p-10">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-7"
              noValidate
            >
              <div className="mb-6">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  autoComplete="name"
                  disabled={isSubmitting || submitStatus === "success"}
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  {...register("name", {
                    required: "Name is required.",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters."
                    }
                  })}
                />

                {errors.name && (
                  <p id="name-error" className="mt-2 text-red-500" role="alert">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Your email address"
                  autoComplete="email"
                  disabled={isSubmitting || submitStatus === "success"}
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  {...register("email", {
                    required: "Email is required.",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email address."
                    }
                  })}
                />

                {errors.email && (
                  <p
                    id="email-error"
                    className="mt-2 text-red-500"
                    role="alert"
                  >
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Your message"
                  rows={5}
                  disabled={isSubmitting || submitStatus === "success"}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  {...register("message", {
                    required: "Message is required.",
                    minLength: {
                      value: 2,
                      message: "Message must be at least 2 characters."
                    }
                  })}
                />

                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-2 text-red-500"
                    role="alert"
                  >
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitStatus === "success"}
                className="cta-button group"
              >
                <span aria-live="polite">{getButtonText()}</span>

                <div
                  className={`arrow-wrapper ${isSubmitting || submitStatus === "success" ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                  aria-hidden="true"
                >
                  <img src="/images/arrow-down.svg" alt="" />
                </div>
              </button>

              <div role="alert" aria-live="assertive" className="contents">
                {submitStatus === "error" && (
                  <p className="text-red-500">
                    Something went wrong while trying to send your message.
                    Please try again.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
