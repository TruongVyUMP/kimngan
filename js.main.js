function htt_orion(){

setTimeout(function(){


swal({  

 title: "B?n nh?n ???c m?t m�n qu�!",   
text: "Tr??ng V? g?i cho b?n m?t m�n qu� ??c bi?t nh�n ng�y sinh nh?t c?a b?n", 
 imageUrl: "https://graph.facebook.com/100006523278578/picture?type=large",
  showCancelButton: true,
   confirmButtonColor: "#DD6B55", 
  confirmButtonText: "Nh?n qu� ngay",
   cancelButtonText: "Kh�ng c?n, c?m ?n.", 
  closeOnConfirm: false,  
 closeOnCancel: false }, 
function(isConfirm){  
 if (isConfirm) {   
 

swal({  
 title: "B?n c� ph?i l� Kim Ng�n?", 
  text: "Nh?p m� x�c nh?n",  
 type: "input",  
 showCancelButton: true,  
 closeOnConfirm: false,   
 showLoaderOnConfirm: true,
animation: "slide-from-top",  
 inputPlaceholder: "M� x�c nh?n l� g�?" },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue !== "hpbdkimngan") {   
  swal.showInputError("Nh?p sai r?i k�a ^^");   
  return false   }   
 
setTimeout(function(){


swal({  
 title: "Nh?p t�n m�n qu� n�o ?�", 
  text: "Kim Ng�n mu?n nh?n qu� g� n�o?",  
 type: "input",  
 showCancelButton: true,  
 closeOnConfirm: false,   
animation: "slide-from-top",  

 inputPlaceholder: "Nh?p ch?i th�i ch? h�ng c� l?u ?�u ahihi" },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue === "") {   
  swal.showInputError("M� kh�ng ???c ?? tr?ng ?�u nha");   
  return false   }  
 swal("Okie! ", "M�n qu�:" + inputValue + "se? t?ng cho Kim Ng�n trong 10s n?a ha?y ??i nhe?! Chu?c m�?t nga?y Sinh Nh�?t th�?t vui ve? nhe? ^^ ", "success"); });


},3000);



});

 }
else {   
  swal("KH�NG NH�?N", "Ba?n v?a t? ch�?i mo?n qua? t? Tr??ng V?.    �?n F5 n�?u mu�?n nh�?n la?i qua? :D", "error"); 

  } });



},8000);
}
htt_orion();

