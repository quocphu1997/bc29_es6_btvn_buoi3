export class WorkToDo {
  constructor(id,DoWork) {
    this.id = id;
    this.DoWork = DoWork;
  }
  renDer() {
    const divTag = `<li class="listTodo"><input style="margin:auto 0" type="checkbox">${this.DoWork} <span><button class="Delete" href="">xóa</button></span></li>`;
    return divTag;
  }
}
