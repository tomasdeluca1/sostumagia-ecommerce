import { useState } from "react";

export const useSendEmail = () => {
  const [state, setState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const sendEmail = async (formData) => {
    setState({ isSubmitting: true, isSubmitted: false, error: null });

    try {
      const response = await fetch(
        "https://huev.site/api/send-email-from-sos-tu-magia",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          credentials: "include", // Add credentials
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Error al enviar el mensaje");
      }

      const data = await response.json();

      setState({
        isSubmitting: false,
        isSubmitted: true,
        error: null,
      });

      return { success: true };
    } catch (error) {
      console.error("Error sending email:", error);
      setState({
        isSubmitting: false,
        isSubmitted: false,
        error:
          "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.",
      });

      return {
        success: false,
        error: error.message,
      };
    }
  };

  return {
    sendEmail,
    ...state,
  };
};
