var resume = [{
    "name":"Silvia",
    "age":"23",
    "qualification":"BE",
    "experience":"2",
    "expert":"Java",
    "mailId":"xxx@gmail.com"
  },
  {
    "name":"Mary",
    "age":"24",
    "qualification":"MSC",
    "experience":"1",
    "expert":"python",
    "mailId":"xyz@gmail.com"
    }];
  //for in loop  
  for(let value in resume){
    console.log(resume[value].name,resume[value].expert);
    }
    
  //for loop  
  for(let i =0;i<resume.length;i++){
    console.log(resume[i].age);
    }
    
  //for of loop
    for(let person of resume){
      console.log(person.name,person.qualification);
      }
  
  
  
  