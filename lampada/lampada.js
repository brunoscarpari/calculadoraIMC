const acender = document.getElementById('acender')
const apagar = document.getElementById('apagar')
const lampada = document.getElementById('lampada')

function lampon(){
    lampada.src = 'apagada.jpg'

}
function lampoff(){
    lampada.src = 'acesa.jpg'
}
function lampbroken(){
    lampada.src = 'quebrada.jpg'
}
acender.addEventListener ('click', lampon)
apagar.addEventListener('click', lampoff)
lampada.addEventListener('mouseover',lampon)
lampada.addEventListener('mouseleave', lampoff)
lampada.addEventListener('dblclick', lampbroken)