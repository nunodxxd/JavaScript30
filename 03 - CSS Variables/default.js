const inputs = document.querySelectorAll('.controls input');
const img = document.querySelector('img');

function handleUpdate(){
  const suffix = this.dataset.sizing || '';
  //document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  img.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
