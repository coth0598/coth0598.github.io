//problems #1, 2, 3
let json = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": [
      {
        "firstName": "Sam",
        "department": "tech",
        "designation": "manager",
        "salary": 40000,
        "raise": true,
        "wfh": true
      },
      {
        "firstName": "Mary",
        "department": "finance",
        "designation": "trainee",
        "salary": 18500,
        "raise": true,
        "wfh": false
      },
      {
        "firstName": "Bill",
        "department": "HR",
        "designation": "executive",
        "salary": 21200,
        "raise": false,
        "wfh": false
      }
    ]
  };

  console.log(json); 

  const newemployee = {
    "firstName": "Anna",
    "department": "tech",
    "designation": "executive",
    "salary": 25600,
    "raise": false,
    "wfh": true
  };

  json["employees"].push(newemployee);  

  console.log(json);
  
  total = 0;
  for (let i = 0; i < 4; i++) { 
    console.log(json["employees"][i].salary);
    total = total + json["employees"][i].salary;
  }

//problem 4

console.log("total: " + total);

//problem 5

for (let i = 0; i < 4; i++) { 
    if (json["employees"][i].raise === true){

        raiseAmt = json["employees"][i].salary * .1;
        json["employees"][i].raise = json["employees"][i].salary + raiseAmt;
        console.log(json["employees"][i].firstName + ": " + json["employees"][i].raise);

    }
  }

//problem 6

for (let i = 0; i < 4; i++) { 
    console.log(json["employees"][i].firstName + ": "  + json["employees"][i].wfh);

  }