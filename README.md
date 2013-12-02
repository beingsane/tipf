[tipf](http://fabiorogeriosj.com.br/plugin/tipf/)
====

Plugin jQuery para Tooltip simples com callback

## Demo:

http://fabiorogeriosj.com.br/plugin/tipf/

## Como usar:

Simples!

```html
<!DOCTYPE html>
<html>
<meta charset="UTF-8">
<head>
	<title>jQuery - Tipf</title>
	<link rel="stylesheet" type="text/css" href="css/tipf.css">
	<script type="text/javascript" src="jquery-2.0.3.min.js"></script>
	<script type="text/javascript" src="jquery.tipf.min.js"></script>
</head>
<body>
	<div>
		<a href="#" class="tipf" title="Tooltip simples é bonito :)">Link</a>
		<p>Também é possível fazer um tooltip com callback</p>
		<p>Ao colocar o mouse sobre <a href="#" class="tipf" execjs="exibeProfile(inner)">esse link</a> o tooltip será aberto e a função declarada no execjs será executada!</p>
	</div>

<script type="text/javascript">
	$(document).ready(function (){
		$('.tipf').tipf();
	});

	function exibeProfile(inner){
		$(inner).html('<img src="http://gravatar.com/avatar/56cb30f6ac7e37439f1e7d3d27a68e03"/>');
	}
</script>
</body>
</html>
```
