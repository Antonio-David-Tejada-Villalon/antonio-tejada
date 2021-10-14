//Global Variables

const formUI = document.querySelector('#forms');
const ActivityListUI = document.getElementById('ActivityList');

let arrayActivities = [];

//Functions
//Creating the array
const CreateItem = (activity) => {
    let item = {
        activity: activity,
        status: false
    }
    //Adding items to array
    arrayActivities.push(item);
    return item;
};

//Saving item in Local Storage
const SaveDB = () => {
    localStorage.setItem('tasks', JSON.stringify(arrayActivities));
    ReadDB();
}

//Cleaning HTML in #ActivityList
const ReadDB = () => {
    ActivityListUI.innerHTML = '';

    arrayActivities = JSON.parse(localStorage.getItem('tasks'));
    
    if(arrayActivities === null){
        arrayActivities = [];
    }else{
        arrayActivities.forEach(element => {
            ActivityListUI.innerHTML += `<div class="alert alert-danger" role="alert"> <i class="fas fa-universal-access fa-sm"></i> <b>${element.activity}</b> - ${element.status} <span class="float-end"><i class="fas fa-check"></i> <i class="fas fa-trash-alt"></i></span></div>`
        })
    }
}

const DeleteDB = (activity) => {
    console.log(activity);
}

//EventListener
//Giving an action to the button
formUI.addEventListener('submit', (e) =>{
    e.preventDefault(); //Avoiding to lose info
    let activityUI = document.querySelector('#activity').value; //Getting the value
    CreateItem(activityUI); //Showing the items
    SaveDB(); //Saving items in the Local Storage

    formUI.reset(); //It is used to clear all the values of the form elements. It can be used to set the values to default. 
});

document.addEventListener('DOMContentLoaded', ReadDB); //fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

ActivityListUI.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log(e);
    console.log(e.path[0].childNodes[0].data);
    console.log(e.path[0].classList.value);
        
        if (e.path[0].classList[1] === 'fas fa-check' || e.path[0].classList[1] === 'fas fa-trash-alt'){
            let text = e.path[0].innerHTML;

            if(e.path[0].classList[1] === 'fas fa-trash-alt'){
                console,log(text);
                //Delete action
                DeleteDB(text);
            }
            if(e.path[0].classList[1] === 'fas fa-check'){}
        }
    })