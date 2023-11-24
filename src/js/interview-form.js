// const { default: axios } = require("axios");

var form = document.getElementById('interview-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    var formData = new FormData(form);

    var data = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        role: formData.get('role'),
        place: formData.get('place'),
        question: formData.get('questions'),
    }

    console.log(data);

    // if (data){
    //     axios.post('url', data)
    //         .then(res=>{
    //             console.log(res);
    //         })
    //         .catch(e=>{
    //             console.log(e);
    //         })
    // }
  });