DROP TABLE IF EXISTS TB_HEROES;
CREATE TABLE TB_HEROES (
    ID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
    NOME TEXT NOT NULL,
    PODER TEXT NOT NULL
);
INSERT INTO TB_HEROES (NOME,PODER)
VALUES
    ('The Flash','Super Speed'),
    ('Batman','Many Money'),
    ('Superman','Super Force'),
    ('Aquaman','King of ocean'),
    ('Robin','Martial Arts');