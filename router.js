"use strict"; {
    const express = require('express');
    const pool = require('./db');
    const router = express.Router();

    router.get('/', function(req,res){
        pool.query('SELECT * FROM cart').then(function(result){
            res.send(result.rows);
        });
    });

    router.post('/', function(req,res){
        const sql = 'INSERT INTO cart(product, price, quantity) values($1::text, $2::real, $3::int)';
        const values = [req.body.product, req.body.price, req.body.quantity];
        pool.query(sql, values).then(function(result){
            res.send(result);
        });
    });

    router.put('/:id', function(req,res){
        const sql = `UPDATE cart SET product = $1::text, price = $2::real, quantity = $3::int WHERE id = ${req.params.id};`;
        const values = [req.body.product, req.body.price, req.body.quantity];
        pool.query(sql, values).then(function(result){
            res.send(result);
        });
    });

    router.delete('/:id', function(req,res){
        pool.query(`DELETE FROM cart WHERE id = ${req.params.id}`).then(function(result){
            res.send(result);
        });
    });

    module.exports = router;
}