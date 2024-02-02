let i=0;
let data=document.querySelector(".data");
const myLibrary=[];

function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.info = function(){
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;
    }
}

function addBook(){
    let title=document.getElementById("naslov").value;
    let author=document.getElementById("pisac").value;
    let pages=document.getElementById("strana").value;
    let read=document.getElementById("citano").value;
    if(read!=="" && title!=="" && author!=="" && pages!=="")
    {
        myLibrary[i]=new Book(title,author,pages,read);
        i++;
    }
    clearall();
    displayBook(myLibrary,i);
}

function displayBook(library,i){
    for(let j=0;j<i;j++)
    {
        const fulldiv=data.appendChild(document.createElement("div"));
        fulldiv.classList.add("line");
        const paragraph=fulldiv.appendChild(document.createElement("p"));
        paragraph.textContent=library[j].info();
        const rmvbtn=fulldiv.appendChild(document.createElement("button"));
        rmvbtn.classList.add("button2");
        rmvbtn.textContent="Remove";
        rmvbtn.setAttribute("id",j);
    }
}

function clearall(){
    while (data.lastElementChild) {
        data.removeChild(data.lastElementChild);
      }
}


/*
let dugme=document.querySelectorAll(".button2");
        dugme.forEach((e)=>{
            e.addEventListener('click',()=>{
                let broj=Number(e.id);
                let z=i-1;
                console.log(z,broj);
                while (z>broj) {
                    data.removeChild(data.lastElementChild);
                    
                }
            });
        });

*/

/*
        const fulldiv=data.appendChild(document.createElement("div"));
        fulldiv.classList.add("line");
        const paragraph=fulldiv.appendChild(document.createElement("p"));
        const rmvbtn=fulldiv.appendChild(document.createElement("button"));
        rmvbtn.classList.add("button2");
        rmvbtn.textContent="Remove";
        rmvbtn.setAttribute("id",i);
*/