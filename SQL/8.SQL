-- For this challenge you need to create a simple SELECT statement that will return all columns from the people table WHERE their age is over 50

-- people table schema
-- id
-- name
-- age
-- You should return all people fields where their age is over 50 and order by the age descending

-- NOTE: Your solution should use pure SQL. Ruby is used within the test cases to do the actual testing.

--1 
SELECT 
    ID  
    , NAME
    , AGE
FROM PEOPLE
WHERE AGE > 50
ORDER BY AGE DESC

--------------------------
-- 2/ Create a simple SELECT query to display student information of all ACTIVE students.

-- TABLE STRUCTURE:

-- students
-- Id (integer)	FirstName (text)	LastName (text)	IsActive (boolean)


-- Note:

-- IsActive (true = 1 or false = 0)

SELECT *
from students
WHERE IsActive = 1;