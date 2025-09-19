function findMatching(drivers, name) {
  // Match drivers regardless of case
  return drivers.filter(
    driver => driver.toLowerCase() === name.toLowerCase()
  );
}

function fuzzyMatch(drivers, letters) {
  // Match drivers whose names start with given letters
  return drivers.filter(
    driver => driver.startsWith(letters)
  );
}

function matchName(drivers, name) {
  // drivers is an array of objects like { name: "Bobby", hometown: "Pittsburgh" }
  return drivers.filter(
    driver => driver.name === name
  );
}

module.exports = {
  findMatching,
  fuzzyMatch,
  matchName
};

