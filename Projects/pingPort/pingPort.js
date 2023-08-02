const { exec } = require('child_process');

function pingHost(ip, port) {
  const command = `ping -c 1 ${ip}`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al ejecutar el comando de ping: ${error.message}`);
      return;
    }

    if (stderr) {
      console.error(`Error en el comando de ping: ${stderr}`);
      return;
    }

    console.log(`Ping exitoso a la IP: ${ip}`);
    console.log(`Listado del puerto ${port}`);
  });
}

// Ejemplo de uso
const ip = '127.0.0.1';
const port = 80;
pingHost(ip, port);