import "./form.css"
import {useContext, useState} from "react"
import {useForm} from "react-hook-form"
import {NotificationContext} from "../../../context/NotificationContext/Notification"

const CheckoutForm = ({createOrder, cart}) =>{

    const {register, handleSubmit, formState:{errors}} = useForm()

    const {setNotification} = useContext(NotificationContext)

    const onSubmit = data =>{
        createOrder(data)
    }

    return(
        <div>
            <form className="checkoutForm" onSubmit= {handleSubmit(onSubmit)}>
               
            
                <input
                type="text"
                {...register("nombre", {required:true, maxLength:20})}
             
                placeholder="Nombre completo"
                className="checkoutInput"
                />
                   {errors.nombre?.type === "required" && <p className="errorsForm">Nombre completo requerido</p>}
                <input
                type="number"
                {...register("telegono", {required:true, minLength: 10,maxLength:13})}
                placeholder="1125085500"
                className="checkoutInput"
                />
                   {errors.telegono?.type === "required" && <p className="errorsForm">El número de teléfono está vacío</p>}
               {errors.telegono?.type === "minLength" && <p className="errorsForm">Debe tener un mínimo de 10 dígitos</p>}
               {errors.telegono?.type === "maxLength" && <p className="errorsForm">Debe tener un máximo de 13 dígitos</p>}
                <input
                type="text"
                {...register("email", {required:true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i})}
                placeholder="Email"
                className="checkoutInput"
                />
                {errors.email?.type === "required" && <p className="errorsForm">El email es requerido</p>}
               {errors.email?.type === "pattern" && <p className="errorsForm">El formato del mail es inválido</p>}

                 <input type="submit" className="checkoutSubmit"  />
         </form>
        </div>
    )
}

export default CheckoutForm