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
-- Table `mosaik`.`brands`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik`.`brands` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `brand` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `mosaik`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik`.`category` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `mosaik`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik`.`products` (
  `id` INT(11) NOT NULL,
  `name` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL,
  `price` INT(11) NOT NULL,
  `width` INT(11) NULL DEFAULT NULL,
  `height` INT(20) NULL DEFAULT NULL,
  `weight` DOUBLE NULL DEFAULT NULL,
  `depth` INT(11) NULL DEFAULT NULL,
  `description` VARCHAR(150) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  `image` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  `stock` INT NULL,
  `brand_id` INT(11) NOT NULL,
  `category_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_products_category_idx` (`category_id` ASC) ,
  INDEX `id_brand_idx` (`brand_id` ASC),
  CONSTRAINT `id_brand`
    FOREIGN KEY (`brand_id`)
    REFERENCES `mosaik`.`brands` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_products_category`
    FOREIGN KEY (`category_id`)
    REFERENCES `mosaik`.`category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `mosaik`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik`.`roles` (
  `id` INT(11) NOT NULL,
  `category` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `mosaik`.`payment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik`.`payment` (
  `id` INT(11) NOT NULL,
  `payment` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `mosaik`.`province`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik`.`province` (
  `id` INT(11) NOT NULL,
  `user_province` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 26
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `mosaik`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik`.`users` (
  `id` INT(11) NOT NULL,
  `name` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  `email` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL,
  `address` VARCHAR(45) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  `phone` VARCHAR(100) NULL DEFAULT NULL,
  `password` VARCHAR(255) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NULL DEFAULT NULL,
  `file` VARCHAR(255) NULL DEFAULT NULL,
  `roles_id` INT(11) NULL DEFAULT NULL,
  `province_id` INT(11) NULL DEFAULT NULL,
  `payment_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_category_idx` (`roles_id` ASC) ,
  INDEX `id_payment_idx` (`payment_id` ASC) ,
  INDEX `id_province_idx` (`province_id` ASC) ,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) ,
  CONSTRAINT `id_category`
    FOREIGN KEY (`roles_id`)
    REFERENCES `mosaik`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_payment`
    FOREIGN KEY (`payment_id`)
    REFERENCES `mosaik`.`payment` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_province`
    FOREIGN KEY (`province_id`)
    REFERENCES `mosaik`.`province` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `mosaik`.`status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik`.`status` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(25) NULL,
  `description` LONGTEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mosaik`.`delivery`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik`.`delivery` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mosaik`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik`.`orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date_order` DATE NULL,
  `total_amount` INT NOT NULL,
  `delivery_address` VARCHAR(45) NOT NULL,
  `delivery_notes` VARCHAR(45) NULL,
  `user_id` INT NOT NULL,
  `province_id` INT NOT NULL,
  `status_id` INT NOT NULL,
  `delivery_types_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `users_id_idx` (`user_id` ASC) ,
  INDEX `pronvice_id_idx` (`province_id` ASC) ,
  INDEX `delivery_tipes_id_idx` (`delivery_types_id` ASC) ,
  INDEX `status_id_idx` (`status_id` ASC) ,
  CONSTRAINT `users_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `mosaik`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `province_id`
    FOREIGN KEY (`province_id`)
    REFERENCES `mosaik`.`province` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `status_id`
    FOREIGN KEY (`status_id`)
    REFERENCES `mosaik`.`status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `delivery_tipes_id`
    FOREIGN KEY (`delivery_types_id`)
    REFERENCES `mosaik`.`delivery` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mosaik`.`detail`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik`.`detail` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `quantity` INT NULL,
  `order_id` INT NOT NULL,
  `products_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idorder_idx` (`order_id` ASC) ,
  INDEX `idproducts_idx` (`products_id` ASC) ,
  CONSTRAINT `idorder`
    FOREIGN KEY (`order_id`)
    REFERENCES `mosaik`.`orders` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idproducts`
    FOREIGN KEY (`products_id`)
    REFERENCES `mosaik`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;