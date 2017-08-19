CREATE DATABASE tasks_db;

USE tasks_db;

CREATE TABLE tasks(
id integer not null auto_increment,
task_name varchar(99) not null,
complete boolean not null default 0,
task_date timestamp not null default current_timestamp,
primary key (id));