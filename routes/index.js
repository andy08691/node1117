
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render(
      'index',
      {
          title: '0.0' 
      }
  );
};
exports.demo = function(req, res){
  res.render(
      'demo',
      {
          title: 'Demo page',
          header:'demo demo demo dmeo...'
      }
  );
};
exports.app = function(req, res){
  res.render(
      'bootstrap',
      {
          title: 'bootstrap~~~~~~~',
          header:'boost...boost..boost..boost..boost..boost..boost..boost..boost..'
      }
  );
};