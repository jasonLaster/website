import fetch from "node-fetch";

export async function sendEmail({ name, email }) {
  console.log(`sendEamil`, { name, email });
  return fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email }],
          subject: "Demo success :)",
        },
      ],
      from: {
        email: "help@replay.io",
        name: "Help",
      },
      content: [
        {
          type: "text/html",
          value: `Congratulations <b>${name}</b>, you just sent an email with sendGrid`,
        },
      ],
    }),
  });
}
