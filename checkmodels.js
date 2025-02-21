const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Atul1603:Atuldubey@pdftoaudio.8pkov.mongodb.net/UserDataBase?retryWrites=true&w=majority&appName=PdfToAudio');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
