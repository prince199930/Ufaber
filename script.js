var myname = document.getElementById('FN')
var mobileNumber = document.getElementById('mobileno')
var email = document.getElementById('EID')
console.log(mobileNumber, email)

myname.addEventListener('blur', () => {
    console.log('jnaj')
    let regex = /^[a-zA-Z]([0-9a-zA-Z ]){0,10}/;
    let str = myname.value;
    let nameError = document.getElementById("firstname")
    console.log(regex, str)
    if (regex.test(str)) {
        nameError.style.display = "none"
        console.log('it matched')
        myname.classList.remove(`is-inavlid`);
    }
    else {
        if (str) {
            nameError.style.display = "unset"
            console.log('not matched')
            myname.classList.add(`is-inavlid`);
        }
    }

})
mobileNumber.addEventListener('blur', () => {
    console.log('jnaj')
    let regex = /^([0-9]){10}$/;
    let str = mobileNumber.value;
    let mobileError = document.getElementById("mobilenumber")
    console.log(regex, str)
    if (regex.test(str)) {
        mobileError.style.display = "none"
        console.log('it matched')
        mobileNumber.classList.remove(`is-inavlid`);
    }
    else {
        if (str) {
            mobileError.style.display = "unset"
            console.log('not matched')
            mobileNumber.classList.add(`is-inavlid`);
        }
    }

})
email.addEventListener('blur', () => {
    console.log('jnaj')
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    let emailError = document.getElementById("emailvalid")
    console.log(regex, str)
    if (regex.test(str)) {
        emailError.style.display = "none"
        console.log('it matched')
        email.classList.remove(`is-inavlid`);
    }
    else {
        if (str) {
            emailError.style.display = "unset"
            console.log('not matched')
            email.classList.add(`is-inavlid`);
        }
    }

})


var form = document.getElementById("Demo-book");
var Booking_heading = document.getElementById("Booking_heading");
var Book_Class = document.getElementById("Book_Class");
Book_Class.innerHTML = "Book a Free Demo Class";
var Limited_seat = document.getElementById("Limited_seat");
Limited_seat.innerHTML = "Limited Seats only!";
Limited_seat.style.marginTop = "-13px";
var my_form = document.getElementById("my-form");
var form_div = document.getElementById("form_div");
var form_grp = document.getElementById('form-grp');
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
option.innerHTML = "Select an option"
var option1 = document.getElementById("option1")
option1.innerHTML = "College Student";
var option2 = document.getElementById("option2")
option2.innerHTML = "Working Professional";
var option3 = document.getElementById("option3")
option3.innerHTML = "Full time aspirant";
var option4 = document.getElementById("option4")
option4.innerHTML = "Other";
var submit = document.getElementById("submit");
submit.innerHTML = "Submit"
submit.style.cursor = "pointer"
var desc = document.getElementById("desc");
desc.innerHTML = `By clicking 'Submit' button you explicitly solicit a  call & email from uFaber`
Booking_heading.appendChild(Book_Class);
Booking_heading.appendChild(Limited_seat);
form_grp.appendChild(mobileno)
form_grp.appendChild(FN)
form_grp.appendChild(EID)
my_form.appendChild(form_grp)
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
form_div.appendChild(my_form)
form.appendChild(Booking_heading);
form.appendChild(form_div);
