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
    
    var test;
    var age = prompt("How old are you?");
    var gender = prompt("What is your gender?");
    var town = prompt("What is your town called?");
    
    test = confirm(`You are ${age} old ${gender} living in ${town}`);
    
})();
