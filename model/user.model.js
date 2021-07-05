const mongoose = require("mongoose");

const UserSchemaObject = {
    name: {
        type: String,
        editable: true,
        trim: true
    },
    lastName: {
        type: String,
        editable: true,
        default: "",
        trim: true
    },
    userType: {
        type: String,
        required: true,
        enum: ["HR", "Manager", "TeamLead", "Employee"],
        default: "HR",
        editable: true
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        validate: [
            email => {
                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            },
        ]
    }
};

const UserSchema = new mongoose.Schema(UserSchemaObject);
const User = mongoose.model("user", UserSchema);

module.exports = { User };
