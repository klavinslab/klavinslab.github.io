1) Put notebook in notebooks directory, which is under the main website directory.

2) Run the following, where `notebook.ipynb` is the name of your notebook. It will put the 
html in same directory as the notebook. Move it the code directory.

    jupyter nbconvert --execute --to html ../notebooks/notebook.ipynb 

3) Remove lines 10442-10443 that puts a box-shadow around `#notebook-container`

4) Add an entry to _data/blog_entries.yml

5) Test