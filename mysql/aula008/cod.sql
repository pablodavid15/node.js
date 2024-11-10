Comandos Sql

show databases; -- Mostra ttodas as tabelas no Mysql

create database nome_da_database; -- cria uma base de dados no mysql

use nome_da_database; -- entra na base de dados 

create table nome_da_tabela ( -- Criando a tabela 
    nome varchar(30), -- coluna da tabela com o tipo dela
    email varchar(50),-- coluna da tabela com o tipo dela
    idade int -- coluna da tabela com o tipo dela
);

describe nome_da_tabela; -- Mostra a estruta da tabela

insert into nome_da_tabela (nome, email, idade) values ('Pablo David', 'pablodavidtest@gmail.com', 22); -- Inserindo dados na tabela, tem que ta na ordem que foi colocado no comando insert

select * from nome_da_tabela; -- Mostra todos os dados na tabela

select nome_da_coluna from nome_da_tabela; --Mostrando uma coluna especifica obs.: pode adicionar mais de uma nome da coluna com um virgula com nome da coluna

select * from nome_da_tabela where nome_da_coluna = condição; -- mostrando somente aqules que aqules que tem acondição especifica

select * from nome_da_tabela where nome_da_coluna >= condição; -- mostrando somente aqules que aqules que tem acondição especifica neste caso maior ou igual a condição obs.: podemos usar outros operadores lógicos


DELETE FROM nome_da_tabela; -- comando para apagar todos os regristros da tabela

DELETE from nome_da_tabela WHERE nome_da_tabela = condição; --Deletando uma regristro especifico

update nome_da_tabela set nome_da_coluna = 'dado_que_vai_ser_modificado' where nome_da_coluna = 'dado_aonde_vai_ser_modificado'; -- Alterando dados numa coluna especifica, podemos altera outros dados a mesmos tempo com uma virgula e nome da coluna que vai modifica