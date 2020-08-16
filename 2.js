let readme= function(btnelement){

    let comment1=btnelement.parentElement.parentElement.children[0].children[0];
    let comment= comment1.value;

    let password1= btnelement.parentElement.parentElement.children[1].children[0];
    let password= password1.value;

    if( comment==""){
        return;
    }
    if(password=="")
    {
        return;
    }

    let newelement= btnelement.parentElement.parentElement.parentElement.parentElement.children[2].children[0].cloneNode(true);
        newelement.children[0].innerHTML=comment;
        newelement.children[1].innerHTML= password;

    let commentbox= btnelement.parentElement.parentElement.parentElement.parentElement.children[2];
     commentbox.insertBefore(newelement, commentbox.firstChild);

     comment1.value="";
     password1.value="";
}