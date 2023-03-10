PIXABAY_KEY = '34276945-c600e945cf198dcc8b6c47a81'

pixabay_url='https://pixabay.com/api/?key=<KEY>&q=dramatic&landscapes&image_type=photo&per_page=30'
const url = pixabay_url.replace('<KEY>', PIXABAY_KEY)

const makePosts = () => {
    for (let j = 0; j < 20; j++){
        let id_no = j;
        let card = $(`<div class="card blog"></div>`).attr("id", 'card-' +id_no).appendTo($('.blog-column'))
        let body = $('<div class ="card-body blog"></div>')
        .attr('id', 'card-body-' + id_no)
        .appendTo(card)
        let title = $('<h5 class ="card-title blog"></h5>').attr('id', "card-title-blog"+id_no)
        .appendTo(body)
        let pic = $("<img>").attr('id', "img-"+ id_no).addClass('blog-pic').css('max-height', '100px')
        .appendTo(body)
        let text =$('<p class="card-text blog"></p>').attr('id', 'card-text-'+ id_no).appendTo(body)
        let sub =$('<p class ="userId blog"></p>')
        .attr('id', 'sub-'+ id_no).appendTo(body)

        let post_id = $('<span></span>')
        .attr('id', 'post-' + id_no)
        .text('Post #: ', id_no).appendTo(sub)

        let user_id = $('<span></span>')
        .attr('id', 'user-'+ id_no)
        .appendTo(sub)
    }
    getPictures()
}
const getPictures = ()=> {
    pics = []
    fetch(url)
    .then((res) =>{
        return res.json()
    })
    .then((data) => {
        for (let i = 0; i< 20; i++){
            let picSrc = data ['hits'][i]['webformatURL']
            let altText = data ['hits'][i]['tags']
            $("#img-"+i).attr("src", picSrc).attr("alt", altText)
        }

    })
    .catch((err)=> console.log(err))
}

makePosts();
