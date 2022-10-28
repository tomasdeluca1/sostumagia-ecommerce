import "./form.css";
import { useState } from "react";
import { useForm } from "react-hook-form";

const CheckoutForm = ({ generateOrder }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const [emailConfirmated, setEmailConfirmated] = useState(false);

  const onSubmit = (data, e) => {
    Object.keys(errors).length === 0 && emailConfirmated
      ? generateOrder(data)
      : e.preventDefault();
  };

  const emailConfirmation = () => {
    const email = getValues("email");
    const email2 = getValues("email2");

    email === email2 ? setEmailConfirmated(true) : setEmailConfirmated(false);
  };

  return (
    <div>
      <form className="checkoutForm" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("nombre", { required: true, maxLength: 20 })}
          placeholder="Nombre completo"
          className="checkoutInput"
          onBlur={emailConfirmation}
        />
        {errors.nombre?.type === "required" && (
          <p className="errorsForm">Nombre completo requerido</p>
        )}
        <input
          type="number"
          {...register("telefono", {
            required: true,
            minLength: 10,
            maxLength: 13,
          })}
          placeholder="1125085500"
          className="checkoutInput"
          onBlur={emailConfirmation}
        />
        {errors.telefono?.type === "required" && (
          <p className="errorsForm">El número de teléfono está vacío</p>
        )}
        {errors.telefono?.type === "minLength" && (
          <p className="errorsForm">Debe tener un mínimo de 10 dígitos</p>
        )}
        {errors.telefono?.type === "maxLength" && (
          <p className="errorsForm">Debe tener un máximo de 13 dígitos</p>
        )}
        <input
          type="text"
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
          })}
          placeholder="Email"
          className="checkoutInput"
          onBlur={emailConfirmation}
        />
        {errors.email?.type === "required" && (
          <p className="errorsForm">El email es requerido</p>
        )}
        {errors.email?.type === "pattern" && (
          <p className="errorsForm">El formato del mail es inválido</p>
        )}
        <input
          type="text"
          {...register("email2", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
          })}
          placeholder="Confirmar email"
          className="checkoutInput"
          onBlur={emailConfirmation}
        />
        {errors.email2?.type === "required" && (
          <p className="errorsForm">La confirmación del mail es requerida</p>
        )}
        {errors.email2?.type === "pattern" && (
          <p className="errorsForm">El formato del mail es inválido</p>
        )}
        {!emailConfirmated && (
          <p className="errorsForm">
            El mail de confirmación debe ser el mismo
          </p>
        )}
        <input type="submit" className="checkoutSubmit" />
      </form>
    </div>
  );
};

export default CheckoutForm;
