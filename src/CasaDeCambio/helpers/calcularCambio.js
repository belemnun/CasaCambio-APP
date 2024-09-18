
export const calcularCambio = (cantidad, origenMoneda, origenDestino) => {

    // de pesos a:
    let sub = 0;
    let tot = 0;
    let totPagar = 0;

    if(origenMoneda == '1'){

        if(origenDestino == '2'){
            sub = (cantidad * 0.050).toFixed(2);
            tot = (sub * .03).toFixed(2);
        }
        else if(origenDestino == '3'){
            sub = (cantidad * 0.068).toFixed(2);
            tot = (sub * .03).toFixed(2);
        }
        else if(origenDestino == '4'){
            sub = (cantidad * 0.080).toFixed(2);
            tot = (sub * .03).toFixed(2);
        }
    }
    // de dolares americanos a:
    else if (origenMoneda == '2'){

        if(origenDestino == '1'){
            sub = (cantidad * 19.91).toFixed(2);
            tot = (sub * .03).toFixed(2);
        }
        else if(origenDestino == '3'){
            sub = (cantidad * 1.36).toFixed(2);
            tot = (sub * .03).toFixed(2);
        }
        else if(origenDestino == '4'){
            sub = (cantidad * 0.99).toFixed(2);
            tot = (sub * .03).toFixed(2);
        }
    }
    // de dolares canadienses a:
    else if (origenMoneda == '3'){

        if(origenDestino == '1'){
            sub = (cantidad * 14.69).toFixed(2);
            tot = (sub * .03).toFixed(2);
        }
        else if(origenDestino == '2'){
            sub = (cantidad * 0.74).toFixed(2);
            tot = (sub * .03).toFixed(2);
        }
        else if(origenDestino == '4'){
            sub = (cantidad * 0.73).toFixed(2);
            tot = (sub * .03).toFixed(2);
        }
    }
    // de euros a:
    else if (origenMoneda == '4'){

        if(origenDestino == '1'){
            sub = (cantidad * 20.08).toFixed(2);
            tot = (sub * .03).toFixed(2);
        }
        else if(origenDestino == '2'){
            sub = (cantidad * 1.01).toFixed(2);
            tot = (sub * .03).toFixed(2);
        }
        else if(origenDestino == '3'){
            sub = (cantidad * 1.37).toFixed(2);
            tot = (sub * .03).toFixed(2);
        }
    }

    totPagar = (parseFloat(sub) + parseFloat(tot)).toFixed(2);
    
    return {
        sub,
        tot,
        totPagar
    }

}
