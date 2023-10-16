// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        // decreases the counter by 1
        if(styles.contains('decrease')){
            count--;
        }
        // increases the counter by 1
        else if(styles.contains('increase')){
            count++;
        }
        // resets the counter
        else{
            count = 0;
        }
        if(count > 0){
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "red";
        }
        if(count === 0){
            value.style.color = "#222";
        }
        value.textContent = count;
    });
}); 