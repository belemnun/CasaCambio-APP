import { useState } from "react"
import { monedas } from "../data/monedas";

export const guardarRegistros = () => {
    
    const [registros, setRegistros] = useState([])

    const onRegistrar = (id, cantidad, origenMoneda, origenDestino, subtotal, totalComision, totalPagar) => {
        
        if (totalPagar == 0 || totalPagar == '') return

        const monedaOrigenName = monedas.find((moneda) => moneda.value == origenMoneda)
        const monedaDestinoName = monedas.find((moneda) => moneda.value == origenDestino)

        setRegistros([
            ...registros,
            {
                id: new Date().getTime() * 3, 
                cantidad, 
                origenMoneda: monedaOrigenName.name, 
                origenDestino: monedaDestinoName.name, 
                subtotal, 
                totalComision, 
                totalPagar
            }
        ]);
    }

    const onBorrar = () => {
        setRegistros([])
    }

    return {
        registros,
        onRegistrar,
        onBorrar
    }

}
