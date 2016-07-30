
function startStars () {
  let stars = [];
  const sky = document.getElementById("sky");
  let maxStars = Math.floor( starDensity()/2);

  for (let i = 0; i <  maxStars; i++) {
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
    return Math.random()*2 + 1 ;
  }

  function removeStar () {

    if (stars.length >   starDensity()) {
      const randInd = Math.floor( Math.random() * stars.length );
      sky.removeChild(stars[randInd]);
      stars.splice(randInd,1);
    }
  }

  function starDensity () {
    const numStars = sky.clientHeight * sky.clientWidth / 25000;
    return numStars;
  }

  function generateStarLocation () {
    return Math.floor( Math.random() * 95 );
  }

}


document.addEventListener("DOMContentLoaded", startStars);
