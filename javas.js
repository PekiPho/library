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
        const fulldiv=data.appendChild(document.createElement("div"));
        fulldiv.classList.add("line");
        const paragraph=fulldiv.appendChild(document.createElement("p"));
        const rmvbtn=fulldiv.appendChild(document.createElement("button"));
        rmvbtn.classList.add("button2");
        rmvbtn.textContent="Remove";
        rmvbtn.setAttribute("id",i);

        myLibrary[i]=new Book(title,author,pages,read);
        paragraph.textContent=myLibrary[i].info();
        i++;
    }
}


