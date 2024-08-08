function toggleMode() {
    const body = document.body  
    
    body.classList.toggle('light')
    /*
    if(body.classList.contains('light')) {
        body.classList.remove('light')
    } else {
        body.classList.add('light')
    }*/

    // pegar a tag img 
    const img = document.querySelector("#profile img")
   
    //substituir a imagem
    if(body.classList.contains('light')) {
        //se tiver light mode, adicionar a imagem light
        img.setAttribute('src', './assets/avatar-light.png')
    } else { 
        //se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', "./assets/luffy.png")
    }
    


}
