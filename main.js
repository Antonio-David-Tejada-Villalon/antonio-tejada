const links = [
  {
    label: "Week1 notes",
    url: "week1/index.html"
  },
  {
      label: "Week2 notes",
      url: "week2/index.html"
  },
  {
      label: "Week3 notes",
      url: "week3/index.html"
  },
  {
        label: "Week4 notes",
        url: "week4/index.html"
  },
  {
      label: "Week5 notes",
      url: "week5/index.html"
  },
  {
        label: "Week6 notes",
        url: "week6/index.html"
  },
  {
    label: "Week7 notes",
    url: "week7/index.html"
},
{
label: "Week8 notes",
url: "week8/index.html"
},
{
label: "Week9 notes",
url: "week9/index.html"
},
{
label: "Week10 notes",
url: "week10/index.html"
},
{
label: "Week11 notes",
url: "week11/index.html"
},
{
label: "Week12 notes",
url: "week12/index.html"
},
{
label: "Week13 notes",
url: "week13/index.html"
},
{
label: "Week14 notes",
url: "week14/index.html"
}
]


let olist = document.createElement("ol");

for(let link of links){
  let ilist = document.createElement("li");
  let aref = document.createElement("a");

  olist.setAttribute('class', 'listingo');
  ilist.setAttribute('class', 'listingi');
  aref.setAttribute('class', 'hyperreference');
  aref.setAttribute('href', link.url);
  aref.textContent = link.label;
  console.log(aref.textContent = link.label);
  
  olist.appendChild(ilist);
  ilist.appendChild(aref);

  document.querySelector("div#list").appendChild(olist);
}