drop table if exists users cascade;
drop table if exists category cascade;
drop table if exists entry cascade;

create table users (
  id serial primary key,
  email varchar(255) not null,
  name varchar(255) not null
);

create table category (
    id serial primary key,
    category_name varchar(255) not null
);

create table entry (
    id serial primary key,
    user_id integer references users(id),
    category_id integer references category(id),
    start_time varchar(255) not null,
    finish_time varchar(255) not null,
    hours decimal not null
);

insert into users (email, name)
values ('racedirector@combomtb.com', 'Mike Whaley'),
    ('hornshill@combomtb.com', 'Roger Morgan'),
    ('trails@combomtb.com', 'Tim Carley'),
    ('dude@coramtb.com', 'Jason Reser'),
    ('bro@mtbhaus.com', 'Robert Howley'),
    ('nick@aoa.com', 'Nick Bowman');

insert into category(category_name)
values ('Chestnut Ridge'),
    ('The Wilds'),
    ('Tuscazoar'),
    ('Forry Preserve'),
    ('Devou'),
    ('Horns Hill'),
    ('Series');

insert into entry(user_id, category_id, start_time, finish_time, hours)
values(1, 7,'2023-02-28T13:06', '2023-02-28T13:06', 9.22),
    (2, 6, '2023-02-28T10:13', '2023-02-28T18:29', 8.27),
    (3, 1, '2023-02-28T10:13', '2023-02-28T18:29', 8.27),
    (4, 5, '2023-02-28T10:13', '2023-02-28T18:29', 8.27),
    (5, 5, '2023-02-28T10:13', '2023-02-28T18:29', 8.27),
    (6, 2, '2023-02-28T13:06', '2023-02-28T13:06', 9.22);

 