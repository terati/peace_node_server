-- SELECT *
--   FROM information_schema.columns
--  WHERE table_schema = 'public'
--    AND table_name   = 'inventory_db';

-- DROP TABLE IF EXISTS inventory_db;


-- SELECT * FROM inventory_db;

SELECT * FROM inventory_db WHERE ndc_package_code_without_hyphens ILIKE '72205023%';

-- DROP TABLE IF EXISTS example;

-- CREATE TABLE IF NOT EXISTS example (
--   user_id BIGINT,
--   name VARCHAR(255)
-- );

-- INSERT INTO example (user_id, name)
-- VALUES
--   (1, 'Timothy Wong'),
--   (2, 'Jeremy Frank');

-- SELECT * FROM example;





