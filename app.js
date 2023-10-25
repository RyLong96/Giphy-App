console.log("Let's get this party started!");



const API_KEY = 'hxCF6CDuqpxGQ6QEAAnnz4T6qPhT5rg5'
const form = document.querySelector('#searchform');
const input = document.querySelector('#searchterm');
const div = document.querySelector('#gifs');
const remove = document.querySelector('#removebtn')



// get data from the api
// async function getGif(search) {
//     const url = `api.giphy.com/v1/gifs/${search}`;
//     const res = await axios.get(url);
//     console.log(res);
// }


function createGif(randomURL){

    const img = document.createElement('img');
    img.setAttribute('src', randomURL);
    img.classList.add('pics')
    div.append(img);
    
}


//this is getting the data from whatever we pass in
async function getGif(val){
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${val}`);
    //if there is no response then dont run any code
        if(res){
        const urls = res.data.data.map(element => {
            console.log(element);
            return element.images.original.url;
        });
        const getRandomURL = urls[Math.floor(Math.random() * urls.length)]
        createGif(getRandomURL);
    } 
}



function makeLi(newGif){
    const gifArr = [];
    gifArr.push(newGif);
    const newLi = document.createElement('li');
    newLi.append(gifArr)
}



//when the submit button is clicked, grab that value and then search
form.addEventListener('submit',function(e){
    e.preventDefault();
    // console.log(input.value)
    makeLi();
    getGif(input.value);
    input.value = "";

})



remove.addEventListener('click', function(e){
    e.preventDefault();
    div.innerHTML = "";
})
// , {
//     params: { q: search, api_key: "hxCF6CDuqpxGQ6QEAAnnz4T6qPhT5rg5"} }
