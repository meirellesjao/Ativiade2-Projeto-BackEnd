create database jv_cursos;
show databases;
use jv_cursos;
show tables;
CREATE TABLE cursos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100),
    descricao TEXT,
    duracao VARCHAR(20),
    status VARCHAR(20));
show tables;
SELECT * FROM cursos;
