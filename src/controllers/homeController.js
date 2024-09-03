import { Json } from 'sequelize/lib/utils';
import db from '../models/index';


let getHomePage = async (req, res) => {
    try{
        let data = await db.User.findAll();
        //console.log(data)
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    }catch(e){
        console.log(e);
    }
}

let getAboutPage = (rep, res) => {
    return res.render('test/about.ejs');
}

module.exports = {
    getHomePage : getHomePage,
    getAboutPage : getAboutPage,
}