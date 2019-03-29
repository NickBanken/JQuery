    let indexSlide = 1;
    let arrayImg = $('img');
  
    $('#prev').click(function () {
      nextPreviousImg(-1);
    });
  
    $('#next').click(function () {
      nextPreviousImg(+1);
    });
  
    function nextPreviousImg(n) {
      indexSlide += n;
      if (indexSlide > arrayImg.length - 1) {
        indexSlide = 0;
      }
  
      if (indexSlide < 0) {
        indexSlide = arrayImg.length - 1;
      }
  
      for (let i = 0; i < arrayImg.length; i++) {
        arrayImg[i].style.display = 'none';
      }
  
      $('img')[indexSlide].style.display = 'block';
    }
  
    let sliderLoop = function () {
      setTimeout(function () {
          nextPreviousImg(+1);
          sliderLoop(); // restarts the function
        }, 3000);
    };
  
    sliderLoop();