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

function addBook(){
    
}

const knjiga= new Book('zoran','bojan','295','read');
knjiga.info();