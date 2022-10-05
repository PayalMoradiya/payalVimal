-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 05, 2022 at 09:29 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myblogs`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `image` text NOT NULL,
  `content` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `title`, `image`, `content`, `created_at`, `category_id`) VALUES
(1, 'Best Web development tricks', 'img1.jpeg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas lectus enim, vel mollis turpis sodales sed. Fusce non metus nec leo sodales feugiat. Nam ac iaculis massa. Sed iaculis nulla ut consequat venenatis. Proin tincidunt, nibh quis accumsan fringilla, justo ex suscipit sem, sit amet dictum ipsum libero sed purus. Sed consequat nisi ut magna vehicula accumsan. Integer ut turpis sed nisl porta mollis. Vestibulum dui arcu, ultrices vitae sapien in, maximus ullamcorper justo. Nullam id eleifend lacus. Phasellus quis lorem porttitor, tempus tortor at, aliquet felis. Pellentesque sed dapibus enim, non auctor orci. Ut eget scelerisque lacus. In elementum id dolor eget eleifend. Sed egestas, mauris id pellentesque vestibulum, enim nisi scelerisque magna, eu consequat lacus dolor et neque. In lobortis odio eros, sit amet fermentum mauris rhoncus sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nNunc mi libero, suscipit nec pulvinar id, semper vitae felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum sem quis turpis viverra auctor. Maecenas gravida leo eget sem efficitur, in semper ipsum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc magna, molestie ut tincidunt at, feugiat eu lectus. Mauris rutrum lorem non lacus vehicula volutpat. Nullam laoreet lorem neque, in rutrum metus gravida ac. Sed pellentesque enim sed lacus scelerisque rutrum. Aliquam sodales metus id metus laoreet laoreet.\r\n\r\nSed a nisi sagittis, tempus lacus nec, vestibulum metus. Nulla posuere magna vitae laoreet egestas. Nunc ultricies pretium egestas. In eu justo aliquam, vulputate augue a, rhoncus magna. Donec molestie enim ligula, eu maximus nisi finibus ut. Mauris facilisis hendrerit maximus. Pellentesque suscipit tincidunt sapien ac euismod. Cras gravida efficitur fringilla. Vivamus tristique leo eu lacinia interdum.', '2022-10-03 19:57:30', 1),
(2, 'Frontend development ideas', 'img3.jpeg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas lectus enim, vel mollis turpis sodales sed. Fusce non metus nec leo sodales feugiat. Nam ac iaculis massa. Sed iaculis nulla ut consequat venenatis. Proin tincidunt, nibh quis accumsan fringilla, justo ex suscipit sem, sit amet dictum ipsum libero sed purus. Sed consequat nisi ut magna vehicula accumsan. Integer ut turpis sed nisl porta mollis. Vestibulum dui arcu, ultrices vitae sapien in, maximus ullamcorper justo. Nullam id eleifend lacus. Phasellus quis lorem porttitor, tempus tortor at, aliquet felis. Pellentesque sed dapibus enim, non auctor orci. Ut eget scelerisque lacus. In elementum id dolor eget eleifend. Sed egestas, mauris id pellentesque vestibulum, enim nisi scelerisque magna, eu consequat lacus dolor et neque. In lobortis odio eros, sit amet fermentum mauris rhoncus sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n\r\nNunc mi libero, suscipit nec pulvinar id, semper vitae felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum sem quis turpis viverra auctor. Maecenas gravida leo eget sem efficitur, in semper ipsum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc magna, molestie ut tincidunt at, feugiat eu lectus. Mauris rutrum lorem non lacus vehicula volutpat. Nullam laoreet lorem neque, in rutrum metus gravida ac. Sed pellentesque enim sed lacus scelerisque rutrum. Aliquam sodales metus id metus laoreet laoreet.\r\n\r\nSed a nisi sagittis, tempus lacus nec, vestibulum metus. Nulla posuere magna vitae laoreet egestas. Nunc ultricies pretium egestas. In eu justo aliquam, vulputate augue a, rhoncus magna. Donec molestie enim ligula, eu maximus nisi finibus ut. Mauris facilisis hendrerit maximus. Pellentesque suscipit tincidunt sapien ac euismod. Cras gravida efficitur fringilla. Vivamus tristique leo eu lacinia interdum.', '2022-10-03 19:58:30', 2),
(3, 'Graphic designing skills', 'img8.jpg', 'Praesent venenatis enim vitae ipsum dapibus, vitae hendrerit lorem vehicula. Morbi vitae libero fringilla, rhoncus augue vitae, congue sapien. Mauris accumsan at eros sed feugiat. Nulla condimentum neque id tincidunt auctor. In ac lectus id massa gravida mollis sed a felis. Ut elementum massa et ligula faucibus, non semper ligula auctor. Maecenas ut lacus fermentum, accumsan felis nec, maximus sapien. Cras a imperdiet lectus. Nam at eleifend ipsum, at lobortis justo. In est erat, viverra ac auctor et, accumsan ut justo.\r\n\r\nEtiam posuere scelerisque imperdiet. Suspendisse interdum interdum aliquet. Aliquam erat volutpat. Nulla nec eleifend est. Pellentesque risus sem, pharetra non arcu sed, vulputate eleifend purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus tellus metus, facilisis ac laoreet ut, iaculis in felis. Suspendisse sit amet ornare nibh. Aliquam maximus, dui at malesuada consectetur, velit tortor placerat mauris, at hendrerit metus leo bibendum magna.\r\n\r\nSed id nisl vel erat consequat fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus efficitur mi quis volutpat euismod. Praesent congue risus volutpat ligula feugiat scelerisque. Aenean vulputate enim eu augue auctor, nec blandit ipsum pharetra. Sed ut ultricies orci, quis imperdiet augue. In dignissim tortor nisi, sit amet ullamcorper leo aliquam et. Integer sed gravida sem, vitae semper orci. Vivamus in enim sollicitudin, blandit metus non, ultrices tortor. Vivamus nec orci est.', '2022-10-03 20:00:18', 4),
(4, 'Team work', 'img4.jpeg', 'Praesent venenatis enim vitae ipsum dapibus, vitae hendrerit lorem vehicula. Morbi vitae libero fringilla, rhoncus augue vitae, congue sapien. Mauris accumsan at eros sed feugiat. Nulla condimentum neque id tincidunt auctor. In ac lectus id massa gravida mollis sed a felis. Ut elementum massa et ligula faucibus, non semper ligula auctor. Maecenas ut lacus fermentum, accumsan felis nec, maximus sapien. Cras a imperdiet lectus. Nam at eleifend ipsum, at lobortis justo. In est erat, viverra ac auctor et, accumsan ut justo.\r\n\r\nEtiam posuere scelerisque imperdiet. Suspendisse interdum interdum aliquet. Aliquam erat volutpat. Nulla nec eleifend est. Pellentesque risus sem, pharetra non arcu sed, vulputate eleifend purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus tellus metus, facilisis ac laoreet ut, iaculis in felis. Suspendisse sit amet ornare nibh. Aliquam maximus, dui at malesuada consectetur, velit tortor placerat mauris, at hendrerit metus leo bibendum magna.\r\n\r\nSed id nisl vel erat consequat fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus efficitur mi quis volutpat euismod. Praesent congue risus volutpat ligula feugiat scelerisque. Aenean vulputate enim eu augue auctor, nec blandit ipsum pharetra. Sed ut ultricies orci, quis imperdiet augue. In dignissim tortor nisi, sit amet ullamcorper leo aliquam et. Integer sed gravida sem, vitae semper orci. Vivamus in enim sollicitudin, blandit metus non, ultrices tortor. Vivamus nec orci est.', '2022-10-03 20:00:18', 3),
(5, 'Find your web traffic', 'img2.jpeg', 'Praesent venenatis enim vitae ipsum dapibus, vitae hendrerit lorem vehicula. Morbi vitae libero fringilla, rhoncus augue vitae, congue sapien. Mauris accumsan at eros sed feugiat. Nulla condimentum neque id tincidunt auctor. In ac lectus id massa gravida mollis sed a felis. Ut elementum massa et ligula faucibus, non semper ligula auctor. Maecenas ut lacus fermentum, accumsan felis nec, maximus sapien. Cras a imperdiet lectus. Nam at eleifend ipsum, at lobortis justo. In est erat, viverra ac auctor et, accumsan ut justo.\r\n\r\nEtiam posuere scelerisque imperdiet. Suspendisse interdum interdum aliquet. Aliquam erat volutpat. Nulla nec eleifend est. Pellentesque risus sem, pharetra non arcu sed, vulputate eleifend purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus tellus metus, facilisis ac laoreet ut, iaculis in felis. Suspendisse sit amet ornare nibh. Aliquam maximus, dui at malesuada consectetur, velit tortor placerat mauris, at hendrerit metus leo bibendum magna.\r\n\r\nSed id nisl vel erat consequat fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus efficitur mi quis volutpat euismod. Praesent congue risus volutpat ligula feugiat scelerisque. Aenean vulputate enim eu augue auctor, nec blandit ipsum pharetra. Sed ut ultricies orci, quis imperdiet augue. In dignissim tortor nisi, sit amet ullamcorper leo aliquam et. Integer sed gravida sem, vitae semper orci. Vivamus in enim sollicitudin, blandit metus non, ultrices tortor. Vivamus nec orci est.', '2022-10-03 20:01:46', 5),
(6, 'Collaboration', 'img6.jpeg', 'Praesent venenatis enim vitae ipsum dapibus, vitae hendrerit lorem vehicula. Morbi vitae libero fringilla, rhoncus augue vitae, congue sapien. Mauris accumsan at eros sed feugiat. Nulla condimentum neque id tincidunt auctor. In ac lectus id massa gravida mollis sed a felis. Ut elementum massa et ligula faucibus, non semper ligula auctor. Maecenas ut lacus fermentum, accumsan felis nec, maximus sapien. Cras a imperdiet lectus. Nam at eleifend ipsum, at lobortis justo. In est erat, viverra ac auctor et, accumsan ut justo.\r\n\r\nEtiam posuere scelerisque imperdiet. Suspendisse interdum interdum aliquet. Aliquam erat volutpat. Nulla nec eleifend est. Pellentesque risus sem, pharetra non arcu sed, vulputate eleifend purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus tellus metus, facilisis ac laoreet ut, iaculis in felis. Suspendisse sit amet ornare nibh. Aliquam maximus, dui at malesuada consectetur, velit tortor placerat mauris, at hendrerit metus leo bibendum magna.\r\n\r\nSed id nisl vel erat consequat fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus efficitur mi quis volutpat euismod. Praesent congue risus volutpat ligula feugiat scelerisque. Aenean vulputate enim eu augue auctor, nec blandit ipsum pharetra. Sed ut ultricies orci, quis imperdiet augue. In dignissim tortor nisi, sit amet ullamcorper leo aliquam et. Integer sed gravida sem, vitae semper orci. Vivamus in enim sollicitudin, blandit metus non, ultrices tortor. Vivamus nec orci est.', '2022-10-03 20:01:46', 1),
(7, 'Add functionality to your website', 'img1.jpeg', 'Praesent venenatis enim vitae ipsum dapibus, vitae hendrerit lorem vehicula. Morbi vitae libero fringilla, rhoncus augue vitae, congue sapien. Mauris accumsan at eros sed feugiat. Nulla condimentum neque id tincidunt auctor. In ac lectus id massa gravida mollis sed a felis. Ut elementum massa et ligula faucibus, non semper ligula auctor. Maecenas ut lacus fermentum, accumsan felis nec, maximus sapien. Cras a imperdiet lectus. Nam at eleifend ipsum, at lobortis justo. In est erat, viverra ac auctor et, accumsan ut justo.\r\n\r\nEtiam posuere scelerisque imperdiet. Suspendisse interdum interdum aliquet. Aliquam erat volutpat. Nulla nec eleifend est. Pellentesque risus sem, pharetra non arcu sed, vulputate eleifend purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus tellus metus, facilisis ac laoreet ut, iaculis in felis. Suspendisse sit amet ornare nibh. Aliquam maximus, dui at malesuada consectetur, velit tortor placerat mauris, at hendrerit metus leo bibendum magna.\r\n\r\nSed id nisl vel erat consequat fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus efficitur mi quis volutpat euismod. Praesent congue risus volutpat ligula feugiat scelerisque. Aenean vulputate enim eu augue auctor, nec blandit ipsum pharetra. Sed ut ultricies orci, quis imperdiet augue. In dignissim tortor nisi, sit amet ullamcorper leo aliquam et. Integer sed gravida sem, vitae semper orci. Vivamus in enim sollicitudin, blandit metus non, ultrices tortor. Vivamus nec orci est.', '2022-10-03 20:13:14', 3),
(8, 'Best practice for web design', 'img7.jpeg', 'Praesent venenatis enim vitae ipsum dapibus, vitae hendrerit lorem vehicula. Morbi vitae libero fringilla, rhoncus augue vitae, congue sapien. Mauris accumsan at eros sed feugiat. Nulla condimentum neque id tincidunt auctor. In ac lectus id massa gravida mollis sed a felis. Ut elementum massa et ligula faucibus, non semper ligula auctor. Maecenas ut lacus fermentum, accumsan felis nec, maximus sapien. Cras a imperdiet lectus. Nam at eleifend ipsum, at lobortis justo. In est erat, viverra ac auctor et, accumsan ut justo.\r\n\r\nEtiam posuere scelerisque imperdiet. Suspendisse interdum interdum aliquet. Aliquam erat volutpat. Nulla nec eleifend est. Pellentesque risus sem, pharetra non arcu sed, vulputate eleifend purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus tellus metus, facilisis ac laoreet ut, iaculis in felis. Suspendisse sit amet ornare nibh. Aliquam maximus, dui at malesuada consectetur, velit tortor placerat mauris, at hendrerit metus leo bibendum magna.\r\n\r\nSed id nisl vel erat consequat fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus efficitur mi quis volutpat euismod. Praesent congue risus volutpat ligula feugiat scelerisque. Aenean vulputate enim eu augue auctor, nec blandit ipsum pharetra. Sed ut ultricies orci, quis imperdiet augue. In dignissim tortor nisi, sit amet ullamcorper leo aliquam et. Integer sed gravida sem, vitae semper orci. Vivamus in enim sollicitudin, blandit metus non, ultrices tortor. Vivamus nec orci est.', '2022-10-03 20:13:14', 1),
(9, 'Good User Experience', 'img12.jpeg', 'Morbi a aliquet turpis. Morbi aliquam nunc nulla, ut facilisis urna iaculis a. Donec interdum vehicula lectus, sit amet lobortis nunc convallis quis. Fusce ac elit in magna molestie laoreet. Sed hendrerit mollis nulla, vitae maximus lacus mollis finibus. Pellentesque vehicula, dolor non tincidunt consequat, massa augue congue orci, et vulputate magna mauris a diam. Vestibulum eu massa vel lectus malesuada convallis at a mi.\r\n\r\nVivamus eget eros a justo euismod congue et eget orci. Suspendisse sodales fermentum egestas. Ut vel urna elementum, sodales purus sagittis, aliquam magna. Cras commodo enim ut eros vehicula porttitor. Vestibulum viverra volutpat vulputate. Sed congue nec lectus pellentesque pretium. Duis vestibulum aliquam sapien, et condimentum quam mattis ac. Pellentesque gravida odio id dapibus mattis. Sed facilisis sapien ac mauris laoreet semper. Donec ac justo nisi. Vestibulum tincidunt gravida posuere. Pellentesque molestie ligula tortor, quis convallis sapien ornare at.\r\n\r\nNam consectetur aliquet sagittis. Fusce viverra, arcu id gravida posuere, ante orci tempor nunc, ut dapibus tortor turpis eu tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent luctus mi ac lectus luctus iaculis. Morbi interdum convallis ipsum gravida suscipit. Sed maximus, erat pharetra euismod ullamcorper, leo dolor ultrices nibh, volutpat bibendum neque lorem quis elit. Fusce vitae enim eros. Fusce et nulla vitae orci dapibus convallis. Vestibulum at rutrum justo. Morbi non vulputate est, sed vestibulum elit. Fusce id nisl a justo finibus facilisis. Proin egestas nibh quis elit maximus consectetur. In imperdiet odio nulla, sit amet laoreet nibh porta at. Fusce pretium luctus ipsum, quis convallis augue ultrices eu. Sed hendrerit arcu laoreet, condimentum nibh a, pellentesque arcu. Nam malesuada arcu velit, quis malesuada lacus fringilla non.', '2022-10-03 20:13:55', 2),
(10, 'Best Graphic Design Software ', 'img9.jpg', 'Vivamus eget eros a justo euismod congue et eget orci. Suspendisse sodales fermentum egestas. Ut vel urna elementum, sodales purus sagittis, aliquam magna. Cras commodo enim ut eros vehicula porttitor. Vestibulum viverra volutpat vulputate. Sed congue nec lectus pellentesque pretium. Duis vestibulum aliquam sapien, et condimentum quam mattis ac. Pellentesque gravida odio id dapibus mattis. Sed facilisis sapien ac mauris laoreet semper. Donec ac justo nisi. Vestibulum tincidunt gravida posuere. Pellentesque molestie ligula tortor, quis convallis sapien ornare at.\r\n\r\nNam consectetur aliquet sagittis. Fusce viverra, arcu id gravida posuere, ante orci tempor nunc, ut dapibus tortor turpis eu tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent luctus mi ac lectus luctus iaculis. Morbi interdum convallis ipsum gravida suscipit. Sed maximus, erat pharetra euismod ullamcorper, leo dolor ultrices nibh, volutpat bibendum neque lorem quis elit. Fusce vitae enim eros. Fusce et nulla vitae orci dapibus convallis. Vestibulum at rutrum justo. Morbi non vulputate est, sed vestibulum elit. Fusce id nisl a justo finibus facilisis. Proin egestas nibh quis elit maximus consectetur. In imperdiet odio nulla, sit amet laoreet nibh porta at. Fusce pretium luctus ipsum, quis convallis augue ultrices eu. Sed hendrerit arcu laoreet, condimentum nibh a, pellentesque arcu. Nam malesuada arcu velit, quis malesuada lacus fringilla non.\r\n\r\nDonec mauris mauris, euismod sit amet sapien at, auctor rhoncus purus. In sodales magna eu libero elementum egestas. Ut quis sagittis enim, sed dapibus lacus. Mauris pharetra eros eget turpis tincidunt, sed rhoncus est vulputate. Nunc rhoncus, leo a tincidunt condimentum, orci eros cursus lorem, ac porttitor magna felis in mauris. Vestibulum eget purus nec massa hendrerit hendrerit a id ligula. Aenean at risus eget ipsum posuere porta finibus quis neque. Mauris vitae dictum lectus. Nam finibus aliquam tempus.', '2022-10-03 20:13:55', 4),
(11, 'How to Become a Backend Developer', 'img10.jpeg', 'Morbi a aliquet turpis. Morbi aliquam nunc nulla, ut facilisis urna iaculis a. Donec interdum vehicula lectus, sit amet lobortis nunc convallis quis. Fusce ac elit in magna molestie laoreet. Sed hendrerit mollis nulla, vitae maximus lacus mollis finibus. Pellentesque vehicula, dolor non tincidunt consequat, massa augue congue orci, et vulputate magna mauris a diam. Vestibulum eu massa vel lectus malesuada convallis at a mi.\r\n\r\nVivamus eget eros a justo euismod congue et eget orci. Suspendisse sodales fermentum egestas. Ut vel urna elementum, sodales purus sagittis, aliquam magna. Cras commodo enim ut eros vehicula porttitor. Vestibulum viverra volutpat vulputate. Sed congue nec lectus pellentesque pretium. Duis vestibulum aliquam sapien, et condimentum quam mattis ac. Pellentesque gravida odio id dapibus mattis. Sed facilisis sapien ac mauris laoreet semper. Donec ac justo nisi. Vestibulum tincidunt gravida posuere. Pellentesque molestie ligula tortor, quis convallis sapien ornare at.\r\n\r\nNam consectetur aliquet sagittis. Fusce viverra, arcu id gravida posuere, ante orci tempor nunc, ut dapibus tortor turpis eu tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent luctus mi ac lectus luctus iaculis. Morbi interdum convallis ipsum gravida suscipit. Sed maximus, erat pharetra euismod ullamcorper, leo dolor ultrices nibh, volutpat bibendum neque lorem quis elit. Fusce vitae enim eros. Fusce et nulla vitae orci dapibus convallis. Vestibulum at rutrum justo. Morbi non vulputate est, sed vestibulum elit. Fusce id nisl a justo finibus facilisis. Proin egestas nibh quis elit maximus consectetur. In imperdiet odio nulla, sit amet laoreet nibh porta at. Fusce pretium luctus ipsum, quis convallis augue ultrices eu. Sed hendrerit arcu laoreet, condimentum nibh a, pellentesque arcu. Nam malesuada arcu velit, quis malesuada lacus fringilla non.', '2022-10-03 21:17:43', 3),
(12, 'Beginners Guide to SEO', 'img12.jpeg', 'Morbi a aliquet turpis. Morbi aliquam nunc nulla, ut facilisis urna iaculis a. Donec interdum vehicula lectus, sit amet lobortis nunc convallis quis. Fusce ac elit in magna molestie laoreet. Sed hendrerit mollis nulla, vitae maximus lacus mollis finibus. Pellentesque vehicula, dolor non tincidunt consequat, massa augue congue orci, et vulputate magna mauris a diam. Vestibulum eu massa vel lectus malesuada convallis at a mi.\r\n\r\nVivamus eget eros a justo euismod congue et eget orci. Suspendisse sodales fermentum egestas. Ut vel urna elementum, sodales purus sagittis, aliquam magna. Cras commodo enim ut eros vehicula porttitor. Vestibulum viverra volutpat vulputate. Sed congue nec lectus pellentesque pretium. Duis vestibulum aliquam sapien, et condimentum quam mattis ac. Pellentesque gravida odio id dapibus mattis. Sed facilisis sapien ac mauris laoreet semper. Donec ac justo nisi. Vestibulum tincidunt gravida posuere. Pellentesque molestie ligula tortor, quis convallis sapien ornare at.\r\n\r\nNam consectetur aliquet sagittis. Fusce viverra, arcu id gravida posuere, ante orci tempor nunc, ut dapibus tortor turpis eu tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent luctus mi ac lectus luctus iaculis. Morbi interdum convallis ipsum gravida suscipit. Sed maximus, erat pharetra euismod ullamcorper, leo dolor ultrices nibh, volutpat bibendum neque lorem quis elit. Fusce vitae enim eros. Fusce et nulla vitae orci dapibus convallis. Vestibulum at rutrum justo. Morbi non vulputate est, sed vestibulum elit. Fusce id nisl a justo finibus facilisis. Proin egestas nibh quis elit maximus consectetur. In imperdiet odio nulla, sit amet laoreet nibh porta at. Fusce pretium luctus ipsum, quis convallis augue ultrices eu. Sed hendrerit arcu laoreet, condimentum nibh a, pellentesque arcu. Nam malesuada arcu velit, quis malesuada lacus fringilla non.', '2022-10-03 21:17:43', 5);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Web development'),
(2, 'Frontend development'),
(3, 'Backend development'),
(4, 'Graphic designing'),
(5, 'SEO');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `user` text NOT NULL,
  `comment` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `blog_category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `user`, `comment`, `created_at`, `blog_category_id`) VALUES
(1, 'Payal Moradiya', 'test your skill', '2022-10-04 18:20:05', 11),
(2, 'Payal Moradiya', 'Good team work!!!', '2022-10-04 18:20:25', 8),
(3, 'Gopi', 'Thank you for blog!!!', '2022-10-04 19:04:13', 8),
(4, 'Vimal Moradiya', 'Nice blog!!!', '2022-10-04 20:04:22', 6),
(5, 'vimal moradiya', 'Very Nice!!!', '2022-10-05 20:36:06', 5),
(6, 'vimal moradiya', 'test', '2022-10-05 20:40:06', 5),
(7, 'Payal Moradiya', 'Nice!! I like it..', '2022-10-05 20:57:10', 3),
(8, 'Payal Moradiya', 'not working', '2022-10-05 20:54:22', 1),
(9, 'Krishna', 'best graphic designing tips!!! Thank you..', '2022-10-05 21:07:29', 10),
(10, 'Krishna', 'Very helpfull...Thanks!!', '2022-10-05 21:10:54', 10);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'Payal Moradiya', 'test@gmail.com', '$2y$10$L7nd2mFrxGYGUwI9b/cT2.F7PVWco2XOJlk/VXN.fo4qytzXEHDnG'),
(2, 'vimal moradiya', 'vim@gmail.com', '$2y$10$dRX7ViW2aI7IziZdj/Elw.G2AzC7IZ4gsoLiQn1h/WH0BUHxNge3q'),
(3, 'Krishna', 'krishna@gmail.com', '$2y$10$emtZFhsQv/lx6N9t3MNwPuYEbEVlQooP/lV0jCofGY/V/SDMq/GIG');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
