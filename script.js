const baseNumber = document.getElementById("base_number");
const percent = document.getElementById("percent");
const percentResult = document.getElementById("percent_result");

percent.onkeyup = (e) => {
    if (baseNumber.value.length === 0) {
        alert(`Base number mustn't be empty!`);
        return;
    }

    let result = (e.target.value / 100) * baseNumber.value;
    percentResult.value = result;
};

percentResult.onkeyup = (e) => {
    if (baseNumber.value.length === 0) {
        alert(`Base number mustn't be empty!`);
        return;
    }

    let result = (100 / baseNumber.value) * e.target.value;

    percent.value = result;
};
