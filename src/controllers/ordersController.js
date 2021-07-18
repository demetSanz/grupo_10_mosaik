// let db = require ("../database/models");

// let ordersController ={
//     crear: function(req,res){
//         db.Status.findAll()
//             .then (function(status){
//                 return res.render ("creacionOrdenes", {status:status})
//             })
//         },
//     guardado: function (req,res){
//         db.Order.create({
//             date_order: req.body.fecha,
//             total_amount: req.body.total,
//             delivery_address: req.body.direccion ,
//             delivery_notes: req.body.notas,
//             // province_id: ,
//             status_id: req.body.status
//             // delivery_types_id: 


//         });
//         res.redirect ("/orders")
//     },
//     listado: function(req,res){
//         db.Order.findAll()
//             .then (function (orders){
//                 res.render ("listadoOrdenes", {orders: orders})
//             })
//     },

//     detalle: function(req, res){
//         db.Order.findByPk (req.params.id, {
//             include: [{
//                 association: "province"
//             },{
//                 association: "status"
//             },{
//                 association: "delivery"
//             }]
//         })
//             .then (function (orders){
//                 res.render ("detalleOrden", {orders: orders})
//             })
//     },

//     editar: function(req, res){ //Necesita crear dos promesas (una para order y la otra para status), por eso usa el Promise.all debajo
//         let orderRequest = db.Order.findByPk (req.params.id);
//         let statusRequest = db.Status.findAll ();

//         Promise.all ([orderRequest, statusRequest ])
//             .then(function([order, status]){
//                 res.render ("editarOrden", {order:order, status:status})
//             })
//     },

//     actualizar: function (req, res){
//         db.Order.update({
//             date_order: req.body.fecha,
//             total_amount: req.body.total,
//             delivery_address: req.body.direccion ,
//             delivery_notes: req.body.notas,
//             // province_id: ,
//             status_id: req.body.status
//             // delivery_types_id: 


//         }, {
//             where:{
//                 id: req.params.id
//             }
//         });

//         res.redirect ("/orders/" + req.params.id)
//     },

//     borrar: function (req, res){
//         db.Order.destroy ({
//             where: {
//                 id: req.params.id
//             }
//         })
//         res.redirect ("/orders");
//     }   
//     }


// module.exports = ordersController;