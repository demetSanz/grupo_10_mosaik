const db = require("../database/models");
const { Op } = require("sequelize");


// requerir base de datos desde fs
// const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
// const productsBD = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


let mainController = {
    index:  function(req, res) {
        res.render('index')
    },
    
    search: (req,res) => {

        db.Product.findAll(
            {include:[
                {association: 'category'}, 
                {association: 'sizes'}
            ],
            where:{name : {[Op.like]: '%' + req.query.search + '%'}} , 
        })
 
         .then(products=>{
           res.render('search',{products:products})
         } )      
        .catch(error=>console.log(error));
    },

    aboutUs: function (req,res){

        res.render('about-us')
    }

}

module.exports = mainController;