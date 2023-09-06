import React from 'react';
import WhatsAppButton from 'react-whatsapp-button';

const WhatsAppChatButton = () => {
  return (
    <WhatsAppButton
      phoneNumber="YOUR_PHONE_NUMBER_WITH_COUNTRY_CODE"
      message="Hello! I have a question."
    />
  );
};

export default WhatsAppChatButton;
