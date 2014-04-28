Template.view2.helpers({
  contact: function() {
    return Contacts.find();     
  }
});

Template.view2.events({
  'click #button': function () {
    Router.go("contact", {"_name": $("#name").val()});   
  }
});

Template.view2.events({
  'click #vuelve2js': function () {
       
       Session.set("currentPage", "view1");

  
  }
});


Template.view2.helpers({
  
  greetings: function() {
    return "view2!JS";
  },
  
  contact: function() {
    return Contacts.find();     
  }
  
});

Template.view2.events({
  'click input': function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
    
    Session.set("currentPage", "view1");
  }

});