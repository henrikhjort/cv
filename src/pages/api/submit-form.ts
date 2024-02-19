import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  status: string;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      const TO_MAIL = process.env.TO_MAIL;
      const FROM_MAIL = process.env.FROM_MAIL;
      const MAIL_PASSWORD = process.env.MAIL_PASSWORD;

      const nodemailer = require('nodemailer');

      const transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        port: 465,
        secure: true,
        auth: {
          user: FROM_MAIL,
          pass: MAIL_PASSWORD,
        },
      });

      const { email, message } = req.body;

      const mailOptions = {
        from: `"NoReply" <${FROM_MAIL}>`,
        to: TO_MAIL,
        subject: 'New contact form submission',
        text: `You've received a new contact form submission.\n\nEmail: ${email}\nMessage: ${message}`,
        html: `
          <p><strong>From:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <p>---</p>
          <p>This is an automated message sent from your website.</p>
        `,
      };

      transporter.sendMail(mailOptions, (error: any, info: any) => {
        if (error) {
          res.status(500).end('rip nodemailer');
        }
      });
      res.status(200).json({ status: 'success', message: 'Email sent' });
    } catch (error) {
      res.status(500).end('rip nodemailer');
    }
    res.status(500).end('yikes');
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
