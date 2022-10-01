const randomUsers = () =>{
    fetch('https://randomuser.me/api/?results=500')
    .then(res => res.json())
    .then(data => randomUsersData(data.results))
}

const randomUsersData = users =>{
    const dataContainer = document.getElementById('random-data');
    for(const user of users){
        const div = document.createElement('div');
        div.classList.add('dataStyle');
        div.innerHTML = `
            <h2>Cell: ${user.cell}</h2>
            <h2>Age: ${user.dob.age}</h2>
            <h2>Date: ${user.dob.date}</h2>
            <h2>Email: ${user.email}</h2>
            <h2>Gender: ${user.gender}</h2>
            <h2>Name: ${user.id.name}</h2>
            <h2>Value: ${user.id.value}</h2>
            <h2>City: ${user.location.city}</h2>
            <h2>Latitude: ${user.location.coordinates.latitude}</h2>
            <h2>Longitude: ${user.location.coordinates.longitude}</h2>
            <h2>Country: ${user.location.country}</h2>
            <h2>Postcode: ${user.location.postcode}</h2>
            <h2>State: ${user.location.state}</h2>
            <h2>StreetName: ${user.location.street.name}</h2>
            <h2>StateNumber: ${user.location.street.number}</h2>
            <h2>TimezoneDescription: ${user.location.timezone.description}</h2>
            <h2>TimezoneOffset: ${user.location.timezone.offset}</h2>
            <h2>LoginMd5: ${user.login.md5}</h2>
            <h2>LoginPassword: ${user.login.password}</h2>
            <h2>LoginSalt: ${user.login.salt}</h2>
            <h2>LoginSha1: ${user.login.sha1}</h2>
            <h2>LoginSha256: ${user.login.sha256}</h2>
            <h2>LoginUsername: ${user.login.username}</h2>
            <h2>LoginUuid: ${user.login.uuid}</h2>
            <h2>UserFirstName: ${user.name.first}</h2>
            <h2>UserLastName: ${user.name.last}</h2>
            <h2>UserTitle: ${user.name.title}</h2>
            <h2>UserNat: ${user.nat}</h2>
            <h2>UserPhone: ${user.phone}</h2>
            <h2>UserAge: ${user.registered.age}</h2>
            <h2>UserBirthday: ${user.registered.date}</h2>
        `;
        dataContainer.appendChild(div);
    }
}

randomUsers();