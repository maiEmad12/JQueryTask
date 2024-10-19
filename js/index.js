const menuWidth = $(".menu").outerWidth();
$(".menu").css({left : `-${menuWidth}px` });
$(".openNav").css({left : "5px"},50);

$(".closebtn").on("click",function(){
  $(".menu").animate({ width:'0px'},50);
  $(".sec-text").animate({marginLeft :'0px'},50);
  $(".menu a").hide(50);
})
$(".openNav").on("click",function(){
    $(".menu").animate({ width:'250px'},50);
    $(".sec-text").animate({marginLeft :'250px'},50);
    $(".menu a").show(50);
})


// const menuWidth = $(".menu").outerWidth();
// $(".menu").css({left : `-${menuWidth}px` });
// $(".openNav").css({left : "5px"},50);

// $(".menu .openNav").on("click", function() {
//     $(".menu").animate({left : `-${menuWidth}px` },50);
//     $(".openNav").animate({left : "5px"},50);
// });
// $(".closebtn").on("click", function() {
//     $(".menu").animate({left : "0px" },400);
//     $(".openNav").animate({left : `${menuWidth}px`},50);
// });


$(".sliderDown .toggle").on("click", function(){
$(".inner").not($(this).next()).slideUp(500);
$(this).next().slideToggle(500);
})



const countDownDate = new Date("Oct 25, 2024 00:00:00").getTime();
const countDownElement = $(".count");
const updateCountDown = () => {
    const now = new Date().getTime();
    const difference = countDownDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24) );
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    updateDigits("days", days);
    updateDigits("hours", hours);
    updateDigits("minutes", minutes);
    updateDigits("seconds", seconds);
};
const updateDigits = (className, value) => {
    const digitElement = $(`.${className}`);
    const currentDigit = parseInt(digitElement.text(), 10);

    if (currentDigit !== value) {
        digitElement.addClass("hidden");
        setTimeout(() => {
            digitElement.text(value).removeClass("hidden");
        }, 500);  
    }
};
const countDownInterval = setInterval(updateCountDown, 1000);
updateCountDown(); 



$("textarea").keyup(function(){
  let mylength= $(this).val().length;
  $(".chars").text(
    100 - mylength <= 0 ? "your available character finished" : 100 - mylength
  )
})