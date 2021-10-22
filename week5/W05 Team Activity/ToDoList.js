//Global Variables

const formUI = document.querySelector('#forms');
const ActivityListUI = document.getElementById('ActivityList');

let arrayActivities = []; //For saving activities

//Functions
//Creating items into the arrayActivities
const CreateItem = (activity) => {
    let item = {
        activity: activity,
        status: false
    }
    //Adding items to array
    arrayActivities.push(item);
    return item; //Returning the new item
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
            if(element.status){
                ActivityListUI.innerHTML += `<div class="alert alert-success" role="alert"><i class="material-icons float-start me-2">accessibility</i> <b>${element.activity}</b> - ${element.status} <span class="float-end"><i class="material-icons">done</i><i class="material-icons">delete</i></span></div>`
            }else{
                ActivityListUI.innerHTML += `<div class="alert alert-danger" role="alert"><i class="material-icons float-start me-2">accessibility</i> <b>${element.activity}</b> - ${element.status} <span class="float-end"><i class="material-icons">done</i><i class="material-icons">delete</i></span></div>`
            }
        })
    }
}

const DeleteDB = (activity) => {
    let indexArray
    arrayActivities.forEach((element, index)=>{
        if(element.activity === activity){
            indexArray = index;
        }
    })

    arrayActivities.splice(indexArray, 1);
    SaveDB();
}

const EditDB = (activity) => {
    let indexArray = arrayActivities.findIndex((element)=>element.activity === activity);
    console.log(arrayActivities[indexArray]);
    arrayActivities[indexArray].status = true;

    SaveDB();
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
        
        if (e.target.innerHTML === 'done' || e.target.innerHTML === 'delete'){
            let text = e.path[2].childNodes[2].innerHTML;
            if(e.target.innerHTML === 'delete'){
                //Delete Action
                DeleteDB(text);
            }
            if(e.target.innerHTML === 'done'){
                //Done Action
                EditDB(text);
            }
        }
    })