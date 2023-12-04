-- migrate:up

create table if not exists conversations  (
  id mediumint not null auto_increment primary key,
  users json not null,
  last_message_id integer not null,
  created_at timestamp not null default current_timestamp,
  updated_at timestamp not null default current_timestamp
);

create table if not exists user_conversations (
  user_id integer not null,
  conversation_id integer not null,
  created_at timestamp not null default current_timestamp,
  updated_at timestamp not null default current_timestamp,
  constraint user_conversations_pkey primary key (user_id, conversation_id)
);

create table if not exists messages (
  id mediumint not null auto_increment primary key,
  author_id integer not null,
  receiver_id integer not null,
  conversation_id integer not null,
  is_read boolean not null default false,
  message varchar(255) not null,
  created_at timestamp not null default current_timestamp,
  updated_at timestamp not null default current_timestamp
);



alter table messages add constraint messages_author_id_fk foreign key (author_id) references users (id);
alter table messages add constraint messages_receiver_id_fkk foreign key (receiver_id) references users (id);
alter table messages add constraint messages_conversation_id_fk foreign key (conversation_id) references conversations (id);

alter table user_conversations add constraint user_conversations_user_id_fk foreign key (user_id) references users (id);
alter table user_conversations add constraint user_conversations_conversation_id_fk foreign key (conversation_id) references conversations (id);

alter table conversations add constraint conversations_last_message_id_fk foreign key (last_message_id) references messages (id);



-- migrate:down
alter table messages drop foreign key if exists messages_author_id_fk;
alter table messages drop foreign key if exists messages_receiver_id_fkk;
alter table messages drop foreign key if exists messages_conversation_id_fk;

alter table user_conversations drop foreign key if exists user_conversations_user_id_fk;
alter table user_conversations drop foreign key if exists user_conversations_conversation_id_fk;

alter table conversations drop foreign key if exists conversations_last_message_id_fk;

drop table if exists messages;
drop table if exists user_conversations;
drop table if exists conversations;

