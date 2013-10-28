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
		<link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)" href="/apple-touch-startup-image-640x960.png">
		<link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" href="/apple-touch-startup-image-640x1136.png">
		<link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)" href="/apple-touch-startup-image-768x1024.png">
		<link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)" href="/apple-touch-startup-image-1024x768.png">
		<link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)" href="/apple-touch-startup-image-1536x2048.png">
		<link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)" href="/apple-touch-startup-image-2048x1536.png">
		<link rel="shortcut icon" href="/favicon.ico">
		<link rel="stylesheet" media="all" href="/css/site.css">
		<script src="/js/vendor/modernizr.2.6.2.min.js"></script>
		<!-- TODO: Add Google Analytics tracking code -->
	</head>
	<body>
		<section class="page-wrap <?= $page_url ?>">
			<header class="header" role="banner">
				<? include('navigation.php') ?>
				<div class="logo">
					<a href="<?= $site_base ?>">
						<img src="/img/logo.svg" alt="LOGO ALT"/>
					</a>
				</div>
			</header>