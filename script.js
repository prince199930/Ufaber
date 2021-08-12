const validation = ()=>{
    var user = document.getElementById("FN").value()
    if(user=""){
        document.getElementById("first").innerHTML = "please fill correct";
        return false;
    }
}



var form = document.getElementById("Demo-book");
var Booking_heading = document.getElementById("Booking_heading");
var Book_Class = document.getElementById("Book_Class");
Book_Class.innerHTML = "Book a Free Demo Class";
var Limited_seat = document.getElementById("Limited_seat");
Limited_seat.innerHTML = "Limited Seats only!";
Limited_seat.style.marginTop = "-13px";
var form_div = document.getElementById("form_div");
var mobileno = document.getElementById("mobileno");
var FN = document.getElementById("FN");
var EID = document.getElementById("EID");
var drop_div = document.getElementById("drop_div");
var drop = document.getElementById("drop")
drop.setAttribute("for", "seats");
drop.innerHTML = "What describes you best?"
var dropdown = document.getElementById("dropdown")
dropdown.setAttribute("name", "seats")
var option = document.getElementById("option")
option.innerHTML="Select an option"
var option1 = document.getElementById("option1")
option1.innerHTML="College Student";
var option2 = document.getElementById("option2")
option2.innerHTML="Working Professional";
var option3 = document.getElementById("option3")
option3.innerHTML="Full time aspirant";
var option4 = document.getElementById("option4")
option4.innerHTML="Other";
var submit = document.getElementById("submit");
submit.innerHTML = "Submit"
submit.addEventListener('submit', ()=>validation());
var  desc = document.getElementById("desc");
desc.innerHTML = `By clicking 'Submit' button you explicitly solicit a  call & email from uFaber`
Booking_heading.appendChild(Book_Class);
Booking_heading.appendChild(Limited_seat);
form_div.appendChild(mobileno)
form_div.appendChild(FN)
form_div.appendChild(EID)
dropdown.appendChild(option)
dropdown.appendChild(option1)
dropdown.appendChild(option2)
dropdown.appendChild(option3)
dropdown.appendChild(option4)
drop.appendChild(dropdown)
drop_div.appendChild(drop)
form_div.appendChild(drop_div)
form_div.appendChild(submit)
form_div.appendChild(desc)
form.appendChild(Booking_heading);
form.appendChild(form_div);
