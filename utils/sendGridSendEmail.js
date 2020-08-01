import fetch from "node-fetch";

const sendGridSendEmail = async (name, email, message) => {
  await fetch(process.env.SENDGRID_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: process.env.PERSONAL_EMAIL,
            },
          ],
          subject: "Email from personal website",
        },
      ],
      from: {
        email: process.env.PERSONAL_EMAIL,
        name: "Personal website",
      },
      content: [
        {
          type: "text/html",
          value: `<b>${email} (${name})</b> sent this message <br/> ${message}`,
        },
      ],
    }),
  });
};

export { sendGridSendEmail };
