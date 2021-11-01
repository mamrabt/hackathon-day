# Starter setup for Hackathon Dockerized Project by "Mohammed AMRABT"
Docker compose for Hackathon Day (symfony + mysql + angular) project

## **Presentation**

This is a docker composed project that can be used to quickly start a Hackathon Day Project.
PS:

 - The ports used in the [docker-compose.yml](https://github.com/tzgued/dockerPHP/blob/master/docker-compose.yml) maybe not the ones you would love to setup expecially the NGINX on port 81.
 - For developping on Angular I prefer to [ng-serve](https://github.com/angular/angular-cli/wiki/serve) on my machine. It is perfectly fine if you want to add another container based on node and run your dev on it. I may push another version with that.
 - It's my first time doing such contribution to the github community, so feel free to interact in any way you like.
 - The project is in progress and the following has to be completed :
       ## - Backend : Micro services for authentication & authorisation 
       ## - The business rule "Articles & comments can be edited only by their creators or by an admin"
       ## - Communication Front & Back
       ## - Implementing a search engine / elastic search

## Docker containers:

		DataBase:
		 1. MySQL
		 2. PhpMyAdmin
		
		Server Code:
		 1. PHP
		 2. Apache
	 
		 Front End Code:
		 1. NGINX


Usage
-----
Run development environment
```bash
$ docker-compose up
```
or run in background
```bash
$ docker-compose up -d
```
To down environment
```bash
$ docker-compose down
```
Useful
------
Show all container
```bash
$ docker-compose ps
```
Connect to container
```bash
$ docker exec -it {container_name} bash
```
Fix minor problem with docker images
```bash
$ docker-compose up --force-recreate
```

Hacks
-----
For correct work with angular app you must fix `package.json`
```
"scripts": {
    "ng": "ng",
    "start": "ng serve --host 0.0.0.0",
    ....
```

Access to projects
------------------
Hackathon Day Backend Symfony: http://localhost:82

Hackathon Day Frontend Angular: http://localhost:4200

Hackathon Day Database Phpmyadmin: http://localhost:8080

For Access : MYSQL_DATABASE=hday & MYSQL_USER=hday & MYSQL_PASSWORD=hday
