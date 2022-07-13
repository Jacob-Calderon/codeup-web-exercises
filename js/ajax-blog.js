// todo. 1. At minimum, your Ajax blog will need an empty <div> with an id of posts.
"use strict";

let tableBody = document.getElementById("blog")
//
// todo.  2. Add your own Bootstrap theme to this file as well. Feel free to use the same one as your store or choose a different one.
 fetch("/json/blog.json").then(function (data) {
     data.json().then(function (blog) {

let html = ""
// todo.  3. Download blog.json to your data directory from before.
//
// todo.  4. Use Ajax to load the contents of blog.json and add the data from it to your #posts div.
for (let i = 0; i < blog.length ; i++) {
    html += "<td>" + (blog[i].title) + "</td>"
        html += "<td>" + (blog[i].content) + "</td>"
    html += "<td>" + (blog[i].categories) + "</td>"
    html += "<td>" + (blog[i].date) + "</td>"

    html += "<tr></tr>"

// todo.  5. Add additional entries to blog.json and make sure your changes are reflected on the page.
tableBody.innerHTML = html

    }

})})


