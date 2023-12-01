-- migrate:up

-- remove constraint foreign key of ids first
alter table messages drop foreign key if exists messages_author_id_fk;
alter table messages drop foreign key if exists messages_receiver_id_fkk;
alter table messages drop foreign key if exists messages_conversation_id_fk;

alter table user_conversations drop foreign key if exists user_conversations_user_id_fk;
alter table user_conversations drop foreign key if exists user_conversations_conversation_id_fk;

alter table conversations drop foreign key if exists conversations_last_message_id_fk;

alter table users modify id mediumint not null auto_increment;
alter table conversations modify id mediumint not null auto_increment;
alter table messages modify id mediumint not null auto_increment;

-- then add constraint foreign key of ids again
alter table messages add constraint messages_author_id_fk foreign key (author_id) references users (id);
alter table messages add constraint messages_receiver_id_fkk foreign key (receiver_id) references users (id);
alter table messages add constraint messages_conversation_id_fk foreign key (conversation_id) references conversations (id);

alter table user_conversations add constraint user_conversations_user_id_fk foreign key (user_id) references users (id);
alter table user_conversations add constraint user_conversations_conversation_id_fk foreign key (conversation_id) references conversations (id);

alter table conversations add constraint conversations_last_message_id_fk foreign key (last_message_id) references messages (id);



-- migrate:down


