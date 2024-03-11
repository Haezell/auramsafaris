import { BrainHttp } from "./api/BrainHttp.js";
const serverURL = `http://192.168.137.1:5000`



//Add form
let detailForm = document.querySelector('#form-post')
detailForm.addEventListener('submit', function(e) {
    e.preventDefault()

    //GET SELECTED DATA FROM CHECKBOXES
        

    const interests = []
    var interestCheckboxes = document.querySelectorAll('input[name="interests"]:checked')
    interestCheckboxes.forEach(checkbox => {
       interests.push(checkbox.value)
    })


    const accommodation = []
    var accommodationCheckboxes = document.querySelectorAll('input[name="accommodation"]:checked')
    accommodationCheckboxes.forEach(checkbox => {
        accommodation.push(checkbox.value)
    })

    const travel_preference = document.querySelector('input[name="tour_type"]:checked')

    let userDetails = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        phone_number: document.querySelector('#phone_number').value,
        nationality: document.querySelector('#nationality').value,
        time_to_travel: document.querySelector('#time_to_travel').value,
        time_to_spend: document.querySelector('#time_to_spend').value,
        interests:interests,
        adults: document.querySelector('#adults').value,
        children: document.querySelector('#children').value,
        childrens_age: document.querySelector('#childrens_age').value,
        accommodation:accommodation,
        travel_preference: travel_preference.value,
        message: document.querySelector('#message').value,
        
    };

    let url = `${serverURL}/details`;
    BrainHttp.post(url, userDetails).then( (data )=>{
        console.log(data)
        
        clearFormFields()
    }).catch( (err) => {
        console.log(err)
    })

    let clearFormFields = () => {
        document.querySelector('#name').value = "";
        document.querySelector('#email').value = "";
        document.querySelector('#phone_number').value = "",
        document.querySelector('#nationality').value = "",
        document.querySelector('#time_to_travel').value = "",
        document.querySelector('#time_to_spend').value = "",
        interests = "",
        document.querySelector('#adults').value = "",
        document.querySelector('#children').value = "",
        document.querySelector('#childrens_age').value = "",
        accommodation = "",
        travel_preference.value = "",
        document.querySelector('#message').value = ""

    }
})



