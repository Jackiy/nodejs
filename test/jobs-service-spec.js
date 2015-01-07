var expect = require("chai").expect;
var mongoose = require("mongoose");
var jobModel = require("../models/Job");
var Promise = require("bluebird");
var jobsData = require("../jobs-data");
var request = require("supertest");
var express = require("express");

var app = express();

var dataSavedJob;

var db = {
    saveJob: function(job){
        dataSavedJob = job;
    }
};

var jobService = require("../jobs-service")(db, app);


describe("save job", function(){
    it("should validate that title is greater than 4 characters");
    it("should validate that title is less than 40 characters");
    it("should validate that description is greater than 4 characters");
    it("should validate that description is less than 250 characters");
    
    
    var newJob = {title: "Cook", description:"You will be makeing bagels."};
    
    it("should pass the job to the database save", function(done){
        request(app).post("/api/jobs").send(newJob).end(function(error, res){
            expect(dataSavedJob).to.deep.equal(newJob);
            done();
        });
        
    });
    it("should return a status of 200 to the front end if the database saved");
    it("should return a job with an id");
    it("should return an error if the database failed.");
});
