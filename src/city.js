let historylength = cities.length;

let history = ()=>
{
    let placeinfo = document.querySelector(".place-info");
    let history = document.getElementById("history");
    if(history.style.display !="block")
    {
        history.style.display = "block";
        placeinfo.style.display = "none";
    }
    
}

let closehistory = ()=>
{
    let placeinfo = document.querySelector(".place-info");
    let history = document.getElementById("history");
    if(history.style.display ="block")
    {
        history.style.display = "none";
        placeinfo.style.display = "flex";
    }
}