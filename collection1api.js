// fetch("https://jsonplaceholder.typicode.com/posts/3",
//     {
//         method:'PUT',
//         headers:{
//             'Content-Type':'application/json'
//         },
//         body:JSON.stringify({
//             title:'This is my title',
//             body:'Body',
//             userId:5
//         })
//     })
// .then(response => response.json())
// .then(data => {console.log(data)})

fetch("https://jsonplaceholder.typicode.com/posts/5",
    {
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            title:'Title',
        })
    })
.then(response => response.json())
.then(data => {console.log(data)})
