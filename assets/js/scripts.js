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

function ratings () {
    ratings = document.querySelectorAll('.rating');
    ratings = ratings.length ? ratings : [ratings];
    for(var index = 0; index < ratings.length; index++){
        if(ratings[index].id == "5"){
            ratings[index].innerHTML = "<i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i>";
        } else if(ratings[index].id == "4"){
            ratings[index].innerHTML = "<i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star-o\"></i>";
        } else if(ratings[index].id == "3"){
            ratings[index].innerHTML = "<i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star-o\"></i><i class=\"fa fa-star-o\"></i>";
        } else if(ratings[index].id == "2"){
            ratings[index].innerHTML = "<i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star-o\"></i><i class=\"fa fa-star-o\"></i><i class=\"fa fa-star-o\"></i>";
        } else if(ratings[index].id == "1"){
            ratings[index].innerHTML = "<i class=\"fa fa-star\"></i><i class=\"fa fa-star-o\"></i><i class=\"fa fa-star-o\"></i><i class=\"fa fa-star-o\"></i><i class=\"fa fa-star-o\"></i>";
        }
    }
}

ratings();