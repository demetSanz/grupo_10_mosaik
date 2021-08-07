-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mosaik_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mosaik_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mosaik_db` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
USE `mosaik_db` ;

-- -----------------------------------------------------
-- Table `mosaik_db`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik_db`.`category` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `mosaik_db`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik_db`.`roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mosaik_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik_db`.`users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `address` VARCHAR(45) NULL DEFAULT NULL,
  `phone` VARCHAR(100) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `file` VARCHAR(255) NULL DEFAULT NULL,
  `roles_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) ,
  INDEX `roles_id_idx` (`roles_id` ASC) ,
  CONSTRAINT `roles_id`
    FOREIGN KEY (`roles_id`)
    REFERENCES `mosaik_db`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `mosaik_db`.`status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik_db`.`status` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(25) NULL DEFAULT NULL,
  `description` LONGTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `mosaik_db`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik_db`.`orders` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `date_order` DATE NULL DEFAULT NULL,
  `total_amount` INT(16) NULL,
  `delivery_address` VARCHAR(45) NULL,
  `delivery_notes` TEXT(45) NULL DEFAULT NULL,
  `user_id` INT(11) NOT NULL,
  `status_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `user_id_idx` (`user_id` ASC) ,
  INDEX `status_id_idx` (`status_id` ASC) ,
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `mosaik_db`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `status_id`
    FOREIGN KEY (`status_id`)
    REFERENCES `mosaik_db`.`status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `mosaik_db`.`sizes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik_db`.`sizes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mosaik_db`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik_db`.`products` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `price` INT(11) NULL,
  `description` VARCHAR(150) NULL DEFAULT NULL,
  `image` VARCHAR(255) NULL DEFAULT NULL,
  `stock` INT(11) NULL DEFAULT NULL,
  `brand` VARCHAR(45) NULL,
  `category_id` INT(11) NOT NULL,
  `size_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `category_id_idx` (`category_id` ASC) ,
  INDEX `size_id_idx` (`size_id` ASC) ,
  CONSTRAINT `category_id`
    FOREIGN KEY (`category_id`)
    REFERENCES `mosaik_db`.`category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `size_id`
    FOREIGN KEY (`size_id`)
    REFERENCES `mosaik_db`.`sizes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `mosaik_db`.`orders_products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mosaik_db`.`orders_products` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `order_id` INT(11) NOT NULL,
  `products_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idorder_idx` (`order_id` ASC) ,
  INDEX `idproducts_idx` (`products_id` ASC) ,
  CONSTRAINT `order_id`
    FOREIGN KEY (`order_id`)
    REFERENCES `mosaik_db`.`orders` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `products_id`
    FOREIGN KEY (`products_id`)
    REFERENCES `mosaik_db`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
