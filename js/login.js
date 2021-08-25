function giris_yap(){
    var val;
    val=window.document;
    val=document.querySelector(".kayit");
    val.classList.add("lg:flex");
    val=document.querySelector(".kayitphone");
    val.classList.remove("hidden");

        document.querySelector(".girish").classList.remove("lg:flex");
        document.querySelector(".girishphone").classList.add("hidden");






    console.log(val);

}

function kayit_yap(){
    var val;
    val=window.document;
    val=document.querySelector(".girish");
    val.classList.add("lg:flex");
    val=document.querySelector(".girishphone");
    val.classList.remove("hidden");
    document.querySelector(".kayit").classList.remove("lg:flex");
    document.querySelector(".kayitphone").classList.add("hidden");

    console.log(val);

}