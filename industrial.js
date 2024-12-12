



const mysql = require('mysql2');
// Replace with your actual MySQL credentials
const industrial = mysql.createConnection({ // Skapa en MySQL-anslutning
  host: 'localhost', // Din MySQL-serverns värdnamn eller IP-adress
  user: 'root',   // Ditt MySQL-användarnamn
  password: '0915539084',
  database: 'industrial',  // Namnet på databasen du vill ansluta till
  Port: '9000'
});
industrial.connect((err) => { // Testa anslutningen till databasen
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {  // Om anslutningen lyckas
    console.log('Connected to the database!');
  }
});
module.exports = industrial; // Exportera anslutningen så att den kan användas i andra filer