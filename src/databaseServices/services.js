import { firebase } from '../Config/Firebase';
// const email, description, phonenumber, exprience, workingtime, backgroundeducation


const saveDoctor = ((name, specialty, email, dateOfBirth, totalPatients, phoneNumber, ratings, gender, workingDays, bio, experience) => {
    firebase.firestore().collection("Doctors").add({
        name: name,
        specialty: specialty,
        email: email,
        dateOfBirth: dateOfBirth,
        totalPatients: totalPatients,
        phoneNumber: phoneNumber,
        ratings: ratings,
        gender: gender,
        backgroundeducaworkingDaystion: workingDays,
        bio: bio,
        experience: experience

    }).then((docRef) => {
        console.log('Document successfully written with ID: ', docRef.id)
        alert("Docter has been added successfully")
    }).catch((error) => {
        console.error('Error adding document: ', error)
    })
})


const saveMedicalFacilities = ((name, longitude, latitude, image, allSpecialists, availabilty, address, about, category) => {
    firebase.firestore().collection("MedicalFascilities").add({
        name: name,
        longitude: longitude,
        latitude: latitude,
        image: image,
        allSpecialists: allSpecialists,
        availabilty: availabilty,
        address: address,
        about: about,
        category: category

    }).then((docRef) => {
        console.log('Document successfully written with ID: ', docRef.id)
        alert("Medical Fascility added successfully")
    }).catch((error) => {
        console.error('Error adding document: ', error)
    })
})


const getBookings = (() => {
    firebase.firestore().collection('DoctorsAppointments').doc('doctorthapelo@gmail.com').collection('Bookings').onSnapshot((querySnapshot) => {
        const dis = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        console.log(dis)
        return dis;

    })


})

const deleteDoctors = () => {
    firebase.firestore().collection('Doctors').doc("").delete()
        .then(() => {
            console.log("Document Successfully deleted!");
            alert("You deleted a doctor from database!")
        }).catch((error) => {
            console.error("Error removing Document: ", error);
            alert("Could'nt delete a doctor from database!")

        })
}

export {
    saveDoctor,
    saveMedicalFacilities,
    getBookings,
    deleteDoctors
}