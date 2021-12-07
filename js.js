function likeHeart() {
    let heart = document.querySelector('.heart');
    let like = document.querySelector('.like');
    if (heart.src.match("img/heart.jpg")){
        heart.src = "img/heart3.jpg";
        like.innerHTML = "2,711 likes";
    }
    else {
        heart.src = "img/heart.jpg";
        like.innerHTML = "2,710 likes";
    }
}

