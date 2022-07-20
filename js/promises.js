
var userInput = document.querySelector('#user-input')
    console.log(userInput)
var button= document.querySelector('#brick-btn')
    console.log(button)
// fetch(`https://api.github.com/users/jacob-calderon/events`, {headers: {'Authorization': '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'}})


function action() {
    function getGithubUsernames() {
        return fetch(`https://api.github.com/users/${userInput.value}/events/public`, {headers: {'authorization': PROMISES_API_KEY}})
            .then(response => response.json())
    }

// later on...

    getGithubUsernames().then(users => {
        // users.forEach( userObj => {
        // do something with each username
        console.log(users);
//     });
    }).catch(error => console.error(error));

}
button.addEventListener("click", action)
    
{
    return fetch(`https://api.github.com/users/${userInput.value}/events/public`, options
    ).then(function(response) {
        return response.json();
        
    }).then (function (events) {
        for (let i =0; i < events.length; i++ )
            if(events[i]).type === "pushEvent";{
                return events[i].created.at;
        }
    });
        


}