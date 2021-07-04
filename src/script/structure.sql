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
  `id_products` INT(11) NOT NULL,
  `name` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL,
  `price` INT(11) NOT NULL,
  `width` INT(11) NULL DEFAULT NULL,
  `height` INT(20) NULL DEFAULT NULL,
  `weight` DOUBLE NULL DEFAULT NULL,
  `depth` INT(11) NULL DEFAULT NULL,
  `description` VARCHAR(150) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  `image` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  `stock` INT NULL,
  `id_brand` INT(11) NOT NULL,
  `id_products_category` INT(11) NOT NULL,
  PRIMARY KEY (`id_products`),
  INDEX `id_products_category_idx` (`id_products_category` ASC),
  INDEX `id_brand_idx` (`id_brand` ASC),
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
  `id_user_category` INT(11) NOT NULL,
  `category` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL,
  PRIMARY KEY (`id_user_category`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `mosaik`.`user_payment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik`.`user_payment` (
  `id_user_payment` INT(11) NOT NULL,
  `payment` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  PRIMARY KEY (`id_user_payment`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `mosaik`.`user_province`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik`.`user_province` (
  `id_user_province` INT(11) NOT NULL,
  `user_province` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL,
  PRIMARY KEY (`id_user_province`))
ENGINE = InnoDB
AUTO_INCREMENT = 26
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `mosaik`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik`.`users` (
  `id_users` INT(11) NOT NULL,
  `name` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  `email` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL,
  `address` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  `phone` VARCHAR(100) NULL DEFAULT NULL,
  `password` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  `file` VARCHAR(255) NULL DEFAULT NULL,
  `id_category` INT(11) NULL DEFAULT NULL,
  `id_province` INT(11) NULL DEFAULT NULL,
  `id_payment` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id_users`),
  INDEX `id_category_idx` (`id_category` ASC),
  INDEX `id_payment_idx` (`id_payment` ASC),
  INDEX `id_province_idx` (`id_province` ASC),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC),
  CONSTRAINT `id_category`
    FOREIGN KEY (`id_category`)
    REFERENCES `mosaik`.`user_category` (`id_user_category`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_payment`
    FOREIGN KEY (`id_payment`)
    REFERENCES `mosaik`.`user_payment` (`id_user_payment`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_province`
    FOREIGN KEY (`id_province`)
    REFERENCES `mosaik`.`user_province` (`id_user_province`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `mosaik`.`order_status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik`.`order_status` (
  `id_status` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(25) NULL,
  `description` LONGTEXT NULL,
  PRIMARY KEY (`id_status`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mosaik`.`delivery_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik`.`delivery_type` (
  `id_delivery_type` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(100) NULL,
  PRIMARY KEY (`id_delivery_type`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mosaik`.`order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik`.`order` (
  `id_order` INT NOT NULL AUTO_INCREMENT,
  `date_order` DATE NULL,
  `total_amount` INT NOT NULL,
  `delivery_address` VARCHAR(45) NOT NULL,
  `delivery_notes` VARCHAR(45) NULL,
  `user_id` INT NOT NULL,
  `province_id` INT NOT NULL,
  `status_id` INT NOT NULL,
  `delivery_types_id` INT NOT NULL,
  PRIMARY KEY (`id_order`),
  INDEX `users_id_idx` (`user_id` ASC),
  INDEX `pronvice_id_idx` (`province_id` ASC),
  INDEX `delivery_tipes_id_idx` (`delivery_types_id` ASC),
  INDEX `status_id_idx` (`status_id` ASC),
  CONSTRAINT `users_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `mosaik`.`users` (`id_users`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `province_id`
    FOREIGN KEY (`province_id`)
    REFERENCES `mosaik`.`user_province` (`id_user_province`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `status_id`
    FOREIGN KEY (`status_id`)
    REFERENCES `mosaik`.`status` (`id_status`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `delivery_tipes_id`
    FOREIGN KEY (`delivery_types_id`)
    REFERENCES `mosaik`.`delivery_type` (`id_delivery_type`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mosaik`.`order_details`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik`.`order_details` (
  `id_order_details` INT NOT NULL AUTO_INCREMENT,
  `quantity` INT NULL,
  `idorder` INT NOT NULL,
  `idproducts` INT NOT NULL,
  PRIMARY KEY (`id_order_details`),
  INDEX `idorder_idx` (`idorder` ASC),
  INDEX `idproducts_idx` (`idproducts` ASC),
  CONSTRAINT `idorder`
    FOREIGN KEY (`idorder`)
    REFERENCES `mosaik`.`order` (`id_order`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idproducts`
    FOREIGN KEY (`idproducts`)
    REFERENCES `mosaik`.`products` (`id_products`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
