var acfields =
    "AccountSource,AnnualRevenue,BillingAddress,BillingCity,BillingCountry,BillingGeocodeAccuracy,BillingLatitude,BillingLongitude,BillingPostalCode,BillingState,BillingStreet,Call_Contacts__c,Call_On__c,Center_of_Influence__c,Confirm_Direct__c,CreatedById,CreatedDate,Current_User__c,Customer_Status__c,Customer_Type__c,Day_of_Week__c,Deep_Emailed__c,Description,Description_Summary__c,Disengage_Email__c,Do_Not_Nurture__c,Do_Not_Schedule_for_Ops__c,Do_Not_Survey__c,Endpoints__c,EOS_Traction__c,Established__c,Fax,Following_on_Twitter__c,Gatekeeper__c,Hard_to_Reach__c,Hosting_Fee__c,HtR_Description__c,Id,Incumbent_FLAT_FEE__c,Incumbent__c,Industry,Infousa_ID__c,Infousa_SIC_Description__c,Infousa_SIC__c,Internal_IT__c,IsDeleted,Jigsaw,JigsawCompanyId,Jigsaw_ID__c,Jigsaw_URL__c,Landlines__c,LastActivityDate,LastModifiedById,LastModifiedDate,LastReferencedDate,LastViewedDate,Last_NA_Visit__c,Last_XLTO_Meeting__c,LF__Visit_Count__c,LID__LinkedIn_Company_Id__c,Mac_Based__c,Manta_URL__c,MasterRecordId,MRR__c,Name,NA_Object__c,NA_Visit_Call_Only__c,NA_Visit_Day_s__c,NA__c,Next_XLTO_In_Person__c,Next_XLTO_Meeting_Frequency__c,Next_XLTO_Meeting__c,NumberOfEmployees,Office_Phone__c,OwnerId,ParentId,Percent_of_Year__c,Phone,PhotoUrl,POC_Direct__c,President_Direct__c,Primary_Contact__c,Prospect_Status__c,qbdialer__CloseDate__c,qbdialer__CloseScore__c,qbdialer__Dials__c,qbdialer__LastCallTime__c,qbdialer__Related_Contact_Dials__c,qbdialer__Related_Contact_LastCallTime__c,qbdialer__ResponseTime__c,qbdialer__TimeZoneSidKey__c,RecordTypeId,Remote_Desktop_Environment__c,Reschedule__c,SD_Onsite_Extra__c,Secondary_Contact__c,Servers__c,ShippingAddress,ShippingCity,ShippingCountry,ShippingGeocodeAccuracy,ShippingLatitude,ShippingLongitude,ShippingPostalCode,ShippingState,ShippingStreet,SicDesc,Slack_Channel__c,Source__c,Start_Date__c,Sub_Industry__c,SystemModstamp,Targeted_Competitor__c,Tech_Summary__c,TEST_NA_Last_Visit__c,To_Review__c,Type,Undeliverable_Address__c,Validated_Incumbent__c,Validated_President__c,Validated_Workstations__c,Warm250_Book__c,Warm250_Email_On__c,Website,WHCDB_Days_since_last_update_or_activity__c,Workstations__c,Wrong_Phone__c,XLTO_Attendees_Customer__c,XLTO_Attendees_US__c,XLTO_Object__c,XLTO__c,X_Customer__c,ZOOM__ZI_Company2__c,ZOOM__ZI_Company__c,ZOOM__ZI_ImportedDate__c";
var contfields =
    "AccountId,Alternate_Email__c,AssistantName,AssistantPhone,A_Description__c,A_Incumbent__c,A_Industry__c,A_Internal_IT__c,A_Mac_Based__c,A_Point_of_Contact__c,A_President__c,A_Prospect_Status__c,A_Type__c,A_Website__c,A_Workstations__c,Birthdate,Bounced_Email__c,Business_Card__c,Call_On__c,Candidate_Stage__c,Cognitive_Ability__c,Computer_Name__c,ConnectAndSell__c,CreatedById,CreatedDate,Customer_Comments__c,Customer_satisfaction__c,Date_Surveyed__c,Department,Description,DiSC__c,DoNotCall,Do_Not_Nurture__c,Email,EmailBouncedDate,EmailBouncedReason,Fax,FirstName,First_Meeting__c,HasOptedOutOfEmail,HomePhone,Id,Inside_Email_Opt_Out__c,Interview_Stage__c,IsDeleted,IsEmailBounced,Is_Point_of_Contact__c,Is_President_Owner__c,Jigsaw,JigsawContactId,Jigsaw_ID__c,LastActivityDate,LastCURequestDate,LastCUUpdateDate,LastModifiedById,LastModifiedDate,LastName,LastReferencedDate,LastViewedDate,Last_Emailed__c,LeadSource,LID__LinkedIn_Company_Id__c,LID__LinkedIn_Member_Token__c,LinkedIn_2nd_Connections__c,LinkedIn_Desired_Connects__c,LinkedIn_URL__c,MailingAddress,MailingCity,MailingCountry,MailingGeocodeAccuracy,MailingLatitude,MailingLongitude,MailingPostalCode,MailingState,MailingStreet,Major_Issue_Notify__c,MasterRecordId,MobilePhone,Motivation__c,Name,No_Longer_There__c,Nurture_On__c,OtherAddress,OtherCity,OtherCountry,OtherGeocodeAccuracy,OtherLatitude,OtherLongitude,OtherPhone,OtherPostalCode,OtherState,OtherStreet,OwnerId,Personality__c,Personal_Email__c,Phone,PhotoUrl,Point_of_Contact__c,qbdialer__CloseDate__c,qbdialer__CloseScore__c,qbdialer__ContactDate__c,qbdialer__ContactScoreId__c,qbdialer__ContactScore__c,qbdialer__Dials__c,qbdialer__LastCallTime__c,qbdialer__ResponseTime__c,qbdialer__TimeZoneSidKey__c,RecordTypeId,Referral_Company_1__c,Referral_Company_2__c,Referral_Email_1__c,Referral_Email_2__c,Referral_Name_2__c,Referral_Phone_1__c,Referral_Phone_2__c,Referral__c,Referra_Name_1__c,ReportsToId,Reschedule__c,Role_Fit__c,Salutation,Status__c,SystemModstamp,Title,To_Review__c,VIP__c,Writeact_Last_Sent_Version__c,Writeact_Sent_Date__c,Wrong_Number__c,ZOOM__ZI_ImportedDate__c,ZOOM__ZI_Person2__c,ZOOM__ZI_Person__c";

    
const FuzzySet = require("fuzzyset.js");

// Initiate an express server
const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const HTTP_PORT = 5001;
const app = express();
var mongodb = require("mongodb");

// used to pool connections for express
// to change need to add authentication and params from config file
var expressMongoDb = require("express-mongo-db");
app.use(expressMongoDb("mongodb://localhost:27017/"));

// compress HTTP messages (including REST, AJAX)
app.use(compression());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

// creat application/json parser
app.use(bodyParser.json());
app.set("json spaces", 2);

// The static files should also be served by apache or nginx
const staticPath = "../public";
app.use(express.static(staticPath));

/////////////////////////////////////////
// define the REST API
/////////////////////////////////////////

app.get("/get_afsynclist/", (req, res) => {
    console.log("get_afsynclist");
    req.db
        .db("Autotask")
        .collection("Sync")
        .findOne({ AFType: "Initial" }, function(err, results) {
            console.log(results); // output all recordsf
            res.json(results);
        });
});

app.get("/init_salesforce/", (req, res) => {
    var jsforce = require("jsforce");
    var sfconn = new jsforce.Connection({
        oauth2: {
            clientId: "3MVG9CVKiXR7Ri5qO0qq92LDyGLMXYW8KiUabGsTtYp3FgyVPj4_rcDEqgd.Z2SqP_t__2I2q86_4Ij.utxUG",
            clientSecret: "3013BADE6C0B351119B1C022DA2B4D6EF5749AB283AAFE1060B299AB12447238",
            redirectUri: "getAccessToken"
        },
        instanceUrl: "https://na66.salesforce.com",
        accessToken: "00D80000000clXE!AQIAQEq4Oa5kFSNaPMeZTKY0hwHV2wEuFF4.4hmCFv6ItvuVeoq.qjTI6U5VE_b3bHTrDEe3EqksdQks0SwnrGAuriISpn_o"
    });

    sfconn.login("team@xl.net", "blu3Hen17fmP6Wea1OcfGsIquoZ1qP2jdN", function(loginerr, loginres) {
        console.log(sfconn.accessToken); //"00D80000000clXE!AQIAQOxxdvxQi9wwMdQpcpfvvYWpMs.s0tu6nXpQA58EbnnUEXHHyB9GtMtt54WMLCmLN2fk8R0ZUy2lQd3FSz3FzxI8963g"
        console.log(sfconn.instanceUrl); // "https://na66.salesforce.com"
        console.log(sfconn.refreshToken);
        if (loginerr) {
            return console.error(loginerr);
        }

        return (
            sfconn
                // first get list of Customers. Makes other queries easier
                .query("SELECT Id FROM Account WHERE  Type = 'Customer'", function(custerr, sfdata) {
                    if (custerr) {
                        return console.error(custerr);
                    }

                    console.log("SELECT Id FROM Account WHERE  Type = 'Customer' records " + sfdata.records.length);
                    var sfcontactpromises = [];
                    //console.log("SELECT Id FROM Account WHERE  Type = 'Customer' = " + JSON.stringify(sfdata));
                    // For each Customer query for full record and all contacts

                    sfdata.records.forEach(element => {
                        //console.log("SELECT " + "$acfields" + ",(SELECT " + "$contfields" + " FROM Contacts) FROM Account WHERE Id = '" + element.Id + "'");
                        sfcontactpromises.push(
                            sfconn.query(
                                "SELECT " + acfields + ",(SELECT " + contfields + " FROM Contacts) FROM Account WHERE Id = '" + element.Id + "'",
                                function(err, res) {
                                    if (err) {
                                        return console.error(err);
                                    }
                                    return res;
                                }
                            )
                        );
                    });

                    return Promise.all(sfcontactpromises).then(function(sfcompanydata) {
                        console.log("Selected all contacts " + sfcompanydata.length);
                        console.log("Add or update customer to db.");

                        // Add or update customer to db.
                        // This keep added fields but overwrites all autotask fields
                        // collects all the promises and waits
                        var sfcompanypromises = [];
                        sfcompanydata.forEach(element => {
                            var normalized = { ...element.records[0], Contacts: element.records[0].Contacts.records };
                            sfcompanypromises.push(
                                req.db
                                    .db("Autotask")
                                    .collection("Salesforce")
                                    .findOneAndUpdate(
                                        {
                                            Id: element.records[0].Id
                                        },
                                        {
                                            $set: normalized
                                        },
                                        {
                                            upsert: true,
                                            returnOriginal: false
                                        }
                                    )
                            );
                        });

                        return Promise.all(sfcompanypromises).then(function(sfcompanydata) {
                            console.log("Added all customers " + sfcompanydata.length);
                            // extract *.value into new array
                            console.log("Exiting");
                            res.json("hello");
                        });
                    });
                })
        );
    });
});

// Catch all
app.all("*", function(req, res) {
    res.redirect("https://www.purple.io/");
});

/////////////////////////////////////////
// Finally, start the express app
app.listen(HTTP_PORT, () => {
    console.log("HTTP Server running on port", HTTP_PORT);
});
