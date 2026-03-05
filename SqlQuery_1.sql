-- create_tables.sql
CREATE DATABASE CevrimiciYemekSiparisPlatformu;
GO

USE CevrimiciYemekSiparisPlatformu;
GO

CREATE TABLE Users (
    UserID INT PRIMARY KEY IDENTITY,
    UserName NVARCHAR(50),
    Email NVARCHAR(100)
);
GO

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY IDENTITY,
    UserID INT FOREIGN KEY REFERENCES Users(UserID),
    OrderDate DATETIME
);
GO