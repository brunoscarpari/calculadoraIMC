const calcular = document.getElementById('calcular')

function imc(){
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');

    if (name !== '' && height !== '' && weight !== ''){
        const valor = (weight/(height* height)).toFixed(2);

        let nivel= "";

        if(valor < 18.5){
            nivel = 'abaixo do peso';
        }else if( valor < 25){
            nivel = 'peso ideal'
        }else if(valor < 30){
            nivel = 'leventemente acima do peso'
        }else if(valor < 35){   
            nivel = 'Obesidade nivel I'
        }else if(valor < 40){
            nivel = 'Obesidade nivel II'
        }else{
            nivel = 'Obesidade nivel III'
        }

        result.textContent = `${name} seu IMC é de ${valor} e voce esta ${nivel}`;
    }else{
        result.textContent = 'preencha todas as informaçoes';
    }
}

calcular.addEventListener('click', imc)