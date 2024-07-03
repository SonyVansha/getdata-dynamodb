const AWS = require('aws-sdk');
require('dotenv').config();

// Konfigurasi AWS SDK dengan session token
AWS.config.update({
  region: 'us-east-1', // Ganti dengan region Anda
  accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Ganti dengan akses key Anda
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // Ganti dengan secret key Anda
  sessionToken: process.env.AWS_SESSION_TOKEN // Ganti dengan session token Anda
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();

// Fungsi untuk menampilkan data dari tabel DynamoDB
const fetchData = async () => {
  const params = {
    TableName: process.env.TableName // Ganti dengan nama tabel Anda
  };

  try {
    const data = await dynamoDB.scan(params).promise();
    console.log("Data dari DynamoDB:", JSON.stringify(data.Items, null, 2));
  } catch (error) {
    console.error("Gagal mengambil data dari DynamoDB:", error);
  }
};

// Panggil fungsi untuk mengambil data
fetchData();
