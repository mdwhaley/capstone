drop table if exists entry cascade;
drop table if exists category cascade;

create table category (
    id serial primary key,
    category_name varchar(255) not null
);

create table entry (
    id serial primary key,
    name varchar(255) not null,
    email varchar(255) not null,
    start_time varchar(255) not null,
    finish_time varchar(255) not null,
    category_id integer references category(id),
    hours decimal not null
);
insert into category(category_name)
values ('Chestnut Ridge'),
    ('The Wilds'),
    ('Tuscazoar'),
    ('Star Hill'),
    ('Devou'),
    ('Horns Hill'),
    ('The Series');

insert into entry(name, email, start_time, finish_time, category_id, hours)
values
('Mike Whaley	','racedirector@combomtb.com	','2023-02-28T13:06','2023-02-28T13:06',7,9.22),
('Roger Morgan	','hornshill@combomtb.com	','2023-02-28T10:13','2023-02-28T18:29',6,8.27),
('Tim Carley	    ','trails@combomtb.com	    ','2023-02-28T10:13','2023-02-28T18:29',1,8.27),
('Jason Reser	','dude@coramtb.com	        ','2023-02-28T10:13','2023-02-28T18:29',5,8.27),
('Robert Howley	','bro@mtbhaus.com	        ','2023-02-28T10:13','2023-02-28T18:29',5,8.27),
('Nick Bowman	','nick@aoa.com	            ','2023-02-28T13:06','2023-02-28T13:06',2,9.22),
('Mike Whaley	','racedirector@combomtb.com	','2023-03-05T08:13','2023-03-05T10:05',1,1.87),
('Mike Whaley	','racedirector@combomtb.com	','2023-03-06T05:10','2023-03-06T06:58',1,1.8),
('Mike Whaley	','racedirector@combomtb.com	','2023-03-06T08:43','2023-03-06T13:49',6,5.1),
('Mike Whaley	','racedirector@combomtb.com	','2023-03-06T20:59','2023-03-06T23:03',2,2.07),
('Mike Whaley	','racedirector@combomtb.com	','2023-03-07T07:03','2023-03-07T09:24',1,2.35),
('Roger Morgan	','hornshill@combomtb.com	','2023-03-07T07:05','2023-03-07T11:11',6,4.1),
('Melany Lowe	','mel@combomtb.com	        ','2023-03-07T07:08','2023-03-07T10:08',7,3),
('Tim Carley	    ','hornshill@combomtb.com	','2023-03-07T07:13','2023-03-07T15:27',1,8.23),
('Paula Robinett	','paulaj.robinett@gmail.com	','2023-03-07T07:54','2023-03-07T10:57',7,3.05),
('Doug Garafolo	','doug@tuscazoar.com	    ','2023-03-07T10:14','2023-03-07T13:10',3,2.93),
('Mark Grise	    ','mark@combomtb.com	        ','2023-03-07T10:16','2023-03-07T14:52',4,4.6),
('Dave Sherman	','dave@shreddinwithsherm.com','2023-03-07T11:50','2023-03-07T17:57',6,6.12),
('Mike Whaley	','racedirector@combomtb.com	','2023-03-07T14:41','2023-03-07T19:46',1,5.08),
('Nick Bowman	','nick@aoa.com	            ','2023-03-07T15:14','2023-03-07T21:56',2,6.7),
('Mike Whaley	','racedirector@combomtb.com	','2023-03-07T15:27','2023-03-07T19:32',3,4.08),
('Rae Gandolph	','rae@aoa.org	            ','2023-03-07T15:38','2023-03-07T22:49',2,7.18),
('Mike Whaley	','racedirector@combomtb.com	','2023-03-05T10:11','2023-03-05T13:11',6,3),
('Jillian Whaley	','jwhaley@gmail.com	        ','2023-03-07T14:58','2023-03-07T17:05',7,2.12);