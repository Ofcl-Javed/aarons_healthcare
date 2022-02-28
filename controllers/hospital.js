exports.getIndex = (req, res, next) => {
        res.render('hospital/index', {
          pageTitle: 'hospital',
          path: '/',
        });  
  };
exports.getLocation = (req, res, next) => {
        res.render('hospital/location', {
          pageTitle: 'hospital',
          path: '/location',
        });  
  };
exports.getLocationName = (req, res, next) => {
        res.render('hospital/locationName', {
          pageTitle: 'hospital',
          path: '/locationName',
        });  
  };
exports.getOrder = (req, res, next) => {
        res.render('hospital/order', {
          pageTitle: 'hospital',
          path: '/order',
        });  
  };
exports.postLocationName = (req, res, next) => {

      return res.redirect('/locationName')
          
  };
exports.postDoctors = (req, res, next) => {

      res.redirect('/doctors-details')
          
  };

  exports.getDoctors = (req, res, next) => {
    res.render('hospital/doctors', {
      pageTitle: 'hospital',
      path: '/doctors-details',
    });  
};
  exports.getLogin = (req, res, next) => {
    res.render('hospital/login', {
      pageTitle: 'hospital',
      path: '/login',
    });  
};
  exports.getDoctorsList = (req, res, next) => {
    res.render('hospital/doctorsList', {
      pageTitle: 'hospital',
      path: '/doctorsList',
    });  
};

exports.postLogin = (req, res , next) => {
   return res.redirect('/location')
}