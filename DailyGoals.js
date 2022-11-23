let addBtn = document.getElementById("addBtn");
let tasks = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];  //if tasks exists then tasks array return or empty array return
showAllTask();
function removeTask(){
    tasks.forEach(()=>{
        const eachbox = document.querySelector(".eachbox");
        eachbox.remove();
    });
}
function showAllTask(){
    tasks.forEach((value,index)=>{


        // console.log(value.task);
        // console.log(value.description);
        //create alltasks
    const alltasks = document.createElement("div");
    alltasks.setAttribute("class","alltasks");

    // create each box
    const eachbox = document.createElement("div");
    eachbox.setAttribute("class","eachbox");

    // adding eachbox into alltasks
    alltasks.append(eachbox);

    // create para
    const para = document.createElement("div");
    para.setAttribute("id","para");
    para.innerText = value.task;

    // create desc
    const desc = document.createElement("div");
    desc.setAttribute("id","desc");
    desc.innerText = value.description;

    // create removeBtn
    const removeBtn = document.createElement("button");
    removeBtn.setAttribute("id","removeBtn");
    removeBtn.innerText = "Delete Task";
    removeBtn.addEventListener("click",()=>{
        removeTask();
        // console.log(tasks);
        tasks.splice(index,1); //remove 1 element at index if(splice(2,3)) =>remoev threee element at index 2
        localStorage.setItem("tasks",JSON.stringify(tasks));
        // console.log(tasks);
        showAllTask();
    });
    // showAllTask();

    // adding para,desc,removeBtn into eachbox
    eachbox.append(para);
    eachbox.append(desc);
    eachbox.append(removeBtn);

    // adding eachbox into alltasks
    alltasks.append(eachbox);

    const container = document.querySelector(".container");
    container.append(alltasks);
    });
}
addBtn.addEventListener("click",(e)=>{
     e.preventDefault();

    const task = document.getElementById("task");
    const description = document.getElementById("description");
    //create alltasks
    // const alltasks = document.createElement("div");
    // alltasks.setAttribute("class","alltasks");

    // create each box
    // const eachbox = document.createElement("div");
    // eachbox.setAttribute("class","eachbox");

    // adding eachbox into alltasks
    // alltasks.append(eachbox);

    // create para
    // const para = document.createElement("div");
    // para.setAttribute("id","para");
    // para.innerText = task.value;

    // create desc
    // const desc = document.createElement("div");
    // desc.setAttribute("id","desc");
    // desc.innerText = description.value;

    // create removeBtn
    // const removeBtn = document.createElement("button");
    // removeBtn.setAttribute("id","removeBtn");
    // removeBtn.innerText = "-";

    // adding para,desc,removeBtn into eachbox
    // eachbox.append(para);
    // eachbox.append(desc);
    // eachbox.append(removeBtn);

    // adding eachbox into alltasks
    // alltasks.append(eachbox);

    // const container = document.querySelector(".container");
    // container.append(alltasks);

    removeTask();
    tasks.push({
        task: task.value,
        description:description.value
    });
    localStorage.setItem("tasks",JSON.stringify(tasks));
   showAllTask();
    // console.log(tasks);
});

