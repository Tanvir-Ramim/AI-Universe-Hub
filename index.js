const loadData=async(isShow)=>{
    const res=await fetch('https://openapi.programming-hero.com/api/ai/tools')
    const data=await res.json();
    
    display(data.data.tools,isShow)
    
}


 const display=(data,isShow)=>{
  
    const cardContainer=document.getElementById('card-container')
    console.log(data)
    let c=0;
    if(isShow){
        const showAll=document.getElementById('show-all')
        showAll.classList.add('hidden')
    }
    else{
        data=data.splice(0,6)
    }

    
    data.forEach(element => {
        console.log(data[0].published_in
            )
        
          const div=document.createElement('div')
          div.classList=`card w-96 bg-base-100 shadow-xl border rounded-lg `
          div.innerHTML=`  <figure><img src="${data[c].image}" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title text-2xl font-semibold">Features </h2>
            <ol class="list-decimal ml-4">
              <li>${data[c].features[0]}</li>
              <li>${data[c].features[1]}</li>
              <li>${data[c].features[2]}</li>
            </ol>
            <div class=" border  mt-4"></div>
            <div>
              <h1 class="mt-2 text-2xl font-semibold">${data[c].name}</h1>
              <h1>${data[c].published_in}</h1>
              <button class="btn btn-sm mt-3 bg-pink-800 text-white">More Details</button>
            </div>
          </div>`
          cardContainer.appendChild(div)
          c++
    });
 } 
     
const showAll=(isShow)=>{
    loadData(true)
}

 
 loadData()