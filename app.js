let url = "https://quote-garden.onrender.com/api/v3/quotes/random";

let btn = document.querySelector(".Generate-button");

btn.addEventListener("click",async ()=>{
    let res =  await getquote()

    let p1 = document.querySelector("#quote");
    let p2 = document.querySelector("#auther");

    p1.innerText = `"` +res[0] + `"`;
    p2.innerText = `-` +res[1];
})

async function getquote(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        let qoute =  data.data[0].quoteText;
        let Author = data.data[0].quoteAuthor;
        return [qoute,Author];
    }catch(err){
        console.log(`error found ${err}`);
        retur `error found ${err}`;
    }
};
