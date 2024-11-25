let creatures = [];
let generateButton;
function setup() {
  createCanvas(600, 400);
  generateButton = createButton('Generate Creature');
  generateButton.position(10, 10);
  generateButton.mousePressed(() => {
    creatures.push(generateCreature());
  });
}

function draw() {
  background(220);

  for (let i = 0; i < creatures.length; i++) {
    drawCreature(creatures[i], width / 2, height / 2 + i * 50);
  }
}

function generateCreature() {
  const size = random(20, 80);
  const bodyColor = color(random(255), random(255), random(255));
  const eyeCount = floor(random(1, 4));
  const legCount = floor(random(0, 6));
  const hasWings = random([true, false]);
  return { size, bodyColor, eyeCount, legCount, hasWings };
}

function drawCreature(creature, x, y) {
  noStroke();

  fill(creature.bodyColor);
  ellipse(x, y, creature.size, creature.size);

  fill(0);
  for (let i = 0; i < creature.eyeCount; i++) {
    let eyeX = x + map(i, 0, creature.eyeCount - 1, -creature.size / 4, creature.size / 4);
    ellipse(eyeX, y - creature.size / 4, creature.size / 8, creature.size / 8);
  }

  for (let i = 0; i < creature.legCount; i++) {
    let legX = x + map(i, 0, creature.legCount - 1, -creature.size / 3, creature.size / 3);
    line(legX, y + creature.size / 2, legX, y + creature.size);
  }

  if (creature.hasWings) {
    fill(255, 200);
    triangle(x - creature.size, y, x - creature.size / 2, y - creature.size, x, y);
    triangle(x + creature.size, y, x + creature.size / 2, y - creature.size, x, y);
  }
}
