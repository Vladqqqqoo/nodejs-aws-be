create extension if not exists "uuid-ossp";

create table if not exists products (
id uuid primary key default uuid_generate_v4(),
title text,
description text,
color text,
fabric text,
price integer
)


insert into products (title, description, color, fabric, price) values 
('love66','The best bed linens ever', 'peach', 'satin', 180),
('love66','The best bed linens ever', 'blue', 'satin', 180),
('love66','The best bed linens ever', 'black', 'satin', 180),
('love66','The best bed linens ever', 'red', 'satin', 180),
('love66','The best bed linens ever', 'dark blue', 'satin', 180),
('love66','The best bed linens ever', 'white', 'satin', 180),
('love66','The best bed linens ever', 'green', 'satin', 180),
('love66','The best bed linens ever', 'apple green', 'satin', 180),
('love66','The best bed linens ever', 'orange', 'satin', 180),
('love66','The best bed linens ever', 'peach', 'pink', 180)

create table if not exists stocks (
	id uuid primary key default uuid_generate_v4(),
	product_id uuid,
	product_count integer,
	foreign key ("product_id") references "products" ("id")
)

insert into stocks (product_id, product_count) values
('e2a8d295-c8de-41c7-be60-b4ffb1f850a7', 2),
('8e93ad2b-489a-4c8c-a7a4-60cd51861872', 5),
('fe8f3582-53b3-45f5-9e48-3008e5c40dee', 4),
('7306d22c-6246-47b2-96cb-80c41b684e82', 6),
('2221dcff-debe-44f8-9a9d-0ecea3b6203d', 1),
('87746cc9-51a2-4c86-806e-e3841060e510', 3),
('c9628c63-8de5-4806-928e-1330ef2ea39c', 2),
('bc4492f0-604d-419a-a3f4-804d90c8a9af', 3),
('6f901678-767c-45e5-862d-4a79b8224556', 3),
('aa007c0b-1589-415e-87e4-6f75db772502', 4)

