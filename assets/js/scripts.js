function toggleHidden() {
    elements = document.querySelectorAll('.hidden');
    button = document.getElementById('PortfolioButton');
    if(button.innerHTML == "Full Portfolio") {
        value = "show";
        hiddenHelper(elements, value);
        button.innerHTML = "Hide Portfolio";   
    } else {
        value = "hide";
        hiddenHelper(elements, value);
        button.innerHTML = "Full Portfolio";
    }
}

function hiddenHelper (elements, value) {
    elements = elements.length ? elements : [elements];
    for(var index = 0; index < elements.length; index++) {
        if(value == "show") {
            elements[index].style.display = 'block';
        } else {
            elements[index].style.display = 'none';
        }
    }
}