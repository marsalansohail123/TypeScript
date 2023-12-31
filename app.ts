// ============= DEFAULT TYPES =============

// let a = 'abc';
// a = 123; //error
// a = "xyz" //correct

// let a = 123;
// a = "abc"; //error
// a = 321 //correct

// let a = false;
// a = 123; //error
// a = true //correct

// let a = [""];
// a.push(123); //error
// a.push("abc"); //correct

// let arr = ["abc",1,2,3];
// arr.push(true); //error
// arr.push("xyz") //correct
// arr.push(456) //correct

// let abc;
// abc = "abc";
// abc = 123;
// abc = false;
// abc = [];
// abc = {};

// let obj = {
//     name: "Arsalan",
//     id: 10,
// }

// obj.name = 10; //error
// obj.name = "Sohail" //corret

// ============= TYPES =============

// let a: string;
// a = 123; //error
// a = "abc"; //correct

// let a: number;
// a = "abc"; //error
// a = 123; //correct

// let a: boolean;
// a = 123; //error
// a = true; //correct

// let a: string[] = [];
// // a.push(123); //error
// // a.push("a"); //correct

// let a: (string | number)[] = [];
// a.push(false); //error
// a.push("abc"); //correct
// a.push(123); //correct

// let objType: {
//     id: number,
//     name: string,
//     isActive: boolean
// };
// objType = {
//     id: "abc",
//     name: "arsalan",
//     isActive: false
// } //error
// objType = {
//     id: 1,
//     name: "abc",
//     isActive: true
// } //correct

// let arrOfObj: {
//     id: number,
//     name: string
// }[] = [
//         {
//             id: 1,
//             name: "abc"
//         },
//         {
//             id: 2,
//             name: "mno"
//         },
//         {
//             id: 3,
//             name: "xyz"
//         }
//     ]

// let arrInObj: {
//     id: number,
//     name: string,
//     items: string[],
// };

// arrInObj = {
//     id: 1,
//     name: "abc",
//     items: ["a", "b", "c"],
// }

// type myObj = {
//     id: number,
//     name: string,
//     items: (string | number)[],
// }

// let obj: myObj = {
//     id: 120126,
//     name: "abc",
//     items: ["a", "b", 1, 2]
// }

// let arr: myObj[] = [
//     {
//         id: 10003,
//         name: "abc",
//         items: ['a', 'b', 'c'],
//     },
//     {
//         id: 10546,
//         name: "def",
//         items: ['d', 'e', 'f'],
//     }
// ]

// type userArr = myObj[];

// let arr: userArr = [
//     {
//         id: 10003,
//         name: "abc",
//         items: ['a', 'b', 'c', 2],
//     }
// ]

// type config = {
//     id: number,
//     name: string,
//     theme: "light" | "dark"
// };

// let myObj: config = {
//     id: 123,
//     name: "Abc",
//     theme: "dark",
// }

// ============= SUMMARY =============

// types = string, number, boolean, {}, []
// array types = string[]
// array types = (string | number)[]
// custom obj types = {id: number, name: string}
// array in objects = objType[]

// interface user {
//     id: number,
//     name: string,
//     age: number,
//     isAdmin: boolean,
//     contact?: (number | string),
// }


// let userData: user = {
//     id: 10024,
//     name: "Arsalan",
//     age: 18,
//     isAdmin: true,
//     contact: "0336-349134",
// }

// interface Employee extends user {
//     companyName: string,
//     joiningDate?: Date,
//     salary: number
// }

// let emp: Employee = {
//     id: 10024,
//     name: "Arsalan",
//     age: 18,
//     isAdmin: true,
//     contact: "0336-349134",
//     companyName: "Koderlabs",
//     salary: 10000
// }

// interface user {
//     id: number,
//     name: string,
//     age: number
// };

// interface Emp<E> {
//     companyName: string,
//     joiningDate?: Date,
//     extras: E[]
// };

// let user: Emp<user> = {
//     companyName: "Koderlabs",
//     extras: [
//         {
//             id: 124,
//             name: "abc",
//             age: 15
//         }
//     ]
// }