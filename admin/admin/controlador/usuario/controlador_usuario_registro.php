<?php
require '../../modelo/modelo_usuario.php';
$MU = new Modelo_Usuario();
$id = htmlspecialchars($_POST['id'], ENT_QUOTES, 'UTF-8');
$nombres = htmlspecialchars($_POST['nombres'], ENT_QUOTES, 'UTF-8');
$apellidos = htmlspecialchars($_POST['apellidos'], ENT_QUOTES, 'UTF-8');
$correo = htmlspecialchars($_POST['correo'], ENT_QUOTES, 'UTF-8');
$usuario = htmlspecialchars($_POST['usuario'], ENT_QUOTES, 'UTF-8');
$contrasena = password_hash($_POST['contrasena'], PASSWORD_DEFAULT, ['cost' => 10]);
$rol = htmlspecialchars($_POST['rol'], ENT_QUOTES, 'UTF-8');
$consulta = $MU->Registrar_Usuario($id, $nombres, $apellidos, $correo, $usuario, $contrasena, $rol);
echo $consulta;
