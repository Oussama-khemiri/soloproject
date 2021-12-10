 $(".p1").hide()
 $(".a").hide()
 $("#btn1").on("click",function(){
     $(".p1").show()
      $(".p2").hide()
      $(".lst1").hide()
      $(".lst2").hide()
      $(".lst3").hide()
      $(".p4").hide()
  })
 $(".lst1").hide()
 $("#btn2").on("click",function(){
 $(".p1").hide()
     $(".lst1").show()
     $(".p4").hide()
     

     
})
$(".lst2").hide()
$("#btn2").on("click",function(){
$(".p1").hide()
    $(".lst2").show()

})
$(".lst3").hide()
$("#btn2").on("click",function(){
$(".p1").hide()
    $(".lst3").show()
})
$(".p4").hide()

$("#btn4").on("click",function(){
    $(".p4").show()
    $(".lst1").hide()
$(".lst2").hide()
$(".lst3").hide()
$(".p1").hide()
    

})

function store(){
    var firstname= document.getElementById("firstname");
    var lastname= document.getElementById("lastname");
    var email= document.getElementById("email");
    var phone= document.getElementById("phone");
    var nbrpeople= document.getElementById("nbrpeople");
    var Offre= document.getElementById("Offre");
    var date = document.getElementById("date");



    
    localStorage.setItem("firstname", firstname.value);
      localStorage.setItem("lastname", lastname.value);
     localStorage.setItem("email", email.value);
    localStorage.setItem("phone", phone.value);
        localStorage.setItem("Offre", Offre.value);
localStorage.setItem("nbrpeople", nbrpeople.value);
    localStorage.setItem("date", date.value);   

    

   }
   $("#btn3").on("click",function(){
       $(".a").show()
       $(".lst1").hide()
       $(".lst2").hide()
       $(".lst3").hide()
       $(".p1").hide()
   })


