-- migrate:up
alter table users add column is_deleted boolean not null default false;
alter table conversations add column is_deleted boolean not null default false;
alter table messages add column is_deleted boolean not null default false;


-- migrate:down
alter table users drop column if exists is_deleted;
alter table conversations drop column if exists is_deleted;
alter table messages drop column if exists is_deleted;
