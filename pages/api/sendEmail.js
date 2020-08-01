import { sendGridSendEmail } from "../../utils/sendGridSendEmail";

export default async (req, res) => {
  const { name, email, message } = req.body;
  await sendGridSendEmail(name, email, message)
  res.status(200).json({ text: "OK" })
};
