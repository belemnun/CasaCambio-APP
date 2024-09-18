
export const CasaDeCambioRegistros = ({arregloRegistros}) => {

    if (arregloRegistros.length < 1) return 

    return (

        <table className="registros">

            <thead>
                <tr> 
                <th>Cantidad</th>
                <th>Moneda de Origen </th>
                <th>Moneda de Destino</th>
                <th>Subtotal</th>
                <th>Total Comision</th>
                <th>Total a Pagar</th>
                </tr>
            </thead>

            <tbody>
                {
                    arregloRegistros.map( (registro) => (
                        <tr key={ registro.id }> 
                            <td> {registro.cantidad} </td>
                            <td> {registro.origenMoneda} </td>
                            <td> {registro.origenDestino} </td>
                            <td> {registro.subtotal} </td>
                            <td> {registro.totalComision} </td>
                            <td> {registro.totalPagar} </td>
                        </tr>
                    ))
                }
            </tbody>

        </table>
    )
}
