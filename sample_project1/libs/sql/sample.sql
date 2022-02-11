CREATE TABLE IF NOT EXISTS `department`(
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(50) DEFAULT NULL,
    `location` varchar(50) DEFAULT NULL,
    PRIMARY KEY (`id`)
)CHARSET=utf8;

INSERT INTO `department` (`id`, `name`, `location`) VALUES (1, 'sales', 'uk'), (2, 'marketing', 'india');


CREATE TABLE IF NOT EXISTS `identity`(
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `firstname` varchar(50) DEFAULT NULL,
    `lastname` varchar(50) DEFAULT NULL,
    `email` varchar(50) DEFAULT NULL,
    PRIMARY KEY (`id`)
)CHARSET=utf8;

INSERT INTO `identity` (`id`, `firstname`, `lastname`, `email`) VALUES (1, 'payal', 'moradiya', 'pdk@gmail.com'), (2, 'vimal', 'moradiya', 'vimal@gmail.com');