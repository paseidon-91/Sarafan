--под рутом
drop database sarafan;
create database sarafan;
-- релог в sarafan под postgres
create schema sarafan;
grant all on all tables in schema sarafan to developer;
