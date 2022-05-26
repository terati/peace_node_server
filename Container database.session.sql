-- SELECT *
--   FROM information_schema.columns
--  WHERE table_schema = 'public'
--    AND table_name   = 'inventory_db';

-- DROP TABLE IF EXISTS inventory_db;


-- SELECT * FROM inventory_db;

-- SELECT * FROM inventory_db WHERE ndc_package_code_without_hyphens ILIKE '72205023%';

-- SELECT * FROM inventory_db WHERE propietary_name ILIKE '%atorvastatin%';

-- SELECT * FROM inventory_tracker;

SELECT * FROM inventory_tracker 
LEFT JOIN inventory_db
ON inventory_db.ndc_package_code_without_hyphens = inventory_tracker.ndc_package_code_without_hyphens;

-- SELECT * FROM inventory_db
-- LEFT JOIN inventory_tracker
-- ON inventory_db.ndc_package_code_without_hyphens = inventory_tracker.ndc_package_code_without_hyphens
-- LIMIT 100;
-- WHERE inventory_db.ndc_package_code_without_hyphens ILIKE '009350%';


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





