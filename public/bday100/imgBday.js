let images = [
    "./assets/images/img (1).png",
    "./assets/images/img (2).png",
    "./assets/images/img (3).png",
    "./assets/images/img (4).png",
    "./assets/images/img (5).png",
    "./assets/images/img (6).png",
    "./assets/images/img (7).png",
    "./assets/images/img (8).png",
    "./assets/images/img (9).png"
];
const threeRandomNumbers = [
    Math.random()*2,
    Math.random()/2,
    Math.random()*2
]

const marginCoeff = 100


const imageContainer = document.getElementsByClassName('content-images')[0];
images.forEach((image,key)=>{
    let newChild = document.createElement('img')
    newChild.setAttribute("src",image)
    newChild.setAttribute("class","grid-image")
    newChild.setAttribute("alt","jsdafhsdb")
    newChild.setAttribute("style",`--margin--top : ${threeRandomNumbers[key%3] * marginCoeff}px ;
                                    --margin--bottom : -${Math.max(...threeRandomNumbers) * marginCoeff - 10}px`)
    imageContainer.appendChild(newChild)
})

document.getElementsByClassName('content-images')[0].setAttribute('style',`--margin--top--content--images--container : -${Math.min(...threeRandomNumbers) * marginCoeff - 15}px`)