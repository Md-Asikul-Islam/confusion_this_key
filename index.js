First_part

// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };

//  ১। জাভাস্ক্রিপ্টে অবজেক্ট এর ভিতরে কোন কিছু কে এক্সেস করতে (this.ObjectPropertyName) 

//  ২। মেথড এর  মধ্যে this বলতে তার নিজস্ব অবজেক্টে বুজায় ।
//  এখানে this বলতে person অবজেক্টে বুজানো হয়েছে ।

//  অবজেক্টের মধ্যে property আকারে ফাংশনকে মেথড বলে । fullName কে এখানে মেথড বলা হয়েছে ।

//  ৩। যদি সরাসরি this লিখলে সেটা window বা global অবজেক্টে বুজায় ।

//  ৪। সাধারন ফাংশনের মধ্যে this কে global অবজেক্ট বুজায় কিন্তু strict mode এ undefined দেখাবে ।

//  ৫। কোন  জাভাস্ক্রিপ্টে  ইভেন্ট এ this হল ঐ  ইভেন্ট যে এলিমেন্ট রিসিভ করে তাকে বুজায় ।

//  ৬। Explicit Function Binding [প্রত্যক্ষভাবে bindig করা  ]

// একাধিক অবজেক্টের ক্ষেত্রে this কে ইচ্ছামত ব্যবহার করতে চাইলে call() এবং apply()  মেথড ব্যবহার করব ।


//  const person1 = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const person2 = {
//     firstName:"John",
//     lastName: "Doe",
//   }

  
// console.log(person1.fullName.call(person2)) এখানে call() মেথডএর প্যারামিটারে  বলে দিতে হবে this কে হবে । 




// Second_part

// ১। Implicit binding : পরোক্ষভাবে binding বুঝায় ।

// const printPlayerNameFunction = function (obj) {
//     obj.printPlayerName = function (){
//         console.log(this.name);
//     };
// };


// let sakib = {
//     name : "Sakib", 
//     age  : 35, 

// };

// let tamim = {
//     name : "Tamim ", 
//     age  : 36, 

// };

// printPlayerNameFunction(sakib);
// printPlayerNameFunction(tamim);

// sakib.printPlayerName();
// tamim.printPlayerName();

// *** this হচ্ছে এখানে parent element বা parent Object 

// *** আমাদের খেয়াল রাখতে হবে ফাংশনটা কোথায় কল হয়েছে, সেখানে ডটের  আগে যে অবজেক্ট থাকবে ঐটাই this 

// var person = function (name , age ){
//     return { 
//         name : name, 
//         age  : age, 
//         printName: function () {
//             console.log(this.name);

//         },
//         father : {
//             name : " Mr xxx",
//             printName : function (){
//                 console.log(this.name);
//             }
//         }
//     };
// };


// var shakib = person ( "shakib" , 36);
// shakib.printName();                                    output:::: Shakib

// shakib.father.printName();                           output::::   Mr xxx


// *** এখানেও সেইম রুল হয়েছে অর্থাৎ ডটের আগে যে অবজেক্ট থাকবে সেটাই this




২। Explicit binding : প্রত্যক্ষভাবে  binding বুঝায় ।

case: 1


var printName = function (){
    console.log(this.name);
}

var sakib = {
    name: "sakib", 
    age : 35
};


printName().call(sakib)

এখানে আমরা চাচ্ছি printName() ফাংশন দিয়ে অবজেক্টে কল করব । যেহেতু printName() ফাংশনটা গ্লোবাল  scope আছে , টাই আমরা this দিয়ে এক্সেস করতে পারব না ।

*** .call() ফাংশন প্রথম যে প্যারামিটার নিবে , সেটা একটা অবজেক্টে হবে । অর্থাৎ কোন অবজেক্টে দিয়ে আমি ফাংশনটা কল করব ।।


case: 2   একের অধিক ্ প্যারামিটার থাকলে 



*** .call() দ্বিতীয়ও প্যারামিটারে আমরা  ইচ্ছামত ভ্যালু পাস করতে পারব , একের অধিক ও দেয়া যাবে । 

var v1 = "Handsome"

var v2 = " Al-rounder"

var v3 = " Best player "

var printName = function (v1, v2, v3){
    console.log(`${this.name} is ${v1} , ${v2} and ${v3}` );
}

var sakib = {
    name: "sakib", 
    age : 35
};


printName().call(sakib, v1, v2, v3);


case: 3 দ্বিতীয়ও প্যারামিটারে অ্যাঁরে পাস করা এবং apply() মেথড 


var printName = function (){
    console.log(this.name);
}

var sakib = {
    name: "sakib", 
    age : 35
};



var v = ["Handsome", " Al-rounder", " Best player "]

printName().apply(sakib, v)


case: 4 bind() মেথড

*** .bind() মূলত একটা ফাংশন রিটার্ন করে , অন্য মেথডের মত কল করে না , কল করতে হলে variable store করতে হবে ।

*** দ্বিতীয়ও প্যারামিটারে আমরা  ইচ্ছামত ভ্যালু পাস করতে পারব , একের অধিক ও দেয়া যাবে । 
 


var newFunc = printName.bind(sakib, v1, v2, var)


৩।  new binding : 





৪। window binding :