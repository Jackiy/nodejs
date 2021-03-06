var expect = require("chai").expect;
var mongoose = require("mongoose");
var jobModel = require("../models/Job");
var Promise = require("bluebird");
var jobsData = require("../jobs-data");


function resetJobs(){
    return new Promise(function(resolve, reject){
        mongoose.connection.collections["jobs"].drop(resolve, reject);
    });
    
}

describe("get jobs", function(){
    var jobs;
    before(function(done){
       jobsData.connectDB("mongodb://localhost/jobfinder")
       .then(resetJobs)
       .then(jobsData.seedJobs)
       .then(jobsData.findJobs)
       .then(function(jobsList){
           jobs = jobsList;
           done();
       });
    });
    
    
   it("Should never be empty since jobs are seeded", function(){
       expect(jobs.length).to.be.at.least(1);
   });
   
   it("Should have a job with a title", function(){
       expect(jobs[0].title).to.not.be.empty;
   });
   
   it("Should have a job with a title", function(){
       expect(jobs[0].description).to.not.be.empty;
   });
});