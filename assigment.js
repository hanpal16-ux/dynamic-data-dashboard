

/*Event for first buttom */
$("#firstdog").click(function(){

$.get("https://dog.ceo/api/breeds/image/random", function (data, status, xhr) {

    $("#firstdogpicture").attr("src",data.message);

    console.log(status);
  
        });

     });

/*Event for second buttom*/

$("#Userpic").click(function() {


    $.get("https://randomuser.me/api/", function(data, status, xhr){
        
    let people=data.results[0];

$("#User-information").html(

    "<img src='"          + people.picture.large + "' style='border-radius:50%'><br>"+
    "<b>1. Nombre: </b> " +people.name.first + " " + people.name.last + "</br>" +
    "<b>2.Age:</b> "      + people.dob.age + " </br>" +
    "<b>3.Country:</b> "  + people.location.country + "</br>" +
    "<b>4.Email:</b> "    + people.email + "</br>"+
    "<b>5.Gender:</b> "    + people.gender + "</br>"+
    "<b>6.Telephone:</b> "+ people.phone 


);

console.log(people.dob.age);
console.log(people.gender);

    });

   });








































