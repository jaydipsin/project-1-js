let userinput = document.querySelector(".input");
const submitbtn = document.querySelector(".submitbtn");
const taskArea = document.querySelector(".task");
const remove = document.querySelector(".remove-btn");
let arr = [];

//* function to add the task
const addtask = () => {
  if (userinput.value !== "" && !arr.includes(userinput.value)) {
    arr.push(userinput.value.trim());
    arr = [...new Set(arr)];
    localStorage.setItem("usertask", JSON.stringify(arr));

    // let newEl = document.createElement("div");
    // newEl.classList.add("task-added");
    // newEl.innerHTML = `<li>${userinput.value} </li> <button class="remove-btn">remove</button>`;
    // taskArea.append(newEl);
    // userinput.value = "";

    // *or dynamicly

    addtododynamicly(userinput.value);
  } else if (userinput.value === "") {
    alert("plase enter somthing");
  } else {
    alert("its alredy  enterd");
  }
};

// * function to get list of task
const getListoftask = () => {
  return JSON.parse(localStorage.getItem("usertask"));
};
arr = getListoftask() || [];

const addtododynamicly = (currval) => {
  let newEl = document.createElement("div");
  newEl.classList.add("task-added");
  newEl.innerHTML = `<li>${currval} </li> <button class="remove-btn">remove</button>`;
  taskArea.append(newEl);
  userinput.value = "";
};


// * show todo from storage
const showTodolist = () => {
  console.log(arr);
  arr.forEach((currval) => {
    addtododynamicly(currval);
  });
};
showTodolist();

// * remove btn
const removetask = (e) => {
  if (e.target.classList.contains("remove-btn")) {
    const taskDiv = e.target.parentElement;
    const taskText = taskDiv.querySelector("li").innerText;

    // Remove the task from the array
    arr = arr.filter((task) => task !== taskText);

    // Update local storage
    localStorage.setItem("usertask", JSON.stringify(arr));

    // Remove the task from the DOM
    taskDiv.remove();
  }
};

taskArea.addEventListener("click", removetask);
submitbtn.addEventListener("click", addtask);
// const rem = ()=>  {remove.addEventListener("click", removetask);
// }
// rem()
