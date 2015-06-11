var books = require('../lib/google-books-search.js');
var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var should = require('chai').should();

describe('Searching', function() {

	it('the options argument should be optional', function() {
		return books.search('Guinness World Records').should.be.fulfilled;
	});

	it('should return an empty object if there are no results', function() {
		return books.search('JCEhrrpxF2E1s7aPW8zd2903tQ4AlCB9', {}).should.eventually.be.empty;
	});

	it('should return a specified number of results', function() {
		return books.search('Guinness World Records', {
			limit: 15
		}).should.eventually.have.length(15);
	});

	it('should only accept an limit below 40', function() {
		return books.search('Guinness World Records', {
			limit: 50
		}).should.be.rejected;
	});

	it('should return an error if no query is specified', function() {
		return books.search(null, {}).should.be.rejected;
	});

});