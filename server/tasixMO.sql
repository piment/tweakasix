-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: tasixMO
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.22.04.2

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
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `composition`
--

LOCK TABLES `composition` WRITE;
/*!40000 ALTER TABLE `composition` DISABLE KEYS */;
INSERT INTO `composition` VALUES (55,27,2,'#990b99',4,'50','0','0'),(56,27,3,'#360936',4,'50','0','0'),(57,27,5,'#ffffff',4,'50','0','0'),(58,27,4,'#00ffd0',4,'50','0','0'),(59,27,6,'#9e929e',4,'50','0','0'),(60,27,7,'#2e182e',4,'50','0','0'),(61,27,8,'#ffffff',4,'50','0','0'),(62,27,9,'#ffffff',4,'50','0','0'),(63,27,11,'#ffffff',4,'50','0','0'),(64,27,10,'#ffffff',4,'50','0','0'),(65,27,19,'#ffffff',4,'50','0','0'),(66,27,12,'#ffffff',4,'50','0','0'),(67,27,13,'#37ff00',4,'50','0','0'),(68,27,18,'#ffffff',4,'50','0','0'),(69,27,16,'#ffffff',4,'50','0','0'),(70,27,14,'#ffffff',4,'50','0','0'),(71,27,15,'#ffffff',4,'50','0','0'),(72,27,17,'#ffffff',4,'50','0','0'),(73,28,2,'#000000',5,'100','0','0'),(74,28,3,'#000000',5,'100','0','0'),(75,28,5,'#ffee00',5,'100','0','0'),(76,28,4,'#000000',5,'100','0','0'),(77,28,6,'#9e929e',5,'100','0','0'),(78,28,7,'#383838',5,'100','0','0'),(79,28,8,'#000000',5,'100','0','0'),(80,28,9,'#ffffff',5,'100','0','0'),(81,28,11,'#fff700',5,'100','0','0'),(82,28,10,'#ffffff',5,'100','0','0'),(83,28,19,'#caa449',5,'100','0','0'),(84,28,12,'#caa449',5,'100','0','0'),(85,28,13,'#ffbb00',5,'100','0','0'),(86,28,18,'#000000',5,'100','0','0'),(87,28,16,'#ffffff',5,'100','0','0'),(88,28,14,'#ffffff',5,'100','0','0'),(89,28,15,'#ffffff',5,'100','0','0'),(90,28,17,'#ffffff',5,'100','0','0');
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
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guitar`
--

LOCK TABLES `guitar` WRITE;
/*!40000 ALTER TABLE `guitar` DISABLE KEYS */;
INSERT INTO `guitar` VALUES (27,'testus','1',NULL,NULL),(28,'Black beauty','1',NULL,NULL);
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
-- Table structure for table `part_variations`
--

DROP TABLE IF EXISTS `part_variations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `part_variations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `part_id` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `color` varchar(45) DEFAULT NULL,
  `material` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_part_id_idx` (`part_id`),
  CONSTRAINT `fk_part_id` FOREIGN KEY (`part_id`) REFERENCES `parts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `part_variations`
--

LOCK TABLES `part_variations` WRITE;
/*!40000 ALTER TABLE `part_variations` DISABLE KEYS */;
INSERT INTO `part_variations` VALUES (1,12,'Humbucker',0,'silver','metal'),(2,12,'Humbucker',15,'gold','metal'),(3,12,'Humbucker',25,'copper','metal'),(4,13,'Humbucker Ring',0,'silver','metal'),(5,13,'Humbucker Ring',5,'gold','metal'),(6,13,'Humbucker Ring',5,'copper','metal'),(7,13,'Humbucker Ring',5,'','plastic');
/*!40000 ALTER TABLE `part_variations` ENABLE KEYS */;
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
  `model_comp` varchar(45) DEFAULT NULL,
  `spare` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parts`
--

LOCK TABLES `parts` WRITE;
/*!40000 ALTER TABLE `parts` DISABLE KEYS */;
INSERT INTO `parts` VALUES (1,'body',NULL,NULL,NULL,'2',0),(2,'tablefront',NULL,NULL,NULL,'1',0),(3,'tableback',NULL,NULL,NULL,'1',0),(4,'side',NULL,NULL,NULL,'1',0),(5,'binding',NULL,NULL,NULL,'1',0),(6,'neck',NULL,NULL,NULL,'12',0),(7,'fretboard',NULL,NULL,NULL,'12',0),(8,'fretbinding',NULL,NULL,NULL,'1',0),(9,'frets',NULL,NULL,NULL,'12',0),(10,'nut',NULL,NULL,NULL,'12',0),(11,'inlay',NULL,NULL,NULL,'12',0),(12,'pickup_cover',NULL,NULL,95,'1',1),(13,'pickup_ring',NULL,NULL,5,'1',1),(14,'single_plastic',NULL,NULL,70,'2',1),(15,'single_metal',NULL,NULL,70,'2',1),(16,'pickguard',NULL,NULL,30,'12',1),(17,'backplate',NULL,NULL,20,'2',1),(18,'knobs',NULL,NULL,3,'12',1),(19,'metal_pieces',NULL,NULL,120,'12',1);
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `texture`
--

LOCK TABLES `texture` WRITE;
/*!40000 ALTER TABLE `texture` DISABLE KEYS */;
INSERT INTO `texture` VALUES (1,'1','miquelinebaita/','olé'),(2,'25','stocked/1683990564020.png','original'),(3,'user','stocked/1683990564020.png','original'),(4,'user','stocked/1681217837265.png','original'),(5,'user','stocked/1681217837265.png','original');
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
  `username` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Jean-Philippe','Herbien',NULL,NULL,NULL),(2,'Miqueline','Bouillonkubor','',NULL,'$2b$10$Kd4DnFRfEVY13YuXT19o8Ox2qwYlywf64Fd25xOWM3VPT1maTquOa'),(3,'Miquelinette','Proutounette','Lachaudasse','oui@oui.com','$2b$10$CJgsX4cij9eQktl/hdzDw.bJGObGx4wvtNpYnfwuIGuZXaciVSRp.'),(5,'Xavier','Yribarren','barren','xavier.yribarren@gmail.com','$2b$10$SfsFUH0J31zNm4gp3sVin.I9yzygiEbPXqXc0blHOW0UwaCFVOSDi'),(6,'Why','Aimescier','ymca','aloalo@prout.com','$2b$10$P3L86ddUMzV8HBOOs3tSNO1VqBplQNgaq/EM/Ma4MrDI8.nm203Vy'),(9,'Whynot','Aimepasscier','ympaca','aloalotatata@prout.com','$2b$10$upmfh3kij5Zx3vdNfWp50.rkw7tVTfjM.pr9bD7b.J1wZekd9EvMu'),(10,'cor','alaplouc','babababa','xavfmzer@gizrj.com','$2b$10$im/IZraWwZLvWjOw07BEZOusjHPpNpdEikAAh4AFyXM0KCQpYKwUG');
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
  `thumbnail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `thumbnail_UNIQUE` (`thumbnail`),
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
/*!40000 ALTER TABLE `user_guitar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_info`
--

DROP TABLE IF EXISTS `user_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_info` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_user` int DEFAULT NULL,
  `number` varchar(45) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `postal` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_user_info_1_idx` (`id_user`),
  CONSTRAINT `fk_user_info_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_info`
--

LOCK TABLES `user_info` WRITE;
/*!40000 ALTER TABLE `user_info` DISABLE KEYS */;
INSERT INTO `user_info` VALUES (1,5,'39','avenue de la rhune','64500','ciboure','France','0683844390');
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

-- Dump completed on 2023-05-19 16:28:33
