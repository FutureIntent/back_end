CREATE DATABASE  IF NOT EXISTS `futureintent` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `futureintent`;
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
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `theme` varchar(255) NOT NULL,
  `text` mediumtext,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (21,'theme_1\n','text_1\n','2021-12-10 10:46:56','2021-12-10 10:46:56'),(22,'theme_2\n','text_2\n','2021-12-10 10:47:09','2021-12-10 10:47:09'),(25,'testing','sfdgfdvbfdbfdbcfbfcbfcb','2021-12-14 12:11:13','2021-12-14 12:11:13'),(29,'finish','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at nulla sed arcu dapibus tincidunt sed ut orci. Nullam risus est, laoreet ut justo blandit, tincidunt tincidunt justo. Cras a dapibus erat. Integer maximus enim nibh, elementum malesuada dolor imperdiet et. Praesent dignissim justo sed purus faucibus, eu rhoncus ligula dignissim. Proin et ligula at eros malesuada tristique eget eu odio. Morbi malesuada, diam eu pharetra sodales, felis libero egestas mauris, id fringilla lacus ipsum et turpis. Curabitur venenatis mauris risus, in tincidunt ligula ultricies suscipit. Sed porta vestibulum dignissim.\r\n\r\nFusce interdum mi leo, nec mattis dolor vehicula nec. Sed velit arcu, lacinia vel orci pellentesque, feugiat hendrerit dui. Quisque molestie lacus eu erat condimentum lacinia. Sed aliquet hendrerit vulputate. Nullam pulvinar, leo euismod varius semper, est lectus varius dolor, non ornare mi elit id massa. Fusce facilisis velit in lectus lacinia, ac rutrum quam pellentesque. Maecenas pulvinar auctor augue, et iaculis mi dapibus sed.\r\n\r\nDuis gravida lectus sit amet quam tincidunt, lacinia aliquam mi efficitur. Vestibulum pretium sed est eget consequat. Integer nec eros augue. Aenean non nisl vel augue convallis varius et sed est. Etiam quis dolor quis dui bibendum dapibus non ac metus. Aenean aliquam vitae orci vel tristique. Duis interdum sem vel augue accumsan iaculis. Donec dictum sollicitudin consequat. Nullam feugiat convallis mi, sit amet consequat magna vestibulum vitae. Donec congue feugiat massa, nec venenatis odio iaculis vel. Duis viverra eros vel vehicula consectetur. Curabitur maximus laoreet enim, nec accumsan sapien semper vitae.\r\n\r\nAenean finibus ante libero, hendrerit viverra eros interdum sed. Quisque vel metus a justo congue fringilla. Aliquam erat volutpat. Donec tempus ultrices ante, in vestibulum leo molestie a. Integer hendrerit, massa nec tincidunt tempus, quam neque lobortis ante, ac aliquet diam eros eget augue. Pellentesque iaculis ex sit amet malesuada gravida. Nullam eu leo quis odio mattis molestie. Etiam a ultrices tortor, in porttitor nisi. Etiam sed rutrum sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer ac nibh condimentum, dapibus eros vitae, bibendum sapien.\r\n\r\nVivamus vulputate dapibus facilisis. Duis egestas magna et est rhoncus, quis interdum arcu suscipit. Maecenas ultrices dolor ut purus dignissim efficitur. Maecenas iaculis, mauris id rhoncus posuere, arcu eros malesuada est, quis suscipit metus erat et arcu. Proin id nunc erat. Donec sed leo a quam consectetur viverra sed viverra odio. In non nunc lorem. Morbi vel gravida nibh, sed commodo ex. Curabitur nibh enim, vehicula et tellus et, cursus egestas nisi. Donec nibh nulla, commodo eu tempor eget, consequat ac enim. Fusce rutrum arcu ac rutrum molestie. Duis sed risus in sem placerat laoreet.\r\n\r\nUt est mauris, viverra quis efficitur vel, vulputate sed nunc. Nullam sit amet dapibus magna, a iaculis diam. Pellentesque risus odio, ultricies non tincidunt in, eleifend vel lectus. Integer faucibus feugiat mi, sed ultricies elit pretium sagittis. Phasellus ac maximus nisi, viverra egestas nunc. Nam placerat diam et placerat hendrerit. Nulla facilisi. Mauris pretium sit amet ex eu laoreet.\r\n\r\nPellentesque non ligula sit amet purus condimentum fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec scelerisque mollis sapien eu placerat. Integer convallis velit vel orci ultrices rutrum. Etiam pretium risus efficitur purus auctor ornare. Maecenas blandit nisl nec placerat tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem elit, facilisis ac lectus et, rutrum hendrerit tellus. Praesent cursus maximus ex, nec sollicitudin velit finibus sit amet. Curabitur vitae semper ligula. Nunc magna arcu, venenatis a magna vel, lobortis lacinia odio. Praesent mollis mauris et varius egestas. Donec egestas sapien purus, gravida sollicitudin purus mattis a.\r\n\r\nPraesent condimentum turpis id est pharetra, ac hendrerit eros euismod. Morbi pellentesque leo ut mi mattis vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam elit massa, consectetur eu dolor nec, faucibus venenatis augue. Fusce fermentum lobortis vestibulum. Nam lacinia convallis neque, a tempus ligula ornare in. Donec purus sapien, pellentesque quis nisi ut, gravida egestas elit.\r\n\r\nProin vitae consequat purus, vitae faucibus purus. Fusce viverra nisl eu sapien eleifend gravida. Fusce sed eros id justo ullamcorper ornare in vitae quam. Praesent malesuada odio velit, eu ornare est varius ut. Sed et magna eget eros gravida ornare a quis felis. Aenean nunc ipsum, ullamcorper quis cursus sed, dapibus id purus. Maecenas nec lacus vitae dolor laoreet dignissim sed nec ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam turpis tortor, faucibus sed tellus non, scelerisque rutrum nibh. Morbi dictum magna tellus, vitae tincidunt sem pretium vitae.\r\n\r\nAenean at faucibus lectus. Pellentesque at luctus quam, eu pellentesque sem. Quisque finibus lorem sit amet metus venenatis faucibus. Morbi fringilla felis ullamcorper luctus blandit. Quisque volutpat malesuada nisi, et mollis lectus porta eu. Etiam et pretium nisi, nec volutpat metus. Proin iaculis ac erat eu semper. Duis vel libero varius, laoreet purus eu, dictum orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ante ex. Nullam sit amet fermentum orci. Sed odio diam, vestibulum vitae egestas in, tincidunt at enim.','2022-01-23 15:51:17','2022-01-23 15:51:17'),(30,'dawdawd','gfdgfdgdfgdfggfdgfdgdfgdfggfdgfdgdfgdfggfdgfdgdfgdfggfdgfdgdfgdfggfdgfdgdfgdfggfdgfdgdfgdfggfdgfdgdfgdf','2022-01-23 18:33:44','2022-01-23 18:33:44');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-28 20:55:39
