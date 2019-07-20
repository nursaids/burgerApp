DROP DATABASE burger_db;
CREATE DATABASE burger_db;

USE burger_db;
drop table burgers;
CREATE TABLE burgers
(
	ID int NOT NULL AUTO_INCREMENT,
	name varchar (255) NOT NULL,
	eaten boolean DEFAULT false,
	PRIMARY KEY(ID)
);

select * from burgers;