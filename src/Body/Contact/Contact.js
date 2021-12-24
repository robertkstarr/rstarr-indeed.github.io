import React from "react";
import Obfuscate from "react-obfuscate";
import "./Contact.css";

export const CONTACT_LABEL = "Contact";
export const EMAIL_ADDRESS = "robert@robertkstarr.com";
export const PHONE_NUMBER = "818-378-4899";
const Contact = () => {
  return (
    <div className={"Contact"}>
      <div className={"email"} data-test={"email"}>
        Email: <Obfuscate email={EMAIL_ADDRESS} />
      </div>
      <div className={"phone"} data-test={"phone"}>
        Phone: <Obfuscate tel={PHONE_NUMBER} />
      </div>
      <div className={"ResponseTimeline"}>
        Please allow at least 24 hours for a response.
      </div>
    </div>
  );
};

export default Contact;
