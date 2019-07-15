var taskarray = [];
var list_display = document.getElementById('display');
var display_description = document.getElementById('display1');
 function showDescription()
 { display_description.innerHTML='';
  var index = this.getAttribute('data_id');
  
   console.log(index); 
   var disp_task = document.createElement('p');
    var disp_desp = document.createElement('p'); 
    disp_task.innerHTML='Task :'+taskarray[index-1].title;
     disp_desp.innerHTML='Description:'+taskarray[index-1].description; 
   
     disp_task.className="submit";
      
      disp_desp.className="block";
 
 display_description.appendChild(disp_task);
  display_description.appendChild(disp_desp);
 } 
function Delete_task(event) {
  event.stopPropagation();
  index = this.value;
  console.log(index);
  taskarray.splice((index - 1), 1);
  console.log(taskarray);
  render();
}
function render() {
//display_description.innerHTML = '';
  list_display.innerHTML = '';


  for (i = 0; i < taskarray.length; i++) {
    var list_element = document.createElement('li');
    list_element.setAttribute('data_id', (i + 1));
    list_element.onclick=showDescription;
    //button 
    var del_button = document.createElement('button');
    del_button.value = i + 1;
    del_button.innerHTML = '&#215';
    del_button.onclick = Delete_task;
    del_button.className='butt';
    //header 
    var header = document.createElement('h4');
    header.innerHTML = taskarray[i].title;
    header.className = 'header';

    list_element.appendChild(header);
    list_element.appendChild(del_button);
    list_display.appendChild(list_element);
  }
}

function AddElinput() {
  var task = document.getElementById("task").value;
  var description = document.getElementById("description").value;
  if (!task || !description) {
    alert("Fill all the mandatory fields");
    return;
  }
  object = {
    title: task,
    description: description
  };
  taskarray.push(object);
  console.log(taskarray);
  console.log(taskarray.length)
  render();
}

