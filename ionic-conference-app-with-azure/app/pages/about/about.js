import {Page} from 'ionic/ionic';


@Page({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
	 this.client = new WindowsAzure.MobileServiceClient('https://testingwithazure.azurewebsites.net');
     this.todoItemTable = this.client.getTable('todoitem');

     
     console.log(this.client);
     console.log('///', this.todoItemTable);
     
       this.todoItemTable  
            .read()                       
            .then(createTodoItemList, handleError);
            
          function createTodoItemList(items) {
              
              console.log('items', items);
              this.items = items;

    }
    
        function handleError(error) {
        var text = error + (error.request ? ' - ' + error.request.status : '');
        console.error(text);
        $('#errorlog').append($('<li>').text(text));
    }
    
    this.adding = function () {
            this.todoItemTable.insert({
                text: 'hey hey',
                complete: false
            }).then(function (response) {
                console.log('here is the repsonse', response);
            });        
    }
    
    this.deleting = function(params) {
         this.todoItemTable
            .del({ id: itemId })   // Async send the deletion to backend
            .then(refreshDisplay, handleError); // Update the UI                    
    }

    this.updating = function() {
              this.todoItemTable
            .update({ id: itemId, text: newText })  // Async send the update to backend
            .then(refreshDisplay, handleError); // Update the UI
    }
    
    this.itemComplete = function () {
          this.todoItemTable
            .update({ id: itemId, text: newText })  // Async send the update to backend
            .then(refreshDisplay, handleError); // Update the UI    
    }
}
