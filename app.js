let slider = document.getElementsByClassName('slider-cards')
let nextBtn = document.getElementById('next');
let crslBtn = document.getElementsByClassName('crsl-btn')
let i = 0;
let j = 0;

function slide () {
    if (j == 0) {
        slider[i].innerHTML = sliderContent[j] 
        console.log(sliderContent[j]);
        slider[i+1].innerHTML = sliderContent[j+1];
        slider[i+2].innerHTML = sliderContent[j+2];
        // crslBtn[i].style.backgroundColor ='#0576BC'
        // crslBtn[i+1].style.backgroundColor ='white'
        // crslBtn[i+2].style.backgroundColor ='white'
        j++
    } else if (j==1) {
        console.log(sliderContent[j+1]);
        slider[i].innerHTML = sliderContent[j+1];
        slider[i+1].innerHTML = sliderContent[j-1];
        slider[i+2].innerHTML = sliderContent[j];
        // crslBtn[i+1].style.backgroundColor ='#0576BC'
        // crslBtn[i+2].style.backgroundColor ='white'
        // crslBtn[i].style.backgroundColor ='white'
        j++
    } else if (j==2) {
        console.log(sliderContent[j-1]);
        slider[i].innerHTML = sliderContent[j-1];
        slider[i+1].innerHTML = sliderContent[j];
        slider[i+2].innerHTML = sliderContent[j-2];
        // crslBtn[i+2].style.backgroundColor ='#0576BC'
        // crslBtn[i].style.backgroundColor ='white'
        // crslBtn[i+1].style.backgroundColor ='white'
        j = 0
    }
}

setInterval(() => {
    slide() 
},3000)

// nextBtn.addEventListener('click', () => {
//     slide()
// })


let sliderContent = [];
let sliderContent1=`<div class="s-card-1 make-carousel-card back-color">
<div class="slider-top-content">
<img src="./assets/services icons/services card shape.svg" alt="" width="100%">
  <img src="./assets/services icons/Path_3.svg" alt="" class="slider-top-content-img">
</div>
<div style="text-align: center;"><h1>MakeUSafe</h1>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam molestiae, quibusdam laborum, officiis iste porro nulla, distinctio tempore aspernatur itaque quas voluptatem repellendus mollitia vel. Et dolorum incidunt non velit.</p></div>
<div style="text-align: center; margin-bottom: 20px;"><img src="./assets/casestudy/case study card button .svg" alt=""></div>
</div>`;

let sliderContent2=`<div class="s-card-1 make-carousel-card ">
<div class="slider-top-content">
  <img src="assets/casestudy/case study card design.svg" alt="" width="100%">
  <img src="./assets/services icons/Group 1174.svg" alt="" class="slider-top-content-img">
</div>
<div style="text-align: center;"><h1>Presonus</h1>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam molestiae, quibusdam laborum, officiis iste porro nulla, distinctio tempore aspernatur itaque quas voluptatem repellendus mollitia vel. Et dolorum incidunt non velit.</p></div>
<div style="text-align: center; margin-bottom: 20px;"><img src="./assets/casestudy/case study card button .svg" alt=""></div>
</div>`
let sliderContent3=`<div class="s-card-1 make-carousel-card back-color">
<div class="slider-top-content">
  <img src="./assets/services icons/services card shape.svg" alt="" width="100%">
  <img src="./assets/services icons/Path_3.svg" alt="" class="slider-top-content-img">
</div>
<div style="text-align: center;"><h1>Ring A Doctor</h1>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam molestiae, quibusdam laborum, officiis iste porro nulla, distinctio tempore aspernatur itaque quas voluptatem repellendus mollitia vel. Et dolorum incidunt non velit.</p></div>
<div style="text-align: center; margin-bottom: 20px;"><img src="./assets/casestudy/case study card button .svg" alt=""></div>
</div>`
sliderContent.push(sliderContent1)
sliderContent.push(sliderContent2)
sliderContent.push(sliderContent3)

$( document ).ready(function() {
	let $carouselItems = $('.carousel-equal-heights').find('.carousel-item');
	
	updateItemsHeight();
	$(window).resize(updateItemsHeight);
	
	function updateItemsHeight() {
		// remove old value
    $carouselItems.height('auto');
		
		// calculate new one
		let maxHeight = 0;
    $carouselItems.each(function() {
			maxHeight = Math.max(maxHeight, $(this).outerHeight());
		});
		
		// set new value
    $carouselItems.each(function() {
			$(this).outerHeight(maxHeight);
		});

		// debug it
		console.log('new items height', maxHeight);
	}
});