const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/departments/:id/employees/:emp_id', function(req, res) {
    const deptId = req.params.id;
    const empId = req.params.emp_id;
    
    console.log('Dept id : ' + deptId);
    console.log('Emp id : ' + empId);

    res.send('Departments page 222 : ' + req.params.id);
});

app.get('/employees/:id', function(req, res) {
    const employeeId = req.params.id;
    console.log(req.url);
    res.send('Employees page : ' + req.params.id);
});

app.get('/employees', function(req, res) {

    console.log(req.url);
    console.log('Department name : ' + req.query.dept);
    console.log('City name : ' + req.query.city);

    //res.send('List of all employees');
    res.render('employees');
});


app.get('/contact', function(req, res) {
    let person = {
        name: 'LP Venkat',
        job: 'software',
        city: 'bangalore'
    };

    let actors = [
        {
            name: 'deepika',
            age: 31,
            movie: 'Hollywood'
        }, 
        {
            name: 'rock',
            age: 45,
            movie: 'Hollywood'
        },
        {
            name: 'daddario',
            age: 31,
            movie: 'Hollywood'
        }
    ]; 
    res.render('contact', { person: person, actors: actors });
});

app.get('/fillin', (req, res) => {
    res.render('fillin');
});

app.post('/fillin', (req, res) => {
    console.log(req.body);
    res.send('post success');
});



app.listen(3000);