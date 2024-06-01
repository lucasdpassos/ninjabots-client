// src/components/WhatsAppButton.jsx
import React from 'react';
import ChatProfile from '../assets/chatProfile.png'

const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/13254130669";

  const bounceAnimation = {
    animation: 'bounce 2.5s infinite',
  };

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="-lg fixed bottom-28 right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition duration-300"
      style={bounceAnimation}
    >
      <img 
        src={ChatProfile}
        alt="WhatsApp" 
        className="w-26 h-26"
      />
       <div className="absolute top-0 right-0 transform -translate-y-1 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
    </a>
  );
}

export default WhatsAppButton;
