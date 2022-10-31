let seconds = new Date().getTime();
let minutes = new Date().getMinutes();
let hours = new Date().getHours();

// console.log(hours,minutes);

const posts = [
    {title : "post one", body : "My first post",createdAtHours : hours, createdAtMinutes : minutes, createdAtSecs : seconds},
    {title : "post two", body : "My second post",createdAtHours : hours, createdAtMinutes : minutes, createdAtSecs : seconds}
];

let updatingPostingTime = setInterval(getPost,1000);

function getPost(post){
        let output = "";
        posts.forEach(post=> {
            output += `<li>${post.title} and this is ${post.body} created at <mark>${(post.createdAtHours)-new Date().getHours()} hrs , ${(new Date().getMinutes()-post.createdAtMinutes)} mins and ${Math.floor((new Date().getTime()-post.createdAtSecs)/1000)}</mark> secs. ago</li>`
            console.log(output);
         });
document.body.innerHTML = output;

}

getPost(posts);

function createPost(post,callback){
setTimeout(()=>{
// post.createdAt = posting;
seconds = new Date().getTime();
hours = new Date().getHours();
minutes = new Date().getMinutes();
posts.push({...post,createdAtHours : hours,createdAtMinutes : minutes,createdAtSecs : seconds});
// console.log(post.createdAt);
console.log(callback+"----------------------------");
callback();

},3000)
}

function create4thPost(post,callback){
    setTimeout(()=>{
        seconds = new Date().getTime();
        hours = new Date().getHours();
        minutes = new Date().getMinutes();
        posts.push({...post,createdAtHours:hours,createdAtMinutes : minutes,createdAtSecs:seconds});
        callback();
        // console.log(callback+"-------------------------------");
        // lastEditedInSecondsAgo();

    },5000)

}

function create5thPost(post,callback){
    setTimeout(()=>{
        seconds = new Date().getTime();
        hours = new Date().getHours();
        minutes = new Date().getMinutes();
        posts.push({...post,createdAtHours:hours,createdAtMinutes : minutes,createdAtSecs:seconds});
        callback();
        // console.log(callback);
        lastEditedInSecondsAgo();

    },10000)
}

function lastEditedInSecondsAgo(){
    clearInterval(updatingPostingTime);
}

createPost({title : "post three", body : "My third post"},getPost);
create4thPost({title : "post four", body : "My fourth post"},getPost);
create5thPost({title:"post five",body : "My fifth post"},getPost);
console.log(posts);
console.log("*********************************************************************************************");