let i=1;
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

let knjiga= new Book('zoran','bojan','295','read');
myLibrary[0]=knjiga;

function addBook(){
    let title=document.getElementById("naslov").value;
    let author=document.getElementById("pisac").value;
    let pages=document.getElementById("strana").value;
    let read=document.getElementById("citano").value;
    if(read!=="" && title!=="" && author!=="" && pages!=="")
    {
        const paragraph=data.appendChild(document.createElement("p"));
        myLibrary[i]=new Book(title,author,pages,read);
        paragraph.textContent=myLibrary[i].info();
        i++;
        for(let j=0;j<i;j++)
        {

            //myLibrary[j].info();
        }
    }
}


