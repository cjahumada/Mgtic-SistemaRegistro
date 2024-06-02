<?php
// Permitir solicitudes desde cualquier origen
header("Access-Control-Allow-Origin: *");
// Permitir métodos HTTP GET, POST, y OPTIONS
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
// Permitir los encabezados Content-Type y Authorization en las solicitudes CORS
header('Content-Type: application/json');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

include("connection.php");

$response = array("success" => false);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['id'])) {
        $studentId = intval($_POST['id']);
        
        $stmt_delete_usuarios = $conn->prepare("DELETE FROM estudiantes WHERE id = ?");
        if ($stmt_delete_usuarios) {
            $stmt_delete_usuarios->bind_param('i', $studentId);
            if ($stmt_delete_usuarios->execute()) {
                $response['success'] = true;
            } else {
                $response['error'] = "Fallo la ejecucion";
            }
            $stmt_delete_usuarios->close();
        } else {
            $response['error'] = "FFallo la preparacion";
        }
    } else {
        $response['error'] = "No hay ID";
    }
} else {
    $response['error'] = "Error en el metodo";
}

echo json_encode($response);

$conn->close();
?>