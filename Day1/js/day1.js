const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const image5 = document.getElementById("image5");
const image6 = document.getElementById("image6");
const image7 = document.getElementById("image7");
const image8 = document.getElementById("image8");
const image9 = document.getElementById("image9");

const images = [image1,image2,image3,image4,image5,image6,image7,image8,image9]


const resizeImg1 = () => {
 if(image1.classList.contains("image1")) {
   image1.classList.remove("image1")
 } else {
   image1.classList.add("image1")
 }
}

const resizeImg2 = () => {
  if(image2.classList.contains("image2")) {
    image2.classList.remove("image2")
  } else {
    image2.classList.add("image2")
  }
}
const resizeImg3 = () => {
  if(image3.classList.contains("image3")) {
    image3.classList.remove("image3")
  } else {
    image3.classList.add("image3")
  }
}
const resizeImg4 = () => {
  if(image4.classList.contains("image4")) {
    image4.classList.remove("image4")
  } else {
    image4.classList.add("image4")
  }
}
const resizeImg5 = () => {
  if(image5.classList.contains("image5")) {
    image5.classList.remove("image5")
  } else {
    image5.classList.add("image5")
  }
}
const resizeImg6 = () => {
  if(image6.classList.contains("image6")) {
    image6.classList.remove("image6")
  } else {
    image6.classList.add("image6")
  }
}
const resizeImg7 = () => {
  if(image7.classList.contains("image7")) {
    image7.classList.remove("image7")
  } else {
    image7.classList.add("image7")
  }
}
const resizeImg8 = () => {
  if(image8.classList.contains("image8")) {
    image8.classList.remove("image8")
  } else {
    image8.classList.add("image8")
  }
}
const resizeImg9 = () => {
  if(image9.classList.contains("image9")) {
    image9.classList.remove("image-small")
    image9.classList.remove("image9")
  } else {
    image9.classList.add("image9")
  }
}

const beginState = () => {
  images.forEach( image => {
    if(image.classList.contains("large") || image.classList.contains("extra-large")) {
      setInterval(() => {
        if(image.classList.contains("large")) {
          image.classList.remove("large").add("small")
        } else {
          image.classList.remove("extra-large")
          image.classList.add("small")
        }
      },50)
    }
  })
}
images.forEach(image => image.onload = beginState)

