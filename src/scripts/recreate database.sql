--под рутом
drop database sarafan;
create database sarafan;
-- релог в test_db под postgres
create schema sarafan;
grant all on all tables in schema sarafan to developer;
