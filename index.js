
window.addEventListener('DOMContentLoaded', () => {
    // document.querySelector('#button').addEventListener('click', () => {
    //     console.log('You clicked me!')
    // });
    const toggleButton = document.getElementById('togglebutton') 
    const navigationList = document.getElementById('navbarLinks');
    toggleButton.addEventListener('click', () => {
      
        navigationList.classList.toggle("active");
    })


        // Select the first h1 element on the page
    // let h1Element = document.querySelector('h1');

    // Get the computed style of the h1 element
    // let computedStyle = window.getComputedStyle(h1Element);

    // Get the font size from the computed style
    // let fontSize = computedStyle.getPropertyValue('font-size');

    // console.log(fontSize); // This will print the font size to the console


});






