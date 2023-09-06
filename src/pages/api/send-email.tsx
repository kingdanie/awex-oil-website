import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { name, email, msg } = req.body;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const mailData = {
    to: `${email}`,
    from: 'test@example.com', // Use the email address or domain you verified above
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${msg}
    `,
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  
    try {
      await sgMail.send(mailData);
      res.status(200).end();
    } catch (error) {
      console.error(error);
      res.status(500).end();
      // if (error.response) {
      //   console.error(error.response.body);
      // }
    }

  // try {
  //   await transporter.sendMail(mailData);
  //   res.status(200).end();
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).end();
  // }
}
