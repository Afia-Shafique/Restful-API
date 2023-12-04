const express=require('express');  
const app=express();
const port=3000;

app.use(express.json());

const programmingLang=[    //date in json format
    {name:"C++", type:"hard-coded"},
    {name:"HTML",type:"front-end"},
    {name:"CSS", type:"front-end"},
    {name:"Javascript", type:"front-end+back-end"},
    {name:"Python",type:"front-end+back-end"}
];

app.get("/", function (req, res) {    //fetch data from API
    res.send("Programming Languages API");
  });
  
  app.get("/api/programmingLang", function (req, res) {
    res.send(programmingLang);
  });
  
  app.get("/api/programmingLang/:index", function (req, res) {
    if (!programmingLang[req.params.index])
      return res.status(404).send("OOPS!No language exists here.");
    res.send(programmingLang[req.params.index]);
  });
  
  app.put("/api/programmingLang/:index", function (req, res) {    //put data in API
    if (!programmingLang[req.params.index])
      return res.status(404).send("Programming Language does not exists");
    const updateLang = {
      name: req.body.name,
      type: req.body.type
    };
    programmingLang[req.params.index] = updateLang;
    res.send(updateLang);
  });


  app.post("/api/programmingLang", function (req, res) {
    const newLang = {
      name: req.body.name,
      type: req.body.type
    };
    programmingLang.push(newLang);
    res.send(newLang);
  });


  app.delete("/api/programmingLang/:index", function (req, res) {
    if (!programmingLang[req.params.index])
      return res.status(404).send("Programming language does not exists ");
  
      programmingLang.splice(req.params.index, 1);
    res.send(programmingLang);
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
  

