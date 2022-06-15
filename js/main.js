import { WorkToDo } from "./oopWordList.js";

const getEle = (id) => document.getElementById(id);
let id = 0;
getEle("addItem").onclick = () => {
  id += 1;
  const NewTask = getEle("newTask").value;
  const worktodo = new WorkToDo(id, NewTask);
  // const arrList = [];
  // arrList.push(worktodo);
  const result = worktodo.renDer();
  console.log(worktodo);
  getEle("todo").innerHTML += result;

  let btnXoa = document.getElementsByClassName("xoaCV");
  for (let i = 0; i < btnXoa.length; i++) {
    btnXoa[i].onclick = () => {
      worktodo.filter((ele) => ele.id !== id);
    };
  }
};

//Delete
