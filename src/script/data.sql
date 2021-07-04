/*
 Navicat MySQL Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:8889
 Source Schema         : mosaikdb

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 29/06/2021 20:44:08
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for brand_products
-- ----------------------------
DROP TABLE IF EXISTS `brand_products`;
CREATE TABLE `brand_products` (
  `id_brand_products` int(11) NOT NULL AUTO_INCREMENT,
  `brand` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_brand_products`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of brand_products
-- ----------------------------
BEGIN;
INSERT INTO `brand_products` VALUES (1, 'Fv');
INSERT INTO `brand_products` VALUES (2, 'Ilva');
INSERT INTO `brand_products` VALUES (3, 'Ferrum');
INSERT INTO `brand_products` VALUES (4, 'Roca');
INSERT INTO `brand_products` VALUES (5, 'Piazza');
INSERT INTO `brand_products` VALUES (6, 'San lorenzo');
INSERT INTO `brand_products` VALUES (7, 'Deca');
INSERT INTO `brand_products` VALUES (8, 'Hidromet');
COMMIT;

-- ----------------------------
-- Table structure for category_products
-- ----------------------------
DROP TABLE IF EXISTS `category_products`;
CREATE TABLE `category_products` (
  `id_category_products` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_category_products`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of category_products
-- ----------------------------
BEGIN;
INSERT INTO `category_products` VALUES (1, 'Pisos');
INSERT INTO `category_products` VALUES (2, 'Griferias');
INSERT INTO `category_products` VALUES (3, 'Sanitarios');
COMMIT;

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
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

-- ----------------------------
-- Records of products
-- ----------------------------
BEGIN;
INSERT INTO `products` VALUES (1, 'Mosaico Sanchez', 10000, NULL, NULL, NULL, NULL, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore labore nihil saepe porro consequatur odio maiores temporibus cum, perspiciatis, deb', 'imagen-2.jpg', 2, 1);
INSERT INTO `products` VALUES (2, 'Inodoro con mochila Largo Axis', 500, NULL, NULL, NULL, NULL, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore labore nihil saepe porro consequatur odio maiores temporibus cum, perspiciatis, deb', 'sanitarios_3.jpg', 7, 3);
INSERT INTO `products` VALUES (3, 'Bidet 3 Agujero Blanco Varese', 72999, NULL, NULL, NULL, NULL, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore labore nihil saepe porro consequatur odio maiores temporibus cum, perspiciatis, deb', 'sanitarios_2.jpg', 3, 3);
INSERT INTO `products` VALUES (4, 'Lavatorio Andina 3 Agujeros Blanco', 47900, NULL, NULL, NULL, NULL, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore labore nihil saepe porro consequatur odio maiores temporibus cum, perspiciatis, deb', 'sanitarios_1.jpg', 3, 3);
INSERT INTO `products` VALUES (5, 'Grifería para Lavatorio Gredos', 53000, NULL, NULL, NULL, NULL, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore labore nihil saepe porro consequatur odio maiores temporibus cum, perspiciatis, deb', 'griferia_1.jpg', 1, 2);
INSERT INTO `products` VALUES (6, 'Grifería para Cocina de Mesada Self', 20999, NULL, NULL, NULL, NULL, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore labore nihil saepe porro consequatur odio maiores temporibus cum, perspiciatis, deb', 'griferia_2.jpg', 8, 2);
INSERT INTO `products` VALUES (7, 'Grifería para Cocina Pico Flexible negro', 36700, NULL, NULL, NULL, NULL, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore labore nihil saepe porro consequatur odio maiores temporibus cum, perspiciatis, deb', 'griferia_3.jpg', 5, 2);
INSERT INTO `products` VALUES (8, 'Grifería para Cocina de Mesada Self', 148000, NULL, NULL, NULL, NULL, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore labore nihil saepe porro consequatur odio maiores temporibus cum, perspiciatis, deb', 'griferia_2.jpg', 8, 2);
INSERT INTO `products` VALUES (9, 'Mosaico Crescente', 11399, NULL, NULL, NULL, NULL, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore labore nihil saepe porro consequatur odio maiores temporibus cum, perspiciatis, deb', 'imagen-1.jpg', 2, 1);
INSERT INTO `products` VALUES (10, 'Mosaico Clementi', 1200, NULL, NULL, NULL, NULL, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore labore nihil saepe porro consequatur odio maiores temporibus cum, perspiciatis, deb', 'imagen-3.jpg', 2, 1);
COMMIT;

-- ----------------------------
-- Table structure for user_category
-- ----------------------------
DROP TABLE IF EXISTS `user_category`;
CREATE TABLE `user_category` (
  `iduser_category` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`iduser_category`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user_category
-- ----------------------------
BEGIN;
INSERT INTO `user_category` VALUES (1, 'admin');
INSERT INTO `user_category` VALUES (2, 'cliente');
COMMIT;

-- ----------------------------
-- Table structure for user_payment
-- ----------------------------
DROP TABLE IF EXISTS `user_payment`;
CREATE TABLE `user_payment` (
  `iduser_payment` int(11) NOT NULL AUTO_INCREMENT,
  `payment` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`iduser_payment`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user_payment
-- ----------------------------
BEGIN;
INSERT INTO `user_payment` VALUES (1, 'visa');
INSERT INTO `user_payment` VALUES (2, 'mastercard');
INSERT INTO `user_payment` VALUES (3, 'mercado pago');
INSERT INTO `user_payment` VALUES (4, 'amex');
COMMIT;

-- ----------------------------
-- Table structure for user_province
-- ----------------------------
DROP TABLE IF EXISTS `user_province`;
CREATE TABLE `user_province` (
  `iduser_province` int(11) NOT NULL AUTO_INCREMENT,
  `user_province` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`iduser_province`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user_province
-- ----------------------------
BEGIN;
INSERT INTO `user_province` VALUES (1, 'Buenos Aires');
INSERT INTO `user_province` VALUES (2, 'Buenos Aires-GBA');
INSERT INTO `user_province` VALUES (3, 'Capital Federal');
INSERT INTO `user_province` VALUES (4, 'Catamarca');
INSERT INTO `user_province` VALUES (5, 'Chaco');
INSERT INTO `user_province` VALUES (6, 'Chubut');
INSERT INTO `user_province` VALUES (7, 'Córdoba');
INSERT INTO `user_province` VALUES (8, 'Corrientes');
INSERT INTO `user_province` VALUES (9, 'Entre Ríos');
INSERT INTO `user_province` VALUES (10, 'Formosa');
INSERT INTO `user_province` VALUES (11, 'Jujuy');
INSERT INTO `user_province` VALUES (12, 'La Pampa');
INSERT INTO `user_province` VALUES (13, 'La Rioja');
INSERT INTO `user_province` VALUES (14, 'Mendoza');
INSERT INTO `user_province` VALUES (15, 'Misiones');
INSERT INTO `user_province` VALUES (16, 'Neuquén');
INSERT INTO `user_province` VALUES (17, 'Río Negro');
INSERT INTO `user_province` VALUES (18, 'Salta');
INSERT INTO `user_province` VALUES (19, 'San Juan');
INSERT INTO `user_province` VALUES (20, 'San Luis');
INSERT INTO `user_province` VALUES (21, 'Santa Cruz');
INSERT INTO `user_province` VALUES (22, 'Santa Fe');
INSERT INTO `user_province` VALUES (23, 'Santiago del Estero');
INSERT INTO `user_province` VALUES (24, 'Tierra del Fuego');
INSERT INTO `user_province` VALUES (25, 'Tucumán');
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `idusuarios` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_payment` int(11) DEFAULT NULL,
  `celular` int(11) DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `file` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_category` int(11) DEFAULT NULL,
  `id_province` int(11) DEFAULT NULL,
  PRIMARY KEY (`idusuarios`),
  KEY `id_category_idx` (`id_category`),
  KEY `id_payment_idx` (`id_payment`),
  KEY `id_province_idx` (`id_province`),
  CONSTRAINT `id_category` FOREIGN KEY (`id_category`) REFERENCES `user_category` (`iduser_category`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_payment` FOREIGN KEY (`id_payment`) REFERENCES `user_payment` (`iduser_payment`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_province` FOREIGN KEY (`id_province`) REFERENCES `user_province` (`iduser_province`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES (1, 'nicoClem', 'nico@dh.com', 'san luis', 4, 123456, '$2a$10$hfOXYKMCIg.mePs/4rG8g.KXIqeTr3qK3sDCB1rb5Wn2DCplU7hzW', '1623885037788_img.jpg', 1, 20);
INSERT INTO `users` VALUES (2, 'luis Crescente', 'luis@dh.com', 'calle falsa 123', 1, 123456, '$2a$10$hfOXYKMCIg.mePs/4rG8g.KXIqeTr3qK3sDCB1rb5Wn2DCplU7hzW', '1623885485858_img.jpg', 1, 3);
INSERT INTO `users` VALUES (3, 'NahuiiGH', 'nahuii@dh.com', 'calle de mentira 245', 4, 123456, '$2a$10$hfOXYKMCIg.mePs/4rG8g.KXIqeTr3qK3sDCB1rb5Wn2DCplU7hzW', '1623885642557_img.jpg', 1, 3);
INSERT INTO `users` VALUES (4, 'Carlos Salvucci', 'carlos@dh.com', 'santa fe 2145', 2, 123456, '$2a$10$hfOXYKMCIg.mePs/4rG8g.KXIqeTr3qK3sDCB1rb5Wn2DCplU7hzW', '1623885037788_img.jpg', 1, 3);
INSERT INTO `users` VALUES (5, 'Elías Sanchez', 'elias@dh.com', 'san luis 3564', 3, 123456, '$2a$10$hfOXYKMCIg.mePs/4rG8g.KXIqeTr3qK3sDCB1rb5Wn2DCplU7hzW', '1623885037788_img.jpg', 1, 3);
INSERT INTO `users` VALUES (6, 'uri', 'admin@dh.com', 'mendoza 1254', 4, 123456, '$2a$10$hfOXYKMCIg.mePs/4rG8g.KXIqeTr3qK3sDCB1rb5Wn2DCplU7hzW', '1623885037788_img.jpg', 1, 3);
INSERT INTO `users` VALUES (7, 'seba', 'cliente@dh.com', 'mendoza 3265', 2, 123456, '$2a$10$hfOXYKMCIg.mePs/4rG8g.KXIqeTr3qK3sDCB1rb5Wn2DCplU7hzW', '1623885037788_img.jpg', 1, 3);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
