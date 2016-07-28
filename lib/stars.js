
function startStars () {
  let stars = [];
  const sky = document.getElementById("sky");

  for (let i = 0; i < 6; i++) {
    generateStar();
  }


  window.setInterval(generateStar, 3000);
  window.setInterval(removeStar, 2000);


  function generateStar () {
    const top = generateStarLocation() ;
    const left = generateStarLocation();

    const newStar = document.createElement("div");
    newStar.className="star";
    newStar.setAttribute("style", `top: ${top}%;
                                   left: ${left}%;
                                   -webkit-animation: twinkle ${twinkleSpeed()}s infinite;
                                   -moz-animation: twinkle ${twinkleSpeed()}s infinite;`);
    sky.appendChild(newStar);
    stars.push(newStar);
  }

  function twinkleSpeed () {
    return Math.random()*2 + 0.75 ;
  }

  function removeStar () {

    if (stars.length > 10) {
      const randInd = Math.floor( Math.random() * stars.length );
      sky.removeChild(stars[randInd]);
      stars.splice(randInd,1);
    }
  }

  function generateStarLocation () {
    return Math.floor( Math.random() * 95 );
  }

}


document.addEventListener("DOMContentLoaded", startStars);
