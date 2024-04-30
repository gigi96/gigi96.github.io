const myImage = document.querySelector("img");

const path_img1 = "images/camera.webp"
const path_img2 = "images/camera2.webp"

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === path_img1)
  {
    myImage.setAttribute("src", path_img2);
  }
  else
  {
    myImage.setAttribute("src", path_img1);
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName()
{
    const myName = prompt("Please enter your name.");
    if (!myName)
    {
      setUserName();
    } 
    else
    {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name"))
{
    setUserName();
}
else
{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};
  

