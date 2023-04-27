document.addEventListener('DOMContentLoaded', (event) => {

const InputDay = document.querySelector("[data-days]")
const InputMonth = document.querySelector("[data-months]")
const InputYear = document.querySelector("[data-years]")

InputDay.addEventListener("input",()=>{
    const paragraphError = document.querySelector("[data-daysError]");
    const labelError = document.querySelector("[data-label1]");

    
    if(InputDay.value < 1 || InputDay.value > 31){
        if(InputDay.value.length == 0){
            paragraphError.innerHTML = "The field is required";
        }
        else{
            paragraphError.innerHTML = "Must be a valid day";   
        }
        paragraphError.classList.add("show-error");
        labelError.classList.add("error");

    }
    else{
        paragraphError.classList.remove("show-error");
        labelError.classList.remove("error");
    }

});

InputMonth.addEventListener("input", () => {
    const paragraphError = document.querySelector("[data-monthsError]");
    const labelError = document.querySelector("[data-label2]");
  
    if (InputMonth.value < 1 || InputMonth.value > 12) {
        if(InputMonth.value.length == 0){
            paragraphError.innerHTML = "The field is required";
        }
        else{
            paragraphError.innerHTML = "Must be a valid month";
        }
      paragraphError.classList.add("show-error");
      labelError.classList.add("error");
    } else {
      paragraphError.classList.remove("show-error");
      labelError.classList.remove("error");
    }
  });
  
  InputYear.addEventListener("input", () => {
    const paragraphError = document.querySelector("[data-yearsError]");
    const labelError = document.querySelector("[data-label3]");
  
    if (InputYear.value < 1900 || InputYear.value > 2023) {
        if(InputYear.value.length == 0){
            paragraphError.innerHTML = "The field is required";
        }else{

            paragraphError.innerHTML = "Must be in Past";
        }
      paragraphError.classList.add("show-error");
      labelError.classList.add("error");
    } else {
      paragraphError.classList.remove("show-error");
      labelError.classList.remove("error");
    }
  });

const calculateBtn = document.querySelector("[data-calculate]");
calculateBtn.addEventListener("click",()=>{

    const birthDay = +InputDay.value;
    const birthMonth = +InputMonth.value;
    const birthYear = +InputYear.value;
    
let [ageInYears, ageInMonths, ageInDays] = calculateAge(birthYear,birthMonth,birthDay);

document.querySelector("[data-birthDate]").innerHTML = ageInDays;
document.querySelector("[data-birthMonth]").innerHTML = ageInMonths;
document.querySelector("[data-birthYear]").innerHTML = ageInYears;
});

const inputValues = document.querySelectorAll("input");

inputValues.forEach((input) => {
    input.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        calculateBtn.click();
      }
    });
});

});

function calculateAge(year, month, day) {
    var today = new Date();
    var birthDate = new Date(year, month - 1, day); // Note: month is 0-indexed in JavaScript Dates
    var years = today.getFullYear() - birthDate.getFullYear();
    var months = today.getMonth() - birthDate.getMonth();
    var days = today.getDate() - birthDate.getDate();
  
    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      if (today.getMonth() < birthDate.getMonth()) {
        months = (12 - birthDate.getMonth()) + today.getMonth();
      } else {
        months = today.getMonth() - birthDate.getMonth();
      }
      days = today.getDate() + (31 - birthDate.getDate());
      if (days > 31) {
        days -= 31;
        months++;
      }
    }
    return [years,months,days];
  }
  