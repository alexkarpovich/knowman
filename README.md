# knowman
-------
To run project do following steps:
  1. vagrant up
  2. vagrant provision
  3. vagrant ssh
  4. On the VM move to /var/www/knowman/api/ and run python manage.py migrate
  5. In /var/www/knowman/public/ run 
    - sudo npm install 
    - sudo bower install --allow-root
    - gulp dev (to build js, less, fonts)
  6. In /var/www/knowman/api/ run python manage.py runserver 0.0.0.0:8000
