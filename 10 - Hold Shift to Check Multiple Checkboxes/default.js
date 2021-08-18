const checkElements = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e){
    //check shift key down
    // e verificar se esta a carregar na checkbox
    let isBetween = false;
    if(e.shiftKey && this.checked){
        checkElements.forEach(checkbox =>{
           if(checkbox === this || checkbox === lastChecked){
             isBetween = !isBetween;
           } 
           if(isBetween){
               checkbox.checked = true;
           }
        });
    }

    lastChecked = this;
}

checkElements.forEach(checkbox => checkbox.addEventListener('click', handleCheck));


