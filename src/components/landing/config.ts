export const LOGIN_URL = "https://app.odentiahn.com/login";

// Correo oficial temporal del MVP; actualizar aquí al tener dominio propio.
export const CONTACT_EMAIL = "odentiahn@gmail.com";
// WhatsApp Business es el canal principal para contacto, demos y cotizaciones.
export const WHATSAPP_NUMBER = "50431489374";
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_URL = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent("Hola, me gustaría recibir más información y una cotización de Odentia.")}`;
export const DEMO_URL = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent("Hola, me gustaría solicitar una demo de Odentia.")}`;

export const SEO_TITLE = "Odentia | Software de gestión para odontólogos";
export const SEO_DESCRIPTION =
  "Gestiona pacientes, citas, expedientes clínicos, odontogramas y facturación desde una sola plataforma, con búsqueda inteligente para tu consultorio dental.";
