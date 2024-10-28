<<<<<<< HEAD
const app = require('./app');
const port = normalizaPort(process.env.PORT || '5000');
function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
if (port >= 0) {
        return port;
    }
return false;
}
app.listen(port, function () {
    console.log(`app listening on port ${port}`)
=======
const app = require('./app');
const port = normalizaPort(process.env.PORT || '5000');
function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
if (port >= 0) {
        return port;
    }
return false;
}
app.listen(port, function () {
    console.log(`app listening on port ${port}`)
>>>>>>> f15a762610a0b94ba734344073754d510b18eb7f
})