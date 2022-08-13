let myLeads = [];

const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const deleteBtn = document.getElementById('delete-btn');
const ulEl = document.getElementById('ul-el');

/* 
localStorage.clear()
leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage)       
*/

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

deleteBtn.addEventListener('dblclick', function() {
  localStorage.clear();
  myLeads = [];
  renderLeads();

})

inputBtn.addEventListener('click', function() {
  myLeads.push(inputEl.value);
  renderLeads();
  inputEl.value = '';
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads()
})



function renderLeads() {
  let listItems = '';
  for (let i = 0; i < myLeads.length; i++) {
 // listItems += '<li><a href="' +  myLeads[i] + '" target="_blank">' + myLeads[i] + '</a></li>';
    listItems += `
      <li>
        <a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a>
      </li>`;
    
 }
  ulEl.innerHTML = listItems;
}