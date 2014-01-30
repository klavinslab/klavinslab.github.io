window.onload=function(){
  
  document.getElementById('nav-publications').className += " highlight";

  var elems = document.getElementsByClassName('paper');
  var n = elems.length;
  for (i in elems) {
    elems[i].innerHTML = "<span class='num'>[" + n + "]</span> " + elems[i].innerHTML;
    n--;
  }
 
}

