var prev = document.getElementById('prev');
var next = document.getElementById('next');
var progress = document.querySelector('.progress');
var circles = document.querySelectorAll('.circle');

var activeCircle = 1;
next.addEventListener('click',function(){
  activeCircle++;
  if(activeCircle > circles.length){
      activeCircle = circles.length;
  }

  update();
});

prev.addEventListener('click',function(){
  activeCircle--;
  if(activeCircle < 1){
      activeCircle = 1;
  }

  update();
});

function update(){
  circles.forEach(function(circle,index){
    if(index < activeCircle){
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  })

  var actives = document.querySelectorAll('.active');
  // console.log(((actives.length-1)/(circles.length-1))*100)
  progress.style.width =  ((actives.length-1)/(circles.length-1))*100 +"%";
  
  if(activeCircle == 1){
    prev.disabled = true;
  } else if(activeCircle == circles.length){
    next.disabled = true;
  }
  else {
    next.disabled = false;
    prev.disabled = false;
  }
}