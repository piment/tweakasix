-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: tasixMO
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.22.04.1

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
-- Table structure for table `composition`
--

DROP TABLE IF EXISTS `composition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `composition` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_guitar` int DEFAULT NULL,
  `id_part` int DEFAULT NULL,
  `color` varchar(45) DEFAULT NULL,
  `id_texture` int DEFAULT NULL,
  `gloss` varchar(45) DEFAULT NULL,
  `scratch` varchar(45) DEFAULT NULL,
  `wood` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_composition_1_idx` (`id_guitar`),
  KEY `fk_composition_2_idx` (`id_part`),
  KEY `fk_composition_3_idx` (`id_texture`),
  CONSTRAINT `fk_composition_1` FOREIGN KEY (`id_guitar`) REFERENCES `guitar` (`id`),
  CONSTRAINT `fk_composition_2` FOREIGN KEY (`id_part`) REFERENCES `parts` (`id`),
  CONSTRAINT `fk_composition_3` FOREIGN KEY (`id_texture`) REFERENCES `texture` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `composition`
--

LOCK TABLES `composition` WRITE;
/*!40000 ALTER TABLE `composition` DISABLE KEYS */;
INSERT INTO `composition` VALUES (1,24,2,'#ff59ff',1,'100','9.6','0'),(2,24,3,'#ff61ff',1,'100','9.6','0'),(3,24,5,'#000000',1,'100','9.6','0'),(4,24,4,'#00ffe1',1,'100','9.6','0'),(5,24,6,'#ffffff',1,'100','9.6','0'),(6,24,7,'#ffffff',1,'100','9.6','0'),(7,24,8,'#b509b5',1,'100','9.6','0'),(8,24,9,'#ffffff',1,'100','9.6','0'),(9,24,11,'#ffffff',1,'100','9.6','0'),(10,24,10,'#5e205e',1,'100','9.6','0'),(11,24,19,'#ffffff',1,'100','9.6','0'),(12,24,12,'#ffffff',1,'100','9.6','0'),(13,24,13,'#ffffff',1,'100','9.6','0'),(14,24,18,'#ffffff',1,'100','9.6','0'),(15,24,16,'#ffffff',1,'100','9.6','0'),(16,24,14,'#ffffff',1,'100','9.6','0'),(17,24,15,'#ffffff',1,'100','9.6','0'),(18,24,17,'#ffffff',1,'100','9.6','0'),(19,25,2,'#ffffff',2,'50','0','0'),(20,25,3,'#ffffff',2,'50','0','0'),(21,25,5,'#ffffff',2,'50','0','0'),(22,25,4,'#ffffff',2,'50','0','0'),(23,25,6,'#ffffff',2,'50','0','0'),(24,25,7,'#ffffff',2,'50','0','0'),(25,25,8,'#ffffff',2,'50','0','0'),(26,25,9,'#ffffff',2,'50','0','0'),(27,25,11,'#ffffff',2,'50','0','0'),(28,25,10,'#ffffff',2,'50','0','0'),(29,25,19,'#ffffff',2,'50','0','0'),(30,25,12,'#ffffff',2,'50','0','0'),(31,25,13,'#ffffff',2,'50','0','0'),(32,25,18,'#ffffff',2,'50','0','0'),(33,25,16,'#ffffff',2,'50','0','0'),(34,25,14,'#ffffff',2,'50','0','0'),(35,25,15,'#ffffff',2,'50','0','0'),(36,25,17,'#ffffff',2,'50','0','0'),(37,26,2,'#ffffff',3,'50','0','0'),(38,26,3,'#ffffff',3,'50','0','0'),(39,26,5,'#ffffff',3,'50','0','0'),(40,26,4,'#ffffff',3,'50','0','0'),(41,26,6,'#ffffff',3,'50','0','0'),(42,26,7,'#ffffff',3,'50','0','0'),(43,26,8,'#ffffff',3,'50','0','0'),(44,26,9,'#ffffff',3,'50','0','0'),(45,26,11,'#ffffff',3,'50','0','0'),(46,26,10,'#ffffff',3,'50','0','0'),(47,26,19,'#ffffff',3,'50','0','0'),(48,26,12,'#ffffff',3,'50','0','0'),(49,26,13,'#ffffff',3,'50','0','0'),(50,26,18,'#ffffff',3,'50','0','0'),(51,26,16,'#ffffff',3,'50','0','0'),(52,26,14,'#ffffff',3,'50','0','0'),(53,26,15,'#ffffff',3,'50','0','0'),(54,26,17,'#ffffff',3,'50','0','0');
/*!40000 ALTER TABLE `composition` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `guitar`
--

DROP TABLE IF EXISTS `guitar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `guitar` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `model` varchar(45) DEFAULT NULL,
  `id_user` int DEFAULT NULL,
  `fictive` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guitar`
--

LOCK TABLES `guitar` WRITE;
/*!40000 ALTER TABLE `guitar` DISABLE KEYS */;
INSERT INTO `guitar` VALUES (1,'miqueline','1',1,0),(24,'Rosie','1',NULL,NULL),(25,'Ehbheh','2',NULL,NULL),(26,'Ehbheh','2',NULL,NULL);
/*!40000 ALTER TABLE `guitar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `id` int NOT NULL,
  `id_user` int DEFAULT NULL,
  `id_guitar` int DEFAULT NULL,
  `date` date DEFAULT NULL,
  `payment` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_order_1_idx` (`id_user`),
  KEY `fk_order_2_idx` (`id_guitar`),
  CONSTRAINT `fk_order_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`),
  CONSTRAINT `fk_order_2` FOREIGN KEY (`id_guitar`) REFERENCES `guitar` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parts`
--

DROP TABLE IF EXISTS `parts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `part_desc` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `model` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parts`
--

LOCK TABLES `parts` WRITE;
/*!40000 ALTER TABLE `parts` DISABLE KEYS */;
INSERT INTO `parts` VALUES (1,'body',NULL,NULL,NULL,'2'),(2,'tablefront',NULL,NULL,NULL,'1'),(3,'tableback',NULL,NULL,NULL,'1'),(4,'side',NULL,NULL,NULL,'1'),(5,'binding',NULL,NULL,NULL,'1'),(6,'neck',NULL,NULL,NULL,'12'),(7,'fretboard',NULL,NULL,NULL,'12'),(8,'fretbinding',NULL,NULL,NULL,'1'),(9,'frets',NULL,NULL,NULL,'12'),(10,'nut',NULL,NULL,NULL,'12'),(11,'inlay',NULL,NULL,NULL,'12'),(12,'pickup_cover',NULL,NULL,NULL,'1'),(13,'pickup_ring',NULL,NULL,NULL,'1'),(14,'single_plastic',NULL,NULL,NULL,'2'),(15,'single_metal',NULL,NULL,NULL,'2'),(16,'pickguard',NULL,NULL,NULL,'12'),(17,'backplate',NULL,NULL,NULL,'2'),(18,'knobs',NULL,NULL,NULL,'12'),(19,'metalpieces',NULL,NULL,NULL,'12');
/*!40000 ALTER TABLE `parts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `texture`
--

DROP TABLE IF EXISTS `texture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `texture` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_user` varchar(45) DEFAULT NULL,
  `path` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `texture`
--

LOCK TABLES `texture` WRITE;
/*!40000 ALTER TABLE `texture` DISABLE KEYS */;
INSERT INTO `texture` VALUES (1,'1','miquelinebaita/','olé'),(2,'25','stocked/1683990564020.png','original'),(3,'user','stocked/1683990564020.png','original');
/*!40000 ALTER TABLE `texture` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `login` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Jean-Philippe','Herbien',NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_guitar`
--

DROP TABLE IF EXISTS `user_guitar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_guitar` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_user` int NOT NULL,
  `id_guitar` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_guitar_1_idx` (`id_user`),
  KEY `fk_user_guitar_2_idx` (`id_guitar`),
  CONSTRAINT `fk_user_guitar_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`),
  CONSTRAINT `fk_user_guitar_2` FOREIGN KEY (`id_guitar`) REFERENCES `guitar` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_guitar`
--

LOCK TABLES `user_guitar` WRITE;
/*!40000 ALTER TABLE `user_guitar` DISABLE KEYS */;
INSERT INTO `user_guitar` VALUES (1,1,1);
/*!40000 ALTER TABLE `user_guitar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_info`
--

DROP TABLE IF EXISTS `user_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_info` (
  `id` int NOT NULL,
  `id_user` int DEFAULT NULL,
  `number` varchar(45) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `postal` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_info_1_idx` (`id_user`),
  CONSTRAINT `fk_user_info_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_info`
--

LOCK TABLES `user_info` WRITE;
/*!40000 ALTER TABLE `user_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_info` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-13 21:11:06
