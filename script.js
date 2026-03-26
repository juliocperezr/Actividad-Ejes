let dragged = null;

/* DRAG */
document.querySelectorAll('.item').forEach(item=>{
  item.addEventListener('dragstart', ()=>{
    dragged = item;
  });
});

/* DROP */
document.querySelectorAll('.dropzone').forEach(zone=>{
  zone.addEventListener('dragover', e=>e.preventDefault());

  zone.addEventListener('drop', e=>{
    e.preventDefault();
    zone.appendChild(dragged);
  });
});

/* VALIDAR */
function checkAnswers(){

  let allCorrect = true;

  document.querySelectorAll('.dropzone').forEach(zone=>{
    
    let correctList = zone.dataset.correct.split(',');
    let items = Array.from(zone.children).map(el=>el.textContent.trim());

    let isCorrect = items.every(i=>correctList.includes(i)) && items.length === correctList.length;

    zone.classList.remove('correct','incorrect');

    if(isCorrect){
      zone.classList.add('correct');
    }else{
      zone.classList.add('incorrect');
      allCorrect = false;
    }
  });

  let message = document.getElementById('message');

  if(allCorrect){
    message.innerHTML = "✅ ES CORRECTO";
    message.style.color = "green";
  }else{
    message.innerHTML = "❌ VUELVE A INTENTARLO";
    message.style.color = "red";
  }
}

/* RESET */
function resetGame(){
  const bank = document.getElementById('bank');

  document.querySelectorAll('.item').forEach(item=>{
    bank.appendChild(item);
  });

  document.querySelectorAll('.dropzone').forEach(zone=>{
    zone.classList.remove('correct','incorrect');
  });

  document.getElementById('message').innerHTML = "";
}
