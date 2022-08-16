const posts = [
    {title: 'Post one', body: 'this is post one', createdAt: new Date().getTime()},
    {title: 'Post two', body: 'this is post two', createdAt: new Date().getTime()}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li> ${post.title} - ${post.body} -  created at ${(new Date().getTime() - post.createdAt) /1000} seconds ago  } </li>`

        })
        document.body.innerHTML = output
    },1000)

}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({...post, createdAt: new Date().getTime()})

            const error = false;

            if(!error) {
                resolve()
            } 
            else(
                reject("Error: Something went wrong")
            )
        },2000)
    })
}


createPost( { 
    title : 'Post three', body: 'this is post three'
}).then(getPosts)
.catch(err => console.log(err))


function deletePost(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(posts.length !== 0){
                resolve(posts.pop())
            }
            else{
                reject('Error: It is empty now')
            }
        },1000)
    })
}

createPost( { 
    title : 'Post four', body: 'this is post four'
})
.then(getPosts)
.catch(err => console.log( err))
.then(deletePost)
.catch(err => console.log( err))
.then(deletePost)
.catch(err => console.log( err))
.then(deletePost)
.catch(err => console.log( err))
.then(deletePost)
.catch(err => console.log( err))
.then(getPosts).then(() => {
    console.log(posts)
})

.then(deletePost).catch(err => console.log(err))
.then(deletePost).catch(err => console.log(err))






