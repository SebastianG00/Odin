const list = document.querySelector("ul");

const input = document.querySelector("input");

const button = document.querySelector("button");

function action(){
  let myItem = input.value 
  input.value = "";
  
  const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');
  
  listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = 'Delete';
        list.appendChild(listItem);
  
  listBtn.addEventListener('click', () => {
          list.removeChild(listItem);
        });
  
}

button.addEventListener('click', action);
  