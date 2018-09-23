console.log('DB ', process.env.DB);

if (process.env.NODE_ENV !== 'production'){
  require('dotenv').load();
}
console.log('DB ', process.env.DB);
