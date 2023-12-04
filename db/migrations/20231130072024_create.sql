-- migrate:up
create table if not exists users (
  id mediumint not null auto_increment primary key,
  name varchar(255) not null,
  email varchar(255) not null,
  password varchar(255) not null,
  created_at timestamp not null default current_timestamp,
  updated_at timestamp not null default current_timestamp
);

-- migrate:down
drop table if exists users;

