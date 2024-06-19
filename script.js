// Add event listener to the submit button
document.getElementById("submit-btn").addEventListener("click", function() {
    // Get data from the form inputs
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var college = document.getElementById("college").value;
    var batch = document.getElementById("batch").value;
    var graduation = document.getElementById("graduation").value;
    var whyJoinEkghanti = document.getElementById("why-join-ekghanti").value;

    // Log the data
    console.log("Name:", name);
    console.log("Address:", address);
    console.log("Mobile:", mobile);
    console.log("Email:", email);
    console.log("College:", college);
    console.log("Batch:", batch);
    console.log("Graduation:", graduation);
    console.log("Why join Ekghanti:", whyJoinEkghanti);
    // Show alert
    Swal.fire({
        title: 'Form Data',
        html: `
            <div>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Address:</strong> ${address}</p>
                <p><strong>Mobile:</strong> ${mobile}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>College:</strong> ${college}</p>
                <p><strong>Batch:</strong> ${batch}</p>
                <p><strong>Graduation:</strong> ${graduation}</p>
                <p><strong>Why join Ekghanti:</strong> ${whyJoinEkghanti}</p>
            </div>
        `,
        icon: 'info'
    });
});
