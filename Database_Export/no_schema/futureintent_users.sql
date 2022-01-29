-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: futureintent
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT 'https://c4.wallpaperflare.com/wallpaper/556/240/994/anime-berserk-guts-wallpaper-preview.jpg',
  `info` varchar(255) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `blackListed` tinyint(1) DEFAULT '0',
  `active` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `email_2` (`email`),
  UNIQUE KEY `email_3` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'IamSoulfuller@gmail.com','FutureIntent','$2b$10$OarS5vU4.T9dFYxZgmFMRu64oO49P2Vfskg4ydBVGRN8WRO86TV8i','https://c4.wallpaperflare.com/wallpaper/556/240/994/anime-berserk-guts-wallpaper-preview.jpg','drip check',1,'2021-09-01 14:57:52','2022-01-23 16:56:43',0,1),(75,'FutureIntent@gmail.com','FutureInt','$2b$10$bHzFOH6INyMRPAA2ebptr.01lnGMTZODIdm47nWh/k8kHjlfmiuXa','https://c4.wallpaperflare.com/wallpaper/556/240/994/anime-berserk-guts-wallpaper-preview.jpg',NULL,0,'2021-09-03 14:20:04','2021-09-06 20:13:29',0,1),(77,'FutureeeIntent@gmail.com','Future','$2b$10$1N4PXlmsKyM7sSDxwbFLUuN94UQ9r1pQspH1Tf10EF3W1cBqYXZyK','https://c4.wallpaperflare.com/wallpaper/556/240/994/anime-berserk-guts-wallpaper-preview.jpg','some info',0,'2021-09-04 17:31:23','2021-09-06 20:13:53',0,1),(89,'blackListTest@inbox.lv','myname','$2b$10$6iix1wdxec/xOw7mMXRa.u45aSHKWBEo6lnvFgCUxSQojdv0qaXVy','https://c4.wallpaperflare.com/wallpaper/556/240/994/anime-berserk-guts-wallpaper-preview.jpg',NULL,0,'2021-09-11 14:19:36','2021-09-11 14:19:36',1,1),(91,'TestTest@inbox.lv','Test','$2b$10$iO8FrVcXmFt9l/.q9S7Yaed.VPFopGYdKWf4XHoR9baOmw3PSc0Hm','https://c4.wallpaperflare.com/wallpaper/556/240/994/anime-berserk-guts-wallpaper-preview.jpg',NULL,0,'2021-10-15 16:32:05','2021-10-28 17:28:06',0,0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-28 19:09:18
