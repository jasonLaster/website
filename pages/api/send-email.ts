import { NextApiRequest, NextApiResponse } from "next";

import { sendEmail } from "../../utils/sendEmail";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "POST") {
      const { name, email } = JSON.parse(req.body);
      const hmm = await sendEmail({ name, email });
      console.log(hmm);
      return res.status(200).end();
    }
    return res.status(404).json({
      error: {
        code: "not_found",
        messgae:
          "The requested endpoint was not found or doesn't support this method.",
      },
    });
  } catch (e) {
    console.log(`Email failed`, e);
  }
};
