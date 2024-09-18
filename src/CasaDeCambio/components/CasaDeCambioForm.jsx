import { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm"
import { calcularCambio } from "../helpers/calcularCambio";
import { monedas } from "../data/monedas";
import { activarInput } from "../helpers/activarInput";

export const CasaDeCambioForm = ({onNewRegistro, onBorrarRegistros}) => {

    const {formState, id, cantidad, origenMoneda, origenDestino, subtotal, totalComision, totalPagar, onInputChange, onResetForm, setFormState} = useForm({
        id: '',
        cantidad: '',
        origenMoneda: '',
        origenDestino: '',
        subtotal: '',
        totalComision: '',
        totalPagar: '',
    })
    
    // console.log(origenMoneda);
    // console.log(origenDestino);

    const onCalcular = () => {
        const {sub, tot, totPagar} = calcularCambio(cantidad, origenMoneda, origenDestino);

        // console.log({sub, tot, totPagar});
        
        setFormState({
            id,
            cantidad,
            origenMoneda,
            origenDestino,
            subtotal: sub,
            totalComision: tot,
            totalPagar: totPagar,
        })
        

    } 

    useEffect(() => {

        setFormState({
            ...formState,
            origenDestino: '',
        })

    }, [origenMoneda])

    useEffect(() => {

        setFormState({
            ...formState,
            subtotal: '',
            totalComision: '',
            totalPagar: '',
        })

    }, [origenDestino])


    const onRegistrarCambio = () => {

        onNewRegistro(id, cantidad, origenMoneda, origenDestino, subtotal, totalComision, totalPagar);

    }
    // console.log(arreglo);
    
    
    let optionsDestino = monedas.filter((moneda) => moneda.value != origenMoneda);
    
    const onFormSubmit = (e) => {
        e.preventDefault();
        activarInput(totalPagar);
    }
    
    return (
        <>
            <h1 className="headerForm">Casa de Cambio CHASH</h1>

            <form className="formCambioMoneda" onSubmit={onFormSubmit}>
                <label htmlFor="cantidad">Cantidad</label>
                <input 
                    type="number"
                    placeholder="Ingrese una cantidad" 
                    name="cantidad"
                    id="cantidad"
                    value={ cantidad }
                    onChange={ onInputChange }
                />

                <label htmlFor="origenMoneda"> Moneda de Origen </label>
                <select 
                    name="origenMoneda" 
                    id="origenMoneda"
                    value={ !origenMoneda ? 0 : origenMoneda}
                    onChange={ onInputChange }
                >
                    <option value="0" disabled> Seleccione una Moneda </option>
                    {
                        monedas.map( (moneda) => (
                                <option key={moneda.value} value={moneda.value}>{moneda.name}</option>
                            )
                        )
                    }

                </select>

                <label htmlFor="origenDestino">  Moneda de Destino  </label>
                <select 
                    name="origenDestino" 
                    id="origenDestino"
                    value={ !origenDestino ? 0 : origenDestino}
                    onChange={onInputChange}
                >
                    <option value="0" disabled> Seleccione una Moneda </option>
                    {
                        
                        optionsDestino.map((option) => (
                            <option key={option.value} value={option.value}>{option.name}</option>
                        ))

                    }
                </select>

                
                <label htmlFor="subtotal">Subtotal</label>
                <input 
                    type="number"
                    name="subtotal"
                    id="subtotal"
                    readOnly disabled
                    onChange={ onInputChange }
                    value={ subtotal }
                />
                
                <label htmlFor="totalComision"> Total Comisión </label>
                <input 
                    type="number"
                    name="totalComision"
                    id="totalComision"
                    readOnly disabled
                    onChange={ onInputChange }
                    value={ totalComision }
                />

                <label htmlFor="totalPagar"> Total a Pagar </label>
                <input 
                    type="number"
                    name="totalPagar"
                    id="totalPagar"
                    readOnly disabled
                    onChange={ onInputChange }
                    value={ totalPagar }
                />

                <div className="botones">
                    <button className="botonesForm" onClick={onCalcular}> Calcular </button>
                    <button className="botonesForm" onClick={onResetForm}> Limpiar </button>
                    <button className="botonesForm" onClick={onRegistrarCambio}> Registrar </button>
                    <button className="botonesForm" onClick={onBorrarRegistros}> Borrar Registros </button>
                </div>
                
            </form>
            
        </>
    )
}
