<?php

	// Declare site wide variables
	$site_name = 'NAME_OF_SITE';
	$site_app_name = 'NAME_OF_SITE_APP';
	$site_base = '/static/';

?>
<!DOCTYPE html>
<!--[if IE 8]>         <html lang="en" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en" class="no-js"> <!--<![endif]-->
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="apple-mobile-web-app-title" content="<?= $site_app_name ?>">
		<!-- TODO: Description/Keyword Meta tags -->
		<title><?= $site_name ?> | <?= $page_name ?></title>
		<link rel="shortcut icon" href="/favicon.ico">
		<link rel="stylesheet" media="all" href="/css/site.css">
		<script src="/js/vendor/modernizr.2.7.1.min.js"></script>
		<!-- TODO: Add Google Analytics tracking code -->
	</head>
	<body>
		<main class="page-wrap <?= $page_url ?>" role="main">
			<header class="header" role="banner">
				<? include('navigation.php') ?>
				<div class="logo">
					<a href="<?= $site_base ?>">
						<img src="/img/logo.svg" alt="<?= $site_name ?> - Logo"/>
					</a>
				</div>
			</header>