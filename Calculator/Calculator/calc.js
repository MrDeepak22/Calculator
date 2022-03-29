// Use insert() function to insert the number in textview.
function insert(num) {
    document.display.textview.value = document.display.textview.value + num;
}


/* Here, we create a backspace() function to remove the number at the end of the numeric series in textview. */
function backspace() {
    var result = document.display.textview.value;
    document.display.textview.value = result.substring(0, result.length - 1); /* remove the element from total length ? 1 */
}


//For Showing Error And Evaluating Result
function equal() {
    try {

        var result = document.getElementById("screen").value

        var y = eval(result)

        document.getElementById("screen").value = y

    } catch (err) {

        document.getElementById("screen").value = 'Error'

    }
}

function isInputNumber(evt) {
    var ch = String.fromCharCode(evt.which);

    if(!(/[0-9]/.test(ch))){
        evt.preventDefault();
    }
}
// Use equal() function to return the result based on passed values.
/* function equal() {
    var result = document.display.textview.value;
    if (result) {
        document.display.textview.value = eval(result)
    }
} */

