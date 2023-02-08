const { User } = require("../models");

const resolvers = {
    async getSingleUser(_parent, args, context) {
        const { user } = context;
        const foundUser = await User.findOne({
            $or: [
                { _id: user ? user._id : args.id },
                { username: args.username }
            ],
        });
    }
};

module.exports = resolvers;