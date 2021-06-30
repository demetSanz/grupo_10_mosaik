-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema mosaik
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mosaik
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mosaik` DEFAULT CHARACTER SET utf8 ;
USE `mosaik` ;

-- -----------------------------------------------------
-- Table `mosaik`.`brand_products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik`.`brand_products` (
  `id_brand_products` INT(11) NOT NULL AUTO_INCREMENT,
  `brand` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL,
  PRIMARY KEY (`id_brand_products`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `mosaik`.`category_products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik`.`category_products` (
  `id_category_products` INT(11) NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL,
  PRIMARY KEY (`id_category_products`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `mosaik`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik`.`products` (
  `idproducts` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL,
  `price` INT(11) NOT NULL,
  `width` INT(11) NULL DEFAULT NULL,
  `height` INT(20) NULL DEFAULT NULL,
  `weight` DOUBLE NULL DEFAULT NULL,
  `depth` INT(11) NULL DEFAULT NULL,
  `description` VARCHAR(150) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  `image` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  `id_brand` INT(11) NOT NULL,
  `id_products_category` INT(11) NOT NULL,
  PRIMARY KEY (`idproducts`),
  INDEX `id_products_category_idx` (`id_products_category` ASC) ,
  INDEX `id_brand_idx` (`id_brand` ASC) ,
  CONSTRAINT `id_brand`
    FOREIGN KEY (`id_brand`)
    REFERENCES `mosaik`.`brand_products` (`id_brand_products`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_products_category`
    FOREIGN KEY (`id_products_category`)
    REFERENCES `mosaik`.`category_products` (`id_category_products`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `mosaik`.`user_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik`.`user_category` (
  `iduser_category` INT(11) NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL,
  PRIMARY KEY (`iduser_category`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `mosaik`.`user_payment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik`.`user_payment` (
  `iduser_payment` INT(11) NOT NULL AUTO_INCREMENT,
  `payment` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  PRIMARY KEY (`iduser_payment`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `mosaik`.`user_province`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik`.`user_province` (
  `iduser_province` INT(11) NOT NULL AUTO_INCREMENT,
  `user_province` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL,
  PRIMARY KEY (`iduser_province`))
ENGINE = InnoDB
AUTO_INCREMENT = 26
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `mosaik`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik`.`users` (
  `idusuarios` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  `email` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL,
  `address` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  `id_payment` INT(11) NULL DEFAULT NULL,
  `celular` INT(11) NULL DEFAULT NULL,
  `password` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  `file` VARCHAR(255) NULL DEFAULT NULL,
  `id_category` INT(11) NULL DEFAULT NULL,
  `id_province` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`idusuarios`),
  INDEX `id_category_idx` (`id_category` ASC) ,
  INDEX `id_payment_idx` (`id_payment` ASC) ,
  INDEX `id_province_idx` (`id_province` ASC) ,
  CONSTRAINT `id_category`
    FOREIGN KEY (`id_category`)
    REFERENCES `mosaik`.`user_category` (`iduser_category`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_payment`
    FOREIGN KEY (`id_payment`)
    REFERENCES `mosaik`.`user_payment` (`iduser_payment`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_province`
    FOREIGN KEY (`id_province`)
    REFERENCES `mosaik`.`user_province` (`iduser_province`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `mosaik`.`order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik`.`order` (
  `idorder` INT NOT NULL AUTO_INCREMENT,
  `fecha_order` DATE NULL,
  `total_amount` INT NOT NULL,
  `delivery_types` VARCHAR(45) NOT NULL,
  `delivery_address` VARCHAR(45) NOT NULL,
  `province_id` INT NOT NULL,
  `delivery_notes` VARCHAR(45) NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`idorder`),
  INDEX `users_id_idx` (`user_id` ASC) ,
  INDEX `pronvice_id_idx` (`province_id` ASC) ,
  CONSTRAINT `users_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `mosaik`.`users` (`idusuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `province_id`
    FOREIGN KEY (`province_id`)
    REFERENCES `mosaik`.`user_province` (`iduser_province`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mosaik`.`order_details`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik`.`order_details` (
  `idorder_details` INT NOT NULL AUTO_INCREMENT,
  `idorder` INT NOT NULL,
  `idproducts` INT NOT NULL,
  PRIMARY KEY (`idorder_details`),
  INDEX `idorder_idx` (`idorder` ASC) ,
  INDEX `idproducts_idx` (`idproducts` ASC) ,
  CONSTRAINT `idorder`
    FOREIGN KEY (`idorder`)
    REFERENCES `mosaik`.`order` (`idorder`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idproducts`
    FOREIGN KEY (`idproducts`)
    REFERENCES `mosaik`.`products` (`idproducts`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
