// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.

// a) Create a test with an expect statement using the variable provided.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."]

//TEST:
describe("personInfo", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their names capitalized.", () => {
    expect(personInfo(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// b) Create the function that makes the test pass.
//PROCESS:
 //Delcare a funciton - personInfo
    //Parameter- array
    //Declare new variable- name, use .map() to access :name
    //Declare new variable- splitName to join the array and then split again so I can iterate over each word individually
    //Declare new variable- capsName to .map() over array of names and uppercase the characters at the index of 0 and joining the string using .substr(1) and splitting again to have an array of now capitilized strings
    //Delcare new variable- firstName and use .filter() to access the first name values at the even indexes
    //Declare a new variable- lastName and use .filter() to access the last name values at the odd indexes
    //Declare new variable- occupation, use .map() to access :occupation
    //Declare new variable- info, and use string interpolation
    //return info
    //Input & output: people --> ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."]

    const personInfo = (array) => {
      let name = array.map(value => value.name)
      let splitName = name.join(" ").split(" ")
      let capsName = splitName.map(value => value.charAt(0).toUpperCase() + value.substr(1)).join(" ").split(" ")
      let firstName = capsName.filter((value, index) => {
          return index % 2 === 0
      })
      let lastName = capsName.filter((value, index) => {
          return index % 2 === 1
      })
      let occupation = array.map(value => value.occupation)
        let info = `"${firstName[0]} ${lastName[0]} is a ${occupation[0]}.", "${firstName[1]} ${lastName[1]} is a ${occupation[1]}.", "${firstName[2]} ${lastName[2]} is a ${occupation[2]}."`
          return info.split()
    } 
  console.log(personInfo(people))
// I had a hard time getting this test to pass.. When I console log it, it gives me the correct expected output but when I test it, it doesn't pass and I believe it's because of the back ticks in the beginning of the string interpolation but it needs those back ticks to work! ahhh😣
// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

//TEST:
  describe("modThree", () => {
    it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
      expect(modThree(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
      expect(modThree(hodgepodge2)).toEqual([ 2, 1, -1 ])
    })
  })

// b) Create the function that makes the test pass.
//PROCESS:
  //Declare a function- modThree
  //Parameter- array
  //Iteration- .filter(), to get an array of numbers only and assign it to a variable- filteredArr
  //Iteration- return filteredArr.map()  value % 3
  //Inputs and outputs: hodgepodge1 --> [ 2, 0, -1, 0 ], hodgepodge2 --> [ 2, 1, -1 ]

  const modThree = (array) => {
    let filteredArr = array.filter(value => typeof value === "number")
    return filteredArr.map(value => {
            return value % 3
    })
  }

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

//TEST:
  describe("doMath", () => {
    it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
      expect(doMath(cubeAndSum1)).toEqual(99)
      expect(doMath(cubeAndSum2)).toEqual(1125)
    })
  })


// b) Create the function that makes the test pass.
// PROCESS:
  //Declare a function - doMath
  //Parameter - array
  //Iteration - .map(value => value ** 3) --> we will get new arrays of [8, 27, 64] & [0,125,1000]
  //.reduce((a,b) => a + b) to get the sum of the numbers
  //Inputs & outputs: cubeAndSum1 --> 99, cubeAndSum2 --> 1125

  const doMath = (array) => {
   return array.map(value => value ** 3).reduce((a,b) => a + b)
  }
 
  // .map() is my fav! 😎