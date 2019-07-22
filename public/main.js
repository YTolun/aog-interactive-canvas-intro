function changeAnimalColor(animal, color) {
    const animalContainer = document.getElementById(animal);
    const animalSVG = animalContainer.children[0];

    animalSVG.style.fill = color;
}

// Register interactive canvas callbacks
const callbacks = {
  onUpdate(state) {
      changeAnimalColor(state.animal, state.color);
  },
};

interactiveCanvas.ready(callbacks);

// Get the header height of the device and set the top body padding accordingly
interactiveCanvas.getHeaderHeightPx().then((headerHeight) => {
    document.body.style.paddingTop = `${headerHeight}px`;
});