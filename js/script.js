window.addEventListener('load',function(){    
    const curtain = this.document.getElementById('curtain');
    const email = this.document.getElementById('email');
    const close = this.document.getElementById('close');
    const body = this.document.getElementById('body');

    email.addEventListener('click',function(){        
        // curtain.classList.add('translate0');
        curtain.style.transform="translateY(0%)"
        body.classList.add('overflow-hidden');
    });

    close.addEventListener('click',function(){
        // curtain.classList.remove('translate0');        
        curtain.style.transform="translateY(100%)"
        body.classList.remove('overflow-hidden');
    })
});