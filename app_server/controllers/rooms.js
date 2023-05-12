/*GET ROOMS VIEW*/
const rooms = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Rooms';
    res.render('rooms', {title: pageTitle, trips});
}; 

module.exports = {
    rooms,
};