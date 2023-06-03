let transactions = [
    {name: 'bread', category: 'groceries', amount: 5},
    {name: 'milk', category: 'groceries', amount: 3},
    {name: 'newspaper', category: 'entertainment', amount: 2},
    
];
const  getCategory=transactions.filter(transactions=>transactions.category==='groceries');
const totalAmount=getCategory.reduce((sum,transactions)=>sum+transactions.amount,0);
console.log(totalAmount);
 
//---------------------------------------------------------
let users = [
    {name: 'John', age: 17, email: 'john@gmail.com'},
    {name: 'Jane', age: 22, email: 'jane@gmail.com'},
    {name: 'Bill', age: 16, email: 'bill@gmail.com'},
  
];
const getAge=users.filter(users=>users.age>18);
const getEmail=getAge.map(function(users){
    return users.email
}
)
console.log(getEmail)
//-------------------------------------------------------------
let numbers = [1, 2, 3, 4, 5];
const square=numbers.map(numbers=>numbers**2)
const sumSquare=square.reduce((sum,square)=>sum+square,0)
console.log(sumSquare)

//------------------------------------------------------------
let students = [
    {name: 'John', mathScore: 90, englishScore: 85, scienceScore: 85},
    {name: 'Jane', mathScore: 85, englishScore: 90, scienceScore: 88},
    {name: 'Bill', mathScore: 80, englishScore: 82, scienceScore: 84},
   ];

  let HighestAverage = students.reduce((highestStudent, student) => {
    let totalScore = student.mathScore + student.englishScore + student.scienceScore;
    let averageScore = totalScore / 3;
    
    if (!highestStudent || averageScore > highestStudent.averageScore) {
      return {name: student.name, averageScore: averageScore};
    }
    
    return highestStudent;
  }, null);
  
  console.log(HighestAverage);

  //---------------------------------------------------------
  
  let strings = ['apple', 'orange', 'banana', 'blueberry', 'grape'];
 let string= strings.join().toUpperCase()
let array= string.split() 
  console.log(array)