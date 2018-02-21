function htt_orion(){

setTimeout(function(){


swal({  

 title: "B?n nh?n ???c m?t món quà!",   
text: "Tr??ng V? g?i cho b?n m?t món quà ??c bi?t nhân ngày sinh nh?t c?a b?n", 
 imageUrl: "https://graph.facebook.com/100006523278578/picture?type=large",
  showCancelButton: true,
   confirmButtonColor: "#DD6B55", 
  confirmButtonText: "Nh?n quà ngay",
   cancelButtonText: "Không c?n, c?m ?n.", 
  closeOnConfirm: false,  
 closeOnCancel: false }, 
function(isConfirm){  
 if (isConfirm) {   
 

swal({  
 title: "B?n có ph?i là Kim Ngân?", 
  text: "Nh?p mã xác nh?n",  
 type: "input",  
 showCancelButton: true,  
 closeOnConfirm: false,   
 showLoaderOnConfirm: true,
animation: "slide-from-top",  
 inputPlaceholder: "Mã xác nh?n là gì?" },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue !== "hpbdkimngan") {   
  swal.showInputError("Nh?p sai r?i kìa ^^");   
  return false   }   
 
setTimeout(function(){


swal({  
 title: "Nh?p tên món quà nào ?ó", 
  text: "Kim Ngân mu?n nh?n quà gì nào?",  
 type: "input",  
 showCancelButton: true,  
 closeOnConfirm: false,   
animation: "slide-from-top",  

 inputPlaceholder: "Nh?p ch?i thôi ch? hông có l?u ?âu ahihi" },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue === "") {   
  swal.showInputError("Mà không ???c ?? tr?ng ?âu nha");   
  return false   }  
 swal("Okie! ", "Món quà:" + inputValue + "se? t?ng cho Kim Ngân trong 10s n?a ha?y ??i nhe?! Chu?c mô?t nga?y Sinh Nhâ?t thâ?t vui ve? nhe? ^^ ", "success"); });


},3000);



});

 }
else {   
  swal("KHÔNG NHÂ?N", "Ba?n v?a t? chô?i mo?n qua? t? Tr??ng V?.    Â?n F5 nê?u muô?n nhâ?n la?i qua? :D", "error"); 

  } });



},8000);
}
htt_orion();

