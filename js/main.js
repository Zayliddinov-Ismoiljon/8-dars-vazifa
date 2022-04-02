let elForm= document.querySelector(".form");
let elSelect= document.querySelector(".form-select");
let elList= document.querySelector(".list");
let elSubmit= document.querySelector(".btn");
let elBookmarkList= document.querySelector(".bookmark-list");

let array=[]
films.forEach(film=>{
    film.genres.forEach(genre=>{
        if(!array.includes(genre)){
            array.push(genre);
        }
    })
})

for(i=0; i<array.length; i++){
    const newOption= document.createElement("option");
    newOption.value=array[i];
    newOption.textContent=array[i];
    elSelect.appendChild(newOption);
}


function myFilms(arr, element){

    element.innerHTML="";

    arr.forEach(film=>{

        let newItem= document.createElement("li");
        let newImg= document.createElement("img");
        let newHeading= document.createElement("h2");
        let newTime= document.createElement("time");
        let newSubList= document.createElement("ul");
        let newSubItem= document.createElement("li");
        let newBookmarkBtn= document.createElement("button");
    
        newItem.setAttribute("class", "list__item");
        newImg.setAttribute("src", film.poster);
        newImg.setAttribute("class", "list__img");
        newHeading.textContent=film.title;
        newHeading.setAttribute("class", "list__heading");
        newTime.textContent=dateFormat(film.release_date);
        newTime.setAttribute("datetime", "2022-03-12");
        newBookmarkBtn.textContent="Bookmark";
        newBookmarkBtn.setAttribute("class", "newBookmark-btn")
    
        for(let genere of film.genres){
            newSubItem.textContent=genere;
            newSubItem.setAttribute("class", "sublist__item");
            newSubList.appendChild(newSubItem);
            newSubList.setAttribute("class", "sublist");
        }
        
    
        newItem.appendChild(newImg);
        newItem.appendChild(newHeading);
        newItem.appendChild(newTime);
        newItem.appendChild(newSubList);
        newItem.appendChild(newBookmarkBtn);
    
        elList.appendChild(newItem); 

        newBookmarkBtn.addEventListener("click", evt=>{
            const newBookmarItem= document.createElement("li");
            const newRemoveBtn= document.createElement("button");

            newBookmarItem.textContent=film.title;
            newBookmarItem.setAttribute("class","newNookmark-item");
            newRemoveBtn.textContent="Remove";
            newRemoveBtn.setAttribute("class", "newremove-btn");
            newBookmarItem.appendChild(newRemoveBtn);
            elBookmarkList.appendChild(newBookmarItem);
            elBookmarkList.setAttribute("class", "newBokmark-list");

            newRemoveBtn.addEventListener("click", evt=>{
                elBookmarkList.removeChild(newBookmarItem);
            })

        });
    
    })
}


elForm.addEventListener("submit", evt=>{
    evt.preventDefault();

    let elSelectVal= elSelect.value;

    if(elSelectVal==="All"){
        filterFilms=films;
    }

    else{
        filterFilms=films.filter(element=>element.genres.includes(elSelectVal))
    }

    myFilms(filterFilms, elList)
    
});










