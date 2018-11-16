var promise = require('bluebird');

var options = {
    // Initialization Options
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
//var connectionString = 'postgres://localhost:5432/puppies';
var connectionString = 'postgres://alvaro:4lvaro4pazA@localhost:5432/puppies';
var db = pgp(connectionString);

// add query functions

module.exports = {
    getAllPuppies: getAllPuppies,
    //getSinglePuppy: getSinglePuppy,
    //createPuppy: createPuppy,
    //updatePuppy: updatePuppy,
    //removePuppy: removePuppy
};

function getAllPuppies(req, res, next) {
    console.log("asdasdasd");
    //console.log(req, res, next);
    db.any('select * from pups')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL puppies'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

//https://mherman.org/blog/designing-a-restful-api-with-node-and-postgres/#project-setup
//
//https://www.djamware.com/post/5b56a6cc80aca707dd4f65a9/nodejs-expressjs-sequelizejs-and-postgresql-restful-api

/*
Postgres

cambiar de passw

ALTER USER user_name WITH PASSWORD 'new_password';


API REST

npm install express-generator@4 -g


GRANT SELECT ON [nombre_tabla] TO PUBLIC;
*/