function htt_orion(){

setTimeout(function(){


swal({  

 title: "Bạn nhận được một món quà!",   
text: "Trường Vỹ gửi cho bạn một món quà đặc biệt nhân ngày sinh nhật của bạn", 
 imageUrl: "https://graph.facebook.com/100006523278578/picture?type=large",
  showCancelButton: true,
   confirmButtonColor: "#DD6B55", 
  confirmButtonText: "Nhận quà ngay",
   cancelButtonText: "Không cần, cảm ơn.", 
  closeOnConfirm: false,  
 closeOnCancel: false }, 
function(isConfirm){  
 if (isConfirm) {   
 

swal({  
 title: "Bạn có phải là Kim Ngân?", 
  text: "Nhập mã xác nhận",  
 type: "input",  
 showCancelButton: true,  
 closeOnConfirm: false,   
 showLoaderOnConfirm: true,
animation: "slide-from-top",  
 inputPlaceholder: "Mã xác nhận là gì?" },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue !== "hpbdkimngan") {   
  swal.showInputError("Nhập sai rồi kìa ^^");   
  return false   }   
 
setTimeout(function(){


swal({  
 title: "Nhập tên món quà nào đó", 
  text: "Kim Ngân muốn nhận quà gì nào?",  
 type: "input",  
 showCancelButton: true,  
 closeOnConfirm: false,   
animation: "slide-from-top",  

 inputPlaceholder: "Nhập chơi thôi chứ hông có lưu đâu ahihi" },
 function(inputValue){   
if (inputValue === false) return false;   
   if (inputValue === "") {   
  swal.showInputError("Mà không được để trống đâu nha");   
  return false   }  
 swal("Okie! ", "Món quà: " + inputValue + " sẽ tặng cho Kim Ngân trong 10s nữa hãy đợi nhé! Chúc một ngày Sinh Nhật thật vui vẻ nhé ^^ ", "success"); });


},3000);



});

 }
else {   
  swal("KHÔNG NHẬN", "Bạn vừa từ chối món quà từ Trường Vỹ.    Ấn F5 nếu muốn nhận lại quà :D", "error"); 

  } });



},8000);
}
htt_orion();

