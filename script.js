let myLibrary = [];

//Constructor
function Book(title, author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.beenread = read;


}

Book.prototype.info = function(){

    return "Title:" + this.title + " Author:"+ this.author +" Pages:"+ this.pages + " Read:"+ this.read;
    
}
//Add book to library
function addBooktoLibrary(){

    var card  = new Book;

    card.title = window.prompt("Enter Book Title:");
    card.author = window.prompt("Enter Book Author:");
    card.pages = window.prompt("How many Pages:");
    card.read = window.prompt("Has the Book been Read (Yes/No)?");

    myLibrary.push(card);
    updateLibrary();
}
function clearcards(){
  
    for(let i = 0;i < myLibrary.length;i++){
        var card = document.getElementById((i+1));
        if (card != null){
        card.remove();
    }
    }


}
function clearcard(b){
    var del = document.getElementById(b);
    if (del != null){
    del.remove();
    }
}

function clearlib(){
    var div = document.getElementsByClassName('Book');
    while(div.length > 0){
        div[0].parentNode.removeChild(div[0]);
    }
    myLibrary = [];
}

Book.prototype.toggleread = function()
{
 
    if(this.read != true && this.read != false){
        return false;
    }
    if(this.read){
        return false;
    }
    else{
        return true;
    }
}

function updateLibrary(){
        clearcards();
        for(let i = 0;i < myLibrary.length;i++){
            //Create Card
            const bookdis = document.createElement('div');
            bookdis.classList.add('Book');
            bookdis.id = (i+1);
            bookdis.textContent = myLibrary[i].info();
            
            
            //Create Delete
            const delBtn = document.createElement('button');
            delBtn.addEventListener('click',() => {
                clearcards();
                let removed  = myLibrary.splice(i,1);
                updateLibrary();
            });
            delBtn.textContent = "Delete";
            bookdis.appendChild(delBtn);
            content.appendChild(bookdis);
            
            // Create Readable
            const readBtn = document.createElement('button');
            readBtn.addEventListener('click',() => {
                myLibrary[i].read =  myLibrary[i].toggleread();
                
            });
            readBtn.textContent = "Read Status Toggle";
            bookdis.appendChild(readBtn);
            content.appendChild(bookdis);


        }



}



//DOM Buttons
const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
container.appendChild(content)

const control = document.createElement('div');
control.classList.add('control');
container.appendChild(control)



const AddBtn = document.createElement('button');

AddBtn.addEventListener('click',addBooktoLibrary);
AddBtn.textContent = "Add Book to Library";
control.appendChild(AddBtn);

const ClrBtn = document.createElement('button');

ClrBtn.addEventListener('click',clearlib);
ClrBtn.textContent = "Clear Library";
control.appendChild(ClrBtn);