/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    var age = prompt("How old are you?");
    if(age != 0){
        var gender = prompt("What is your gender?");
        if(gender != 0){
            var town = prompt("What is your town called?");
            if(town != 0){
                var test = confirm(`You are ${age} old ${gender} living in ${town}`);
            }else 
                alert("Please enter a valid town name");
        }else 
            alert("Please enter a valid gender");
        }
    else 
        alert("Please enter a valid age");
    
    
    
})();
