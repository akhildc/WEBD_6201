// Created By Akhil John Sunny
// Date Mar 15 2023
// Student ID :100850105

// Key from pixabay site
PIXABAY_KEY = '34276945-c600e945cf198dcc8b6c47a81'
// Url for pixabay web page
pixabay_url='https://pixabay.com/api/?key=<KEY>&q=dramatic&landscapes&image_type=photo&per_page=30'
const url = pixabay_url.replace('<KEY>', PIXABAY_KEY)

// create a url variable for blog
url_fetch = 'https://jsonplaceholder.typicode.com/posts'

//Header to Accept value set to 'application/json'
let myFetchHeaders = {"Accept": "application/json"}
// Function to create card element and blogs
const makePosts = () => {
    //Loop through to create 20 cards
    for (let j = 0; j < 20; j++){
        let id_no = j;
        //Create card
        let card = $(`<div class="card blog"></div>`).attr("id", 'card-' +id_no).appendTo($('.blog-column'))
        //Create card body
        let body = $('<div class ="card-body blog"></div>')
        .attr('id', 'card-body-' + id_no)
        .appendTo(card)
        //Create title element
        let title = $('<h5 class ="card-title blog"></h5>').attr('id', "card-title-blog"+id_no)
        .appendTo(body)
        //Create pic element
        let pic = $("<img>").attr('id', "img-"+ id_no).addClass('blog-pic').css('max-height', '100px')
        .appendTo(body)
        //Create text element
        let text =$('<p class="card-text blog"></p>').attr('id', 'card-text-'+ id_no).appendTo(body)
        // Element to display picture id
        let sub =$('<p class ="userId blog"></p>')
        .attr('id', 'sub-'+ id_no).appendTo(body)

        let post_id = $('<span></span>')
        .attr('id', 'post-' + id_no)
        .text('Post #: '+ id_no).appendTo(sub)

        let user_id = $('<span></span>')
        .attr('id', 'user-'+ id_no)
        .appendTo(sub)
    }
    // Call the gitPictures function to fetch images
    getPictures()
    // Loop through getblog function to fetch blog 20 times
    for (i=0; i<20; i++){
        getblog (i)
    }
    
}
// Fetching the images from pixabay 
const getPictures = ()=> {
    pics = []
    fetch(url)
    .then((res) =>{
        return res.json()
    })
    .then((data) => {
        //Loop through to get 20 pictures
        for (let i = 0; i< 20; i++){
            // Variable to store json response
            let picSrc = data ['hits'][i]['webformatURL']
            let altText = data ['hits'][i]['tags']
            //Add the json response to image element
            $("#img-"+i).attr("src", picSrc).attr("alt", altText)
        }

    })
    .catch((err)=> console.log(err))
}

// Fetching text from the webpage
const getblog = (i)=>{
 
    // use fetch
    fetch(url_fetch, {
        // give the necessary header data
        headers: myFetchHeaders
    })
    // first then() to recieve the promise
    .then((res) => {
        // send the json from the promise on to the next then()
        return res.json()

    })
    .then((jsonRes)=> {
        
         // console log the json
         console.log(jsonRes['body'])
         // Get the json response at specific index
         const blog = jsonRes[i]
        // set the output of title
        $("#card-title-blog"+i).text(blog.title)
       
        // set the output of paragraph
        $("#card-text-"+i).text(blog.body)
        


    }) 
    .catch((err)=> console.log(err))            
          
}
// Call the makeposts method
makePosts();
