/* Go to up button*/
var myButton = document.getElementById("goup");

window.onscroll = function () {
    
    'use strict';
    
    if (window.pageYOffset >= 400) {
        
        myButton.style.display = 'block';
        
    } else {
        
        myButton.style.display = 'none';
    
    }
};

myButton.onclick = function () {
    'use strict';
    window.scrollTo(0, 0);
};
/* Go to up button*/

/* Side Bar*/
function openNav() {
    document.getElementById("mySidenav").style.width = "230px";
    document.getElementById("main").style.marginLeft = "230px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
/* Side Bar*/

/* Bar Chart*/
window.onload = function (){
var chart = new CanvasJS.Chart("chartContainer",{
	
	animationEnabled: true,
	theme: "dark2", // "light1", "light2", "dark1", "dark2"
	backgroundColor: "dimgray",
	title:{
		text: "TOP 5 Mobiles"
	},
	axisY: {
		title: "SALES(in million)"
	},
	data: [{        
		type: "column",  
		showInLegend: true, 
		legendMarkerColor: "#ffffff",
		legendText: "Mobiles types",
		dataPoints: [      
			{ y: 60, label: "iPhone 8" },
			{ y: 65,  label: "iPhone 8 Plus" },
			{ y: 80.2,  label: "iPhone X" },
			{ y: 40,  label: "Samsung S9" },
			{ y: 20,  label: "Samsung A8" },
			
		]
	}]
});


var chart2 = new CanvasJS.Chart("chartContainer2",{
	
	animationEnabled: true,
	theme: "dark2", // "light1", "light2", "dark1", "dark2"
	backgroundColor: "dimgray",
	title:{
		text: "TOP 3 Cars"
	},
	axisY: {
		title: "SALES(in million)"
	},
	data: [{        
		type: "column",  
		showInLegend: true, 
		legendMarkerColor: "#ffffff",
		legendText: "Cars types",
		dataPoints: [      
			{ y: 20, label: "Ferrari Spider" },
			{ y: 30,  label: "Audi R8" },
			{ y: 45,  label: "Toyota Corolla" },
			
		]
	}]
});

var chart3 = new CanvasJS.Chart("chartContainer3",{
	
	animationEnabled: true,
	theme: "dark2", // "light1", "light2", "dark1", "dark2"
	backgroundColor: "dimgray",
	title:{
		text: "TOP 5 Books"
	},
	axisY: {
		title: "SALES(in million)"
	},
	data: [{        
		type: "column",  
		showInLegend: true, 
		legendMarkerColor: "#ffffff",
		legendText: "Books Names",
		dataPoints: [      
			{ y: 6.5, label: "The Fault in Our Stars" },
			{ y: 10,  label: "Drama" },
			{ y: 9,  label: "Catching Fire" },
			{ y: 20,  label: "The Hunger Games" },
			{ y: 3,  label: "Olivia Twist" },
			
		]
	}]
});

var chart4 = new CanvasJS.Chart("chartContainer4",{
	
	animationEnabled: true,
	theme: "dark2", // "light1", "light2", "dark1", "dark2"
	backgroundColor: "dimgray",
	title:{
		text: "TOP 3 Consoles"
	},
	axisY: {
		title: "SALES(in million)"
	},
	data: [{        
		type: "column",  
		showInLegend: true, 
		legendMarkerColor: "#ffffff",
		legendText: "Console types",
		dataPoints: [      
			{ y: 70, label: "Playstaion 4" },
			{ y: 30,  label: "Xbox One" },
            { y: 35,  label: "Xbox One S" },
			
		]
	}]
});

var chart5 = new CanvasJS.Chart("chartContainer5",{
	
	animationEnabled: true,
	theme: "dark2", // "light1", "light2", "dark1", "dark2"
	backgroundColor: "dimgray",
	title:{
		text: "TOP 5 Movies"
	},
	axisY: {
		title: "SALES(in million)"
	},
	data: [{        
		type: "column",  
		showInLegend: true, 
		legendMarkerColor: "#ffffff",
		legendText: "Movie Names",
		dataPoints: [      
			{ y: 226, label: "FAST & FURIOUS 8" },
			{ y: 229,  label: "Justise League" },
			{ y: 210,  label: "Logan" },
			{ y: 100,  label: "Logan Lucky" },
			{ y: 102,  label: "Dunkirk " },
		]
	}]
});

chart.render();
chart2.render();
chart3.render();
chart4.render();
chart5.render();
}
/* Side Bar*/

/* Pop up for Book Category*/
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    popup.style.width = "600px";
}
function myFunction2() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
    popup.style.width = "600px";
}
function myFunction3() {
    var popup = document.getElementById("myPopup3");
    popup.classList.toggle("show");
    popup.style.width = "600px";
}
function myFunction4() {
    var popup = document.getElementById("myPopup4");
    popup.classList.toggle("show");
    popup.style.width = "600px";
}
function myFunction5() {
    var popup = document.getElementById("myPopup5");
    popup.classList.toggle("show");
    popup.style.width = "600px";
}
function myFunction6() {
    var popup = document.getElementById("myPopup6");
    popup.classList.toggle("show");
    popup.style.width = "600px";
}
/* Pop up for Book Category*/

/* Windows Alert*/
function subscribe() {
    alert("Congratulations! You Subscribed to our Newsletter");
}
/* Windows Alert */





let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}


function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}


function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}


function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}


arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();
