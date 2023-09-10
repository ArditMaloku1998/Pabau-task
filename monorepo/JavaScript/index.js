function shuffleValues() {
    var container = document.getElementById("form-wrapper");
    var elementsArray = Array.prototype.slice.call(container.getElementsByClassName('checkbox-item'));
      elementsArray.forEach(function(element){
        container.removeChild(element);
    })
    shuffleArray(elementsArray);
    elementsArray.forEach(function(element){
    container.appendChild(element);
    })
  }
  
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function changeValues() {
    const checkboxValues = document.querySelectorAll('.form-wrapper .checkbox-item span');
    checkboxValues.forEach((element, index) => {
        element.innerHTML = element.innerHTML + ( index + 1 );
    });
}

function showSelectedValues() {
    var checkboxes = document.getElementsByName('checkbox');
    var checkboxesChecked = [];
    for (var i=0; i<checkboxes.length; i++) {
       if (checkboxes[i].checked) {
          checkboxesChecked.push(checkboxes[i].value);
       }
    }
    document.getElementById("show").value = checkboxesChecked;
}