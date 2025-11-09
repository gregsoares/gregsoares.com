import emailjs from '@emailjs/browser';
export const sendEmail = (message) =>
  emailjs.sendForm('service_u3vxskp', 'template_a004y3v', message, 'G_7Uq3PGyX3qRNPFC');
