
var form = document.getElementById("myform")


form.addEventListener('submit',function(e){
    e.preventDefault()

    var search = document.getElementById("search").value;

    
   
    
    document.getElementById("result").innerHTML = " "

    fetch("https://api.github.com/users/"+search)
    .then((result) => result.json())

    .then((data) => {
    console.log(data)    

    let x= data.avatar_url;
    document.getElementById("image").src=x;
    document.getElementById("name").innerHTML="Name :"+data.name;
    document.getElementById("follwer").innerHTML="Followers :"+data.followers;
    document.getElementById("following").innerHTML="Following :"+data.following;
    document.getElementById("public_repo").innerHTML="public_repos :"+data.public_repos;

    
    // document.getElementById("result").innerHTML = `
    // <a target ="_blank" href="https://www.github.com/${search}"
    // <img src="${data.avatar_url}"/>
    // </a>
    // `
    
    })


    
    
})
