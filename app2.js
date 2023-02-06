document.getElementById(`eye`).addEventListener(`click`, function () {


    if (document.getElementById(`password`).type === `text`) {
        document.getElementById(`password`).type = `password`;
        document.getElementById(`eyepass`).classList.add(`fas fa-eye-slash`)
        document.getElementById(`eyepass`).classList.remove(`fa-eye`)

    } else {
        document.getElementById(`password`).type = `text`;
        document.getElementById(`eyepass`).classList.add(`fa-eye`)
        newFunction();

    }

    function newFunction() {
        document.getElementById(`eyepass`).classList.remove(`fas fa-eye-slash`);
    }
})

var source_output = document.getElementById("source_output");

function source_func() {
  var source_input = document.getElementById("source_input");
  source_output.innerHTML = source_input.value;
}