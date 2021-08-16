# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The class BlogPost is inheriting from the class Application and there is a index method in the class 
class BlogPostsController < ApplicationController
  def index
    # ---2) @posts is part of the index method and it is an instance variable that is assigned to BlogPost.all and this will render all of the blog posts in the database in an array with unique IDs for each. The def show is also a method for a different behavior.
    @posts = BlogPost.all
  end

  def show
    # ---3) In the show method, the @post instance variable is assigned to BlogPost.find with a params of id. This allows us to locate one specific piece of data by its given ID. It will render the data that belongs to the unique ID.
    @post = BlogPost.find(params[:id])
  end

  # ---4) The new method will display a form to the user, the @post instance variable is assigned to Post.new which will allow the user to add data to the web application. The def create is a create method that then allows the data that the user has given us to be stored into the database. 
  def new
    @post = Post.new
  end

  def create
    # ---5) the @post is assigned to BlogPost.create(blog_post_params), BlogPost.create allows the user to add data to the database and the (blog_post_params) that is being passed in is the method towards the bottom of the page. There is also an if statement asking if @post.valid? this if statement says if the data given by the user is valid, redirect the user to the blog post that has been created "else" the data given by the user is not valid then redirect the user to the create a new blog post page until the data given is valid.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) The edit method displays a view where the user can make changes. The @post is assigned to BlogPost.find(params[:id]), this allows the user to find and view the blog post (by its unique id) they are wishing to edit. The update method allows the user to make the change to the database. the @post is assigned to the BlogPost.(params[:id]) and this allows the update method to locate the blog by its unique id that is waiting to be updated.
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) The @post.update(blog_post_params) will then make the update in the database. The if @post.valid? will redirect the user to view the updated blog if the data given was valid. "Else" if the data was not valid, it will redirect the user to the edit blog page until the data given is valid. The destory method deletes data. The @post is assigned to BlogPost.find(params[:id]) and this allows the user to locate the blog they are wishing to delete by its unique id. There is also an if statement that says if the post is destroyed, redirect the user to view all the blogs posts page. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) "Else", redirect the user to the blog post that they are attempting to delete.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) This is a private method, anything below this method can only be called within the scope of this class. The blog_post_params is called a strong param.
  private
  def blog_post_params
    # ---10) params.require is requiring the model, and .permit(:title, :content) is permitting only what the user is allowed to update
    params.require(:blog_post).permit(:title, :content)
  end
end
