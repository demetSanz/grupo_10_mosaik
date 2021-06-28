-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: mosaik
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.19-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brand_products`
--

DROP TABLE IF EXISTS `brand_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brand_products` (
  `id_brand_products` int(11) NOT NULL AUTO_INCREMENT,
  `brand` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_brand_products`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand_products`
--

LOCK TABLES `brand_products` WRITE;
/*!40000 ALTER TABLE `brand_products` DISABLE KEYS */;
INSERT INTO `brand_products` VALUES (1,'Fv'),(2,'Ilva'),(3,'Ferrum'),(4,'Roca'),(5,'Piazza'),(6,'San lorenzo'),(7,'Deca'),(8,'Hidromet');
/*!40000 ALTER TABLE `brand_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_products`
--

DROP TABLE IF EXISTS `category_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category_products` (
  `id_category_products` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_category_products`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_products`
--

LOCK TABLES `category_products` WRITE;
/*!40000 ALTER TABLE `category_products` DISABLE KEYS */;
INSERT INTO `category_products` VALUES (1,'Pisos'),(2,'Griferias'),(3,'Sanitarios');
/*!40000 ALTER TABLE `category_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `idproducts` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `width` int(11) DEFAULT NULL,
  `height` int(20) DEFAULT NULL,
  `weight` double DEFAULT NULL,
  `depth` int(11) DEFAULT NULL,
  `description` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_brand` int(11) NOT NULL,
  `id_products_category` int(11) NOT NULL,
  PRIMARY KEY (`idproducts`),
  KEY `id_products_category_idx` (`id_products_category`),
  KEY `id_brand_idx` (`id_brand`),
  CONSTRAINT `id_brand` FOREIGN KEY (`id_brand`) REFERENCES `brand_products` (`id_brand_products`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_products_category` FOREIGN KEY (`id_products_category`) REFERENCES `category_products` (`id_category_products`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Mosaico Sanchez',10000,NULL,NULL,NULL,NULL,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore labore nihil saepe porro consequatur odio maiores temporibus cum, perspiciatis, deb','imagen-2.jpg',2,1),(2,'Inodoro con mochila Largo Axis',500,NULL,NULL,NULL,NULL,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore labore nihil saepe porro consequatur odio maiores temporibus cum, perspiciatis, deb','sanitarios_3.jpg',7,3),(3,'Bidet 3 Agujero Blanco Varese',72999,NULL,NULL,NULL,NULL,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore labore nihil saepe porro consequatur odio maiores temporibus cum, perspiciatis, deb','sanitarios_2.jpg',3,3),(4,'Lavatorio Andina 3 Agujeros Blanco',47900,NULL,NULL,NULL,NULL,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore labore nihil saepe porro consequatur odio maiores temporibus cum, perspiciatis, deb','sanitarios_1.jpg',3,3),(5,'Grifería para Lavatorio Gredos',53000,NULL,NULL,NULL,NULL,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore labore nihil saepe porro consequatur odio maiores temporibus cum, perspiciatis, deb','griferia_1.jpg',1,2),(6,'Grifería para Cocina de Mesada Self',20999,NULL,NULL,NULL,NULL,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore labore nihil saepe porro consequatur odio maiores temporibus cum, perspiciatis, deb','griferia_2.jpg',8,2),(7,'Grifería para Cocina Pico Flexible negro',36700,NULL,NULL,NULL,NULL,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore labore nihil saepe porro consequatur odio maiores temporibus cum, perspiciatis, deb','griferia_3.jpg',5,2),(8,'Grifería para Cocina de Mesada Self',148000,NULL,NULL,NULL,NULL,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore labore nihil saepe porro consequatur odio maiores temporibus cum, perspiciatis, deb','griferia_2.jpg',8,2),(9,'Mosaico Crescente',11399,NULL,NULL,NULL,NULL,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore labore nihil saepe porro consequatur odio maiores temporibus cum, perspiciatis, deb','imagen-1.jpg',2,1),(10,'Mosaico Clementi',1200,NULL,NULL,NULL,NULL,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore labore nihil saepe porro consequatur odio maiores temporibus cum, perspiciatis, deb','imagen-3.jpg',2,1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_category`
--

DROP TABLE IF EXISTS `user_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_category` (
  `iduser_category` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`iduser_category`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_category`
--

LOCK TABLES `user_category` WRITE;
/*!40000 ALTER TABLE `user_category` DISABLE KEYS */;
INSERT INTO `user_category` VALUES (1,'admin'),(2,'cliente');
/*!40000 ALTER TABLE `user_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_payment`
--

DROP TABLE IF EXISTS `user_payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_payment` (
  `iduser_payment` int(11) NOT NULL AUTO_INCREMENT,
  `payment` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`iduser_payment`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_payment`
--

LOCK TABLES `user_payment` WRITE;
/*!40000 ALTER TABLE `user_payment` DISABLE KEYS */;
INSERT INTO `user_payment` VALUES (1,'visa'),(2,'mastercard'),(3,'mercado pago'),(4,'amex');
/*!40000 ALTER TABLE `user_payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_province`
--

DROP TABLE IF EXISTS `user_province`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_province` (
  `iduser_province` int(11) NOT NULL AUTO_INCREMENT,
  `user_province` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`iduser_province`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_province`
--

LOCK TABLES `user_province` WRITE;
/*!40000 ALTER TABLE `user_province` DISABLE KEYS */;
INSERT INTO `user_province` VALUES (1,'Buenos Aires'),(2,'Buenos Aires-GBA'),(3,'Capital Federal'),(4,'Catamarca'),(5,'Chaco'),(6,'Chubut'),(7,'Córdoba'),(8,'Corrientes'),(9,'Entre Ríos'),(10,'Formosa'),(11,'Jujuy'),(12,'La Pampa'),(13,'La Rioja'),(14,'Mendoza'),(15,'Misiones'),(16,'Neuquén'),(17,'Río Negro'),(18,'Salta'),(19,'San Juan'),(20,'San Luis'),(21,'Santa Cruz'),(22,'Santa Fe'),(23,'Santiago del Estero'),(24,'Tierra del Fuego'),(25,'Tucumán');
/*!40000 ALTER TABLE `user_province` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `idusuarios` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_payment` int(11) DEFAULT NULL,
  `celular` int(11) DEFAULT NULL,
  `password` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `file` tinyint(4) DEFAULT NULL,
  `id_category` int(11) DEFAULT NULL,
  `id_province` int(11) DEFAULT NULL,
  PRIMARY KEY (`idusuarios`),
  KEY `id_category_idx` (`id_category`),
  KEY `id_payment_idx` (`id_payment`),
  KEY `id_province_idx` (`id_province`),
  CONSTRAINT `id_category` FOREIGN KEY (`id_category`) REFERENCES `user_category` (`iduser_category`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_payment` FOREIGN KEY (`id_payment`) REFERENCES `user_payment` (`iduser_payment`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_province` FOREIGN KEY (`id_province`) REFERENCES `user_province` (`iduser_province`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
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

-- Dump completed on 2021-06-28 20:44:36
