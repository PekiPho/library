let i=1;
const myLibrary=[];

function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.info = function(){
        console.log(this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read);
    }
}

let knjiga= new Book('zoran','bojan','295','read');
myLibrary[0]=knjiga;

function addBook(){
    let title=document.getElementById("naslov").value;
    let author=document.getElementById("pisac").value;
    let pages=document.getElementById("strana").value;
    let read=document.getElementById("citano").value;
    console.log(title);
    
    myLibrary[i]=new Book(title,author,pages,read);
    console.log(myLibrary[1].info())
    i++;
    for(let j=0;j<i;j++)
    {
        myLibrary[j].info();
    }
}


