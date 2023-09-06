const memeBtn = document.getElementById('meme-btn')
const memeText = document.querySelector('.meme-text')
const memeAuthor = document.querySelector('.meme-author')
const memeImg = document.querySelector('.meme-img')


const updateDetail = (url, title, author) => {
    memeImg.setAttribute("src", url)
    memeText.innerHTML = title
    memeAuthor.innerHTML = `meme by: ${author} `

}

let index = 0;

async function generateMeme(){
   try {

    let res = await fetch("https://api.imgflip.com/get_memes")
    res = await res.json()
    console.log(res)
     if(res.success){
        const data = res.data.memes[index]
        // console.log(index, res.data.memes.length);

        updateDetail(data.url, data.name, data.id)
        if(index == res.data.memes.length - 1){
            index = 0
        }else{
            index++

        }

     }

   } catch (error) {
    console.log(error.message)
   }
}

memeBtn.addEventListener('click', generateMeme)

window.addEventListener('load', generateMeme)





// function generateQuote(){
//     fetch("https://api.quotable.io/random")
//     .then((data) => data.json())
//     .then((item) => {
//         memeText.innerHTML = item.content
//         memeAuthor.innerHTML = item.author
//     })
// }
// window.addEventListener('load', generateQuote)