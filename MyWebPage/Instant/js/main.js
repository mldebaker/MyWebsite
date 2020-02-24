
Email .send({
    Host : "smtp.elasticemail.com",
    Username : "mldebaker@gmail.com",
    Password : "AF6BA840EE7507B0EA2F39E7842C46F11067",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
message => alert(message)
);

