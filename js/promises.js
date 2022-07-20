fetch(`https://api.github.com/users/jacob-calderon/events`, {headers: {'Authorization': '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'}})

Promise.resolve('one').then((one) => {
    console.log(one);
    return 'two';
}).then((two) => {
    console.log(two);
    return 'three';
}).then((three) => {
    console.log(three);
});
``