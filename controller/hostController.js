 const Home=require('../models/homedata');
 exports.getAddHome=(req,res,next)=>{
    res.render('host/edit-home',{editing:false, home:""});
}

 exports.getEditHome=(req,res,next)=>{
    const homeId=req.params.homeid;
    const editing=req.query.editing==='true';
     
    Home.findbyid(homeId,home=>{
        if(!home){
            console.log("Home not found for edition");
            return res.redirect('/host/host-home-list')
        }

        console.log(homeId,editing,home);
    res.render('host/edit-home',{pagetitle:"Edit your Home",editing:editing,home:home});
    });
}


exports.gethosthome=(req,res,next)=>{
    const success=req.query.success==='true';
    const favouritelist=Home.fetchAll(registeredHome=> res.render('host/host-home-list',{registeredHome:registeredHome,pagetitle:"Host home list",success:success}));
}



exports.postAddHome=(req,res,next)=>{  
  const{username,price ,location,rating,phone,photo}=req.body;
  const home=new Home(username,price ,location,rating,phone,photo);
  home.save();
    
    res.redirect('/host/gethosthome?success=true');
};

exports.postUpdateHome=(req,res,next)=>{
  
  const{id,username,price ,location,rating,phone,photo}=req.body;
  const home=new Home(username,price ,location,rating,phone,photo);
  home.id=id;
  home.save();
    res.redirect('/host/gethosthome');
};

exports.postDeleteHome=(req,res,next)=>{
  
  const homeid=req.params.homeid;
 Home.deletebyid(homeid,error=>{
    if(error){
        console.log('error while deleting home',error);
    }
    res.redirect('/host/gethosthome');
 })
  
};


