function displayTick1() {
  document.getElementById("tick1").style.visibility = "visible";
}

function displayTick2() {
  document.getElementById("tick2").style.visibility = "visible";
}

function displayTick3() {
  document.getElementById("tick3").style.visibility = "visible";
}

function popUp() {
  Swal.fire({
    type: 'success',
    title: 'Your order has been placed!',
    showConfirmButton: false,
    timer: 2000
  })
}

function disableComp() {
  document.getElementById("").disabled = false;


}

function myFunction() {
  document.getElementById("demo").innerHTML = "x";
}