(function () {

    const calculator = new ModCalculator();
    document.querySelectorAll('.button').forEach(
        button => {
            
            button.addEventListener('click', function (event) {
                let btnValue = event.target.value;
                document.getElementById('result').value = calculator.processInput(btnValue);
 }, false)
        }
    );
})()


