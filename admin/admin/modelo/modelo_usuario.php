<?php
class Modelo_Usuario
{
    private $conexion;
    function __construct()
    {
        require_once 'modelo_conexion.php';
        $this->conexion = new conexion();
        $this->conexion->conectar();
    }

    function VerificarUsuario($usuario, $contra)
    {
        $sql = "SELECT id_usu, usuario_usu, password_usu, estado_usu, id_rol1 FROM usuarios WHERE usuario_usu='$usuario'";
        $arreglo = array();
        if ($consulta = $this->conexion->conexion->query($sql)) {
            while ($consulta_VU = mysqli_fetch_array($consulta)) {
                if (password_verify($contra, $consulta_VU["password_usu"])) {
                    $arreglo[] = $consulta_VU;
                }
            }
            return $arreglo;
            $this->conexion->cerrar();
        }
    }

    function listar_usuario()
    {
        $sql = "CALL SP_LISTAR_USUARIO()";
        $arreglo = array();
        if ($consulta = $this->conexion->conexion->query($sql)) {
            while ($consulta_VU = mysqli_fetch_assoc($consulta)) {
                $arreglo["data"][] = $consulta_VU;
            }
            return $arreglo;
            $this->conexion->cerrar();
        }
    }

    function listar_combo_rol()
    {
        $sql = "call SP_LISTAR_COMBO_ROL()";
        $arreglo = array();
        if ($consulta = $this->conexion->conexion->query($sql)) {
            while ($consulta_VU = mysqli_fetch_array($consulta)) {
                $arreglo[] = $consulta_VU;
            }
            return $arreglo;
            $this->conexion->cerrar();
        }
    }

    function idUsu()
    {
        $sql = "call SP_LISTAR_ID_USUARIO()";
        $arreglo = array();
        if ($consulta = $this->conexion->conexion->query($sql)) {
            while ($consulta_VU = mysqli_fetch_array($consulta)) {
                $arreglo[] = $consulta_VU;
            }
            return $arreglo;
            $this->conexion->cerrar();
        }
    }

    function Registrar_Usuario($id, $nombres, $apellidos, $correo, $usuario, $contrasena, $rol)
    {
        $sql = "call SP_REGISTRAR_USUARIO('$id','$nombres','$apellidos','$correo','$usuario','$contrasena','$rol')";
        if ($consulta = $this->conexion->conexion->query($sql)) {
            if ($row = mysqli_fetch_array($consulta)) {
                return $id = trim($row[0]);
            }
            $this->conexion->cerrar();
        }
    }

    function Modificar_Estatus_Usuario($idusuario, $estatus)
    {
        $sql = "call SP_MODIFICAR_STATUS_USUARIO('$idusuario','$estatus')";
        if ($consulta = $this->conexion->conexion->query($sql)) {
            //$id_retornado = mysqli_insert_id($this->conexion->conexion);
            return 1;
        } else {
            return 0;
        }
    }
}
