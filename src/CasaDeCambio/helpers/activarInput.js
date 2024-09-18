
export const activarInput = (totalPagar) => {
    
    const inputs = document.querySelectorAll('input:disabled');

    if(totalPagar != '') {
        inputs.forEach(input => {
            input.classList.add('active'); 
        });
    }else {
        inputs.forEach(input => {
            input.classList.remove('active'); 
        });
    }

}