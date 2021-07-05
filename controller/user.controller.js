const UserService = require("../services/user.services");


const UserController = {
    /*
     * Function: create new users
     * @param {Object} req - will contains request object
     * @param {Object} res - will contains response object
     */
    create: async (req, res) => {
        try {
            const body = req.body;
            let data = await UserService.create(body);
            data = data.toJSON();
            console.log("body", data)
            return res.status(200).send({
                status: true,
                message: "USER_CREATED",
                data,
            });
        } catch (error) {
            return res.status(500).send({
                status: false,
                message: "ERROR_500",
            });
        }
    },
    /*
    * Function: will fetch and return users data by ID
    * @param {Object} req - will contains request object
    * @param {Object} res - will contains response object
    */
    find: async (req, res) => {
        try {
            let data = await UserService.find();
            return res.status(200).send({
                status: true,
                message: "FIND_ALL_USERS_DATA",
                data,
            });
        }
        catch (error) {
            return res.status(500).send({
                status: false,
                message: "ERROR_500",
            });
        }
    },
    /*
     * Function: will fetch and return all users data
     * @param {Object} req - will contains request object
     * @param {Object} res - will contains response object
     */
    findOne: async (req, res) => {
        try {
            const { id } = req.params;
            const data = await UserService.findOne({ _id: id });
            return res.status(200).send({
                status: true,
                message: "USER_FETCHED_SUCCESS",
                data,
            });
        } catch (error) {
            return res.status(500).send({
                status: false,
                message: "ERROR_500",
            });
        }
    },
    /*
    * Function:  will update and return user data
    * @param {Object} req - will contains request object
    * @param {Object} res - will contains response object
    */
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const updatedBody = req.body
            console.log("updatedBody", updatedBody)
            const user = await UserService.update(id, {
                ...updatedBody
            });
            if (!user) {
                return res.status(400).send({
                    status: false,
                    message: "USER_NOT_AVAILABLE",
                });
            }
            return res.status(200).send({
                status: true,
                message: "USER_UPDATED_SUCCESS",
                user,
            });
        } catch (error) {
            return res.status(500).send({
                status: false,
                message: "ERROR_500",
            });
        }
    },
    /*
     * Function:  will delete user data
     * @param {Object} req - will contains request object
     * @param {Object} res - will contains response object
     */
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await UserService.findOne({ _id: id });
            if (!user) {
                return res.status(400).send({
                    status: false,
                    message: "USER_NOT_AVAILABLE",
                });
            }
            if (user.userType === 'HR') {
                const deleteUser = await UserService.delete({ _id: id })
                return res.status(200).send({
                    status: true,
                    message: "USER_DELETED_SUCCESS",
                    deleteUser,
                });
            }
            if (user.userType === "Manager" || user.userType === "TeamLead" || user.userType === "Employee") {
                return res.status(400).send({
                    status: false,
                    message: "NOT_ALLOWED_TO_DELETE",
                });
            }
        } catch (error) {
            console.log("error", error)
            return res.status(500).send({
                status: false,
                message: "ERROR_500",
            });
        }
    },
}
module.exports = UserController;
