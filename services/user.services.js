const { User } = require("../model/user.model");

const UserServices = {
    find: async () => {
        try {
            return await User.find()
        } catch (error) {
            console.log(error)
            throw error;
        }
    },

    create: async user => {
        try {
            user = new User(user);
            return await user.save();
        } catch (error) {
            throw error;
        }
    },

    findOne: async (query) => {
        try {
            return await User.findOne({ ...query });
        } catch (error) {
            throw error;
        }
    },
    delete: async (id) => {
        try {
            return await User.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    },
    update: async (queryObject, newValues) => {
        try {
            return await User.findOneAndUpdate(
                queryObject,
                { ...newValues, updatedAt: new Date() },
            )
        } catch (error) {
            throw error;
        }
    },
};

module.exports = UserServices;
