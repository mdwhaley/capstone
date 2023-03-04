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
    ('Forry Preserve'),
    ('Devou'),
    ('Horns Hill'),
    ('The Series');

insert into entry(name, email, start_time, finish_time, category_id, hours)
values('Mike Whaley', 'racedirector@combomtb.com','2023-02-28T13:06', '2023-02-28T13:06', 7, 9.22),
    ('Roger Morgan', 'hornshill@combomtb.com', '2023-02-28T10:13', '2023-02-28T18:29', 6, 8.27),
    ('Tim Carley', 'trails@combomtb.com', '2023-02-28T10:13', '2023-02-28T18:29', 1, 8.27),
    ('Jason Reser', 'dude@coramtb.com', '2023-02-28T10:13', '2023-02-28T18:29',5, 8.27),
    ('Robert Howley', 'bro@mtbhaus.com', '2023-02-28T10:13', '2023-02-28T18:29', 5,8.27),
    ('Nick Bowman', 'nick@aoa.com', '2023-02-28T13:06', '2023-02-28T13:06', 2,9.22);