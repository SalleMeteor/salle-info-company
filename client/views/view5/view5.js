Template.view5.helpers({
  
  greetings: function() {
    return "view5!JS";
  },
  
  
});

Template.view5.events({
  'click #vuelve5js': function () {
       
       Session.set("currentPage", "view1");

  
  }

});

Template.view5.events({
  'click #guardar': function () {
    
    console.log(cont);   
    var doc = {
      name: $("#name").val(),
      surname: $("#surname").val(),
      points: cont2
    
    };
    Contacts.insert(doc);
    
    // async call
    Meteor.call('foo', 1, 2, function (error, result) {
      console.log("result(async): ", result);
    });
    
    // sync call
    var result = Meteor.call('bar');
    console.log("result(sync): ", result);
    
 Session.set("currentPage", "view2");
    }

});

  