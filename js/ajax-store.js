"use strict";

let tableBody = document.getElementById("insertProducts")


// fetch is getting the json
        fetch("/json/inventory.json").then(function (data) {
            // data.json is gathering the request
            // tools is an array
            data.json().then(function (tools) {
                // setting up the html to push the informtion into
                let html = ""
                // the for loop is grabbing each tools name quantity, price, and categories and forcing them into the HTML
                for (let i = 0; i < tools.length ; i++) {
                     html += "<td>" + (tools[i].title) + "</td>"
                        html += "<td>" + (tools[i].quantity) + "</td>"
                            html += "<td>" + (tools[i].price) + "</td>"
                                html += "<td>" + (tools[i].categories) + "</td>"
                    html +="<tr></tr>"

// tableBody is attaching all the tools to the inn HTML
 tableBody.innerHTML = html

                }
            })
        })

// TODO: Create an AJAX GET request for the file under data/inventory.json



// TODO: Take the data from inventory.json and append it to the products table