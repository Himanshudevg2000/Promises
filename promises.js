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







const promise1 = Promise.resolve('hello world')
const promise2 = 10
const promise3 = new Promise (( resolve, reject) => 
    setTimeout(resolve,2000,"Goodbye")
)

Promise.all([promise1,promise2, promise3]).then(values =>
    console.log(values)
);

// promises.all task

let user = {
    username : 'himanshu',
    lastactivitytime : new Date()
}


const newcreatePost = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;

            if(!error) {
                console.log(user.lastactivitytime)
                resolve()
            } 
            else(
                reject("Error: Something went wrong")
            )
        },2000)
    })
}

newcreatePost({
    title: 'post one', body: 'this is post one'
})

function updateLastActivityTime() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(user.lastactivitytime = new Date())
            resolve()
        },3000)
    })
}
updateLastActivityTime()


const updatePost = () => {
    Promise.all([newcreatePost, updateLastActivityTime]).then(([createPostResolves, updateLastActivityTimeResolves]) => {
        console.log(createPostResolves)
        console.log(updateLastActivityTimeResolves)
    })
}
