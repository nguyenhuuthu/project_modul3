// const { application } = require("express");

// console.log("Hello word");
const tbody = document.getElementById("tbody");
const baseApi = "http://127.0.0.1:3000/";
const logOut=document.getElementById("log-out");
const ul = document.querySelector(".pagination")

const rowTemplate = `
<tr>
              <th scope="row"><%= i+1 %></th>
              <td><%= data[i].id %></td>
              <td><%= data[i].name %></td>
              <td><%= data[i].email %></td>
              <td><%= data[i].password %></td>
              <td>
                <span id="<%= data[i].id %>" class="btn-delete btn btn-danger">
                  DELETE
                </span>
                <span id="update-<%= data[i].id %>" class="btn-update btn btn-infor">
                  UPDATE
                </span>
              </td>
            </tr>
`

const showMessage = (status, message) => {
    let messageContainer = document.getElementsByClassName("message")[0];
    if (status === "delete") {
        messageContainer.innerHTML = `<div class="alert alert-danger" role="alert">
        ${message}
      </div>`
    }
    if (status === "update") {
        messageContainer.innerHTML = `<div class="alert alert-success" role="alert">
        ${message}
      </div>`
    }
    setTimeout(() => {
        messageContainer.innerHTML = "";
    }, 3000)
}

tbody.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-delete")) {
      let id = e.target.id;
      fetch(baseApi + `users/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          showMessage("delete", data.message);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          showMessage("delete", err.message);
        });
    }
  
    if (e.target.classList.contains("btn-update")) {
      let id = e.target.id.split("-")[1];
      let td = e.target.parentElement.parentElement;
      let tdChildList = e.target.parentElement.parentElement.children;
      
      let info = {
        index: tdChildList[0].innerHTML,
        ID: tdChildList[1].innerHTML,
        name: tdChildList[2].innerHTML,
        email: tdChildList[3].innerHTML,
        password: tdChildList[4].innerHTML
      };
      console.log(info.name);
      console.log(info.email);
      console.log(info.password);
      td.innerHTML = `
      <tr>
          <th scope="row">
              ${info.index}
          </th>
          <td>${info.ID}</td>
          <td><input type="text" value="${info.name}"></td>
          <td class="email">${info.email}</td>
          <td class="password">${info.password}</td>
          <td class="action">
              <span id="${info.ID}" class="btn-delete btn btn-danger">
              DELETE
              </span>
              <span id="save-${info.ID}" class="btn-save btn btn-info">
                  SAVE
              </span>
          </td>
      </tr>
      `;
    }
  
    if (e.target.classList.contains("btn-save")) {
      let id = e.target.id.split("-")[1];
      let td = e.target.parentElement.parentElement;
      let tdChildList = e.target.parentElement.parentElement.children;
      console.log(tdChildList);
      let info = {
        index: tdChildList[0].innerHTML,
        ID: tdChildList[1].innerHTML,
        name: tdChildList[2].children[0].value,
        email: tdChildList[3].innerHTML,
        password: tdChildList[4].innerHTML,
      };
      console.log(info.name, info.password, info.email);
      fetch(baseApi + `users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          showMessage("update", data.message);
          td.innerHTML = `
          <tr>
          <th scope="row">
              ${info.index}
          </th>
          <td>${info.ID}</td>
          <td><input type="text" value="${info.name}"></td>
          <td class="email">${info.email}</td>
          <td class="password">${info.password}</td>
          <td class="action">
              <span id="${info.ID}" class="btn-delete btn btn-danger">
              DELETE
              </span>
              <span id="save-${info.ID}" class="btn-save btn btn-info">
                  SAVE
              </span>
          </td>
      </tr>
          `;
        })
        .catch((err) => console.log(err));
    }
  });

window.onload = function () {
    // Get query
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
  
    // Get active page
    let pages = document.getElementsByClassName("page-item");
    let activePage = params.page_index;
  
    // Add active class to current page
    pages = Array.from(pages);
    let pre = pages[0];
    let next = pages[pages.length - 1];
    pages.pop();
    pages.shift();
    let last = pages.length;
    pages[activePage - 1].classList.add("active");
  
    pre.addEventListener("click", () => {
      activePage = activePage - 1;
      if (activePage === 0) activePage = 1;
      window.location.href = `/users?page_size=5&page_index=${activePage}`;
    });
  
    next.addEventListener("click", () => {
      activePage = Number(activePage) + 1;
      console.log(activePage, last);
      if (activePage === last) activePage = last;
      window.location.href = `/users?page_size=5&page_index=${activePage}`;
    });
  };