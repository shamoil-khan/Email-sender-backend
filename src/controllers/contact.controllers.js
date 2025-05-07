const nodemailer = require("nodemailer");

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail", // or any other email service provider
  auth: {
    user: "shamoilkhan210@gmail.com",
    pass: "jctg xcey fsdm qrfy",
  },
});

// Email sending function
const sendEmail = (userEmail, to, subject, html) => {
  const mailOptions = {
    from: userEmail,
    to,
    subject,
    html,
  };

  return transporter.sendMail(mailOptions);
};

// Contact form handler
const contact = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await sendEmail(
      email,
      "shamoilkhan210@gmail.com",
      `Message from ${name}`,
      `Email: ${email}\nMessage: ${message}`
    ).then(async () => {
      await sendEmail(
        "shamoilkhan210@gmail.com",
        email,
        `Message from Shamoil Khan`,
        `<table style="width: 100%; text-align: center; padding: 20px; font-family: Arial, sans-serif;">
  <!-- Icon -->
  <tr>
    <td>
      <img src="https://lh3.googleusercontent.com/a/ACg8ocK-_keR3BQNottMs2w9Cuk-uuVAWHddX-UP8QXYN7kft3VZfvXu=s288-c-no" alt="Company Logo" style="width: 100px; height: auto; margin-bottom: 20px;" />
    </td>
  </tr>

  <!-- Personalized Greeting with User Name -->
  <tr>
    <td>
      <h1 style="color: #333;">Hi, ${name}!</h1> <!-- Placeholder for user name -->
      <p style="color: #555; font-size: 16px;">Thank you for reaching out to us.  We have received your message and will review it shortly. You will hear back from us soon.</p>
    </td>
  </tr>

  <!-- Button -->
  <tr>
    <td>
      <a href="https://shamoil-khan.vercel.app/" style="display: inline-block; padding: 10px 20px; background-color: #000; color: #fff; text-decoration: none; border-radius: 5px; margin-top: 20px;">Explore More</a>
    </td>
  </tr>

  <!-- Closing Message -->
  <tr>
    <td>
      <p style="color: #555; font-size: 14px; margin-top: 30px;">Best regards,</p>
      <p style="color: #333; font-size: 16px; font-weight: bold;">Shamoil Khan</p>
    </td>
  </tr>
</table>
`
      );
    });

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to send email" + error.message,
    });
  }
};

module.exports = {
  contact,
};
