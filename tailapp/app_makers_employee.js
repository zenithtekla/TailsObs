/* JASMINE
http://www.bossable.com/102/basic-app-principles/
http://www.bossable.com/227/part-four-fries-with-that/ */
it("The Customer should have an Address", function () {
    var suburb = customer.suburb;
    var country = customer.country;
    expect(suburb).not.toBeNull();
    expect(country).not.toBeNull();
});

it("The Customer should have an Industry", function() {
     var industry = customer.industry;
     expect(industry).not.toBeNull();
});

// Behaviour driven tests (Jasmine style)
/*
The theory is that behaviour driven tests can be written up front, and then used for unit testing – reducing testing time down the track. 
The success of this approach really depends on the amount of detail that is known about the solution when the requirements are written. 
As part of the Agile process, a unit of work (work-unit) may be known in quite a lot of detail, or may be quite vague.

Behaviour driven tests are also a great way to make sure that the requirements aren’t forgotten about as the project progresses (yes, this actually does happen).
It also means that we may not need to have a separate document for business rules, and for mapping requirements to business rules for traceability.
This traceability is traditionally done using a matrix to trace requirements to rules and tests.

There’s no better way to show progress than when you can easily show how many tests are passing at any point in time.
*/

describe("As an App-Makers employee, I want to create a customer record",
    function() {
});

describe("As an App-Makers employee, I want to update a customer record",
function() {});

describe("As an App-Makers employee, I want to retrieve a detailed customer record",
function() {});

describe("As an App-Makers employee, I want to retrieve a list of customer records",
function() {});

it("The Customer must have a first name", function() {
     var firstName = customer.firstName;
     expect(firstName).not.toBeNull();
});

it("The Customer must have a surname name", function() {
     var surname = customer.surname;
     expect(surname).not.toBeNull();
});

/* Identify key characteristics of the current customers that use App-Makers services. */
it("The Customer should have an Address", function() {
    var suburb = customer.suburb;
    var country = customer.country;
    expect(suburb).not.toBeNull();
    expect(country).not.toBeNull();
});

/* Identify the current customer segments who don’t currently use App-Makers, but who would be good candidates.*/
it("The Customer should have an Industry", function() {
    var industry = customer.industry;
    expect(industry).not.toBeNull();
});

it("The Customer must have an email address", function() {
     var email = customer.email;
     expect(email).not.toBeNull();
});

describe("Customer email validation", function() {
     it("should validate someone@somewhere.com",function(){
          var result = is_valid("someone@somewhere.com");
          expect(result).toBe(true);
     });
 
     it("should not validate someone@somewhere",function(){
          var result = is_valid("someone@somewhere");
          expect(result).not.toBe(true);
     });
});
 
is_valid = function(email){
     var reg_expr = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
     return reg_expr.test(email);
};

it("The Customer should have a phone number", function() {
     var phone = customer.phone;
     expect(phone).not.toBeNull();
});

it("The Customer should have a referred indicator", function() {
     var referred = customer.referred;
     expect(referred).not.toBeNull();
});

it("The Customer should have a channel indicator", function() {
     var channel = customer.channel;
     expect(channel).not.toBeNull();
});

it("The Customer should have a referral indicator", function() {
     var referral = customer.referral;
     expect(referral).not.toBeNull();
});

describe("As an App-Makers employee, I want to retrieve a list of customers whom have made referrals",
function() {});

describe("As an App-Makers employee, I want to send an email to a list of customers whom have made referrals",
function() {});

describe("As an App-Makers employee, I want to set up email templates to send out to groups of customers",
function() {});