const express = require('express');
const path = require('path');
const app = express();
// Указываем путь к папке, содержащей статические файлы
app.use(express.static(path.join(__dirname, 'html')));
// Маршрут для отправки файла index.html при обращении к /index.html
app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'index.html'));
});
// Маршрут для отправки файла pass1.html при обращении к корню
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'pass1.html'));
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});