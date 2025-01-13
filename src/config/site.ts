export const siteConfig = {
  uz: {
    title: "Rakat sistems",
    description:
      "Bizning xizmatlarimiz haqida ko'proq ma'lumot olish uchun biz bilan bog'laning. Har qanday savol yoki yordam uchun bizga murojaat qilishingiz mumkin.",
    url: "https://rakatsolutions.uz",
    contact: {
      phone: {
        label: "+998 99 999 99 99",
        value: "+998999999999",
        url: "tel:+998999999999",
      },
      gmail: {
        label: "Email",
        value: "qmssoftlab@gmail.com",
        url: "mailto:qmssoftlab@gmail.com",
      },
    },
  },
  ru: {
    title: "Ракат системс",
    description:
      "Чтобы узнать больше о наших услугах, свяжитесь с нами. Вы можете обратиться к нам по любым вопросам или за помощью.",
    url: "https://rakatsolutions.uz",
    contact: {
      phone: {
        label: "+998 99 999 99 99",
        value: "+998999999999",
        url: "tel:+998999999999",
      },
      gmail: {
        label: "Электронная почта",
        value: "qmssoftlab@gmail.com",
        url: "mailto:qmssoftlab@gmail.com",
      },
    },
  },
  en: {
    title: "Rakat Systems",
    description:
      "To learn more about our services, please contact us. You can reach out to us for any questions or assistance.",
    url: "https://rakatsolutions.uz",
    contact: {
      phone: {
        label: "+998 99 999 99 99",
        value: "+998999999999",
        url: "tel:+998999999999",
      },
      gmail: {
        label: "Email",
        value: "qmssoftlab@gmail.com",
        url: "mailto:qmssoftlab@gmail.com",
      },
    },
  },
};

export const getSeoConfig = (locale = "uz") => {
  const config = siteConfig[locale] || siteConfig["uz"];
  return {
    title: config.title,
    description: config.description,
    url: config.url,
    contact: config.contact,
  };
};
