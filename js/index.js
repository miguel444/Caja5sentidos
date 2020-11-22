const codigo_ok = '041199';
const entrada = document.querySelector('input')
const preview = document.getElementById('preview')
const video = document.getElementById('video')
const texto = document.getElementById('message')

entrada.oninput = () => {
    let codigo = entrada.value


    if (codigo === '') {
        entrada.style.backgroundColor = '#F5F5F5 ';
    } else {
        if (codigo !== codigo_ok) {

            entrada.style.backgroundColor = '#EFA39F';
        } else {

            entrada.style.backgroundColor = '#9FEFAB ';
            entrada.value = 'CÓDIGO CORRECTO, DESBLOQUEANDO SORPRESA...'
            setTimeout(() => {
                preview.style.display = 'none'
                video.style.display = 'flex'
                texto.style.display = 'block'
                video.style.justifyContent = 'space-around'
                video.style.alignItems = 'center'



            }, 4000)
        }
    }
}