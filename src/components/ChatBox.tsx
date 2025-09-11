import React, { useState } from 'react';

const WhatsappIcon = ({ size = 24, color = 'white' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill={color}
  >
    <path d="M16.001 2.998c-7.179 0-13 5.821-13 13 0 2.287.601 4.528 1.74 6.5l-1.829 6.5 6.68-1.75a12.87 12.87 0 0 0 6.409 1.75c7.179 0 13-5.821 13-13s-5.821-13-13-13zm0 24a10.9 10.9 0 0 1-5.59-1.53l-.399-.24-3.96 1.04 1.05-3.85-.26-.4a10.97 10.97 0 0 1-1.65-5.55c0-6.065 4.935-11 11-11s11 4.935 11 11-4.935 11-11 11zm6.36-7.09c-.35-.18-2.07-1.02-2.39-1.14s-.56-.18-.8.18-.92 1.14-1.13 1.38-.41.27-.76.09a8.79 8.79 0 0 1-2.58-1.59 9.79 9.79 0 0 1-1.82-2.27c-.19-.33 0-.51.15-.69.15-.14.33-.36.5-.54s.22-.3.33-.5.05-.37-.03-.55c-.09-.18-.8-1.91-1.1-2.61s-.58-.6-.8-.61l-.68-.01c-.22 0-.56.08-.85.38s-1.12 1.1-1.12 2.69 1.15 3.13 1.31 3.35c.16.21 2.27 3.46 5.5 4.85.77.33 1.36.53 1.82.68.76.24 1.45.21 2 .13.61-.09 1.87-.76 2.14-1.5.26-.73.26-1.36.18-1.5-.07-.14-.31-.23-.66-.4z" />
  </svg>
);

const PhoneIcon = ({ size = 20, color = 'white' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const CommentDotsIcon = ({ size = 24, color = 'white' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const CloseIcon = ({ size = 24, color = 'white' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const styles = `
  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.7);
    }
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 12px rgba(40, 167, 69, 0);
    }
    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(40, 167, 69, 0);
    }
  }
  .chat-icon-pulse {
    animation: pulse 2s infinite;
  }
  .chat-icon-container:active {
      transform: scale(0.9) !important;
      transition: transform 0.2s ease-in-out;
  }
`;

interface ChatBoxProps {
  phoneNumber: string;
  whatsappNumber: string;
}

const ChatBox: React.FC<ChatBoxProps> = ({ phoneNumber, whatsappNumber }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleChat = () => setIsOpen(!isOpen);

  const iconContainerBaseStyle: React.CSSProperties = {
    borderRadius: '50%',
    padding: '15px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
    transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out, background-color 0.2s ease',
  };

  return (
    <>
      <style>{styles}</style>
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '12px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '12px',
            transform: isOpen ? 'scaleY(1)' : 'scaleY(0)',
            transformOrigin: 'bottom',
            opacity: isOpen ? 1 : 0,
            transition: 'transform 0.3s ease-in-out, opacity 0.2s ease-in-out',
          }}
        >
          <div
            className="chat-icon-container"
            style={{
              ...iconContainerBaseStyle,
              backgroundColor: '#4CAF50',
              transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
              transitionDelay: isOpen ? '0.2s' : '0s',
            }}
            onClick={() => window.location.href = `tel:${phoneNumber}`}
            aria-label="Call"
          >
            <PhoneIcon color="white" size={20} />
          </div>

          <div
            className="chat-icon-container"
            style={{
              ...iconContainerBaseStyle,
              backgroundColor: '#25D366',
              transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
              transitionDelay: isOpen ? '0.1s' : '0.1s',
            }}
            onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi`, '_blank')}
            aria-label="WhatsApp"
          >
            <WhatsappIcon color="white" size={20} />
          </div>
        </div>

        <div
          className={`chat-icon-container ${!isOpen ? 'chat-icon-pulse' : ''}`}
          style={{
            ...iconContainerBaseStyle,
            backgroundColor: '#28a745',
            position: 'relative',
            width: '56px',
            height: '56px',
          }}
          onClick={toggleChat}
          aria-label={isOpen ? "Close chat options" : "Open chat options"}
        >
          <div style={{
              position: 'absolute',
              transform: isOpen ? 'rotate(45deg) scale(0)' : 'rotate(0) scale(1)',
              opacity: isOpen ? 0 : 1,
              transition: 'transform 0.3s ease, opacity 0.2s ease',
          }}>
            <CommentDotsIcon color="white" size={24} />
          </div>
          <div style={{
              position: 'absolute',
              transform: isOpen ? 'rotate(0) scale(1)' : 'rotate(-45deg) scale(0)',
              opacity: isOpen ? 1 : 0,
              transition: 'transform 0.3s ease, opacity 0.2s ease',
          }}>
            <CloseIcon color="white" size={24} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
