let plants = document.querySelectorAll('.plant')

let dragElement = (plant) => {
  // position variables
  let posX = 0 
  let posY = 0
  let newPosX = 0
  let newPosY = 0;

  // listen for pointer down event on the plant
  plant.addEventListener('pointerdown', pointerDrag)

  // pointer drag function to store positions
  function pointerDrag(e){
    e.preventDefault()
    newPosX = e.clientX
    newPosY = e.clientY


    let elDrag = (e) => {
      posX = newPosX - e.clientX
      posY = newPosY - e.clientY
      newPosX = e.clientX
      newPosY = e.clientY
      console.log(posX, posY, newPosX, newPosY)

      plant.style.position = "absolute"
      plant.style.top = plant.offsetTop - posX + "px"
      console.log("plant offsettop", plant.offsetTop)
      plant.style.left = plant.offsetLeft - posY + "px"

    }

    let stopElDrag = () => {
      document.onpointerup = null
      document.onpointermove = null
    }

    document.onpointermove = elDrag
    document.onpointerup = stopElDrag
  }

}

plants.forEach(plant => {
  dragElement(plant)
})
