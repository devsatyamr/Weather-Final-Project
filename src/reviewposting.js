let postreview = ()=>
{
    let review = document.querySelector(".rating-box");
    let thanks = document.querySelector(".thanks");
    if(review.style.display != "none")
    {
        review.style.display = "none";
        thanks.style.display = "block";
    }
}