
const fs=require('fs');
const path=require('path');
const rootDir=require('../utils/path');
const { json } = require('body-parser');
const homeDataPath=path.join(rootDir,'data','homes.json');


module.exports=class Home{
  constructor(username,price ,location,rating,phone,photo){
    this.username=username;
    this.price=price;
    this.location=location;
    this.rating=rating;
    this.phone=phone;
    this.photo=photo;
  }
  
  save(){
    Home.fetchAll((registeredhome)=>{
      if(this.id){//edit home case
        registeredhome=registeredhome.map(home=>{
          if(home.id===this.id){
           return this;
          }
          return home;
        })

    }
    else{//new add home case
       this.id=Math.random().toString();
       registeredhome.push(this);
      
    }
      
   

    fs.writeFile(homeDataPath,JSON.stringify(registeredhome),error=>{
      console.log(`file writing concluded`,error);
    });
    })
    
  }

  static fetchAll(callback){
    
    fs.readFile(homeDataPath,(error,data)=>{
      
      if(!error){
         callback(JSON.parse(data));
       
      }
      else{
        callback([]);
      }
     
    })
   
  }


  static findbyid(homeid,callback){
    this.fetchAll(homes=>{
     const homefound= homes.find(home=>home.id===homeid);
     callback(homefound);
    })
  }

   static deletebyid(homeid,callback){
    this.fetchAll(homes=>{
   const updatedHome= homes.filter(home=>home.id !== homeid);
     fs.writeFile(homeDataPath,JSON.stringify(updatedHome),callback);
     
    })
  }

   static favourite(homeid,callback){
    this.fetchAll(homes=>{
     const homefound= homes.find(home=>home.id===homeid);
     callback(homefound);
    })
  }


}
