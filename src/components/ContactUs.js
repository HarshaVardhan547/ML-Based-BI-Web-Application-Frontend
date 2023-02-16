import React from "react";
function ContactUs() {
  function sendEmail() {
    // let data = {
    //   personalizations: "",
    //   from: {
    //     email: "orders@example.com",
    //     name: "Example Order Confirmation",
    //   },
    //   subject: "Your Example Order Confirmation",
    //   content: [
    //     {
    //       type: "text/html",
    //       value:
    //         "<p>Hello from Twilio SendGrid!</p><p>Sending with the email service trusted by developers and marketers for <strong>time-savings</strong>, <strong>scalability</strong>, and <strong>delivery expertise</strong>.</p><p>%open-track%</p>",
    //     },
    //   ],
    // };
    // axios
    //   .post("https://api.sendgrid.com/v3/mail/send", data, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization:
    //         "Bearer <<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>>",
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // sgMail.setApiKey(
    //   "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"
    // );
    // const msg = {
    //   to: "abhi.capstone1@gmail.com", // Change to your recipient
    //   from: "abhi.capstone1@gmail.com", // Change to your verified sender
    //   subject: "Sending with SendGrid is Fun",
    //   text: "and easy to do anywhere, even with Node.js",
    //   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    // };
    // sgMail
    //   .send(msg)
    //   .then(() => {
    //     console.log("Email sent");
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }
  return (
    <div className="main" id="about">
      <div className="container">
        <div className="contact-box">
          <div className="left"></div>
          <div className="right">
            <h2>Contact Us</h2>
            <input type="text" className="field" placeholder="Your Name" />
            <input type="text" className="field" placeholder="Your Email" />
            <input type="text" className="field" placeholder="Phone" />
            <textarea placeholder="Message" className="field"></textarea>
            <button className="main__btn" onClick={sendEmail}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
