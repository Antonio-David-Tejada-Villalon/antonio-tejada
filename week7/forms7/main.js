console.log("It's working");

/* function search(event) {
    alert('Form Submitted');
    event.preventDefault();
    } */

    /* function search(event) {
        alert(`You Searched for: ${input.value}`);
        event.preventDefault();
        } */

    /* const form = document.forms['search'];
    form.addEventListener ('submit', search, false);
    function search() {
    alert(' Form Submitted');
    } */

    const form = document.forms['search'];
    console.log(form);
    const input = form.elements.searchInput;
    console.log(input); 
    const form1 = document.forms['search'];
    console.log(form1);
    input.value = 'Search Here';
    form1.addEventListener ('submit', search, false);
    function search(event) {
        alert(`You Searched for: ${input.value}`);
        event.preventDefault();
    }

    input.addEventListener('focus', function(){
        if (input.value==='Search Here') {
        input.value = ''
        }
        }, false);
        input.addEventListener('blur', function(){
        if(input.value === '') {
        input.value = 'Search Here';
        } }, false);