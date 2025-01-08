"use client";

import axios from "axios";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Contact = () => {
  const t = useTranslations("Contact");

  const [formIsLoading, setFormIsLoading] = useState<boolean>(false);

  function onSubmit(e) {
    setFormIsLoading(true);

    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    axios
      .post("/api/contact", data)
      .then(({}) => {
        alert(t("messageSent"));
        e.target.reset();
      })
      .catch((error) => {
        alert(t("messageDontSent"));
      })
      .finally(() => {
        setFormIsLoading(false);
      });
  }

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 ">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                {t("contactUs")}
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                {t("contactUsDesc")}
              </p>
              <form onSubmit={onSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {t("yourName")}
                      </label>
                      <input
                        type="text"
                        placeholder={t("enterYourName") as string}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        name="fullname"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {t("yourEmail")}
                      </label>
                      <input
                        type="text"
                        placeholder={t("enterYourEmail") as string}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        name="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {t("message")}
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder={t("enterYourMessage") as string}
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        required
                        maxLength={500}
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      disabled={formIsLoading}
                      className="flex items-center gap-3 rounded-lg bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      {formIsLoading && (
                        <AiOutlineLoading3Quarters
                          className="animate-spin"
                          size={20}
                        />
                      )}
                      {t("sendMessage")}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
