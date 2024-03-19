//console.log(document.getElementById("tempinput").value);

/*function ischecked(arr){
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i].checked)
        {
            return arr[i];
        }
    }
}*/

const convertCToF = temp => (temp * (9 / 5)) + 32;
const convertCToK = temp => temp + 273.15;
const convertFToC = temp => (temp - 32) * (5 / 9);
const convertFToK = temp => (temp - 32) * (5 / 9) + 273.15;
const convertKToC = temp => temp - 273.15;
const convertKToF = temp => (temp - 273.15) * (9/5) + 32;

function convertor() {

    let temp_input = document.getElementById("tempinput").value;
    let input_unit = document.getElementsByName("inputtempunit");
    let temp_out;
    
    if (input_unit[0].checked) {
        //console.log("onversion is: " + input_unit[0].value + " to "+input_unit[1].value );
        
        document.getElementsByName("outputtempunit")[1].checked = true;
        temp_out = convertCToF(temp_input);
        document.getElementById("tempoutput").value = temp_out;
    }
    else if (input_unit[1].checked) {
        //console.log("onversion is: " + input_unit[1].value + " to "+input_unit[0].value );
        document.getElementsByName("outputtempunit")[0].checked = true;
        temp_out = convertFToC(temp_input);
        document.getElementById("tempoutput").value = temp_out;
    }

    else {
        alert("choose the unit");
    }

}

function reset() {

    let temp_input = document.getElementById("tempinput").value;
    let input_unit = document.getElementsByName("inputtempunit");
    let temp_out;
    
    document.getElementsByName("inputtempunit")[0].checked = false;
        document.getElementsByName("inputtempunit")[1].checked = false;
        document.getElementById("tempinput").value = null;
        
        document.getElementsByName("outputtempunit")[0].checked = false;
        document.getElementsByName("outputtempunit")[1].checked = false;
        document.getElementById("tempoutput").value = null;
    


}