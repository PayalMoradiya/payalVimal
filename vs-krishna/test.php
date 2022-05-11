<!DOCTYPE html>
<html>
	<head>
	
		<!-- CSS style to put div side by side -->
		<style type="text/css">
		.containers {
			background-image:linear-gradient(#808080, #ffffff); /* W3C */
			width:100%;
			height:350px;
			background-color:black;
			padding-top:20px;
			padding-left:15px;
			padding-right:15px;
			opacity: 1.0;
			margin-bottom: 30px;
		}
		#st-box {
			float:left;
			width:30%;
			height:200px;
			background-color:white;
			border:solid black;
		}
		#nd-box {
			float:left;
			width:30%;
			height:200px;
			background-color:white;
			border:solid black;
			margin-left:53px;
		}
		#rd-box {
			float:right;
			width:30%;
			height:200px;
			background-color:white;
			border:solid black;
		}
		h3{
			text-align: center;
			margin: 10px 0px;
		}
		h2{
			text-align: center;
			margin-bottom: 25px;
			color: white;
		}
		/* X-Small devices (portrait phones, less than 576px)  */
		@media only screen and (max-width: 575px) { 
			.about-bg{
				height:40%;
			}  
			/*  about us style */
			.containers{
				padding-top:0px;
				padding-left:0px;
				padding-right:0px;
				height:auto;
				
			}
			#st-box, #nd-box {
				width:60%;
				height:auto;
				background-color:white;
				border:solid black;
				margin-left:75px;
				margin-bottom:30px;
			
			}
			#rd-box {
				width:60%;
				height:auto;
				background-color:white;
				border:solid black;
				margin-left:75px;
				float:left;
				margin-bottom:15px;
			}
			h2{
				margin-top: 25px;
			}

		}
		/* Medium devices (tablets, 768px and up)  */
		@media (min-width: 768px) { 
			.about-bg{
				height:80%;
			} 
			#nd-box {
				height:auto;
				background-color:white;
				border:solid black;
				margin-left:35px;
				margin-bottom:35px;
			}
			
		}

		</style>
	</head>
	
	<body>
		<!--Non Ferrous-->
		<div class="containers">
			<h2>Non Ferrous Metal Scraps</h2>
			<div id="st-box">
				<h3>Copper</h3>
				<ul>
					<li>Copper Milberry</li>
					<li>Copper Berry</li>
					<li>Coper Birch Cliff</li>
					<li>Copper Candy</li>
					<li>Copper Ingots</li>
				</ul>
			</div>
			<div id="nd-box">
				<h3>Aluminium</h3>
                <ul>
                    <li>Used Beverage Cans (UBC)</li>
                    <li>6063 Extrusion Scrap</li>
                    <li>Aluminium Wire and Cable (Talon)</li>
                    <li>Aluminium Ingots</li>
                </ul>
			</div>
			<div id="rd-box">
				<h3>Brass</h3>
                <ul>
                    <li>Brass Honey</li>
                    <li>Heavy Brass</li>
                    <li>Brass Turning</li>
                    <li>Brash Ingots</li>
                </ul>
			</div>
		</div>
		<br>
		<br>
		<!--Ferrous-->
		<div class="containers">
			<h2>Ferrous Metal Scraps</h2>
			<div id="st-box">
				<h3>Steel</h3>
                <ul>
                    <li>HMS 1&2</li>
                    <li>Mild Steel Turnings</li>
                    <li>Steel Plates</li>
                </ul>
			</div>
			<div id="nd-box">
				<h3>Cast Iron Scrap</h3>
                <ul>
                    <li>Cast Iron Scrap</li>
                </ul>
			</div>
			<div id="rd-box">
				<h3>Tin</h3>
                <ul>
                    <li>Tin Sheet Bundles</li>
                    <li>Shredded Tin Cans</li>
                </ul>
			</div>
		</div>		
	</body>
</html>					
