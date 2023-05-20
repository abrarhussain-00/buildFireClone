const mongoose = require("mongoose");

const RegisterUserSchema = new mongoose.Schema({
    firstName : {
        type: String, 
        required : [true, "First name is required"],
        minlength: [3, "First name must be at least 2 characters"]
    },
    lastName : {
        type: String, 
        required : [true, "Last name is required"],
        minlength: [3, "Last name must be at least 2 characters"]
    },
    businessEmail : {
        type: String, 
        required : [true, "Business email  is required"],
        minlength: [3, "Business email must be at least 3 characters"]
    },
    phoneNumber : {
        type: Number, 
        required : [true, "Phone number is required"],
        minlength: [3, "Phone number must be at least 9 characters"]
    },
    companyName : {
        type: String, 
        required : [true, "Company name is required"],
        minlength: [3, "Company name must be at least 3 characters"]
    },
    jobRole : {
        type: String, 
        required : [true, "Job role is required"],
    },
    companySize : {
        type: String, 
        required : [true, "Company size is required"],
    },
    website : {
        type: String, 
        required : [true, "Website is required"],
        minlength: [3, "Website must be at least 3 characters"]
    },
    appType : {
        type: String, 
        required : [true, "App type  is required"],
    },
    appLaunchTime : {
        type: String, 
        required : [true, "App Launch time is required"],
    },
    targetBudget : {
        type: String, 
        required : [true, "Target budget is required"],
    },
    projectType : {
        type: String, 
        required : [true, "Project type is required"],
    },
    additionalComments : {
        type: String, 
    },

}, {timestamps: true});

const registerUser = mongoose.model("User", RegisterUserSchema);

module.exports = registerUser