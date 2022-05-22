-- Database: cryptonewbie
-- User: cryptonewbie
-- DROP DATABASE cryptonewbie;

CREATE USER cryptonewbie PASSWORD 'AAAaaa111'

CREATE DATABASE cryptonewbie
    WITH 
    OWNER = cryptonewbie
    ENCODING = 'UTF8'
    LC_COLLATE = 'French_Canada.1252'
    LC_CTYPE = 'French_Canada.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;