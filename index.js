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