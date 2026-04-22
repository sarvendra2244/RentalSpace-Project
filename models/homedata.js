const database =require('../utils/databaseUtil');
module.exports=class Home{
  constructor(username,price ,location,rating,phone,photo,description,id){
    this.username=username;
    this.price=price;
    this.location=location;
    this.rating=rating;
    this.phone=phone;
    this.photo=photo;
    this.description=description;
    this.id=id;
  }
  
  save(){
    
    if(this.id){console.log(this.id);
     return database.execute('UPDATE individual_home SET username=?,price=?,location=?,rating=?,phone=?,photo=?,description=? WHERE id=?',[this.username,this.price,this.location,this.rating,this.phone,this.photo,this.description,this.id])

    }
    else{
       return database.execute('INSERT INTO individual_home (username,price,location,rating,phone,photo,description) VALUES(?,?,?,?,?,?,?)',[this.username,this.price,this.location,this.rating,this.phone,this.photo,this.description] )

    }
    } 

  static fetchAll(){
    return database.execute('SELECT * FROM individual_home');
   
  }


  static findById(homeid){
     return database.execute('SELECT * FROM individual_home WHERE id=?',[homeid]);
   
  }

   static deletebyid(homeid){
     return database.execute('DELETE FROM individual_home WHERE id=?',[homeid]);
 
  }

   static favourite(homeid,callback){
    this.fetchAll(homes=>{
     const homefound= homes.find(home=>home.id===homeid);
     callback(homefound);
    })
  }


}
