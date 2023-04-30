CREATE DATABASE  IF NOT EXISTS `crossTable` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `crossTable`;
-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: crossTable
-- ------------------------------------------------------
-- Server version	8.0.32-0ubuntu0.22.04.2

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
-- Table structure for table `color_set`
--

DROP TABLE IF EXISTS `color_set`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `color_set` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT '1',
  `gtrname` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_color_set_user_idx` (`user_id`),
  CONSTRAINT `fk_color_set_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `color_set`
--

LOCK TABLES `color_set` WRITE;
/*!40000 ALTER TABLE `color_set` DISABLE KEYS */;
INSERT INTO `color_set` VALUES (1,1,NULL),(2,NULL,NULL),(3,NULL,NULL),(4,NULL,NULL),(5,NULL,NULL),(6,NULL,'ryeryreyeryery'),(7,NULL,'gzrgrzgzrg'),(8,NULL,'2'),(9,NULL,'2'),(10,NULL,'2'),(11,NULL,'gzrgrzgzrg'),(12,1,''),(13,1,'vswdvsd'),(14,1,'vswdvsd'),(15,1,''),(16,1,''),(17,1,''),(18,1,''),(19,1,'');
/*!40000 ALTER TABLE `color_set` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `guitar`
--

DROP TABLE IF EXISTS `guitar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `guitar` (
  `id` int NOT NULL DEFAULT '12',
  `name` varchar(45) DEFAULT NULL,
  `model_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guitar`
--

LOCK TABLES `guitar` WRITE;
/*!40000 ALTER TABLE `guitar` DISABLE KEYS */;
INSERT INTO `guitar` VALUES (1,'ES-335',NULL),(2,'Telecaster',''),(3,'Explorer','');
/*!40000 ALTER TABLE `guitar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `model_parts`
--

DROP TABLE IF EXISTS `model_parts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `model_parts` (
  `item` int NOT NULL AUTO_INCREMENT,
  `color_set_id` int NOT NULL,
  `guitar_id` int NOT NULL DEFAULT '12',
  `parts_id` int DEFAULT NULL,
  `part_name` varchar(45) DEFAULT NULL,
  `color` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`item`),
  KEY `fk_model_parts_color_set1_idx` (`color_set_id`),
  KEY `fk_model_parts_parts1_idx` (`parts_id`),
  KEY `fk_model_parts_guitar1_idx` (`guitar_id`),
  KEY `fk_model_parts_1_idx` (`part_name`),
  CONSTRAINT `fk_model_parts_1 ` FOREIGN KEY (`part_name`) REFERENCES `parts` (`name`),
  CONSTRAINT `fk_model_parts_color_set1` FOREIGN KEY (`color_set_id`) REFERENCES `color_set` (`id`),
  CONSTRAINT `fk_model_parts_guitar1` FOREIGN KEY (`guitar_id`) REFERENCES `guitar` (`id`),
  CONSTRAINT `fk_model_parts_parts1` FOREIGN KEY (`parts_id`) REFERENCES `parts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=227 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `model_parts`
--

LOCK TABLES `model_parts` WRITE;
/*!40000 ALTER TABLE `model_parts` DISABLE KEYS */;
INSERT INTO `model_parts` VALUES (122,14,1,1,'tablefront','#ffffff'),(123,14,1,2,'tableback','#ffffff'),(124,14,1,4,'binding','#ffffff'),(125,14,1,3,'side','#ffffff'),(126,14,1,5,'neckwood','#ffffff'),(127,14,1,6,'fretboard','#ffffff'),(128,14,1,7,'fretbinding','#ffffff'),(129,14,1,8,'frets','#ffffff'),(130,14,1,9,'inlay','#ffffff'),(131,14,1,10,'nut','#ffffff'),(132,14,1,11,'metalpieces','#ffffff'),(133,14,1,12,'pickup_cover','#ffffff'),(134,14,1,13,'pickup_ring','#ffffff'),(135,14,1,14,'knobs','#ffffff'),(136,14,1,17,'texture_path','stocked/1681217837265.png'),(137,14,1,15,'gloss','50'),(138,14,1,16,'scratch','0'),(205,19,1,1,'tablefront','#050005'),(206,19,1,2,'tableback','#700e70'),(207,19,1,4,'binding','#00e6ff'),(208,19,1,3,'side','#383538'),(209,19,1,5,'neckwood','#ffffff'),(210,19,1,6,'fretboard','#ffffff'),(211,19,1,7,'fretbinding','#ffffff'),(212,19,1,8,'frets','#ffffff'),(213,19,1,9,'inlay','#ffffff'),(214,19,1,10,'nut','#ffffff'),(215,19,1,11,'metalpieces','#ffffff'),(216,19,1,12,'pickup_cover','#ffffff'),(217,19,1,13,'pickup_ring','#9e1e9e'),(218,19,1,14,'knobs','#ffffff'),(219,19,1,17,'texture_path','stocked/1681217837265.png'),(220,19,1,15,'gloss','100'),(221,19,1,16,'scratch','0'),(222,19,1,18,'body','#ffffff'),(223,19,1,19,'pickguard','#ffffff'),(224,19,1,20,'single_plastic','#ffffff'),(225,19,1,21,'single_metal','#ffffff'),(226,19,1,22,'backplate','#ffffff');
/*!40000 ALTER TABLE `model_parts` ENABLE KEYS */;
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
  PRIMARY KEY (`id`),
  KEY `idx_name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parts`
--

LOCK TABLES `parts` WRITE;
/*!40000 ALTER TABLE `parts` DISABLE KEYS */;
INSERT INTO `parts` VALUES (22,'backplate'),(4,'binding'),(18,'body'),(7,'fretbinding'),(6,'fretboard'),(8,'frets'),(15,'gloss'),(9,'inlay'),(14,'knobs'),(11,'metalpieces'),(5,'neckwood'),(10,'nut'),(19,'pickguard'),(12,'pickup_cover'),(13,'pickup_ring'),(16,'scratch'),(3,'side'),(21,'single_metal'),(20,'single_plastic'),(2,'tableback'),(1,'tablefront'),(17,'texture_path');
/*!40000 ALTER TABLE `parts` ENABLE KEYS */;
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
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'michel','michel','michel@michel.com','michel');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-27 22:48:02
