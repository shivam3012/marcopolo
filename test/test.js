// const assert = require('assert');
const chai = require('chai');
const server = require("../app.js");
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();
// Test cases for marcopolo game api

describe('marcopolo game', function () {
	it('successfully getting the result', function (done) {
		chai.request(server).get('/getMarcoPoloGame').end(function (err, res) {
			// assert.equal(res.body.success, true);
			// assert.equal(res.body.result.length, 1000);
			let object = res.body;
			object.msg.should.be.a('string');
			object.msg.should.equal('success');
			object.number.should.have.lengthOf(1000);
			done();
		});
	});

	it('hitting the api 5 users parallely ', function (done) {
		chai.request(server).get('/getMarcoPoloGame').end(function (err, res) {
		});
		chai.request(server).get('/getMarcoPoloGame').end(function (err, res) {
		});
		chai.request(server).get('/getMarcoPoloGame').end(function (err, res) {
		});
		chai.request(server).get('/getMarcoPoloGame').end(function (err, res) {
		});
		chai.request(server).get('/getMarcoPoloGame').end(function (err, res) {
		});
		done();
	});
})