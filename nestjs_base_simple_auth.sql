-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.11-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for simk3
CREATE DATABASE IF NOT EXISTS `nestjs_base_simple_auth` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `nestjs_base_simple_auth`;

-- Dumping structure for table nestjs_base_simple_auth.oauth_access_tokens
CREATE TABLE IF NOT EXISTS `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_fk` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table nestjs_base_simple_auth.oauth_access_tokens: ~19 rows (approximately)
/*!40000 ALTER TABLE `oauth_access_tokens` DISABLE KEYS */;
INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
	('05d7dd94-ec78-45f6-933f-e9e50ada45a1', 2, 2, NULL, NULL, 1, '2020-02-27 16:00:36', '2020-02-27 16:07:47', '2020-03-05 16:00:36'),
	('0f75247a-f9d6-43b4-af87-a59644bc28c2', 2, 2, NULL, NULL, 1, '2020-02-27 16:09:29', '2020-02-28 04:16:33', '2020-03-05 16:09:29'),
	('195d83d4-a7ce-4d62-87bb-d3cf0fcc2d24', 2, 2, NULL, NULL, 0, '2020-02-28 09:35:09', '2020-02-28 09:35:09', '2020-03-06 09:35:09'),
	('1c8509d9-a2be-4dd4-9c0c-27f6130ae92f', 2, 2, NULL, NULL, 1, '2020-02-27 16:05:49', '2020-02-27 16:07:47', '2020-03-05 16:05:49'),
	('3229e3d0-31e5-4d4f-9c6f-5e6c4d5b7702', 2, 2, NULL, NULL, 1, '2020-02-27 15:38:59', '2020-02-27 16:07:47', '2020-03-05 15:38:59'),
	('3d78092f-6cee-40a0-af80-c867a4df01e0', 2, 2, NULL, NULL, 1, '2020-02-28 04:18:22', '2020-02-28 04:20:10', '2020-03-06 04:18:22'),
	('3f57f9e4-d2f5-4627-ac79-9c83b029ddae', 2, 2, NULL, NULL, 1, '2020-02-27 15:43:57', '2020-02-27 16:07:47', '2020-03-05 15:43:57'),
	('743782c9-98c3-4928-a53b-5f1ba3036284', 2, 2, NULL, NULL, 1, '2020-02-27 15:03:10', '2020-02-27 16:07:47', '2020-02-27 15:03:10'),
	('748c8f94-cdeb-4232-8a66-2a12f1876672', 2, 2, NULL, NULL, 0, '2020-02-28 04:20:10', '2020-02-28 04:20:10', '2020-03-06 04:20:10'),
	('8b74d4fc-23f7-41d2-8ff4-e183b21e8077', 2, 2, NULL, NULL, 1, '2020-02-27 15:22:18', '2020-02-27 16:09:29', '2020-02-27 15:22:18'),
	('919ba0ed-ff8e-4d2c-ae1f-bc869d683485', 2, 2, NULL, NULL, 1, '2020-02-27 15:40:38', '2020-02-27 16:07:47', '2020-03-05 15:40:38'),
	('a2acc184-0eab-44d5-bb2e-026d32b090cf', 2, 2, NULL, NULL, 1, '2020-02-27 15:22:20', '2020-02-27 16:07:47', '2020-02-27 15:22:20'),
	('b46857ab-e82b-41e2-828b-ffd10f243e8b', 2, 2, NULL, NULL, 1, '2020-02-27 15:46:42', '2020-02-27 16:07:47', '2020-03-05 15:46:42'),
	('b61b9454-afcd-417b-ba85-f8b2da53e418', 2, 2, NULL, NULL, 0, '2020-02-28 10:09:20', '2020-02-28 10:09:20', '2020-03-06 10:09:20'),
	('bca2ba3d-9f57-41e2-aee6-d5dee47cbb0f', 2, 2, NULL, NULL, 1, '2020-02-27 16:05:07', '2020-02-27 16:07:47', '2020-03-05 16:05:07'),
	('da32b50f-078f-4655-9773-720cc70bd0fb', 2, 2, NULL, NULL, 1, '2020-02-27 15:26:03', '2020-02-27 16:07:47', '2020-03-05 15:26:03'),
	('dbde76f8-290d-4635-bddd-01e59914f504', 2, 2, NULL, NULL, 1, '2020-02-27 16:07:47', '2020-02-27 16:09:29', '2020-03-05 16:07:47'),
	('dbf08751-6ded-4fe1-9dea-400fd81c3e9d', 2, 2, NULL, NULL, 1, '2020-02-27 16:06:59', '2020-02-27 16:07:47', '2020-03-05 16:06:59'),
	('ea80903a-17ab-450d-8526-4bd09627f1a2', 2, 2, NULL, NULL, 1, '2020-02-27 16:06:38', '2020-02-27 16:07:47', '2020-03-05 16:06:38'),
	('f46fd55b-0fe7-4c3b-9386-9e986eb1da4f', 2, 2, NULL, NULL, 1, '2020-02-28 04:16:33', '2020-02-28 04:18:22', '2020-03-06 04:16:33');
/*!40000 ALTER TABLE `oauth_access_tokens` ENABLE KEYS */;

-- Dumping structure for table nestjs_base_simple_auth.roles
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `description` varchar(191) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Dumping data for table nestjs_base_simple_auth.roles: ~3 rows (approximately)
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` (`id`, `name`, `description`) VALUES
	(1, 'super_admin', 'Super Admin'),
	(2, 'admin', 'Admin'),
	(3, 'guest', 'Guest'),
	(4, 'manager', 'Manager');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;

-- Dumping structure for table nestjs_base_simple_auth.role_user
CREATE TABLE IF NOT EXISTS `role_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

-- Dumping data for table nestjs_base_simple_auth.role_user: ~3 rows (approximately)
/*!40000 ALTER TABLE `role_user` DISABLE KEYS */;
INSERT INTO `role_user` (`id`, `role_id`, `user_id`) VALUES
	(1, 1, 2),
	(3, 2, 2),
	(16, 2, 11);
/*!40000 ALTER TABLE `role_user` ENABLE KEYS */;

-- Dumping structure for table nestjs_base_simple_auth.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `api_token` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table nestjs_base_simple_auth.users: ~2 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `name`, `email`, `password`, `image`, `remember_token`, `api_token`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(1, 'Novri Rizky', 'vreebirth@gmail.com', '$2y$10$2VtoYAHLOl4oDAX7VF4F3egvYZU/u0Hj4hFiuxXGY0C7o12xfGSy.', 'user2-160x160.jpg', '$2y$10$2VtoYAHLOl4oDAX7VF4F3egvYZU/u0Hj4hFiuxXGY0C7o12xfGSy.', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ1NmZlMjAzYzY0YzlkNDc5NjY0NjI1NGU3MjJhYjc2YzMzYzMzYjZjYTg5ZjMzMTAwN2Q4OWRlNDNmOWY5YzkyM2E0OGQwODZjYjI5ZjA3In0.eyJhdWQiOiIzIiwianRpIjoiZDU2ZmUyMDNjNjRjOWQ0Nzk2NjQ2MjU0ZTcyMmFiNzZjMzNjMzNiNmNhODlmMzMxMDA3ZDg5ZGU0M2Y5ZjljOTIzYTQ4ZDA4NmNiMjlmMDciLCJpYXQiOjE1ODIyNzczODksIm5iZiI6MTU4MjI3NzM4OSwiZXhwIjoxNjEzODk5Nzg5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.QfGHSrRsMWTyXtOi1UABHHvElZGFVSMdEfXrx2aN25cuGeP2dysjDU0XeXqhw79cg2x8qfrn4yu6gfi-yHEFrTDFSF3gcFo9BNkiJKWq7qEVhZyG6kCsdubUEQAYWDxr8U7Yl2igVELhbA3677k8F_czbCBptzw5EM2IMxQvHRUvU-i0_jP7HoTCxnhqBc1PfXCCn1U6MqYo2En7-lF76ewqFuSsPPpPrKUTSIBfMR52taHtuUtrkjuea8NyidUZF18nhK2sQM7DJF5TAWeQsKg1_ISm825RtGLBLTVOEzH41wNQXqOsdmdM7MeKCQ3el-vgbq0p9Yd-DCvnf4158S4EF2tI6pXZAFlky9HdCwrL4SpO2EPMdUTOOBD8E7kDyPmwn-SeutXya88coLvBp_G_Zf2VMl38wQMTFw4CmfYUrifh7aUdQLyK6QA6PgP2uSsOwLHdRGMWM_4Zm_fPzFOfEi3F3m_w9BncTiCb3HCN-BNbrkF6Ek9SR49wZHIBZXTtJhlgRCwF1A9tHLiv6fDaqLjadYAm7CQ88D-newa9kwEDRBOm74IIZSutbcMkaeK5yIFPPEoWBlP1np8rx12HiATp-p2lI_n4W2A7hIAZPkYYoKFcYC3oQorjcauMO0vjGaqxSe0Mag_sqgWZWxrodc7Abv2_GrgfOsdLHds', '2018-08-02 09:52:33', '2020-02-21 16:29:49', NULL),
	(2, 'Novri Rizky', 'novri.minangwarman@gmail.com', '0ea67ddb-1229-57bb-9063-0c0041190ae7', 'user2-160x160.jpg', NULL, NULL, '2020-02-27 00:41:25', '2020-02-27 00:41:25', NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
