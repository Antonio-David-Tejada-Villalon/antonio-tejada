const d = document;

export default function searchFilter(input, selector){
    d.addEventListener("keyup", (e)=>{
        if(e.target.matches(input)){
            //console.log(e.key);
            console.log(e.target.value);
            d.querySelectorAll(selector).forEach(element => (element.textContent.toLowerCase().includes(e.target.value))
            ? element.classList.remove("filter")
            :element.classList.add("filter"));
        }
    })
}