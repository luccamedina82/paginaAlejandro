import './WhatsAppButton.css'
const WhatsApp = () => {
  const phoneNumber = '3515946508';
  return (
    <div className="floating-whatsapp-button">
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="whatsapp-button"></button>
      </a>
    </div>
  );
}

export default WhatsApp