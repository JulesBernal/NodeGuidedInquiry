// HARD: Create a JSON file that will have 10 employees in it, their employeeID, their name, their salary and department name.
// Then, create an express API so that when you hit the endpoint with a GET request we want the api to respond with all data on the employees.
// If you hit the endpoint with their employeeID, we want to hand up only the information on that one employee.
// If you hit the endpoint with an incorrect employeeID, send back the correct HTTP status code and an error message stating that the employee was not found.
// GET::myendpointname.com/employees = Json with information from all 10 employees.
// GET::myendpointname.com/employees/<employeeID> = Json with the information from that specific employee.


// const express = require('express');
// const app = express();
// app.use(express.json());
const express = require('express')  //includes the components/library of express as variabe express.
                                    //make applications async, make api calls, etc.
const http=require('http');
let fs = require('fs');
const data = fs.readFileSync('./employees.json');
const dataParsed= JSON.parse(data);
const app = express();    //app object of Express,methods for routing http requests, middleware config,
                          // rendering html, registering template engine.
function idCheck(res,data,idReq){
    for(let i=0;i<data.length;i++){
        if(data[i].id===idReq){
            return res.send(data[i]);            
        }
    }
    return res.status(404).send("Employee ID Not found");
}
app.get('/employees', function (req, res) {     //receives employees to send out data of employees.
  res.send(dataParsed);
})
app.get('/employee', function (req, res) {
    res.status(404).send("Employee ID Not found");
  })
app.get('/employees/:id', function (req, res) {
    const reqId=req.params.id;
    console.log(req);
    // res.send(idCheck(res,dataParsed,reqId));
    idCheck(res,dataParsed,reqId);
    // res.status(404).send("Employee ID Not found");
  });
app.listen(4000);