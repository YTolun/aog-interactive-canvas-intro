function changeAnimalColor(animal, color) {
    const animalContainer = document.getElementById(animal);
    const animalSVG = animalContainer.children[0];

    animalSVG.style.fill = color;
}

// Register assistant canvas callbacks
const callbacks = {
  onUpdate(state) {
      changeAnimalColor(state.animal, state.color);
  },
};

assistantCanvas.ready(callbacks);