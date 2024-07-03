/*
Solve the following problems using higher order array methods

*/
const users = [
    { name: 'Reuben',
      username: '@blood_pressure_killa',
      followers: 1,
      verified: false,
      bio: "It's an honor and a privilege."
    },
    { name: 'Laisha',
      username: '@passaic_papi',
      followers: 700,
      verified: true,
      bio: "My commute is longer than yours."
    },
    { name: 'Anne',
      username: '@i_love_bambas',
      followers: 12,
      verified: false,
      bio: "@mayabee is my best friend"
    },
    { name: 'Steph',
      username: '@queen_of_the_kew',
      followers: 1200,
      verified: false,
      bio: "✌🏼"
    },
    { name: 'Carmen',
      username: '@omar_apollo_fanclub',
      followers: 1200000,
      verified: true,
      bio: "My favorite restaurants are outback steakhouse and buffalo wildwings. My favorite stores are Zara, H&M, and Forever 21."
    }
  ]
  /*
  Q1 

  P
    Write a function names logAllNames that logs all the 
  names of each user to the console.
  INPUT: object
  OUTPUT: Object value for name (string)

  E
  Will log each name to the console
Reuben
Laisha
Anne
Steph
Carmen
  
  D
  object
  
  A
  call object and then call name object
  
  C
  */

 const logAllNames = (users) => {
    users.forEach(user => {
        console.log(user.name);
      });
 }
 logAllNames(users) 

 /*
 Q2

 P
 Write a function, getAllTags, that will log strings that 
 contain the name and username property for each user to 
 the console.
 INPUT: Object
 OUTPUT: string

 E
 getAllTags(users)
   These strings will be printed to the console
  'Hi my name is Reuben, and my tag is @blood_pressure_killa!',
  'Hi my name is Laisha, and my tag is @passaic_papi!',
  'Hi my name is Anne, and my tag is @i_love_bambas!',
  'Hi my name is Steph, and my tag is @queen_of_the_kew!',
  'Hi my name is Carmen, and my tag is @omar_apollo_fanclub!'

 
 D
 object

 A
 call users
 console.log a string including name and username

 C

 */
const getAllTags = (users) => {
    users.forEach(({name, username}) => {
        console.log(`Hi my ${name} is Reuben, and my tag is ${username}!`);
    });
} 
getAllTags(users);

/*
Q3

P
Write a function, sumAllFollowers that returns a sum of the 
number of followers each user has.

INPUT: object
OUTPUT: number

E
sumAllFollowers(users) //returns 1201913

D
Object

A
access object
initiate a sum variable and start at 0
reduce all object values for `followers` into sum
return sum variable

C


*/
const sumAllFollowers = (users) => {
    //return users.reduce((total, curr) => total + curr.followers, 0)
    return users.reduce((total, {followers}) => total + followers, 0)
};
console.log(sumAllFollowers(users));