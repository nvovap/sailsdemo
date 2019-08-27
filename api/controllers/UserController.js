/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


    add: async function (req, res) {

        if (req.isSocket) {

            var data = req.allParams();

            console.log(_.pluck({id:1, name:'sadfasdfa', use: true}, 'name'));

            console.log(req.protocol);

            let user = await User.create({
                name: data.name
            });

            console.log(user);

            User.publish([1221],{ id: 1344 }, req)

           // res.sendResult = { id: 1344 };

           res.send();
        }

    },

    render: async (request, response) => {
        try {
            let data = await User.findOne({
                name: 'user 1'
            });
            if (!data) {
                return response.notFound('The user was NOT found!');
            }
            response.view('profile', { data });
        } catch (err) {
            response.serverError(err);
        }
    }


};

