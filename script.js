document.getElementsByTagName('strong');

function highlight() {
    //Write your code here
	var strongElement = document.getElementsByTagName('strong');
	for(let i = 0; i < strongElement.length; i ++){
		strongElement[i].style.color = 'green';
	}
	
}


function return_normal() {
    //Write your code here
	var strongElement = document.getElementsByTagName('strong');

	for(var i = 0; i < strongElement.length; i ++){
		strongElement[i].style.color = 'black';
	}

    
}
