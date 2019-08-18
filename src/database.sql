CREATE TABLE "images" (
	"id" serial primary key,
	"path" varchar (300),
	"description" varchar (80),
	"likes" integer);

INSERT INTO "images" ("path", "description", "likes")
VALUES ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0),
('images/kids.jpg', 'Photo of siblings sitting on a car.', 0),
('images/fishing.jpg', 'Photo of a fishing pole in a dirty red canoe.', 0),
('images/india.jpg', 'Photo of a group of people in tree pose next to the Ganga', 0),
('images/paris.jpg', 'Photo of a street and buildings in Paris.', 0),
('images/rome.jpg', 'Photo of an alleyway in Roma.', 0);
