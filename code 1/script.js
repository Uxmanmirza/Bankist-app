const JuliaData = [3, 5, 2, 12, 7];
const KateData = [4, 1, 15, 8, 3];

let checkDogs = function () {
  const modData = JuliaData.splice(1, 2);
  const dogs = modData.concat(KateData);
  console.log(dogs);

  dogs.forEach(function (dogs, i) {
    if (dogs >= 3) {
      console.log(`Dog number ${i + 1} is an adult and is ${dogs} year old`);
    } else {
      console.log(
        `Dog number ${i + 1} is still a puppy and is ${dogs} year old`
      );
    }
  });
};
checkDogs();
