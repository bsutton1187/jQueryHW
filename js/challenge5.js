//var imgs = $("img")
console.log("here")
var msg = "Hover over an Image Below"
$("img").mouseover(function(){
	console.log("test")
	//alert("Found It!")
	$("#image").css("backgroundImage", "url('"+$(this).attr("src")+"')");
	$("#image").html($(this).attr("alt"))
})
$("img").mouseleave(function(){
	console.log("test")
	//alert("Found It!")
	$("#image").css("backgroundImage", "");
	$("#image").html(msg);

})





// console.log("here")
// var imgs = document.querySelectorAll("img");
// var msg = "Hover over an image below."
// for (let i = 0; i < imgs.length;i++){
// 	imgs[i].onmouseover = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }
//
// 	 imgs[i].onfocus = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }
//
// 	 imgs[i].onmouseleave = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }
//
// 	 imgs[i].onblur = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }
// }
