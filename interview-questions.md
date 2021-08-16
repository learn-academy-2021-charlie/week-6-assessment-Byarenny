# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: I believe we would first need to go into the model Sightings file and add "belongs_to :animal". The foreign key would be part of the Sightings model and would be named "sightings_id" because we can have many sightings belonging to one animal. I believe to fix this mistake, we would have to update and add the "sightings_id" foreign key and then do db:migrate. Although, I cant remember the order of steps and commands at this moment, this is a time where I would do some research so I can recall the exact commands to prevent any further mistakes.

  Researched answer: To update the Sightings model we need to create a migration file by using the command $ rails g migration add_column_to_sightings. In that file, we will add the changed to be made in the def change method. It will look something like this:
    Class AddColumnToSightings<ActiveRecord::Migration[6.0]
        def change
          add_column :sightings, :sightings_id, :integer
        end
    end
  Lastly, we will do $ rails db:migrate. The database and schema file should now be updated. 


2. Which RESTful API routes must always be passed params? Why?

  Your answer: The RESTful API routes that must always be passed params are show, edit, and update. For the show, we need to pass in a param of [:id] to allow us to view a single value with that assigned id. Edit and update must be passed params of [name_params] that is named after the model. This params is actually a method that lives under the "private" method. In this params method, we use require and permit to keep user inputs protected.

  Researched answer: The RESTful API routes that must always be passed params are show, update, and delete. All three of these RESTful routes always needed to be passed params to allow us to dynamically access values by their unique id's. A route that does not need to be passed params is index. This route lists all of the values in a model and does not need to be passed a unique id.



3. Name three rails generator commands. What is created by each?

  Your answer: We have "rails generate model ClassName name:string age:integer" - this command generates a class model that is followed by the data names and datatypes that will be held in the datatable. Next there is "rails generate migration add_column_to_modelname" - this generates a new class file that allows you to change what is needed to be changed in the change method. And lastly, there is "rails generate source ClassName name:string age:integer" - this command is a lot like the rails generate model command but it also creates a views folder.

  Researched answer: I got most of them correct execpt for the 3rd one, It is rails generate resource, not source. This command also plugs in resourced routes. When running $ rails routes, we can get all of the routes and the http verbs for those routes.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students  -  INDEX, An index method would render an array of all of the students in the database.

method="POST"   /students  - CREATE, A create method would allow the user to create a new student if the given data is valid. 

method="GET"    /students/new - NEW, The new method will display a form for the user.

method="GET"    /students/2 - SHOW, A show method would allow the user to find the student of the id of 2. 

method="GET"    /students/edit/2 -  EDIT, An edit method allows the user to locate the student of the id of 2 and update the data as long as it is valid.

method="PATCH"  /students/2  - UPDATE, An update method would allow the user to update the student with the id of 2 as long as the data is valid.

method="DELETE" /students/2   - DELETE, This delete method would delete the student with the id of 2



5. As a developer, you want to make an application that will help you manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user, I can see a homepage with the titles of all of my to-do lists.
2. As a user, I can click on the title of a to-do list and see the content displayed
3. As a user, I can edit an exhisting to-do list
4. As a user, I can see a form to create a new to-do list
5. As a user, I can mark each item in the to-do list as completed
6. As a user, I can delete a to-do list
7. As a user, I can navigate between a to-do list and the homepage
8. As a user, I can ensure that all of my to-do lists have titles
9. As a user, I can ensure that all of my to-do lists check for repeated content (uniqueness) and notify the user
10. As a user, I can set a reminder for certain items in the to-do list