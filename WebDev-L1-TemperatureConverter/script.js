//Input Fields
const fromTemp=document.getElementById("fromTemp");
const toTemp=document.getElementById("toTemp");
//Dropdown Menus
const fromUnit=document.getElementById("fromUnit");
const toUnit=document.getElementById("toUnit");
//Swap Button
const swapBtn=document.getElementById("swapBtn");
//Validation Message
const message=document.getElementById("message");

function convertTemperature(){
    let temp=parseFloat(fromTemp.value);
    let from=fromUnit.value;
    let to=toUnit.value;
    if(isNaN(temp)){
        message.textContent="Please enter a valid temperature.";
        toTemp.value="";
        return;
    }
    let result;
    switch(from + "-" + to){
        case "celsius-fahrenheit":
            result=(temp * 9/5) + 32;
            break;
        case "celsius-kelvin":
            result=temp + 273.15;
            break;
        case "fahrenheit-kelvin":
            result=(temp - 32) * 5/9 + 273.15;
            break;
        case "kelvin-celsius":
            result=temp - 273.15;
            break;
        case "kelvin-fahrenheit":
            result=(temp - 273.15) * 9/5 + 32;
            break;
        case "fahrenheit-celsius":
            result=(temp - 32) * 5/9;
            break;
        case "celsius-celsius":
        case "fahrenheit-fahrenheit":
        case "kelvin-kelvin":
            result=temp;
            break;
        default:
            message.textContent="Please select valid units.";
            toTemp.value="";
            return;
    }
    toTemp.value=result.toFixed(2);
    message.textContent="";
}

fromTemp.addEventListener("input", convertTemperature);
fromUnit.addEventListener("change", convertTemperature);
toUnit.addEventListener("change", convertTemperature);
swapBtn.addEventListener("click", function(){
    let tempValue=fromTemp.value;
    let fromUnitValue=fromUnit.value;
    fromTemp.value=toTemp.value;
    fromUnit.value=toUnit.value;
    toTemp.value=tempValue;
    toUnit.value=fromUnitValue;
    convertTemperature();
});
convertTemperature();