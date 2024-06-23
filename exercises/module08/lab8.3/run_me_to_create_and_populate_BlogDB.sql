create database BlogDB
use BlogDB;

-- create tables

create table users (id int not null,
email varchar(50) not null,
username varchar(50) not null,
password varchar(50) not null,
primary key(id));

-- cleanup incorrectly persisted table
-- drop table blog_posts;

create table blog_posts (
id INT not null,
user_id INT not null,
title VARCHAR(50) not null,
content varchar(100) not null,
image blob(2000),
primary key(id),
foreign key(user_id) references users(id)
);

create table comments (
id int not null,
user_id int not null,
blog_post_id int not null,
content varchar(100) not null,
primary key(id),
foreign key(user_id) references users(id),
foreign key(blog_post_id) references blog_posts(id)
);

create table likes (
id int not null,
user_id int not null,
blog_post_id int not null,
primary key(id),
foreign key(user_id) references users(id),
foreign key(blog_post_id) references blog_posts(id)
);

-- insert mock data
insert into users values
(1, 'alpha@msm.com', 'alpha', 'sdf(*#jfd'),
(2, 'beta@msm.com', 'beta', 'dskhjfds(*'),
(3, 'charlie@msm.com', 'charlie', 'imcharlie');

insert into blog_posts values
(1, 3, 'some thing', 'this is some content in a blog post by this user!', 'string representing binary data'),
(2, 1, 'some other cool title', 'this is some other content, with a title that is more cool.', 'string representing binary data');

insert into comments values
(1, 2, 1, 'Really cool post by please unsubscribe me.');

insert into likes values
(1, 2, 2);

-- just testing retrieval things
-- select image from blog_posts