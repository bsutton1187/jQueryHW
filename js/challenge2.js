$("#useBilling").click(function() {
	if( $(this).prop('checked')) {
		$("#home").val($("#billing").val());
		$("#home").prop("disabled", "true");
	}
	else {
		$("#home").prop("disabled", "false");
		$("#home").val("");

	}
})









// useBilling.onchange = function() {
// 	let home = document.querySelector("#home");
// 	let billing = document.querySelector("#billing");
//
// 	if (this.checked){
// 		home.value = billing.value;
// 		home.disabled = true;}
// 	else {
// 		home.value = "";
// 		home.disabled = false;}
//
// 	}
