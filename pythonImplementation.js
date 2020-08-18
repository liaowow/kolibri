const scientists = {
  "e3d46de8c7194cb1a32275195c15dc07": {
      "id": "e3d46de8c7194cb1a32275195c15dc07",
      "name": "Niels Bohr",
      "specialization": "Quantum Mechanics",
      "known_for": ["Wave/Particle Duality", "Uncertainty"],
  },
  "7064c3f9c99743b2838bbd8eacafe0d6": {
      "id": "7064c3f9c99743b2838bbd8eacafe0d6",
      "name": "Max Planck",
      "known_for": "Planck's constant",
  },
  "b19e575a0d3f4151a1391452d8a47a44": {
      "id": "b19e575a0d3f4151a1391452d8a47a44",
      "name": "Jane Goodall",
      "specialization": "Apes",
  },
  "17d9d0908f454253b5337e8c1ef4b564": {
      "id": "17d9d0908f454253b5337e8c1ef4b564",
      "name": "Caroline Herschel",
      "specialization": "Stars",
  },
}

function getScientistInfo(id) {
  for(let key in scientists) {
    if (key === id) {
      return scientists[key]
    }
  }
}

/* 
Given a scientist's `id`, a function that returns a JSON serialization of the information we have on that particular scientist.
*/
function jsonStringifyScientistInfo(id) {
  const scientistObj = getScientistInfo(id)
  return JSON.stringify(scientistObj) 
}

/* 
Given an object containing info on multiple scientists, a function that dumps a JSON serialization of that information.
*/
function jsonStringifyScientistsInfo(scientists) {
  return JSON.stringify(scientists)
}
