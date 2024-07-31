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
            nivel = 'Parabens alto nivel de gostosa';
        }else if( valor < 25){
            nivel = 'Parabens alto nivel de gostosa'
        }else if(valor < 30){
            nivel = 'Parabens alto nivel de gostosa'
        }else if(valor < 35){   
            nivel = 'Parabens alto nivel de gostosa'
        }else if(valor < 40){
            nivel = 'Parabens alto nivel de gostosa'
        }else{
            nivel = 'Parabens alto nivel de gostosa'
        }

        result.textContent = `${name} seu IMC é de ${valor} ${nivel}`;
    }else{
        result.textContent = 'preencha todas as informaçoes';
    }
}

calcular.addEventListener('click', imc)