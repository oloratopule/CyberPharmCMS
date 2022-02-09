import React, { useState } from 'react';
// import './App.css'
import { db } from '../Config/Firebase';
import { Link } from 'react-router-dom';
export const Appointment = () => {
    const [doctor, setDoctor] = useState()
    const viewAppointment = () => {
        db.collection('Appointment').doc("doctor@email.com").collection('bookings')
            .onSnapshot((snapshot) => {
                const dis = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                setDoctor(dis)
            })
    }
    return (
        <div>
            <div className="header">
                <h1 className="heading">CyberPharm</h1>
                <div className="screens">
                    <Link to="/Dashboard" className="dashboard">Dashboard</Link>
                    <Link to="/Appointment" className="appt">Appointment</Link>
                    <Link to="/Doctors" className="doctor">Doctors</Link>
                    <Link to="/Patients" className="doctor">Patients</Link>
                    <Link to="/MedicalFascilities" className="doctor">medicalfasilities</Link>
                </div>
            </div>
            <p className="text2">Appointment</p>
            <div className="show">
            
            </div>
            <div className="appt2">
                <div className="show">
                    <h5 style={{ marginLeft: "20px", marginTop: "20px" }}>Show</h5>
                    <div className="no1">
                        <p >10</p>
                        
                    </div>
                    <h5 style={{ marginLeft: "10px", marginTop: "20px" }}>Entries</h5>
                    <h5 style={{ marginLeft: "1100px", marginTop: "20px" }}>Search:</h5>
                    <input
                        type="text"
                        // placeholder="Search name"
                        style={{ height: "30px", marginLeft: "10px", marginTop: "20px" }}
                    />
                </div>
                <div className="appt-bar">
                    <h6>#</h6>
                    <h6 style={{ marginLeft: "100px" }}>Appoitment ID</h6>
                    <h6 style={{ marginLeft: "100px" }}>Patient ID No.</h6>
                    <h6 style={{ marginLeft: "80px" }}>Amount</h6>
                    <h6 style={{ marginLeft: "110px" }}>Doctors Name</h6>
                    <h6 style={{ marginLeft: "100px" }}>Date</h6>
                    <h6 style={{ marginLeft: "140px" }}>Payment Status</h6>
                    <h6 style={{ marginLeft: "90px" }}>Status</h6>
                    <h6 style={{ marginLeft: "100px" }}>View Appointment</h6>
                </div>
                <div className="names">
                    <h6 style={{ marginLeft: "10px" }}> 1</h6>
                    <h6 style={{ marginLeft: "100px" }}>#331555</h6>
                    <h6 style={{ marginLeft: "130px" }}>00000000000</h6>
                    <h6 style={{ marginLeft: "100px" }}>R250</h6>
                    <h6 style={{ marginLeft: "90px" }}>Dr. Bellamy Nicholas</h6>
                    <h6 style={{ marginLeft: "60px" }}>2021/11/13</h6>
                    <p className="remain">Remaining</p>
                    <p className="cancel">Cancelled</p>
                    <h6 style={{ marginLeft: "100px" }}>View</h6>
                </div>
                <div className="names">
                    <h6 style={{ marginLeft: "10px" }}> 1</h6>
                    <h6 style={{ marginLeft: "100px" }}>#331555</h6>
                    <h6 style={{ marginLeft: "130px" }}>00000000000</h6>
                    <h6 style={{ marginLeft: "100px" }}>R250</h6>
                    <h6 style={{ marginLeft: "90px" }}>Dr. Bellamy Nicholas</h6>
                    <h6 style={{ marginLeft: "60px" }}>2021/11/13</h6>
                    <p className="remain">Remaining</p>
                    <p className="cancel">Cancelled</p>
                    <h6 style={{ marginLeft: "100px" }}>View</h6>
                </div>
                <div className="names">
                    <h6 style={{ marginLeft: "10px" }}> 1</h6>
                    <h6 style={{ marginLeft: "100px" }}>#331555</h6>
                    <h6 style={{ marginLeft: "130px" }}>00000000000</h6>
                    <h6 style={{ marginLeft: "100px" }}>R250</h6>
                    <h6 style={{ marginLeft: "90px" }}>Dr. Bellamy Nicholas</h6>
                    <h6 style={{ marginLeft: "60px" }}>2021/11/13</h6>
                    <p className="payed">Paid</p>
                    <p className="complete">Completed</p>
                    <h6 style={{ marginLeft: "100px", color: "#3E64FF" }}>View</h6>
                </div>
                <div className="names">
                    <h6 style={{ marginLeft: "10px" }}> 1</h6>
                    <h6 style={{ marginLeft: "100px" }}>#331555</h6>
                    <h6 style={{ marginLeft: "130px" }}>00000000000</h6>
                    <h6 style={{ marginLeft: "100px" }}>R250</h6>
                    <h6 style={{ marginLeft: "90px" }}>Dr. Bellamy Nicholas</h6>
                    <h6 style={{ marginLeft: "60px" }}>2021/11/13</h6>
                    <p className="remain">Remaining</p>
                    <p className="cancel">Cancelled</p>
                    <h6 style={{ marginLeft: "100px" }}>View</h6>
                </div>
                <div className="names">
                    <h6 style={{ marginLeft: "10px" }}> 1</h6>
                    <h6 style={{ marginLeft: "100px" }}>#331555</h6>
                    <h6 style={{ marginLeft: "130px" }}>00000000000</h6>
                    <h6 style={{ marginLeft: "100px" }}>R250</h6>
                    <h6 style={{ marginLeft: "90px" }}>Dr. Bellamy Nicholas</h6>
                    <h6 style={{ marginLeft: "60px" }}>2021/11/13</h6>
                    <p className="payed">Paid</p>
                    <p className="complete">Completed</p>
                    <h6 style={{ marginLeft: "100px", color: "#3E64FF" }}>View</h6>
                </div>
                <div className="names">
                    <h6 style={{ marginLeft: "10px" }}> 1</h6>
                    <h6 style={{ marginLeft: "100px" }}>#331555</h6>
                    <h6 style={{ marginLeft: "130px" }}>00000000000</h6>
                    <h6 style={{ marginLeft: "100px" }}>R250</h6>
                    <h6 style={{ marginLeft: "90px" }}>Dr. Bellamy Nicholas</h6>
                    <h6 style={{ marginLeft: "60px" }}>2021/11/13</h6>
                    <p className="remain">Remaining</p>
                    <p className="cancel">Cancelled</p>
                    <h6 style={{ marginLeft: "100px", color: "#3E64FF" }}>View</h6>
                </div>
                <div className="names">
                    <h6 style={{ marginLeft: "10px" }}> 1</h6>
                    <h6 style={{ marginLeft: "100px" }}>#331555</h6>
                    <h6 style={{ marginLeft: "130px" }}>00000000000</h6>
                    <h6 style={{ marginLeft: "100px" }}>R250</h6>
                    <h6 style={{ marginLeft: "90px" }}>Dr. Bellamy Nicholas</h6>
                    <h6 style={{ marginLeft: "60px" }}>2021/11/13</h6>
                    <p className="remain">Remaining</p>
                    <p className="cancel">Cancelled</p>
                    <h6 style={{ marginLeft: "100px" }}>View</h6>
                </div>
                <div className="names">
                    <h6 style={{ marginLeft: "10px" }}> 1</h6>
                    <h6 style={{ marginLeft: "100px" }}>#331555</h6>
                    <h6 style={{ marginLeft: "130px" }}>00000000000</h6>
                    <h6 style={{ marginLeft: "100px" }}>R250</h6>
                    <h6 style={{ marginLeft: "90px" }}>Dr. Bellamy Nicholas</h6>
                    <h6 style={{ marginLeft: "60px" }}>2021/11/13</h6>
                    <p className="payed">Paid</p>
                    <p className="complete">Completed</p>
                    <h6 style={{ marginLeft: "100px", color: "#3E64FF" }}>View</h6>
                </div>
                <div className="names">
                    <h6 style={{ marginLeft: "10px" }}> 1</h6>
                    <h6 style={{ marginLeft: "100px" }}>#331555</h6>
                    <h6 style={{ marginLeft: "130px" }}>00000000000</h6>
                    <h6 style={{ marginLeft: "100px" }}>R250</h6>
                    <h6 style={{ marginLeft: "90px" }}>Dr. Bellamy Nicholas</h6>
                    <h6 style={{ marginLeft: "60px" }}>2021/11/13</h6>
                    <p className="payed">Paid</p>
                    <p className="complete">Completed</p>
                    <h6 style={{ marginLeft: "100px", color: "#3E64FF" }}>View</h6>
                </div>
                <div className="names">
                    <h6 style={{ marginLeft: "10px" }}> 1</h6>
                    <h6 style={{ marginLeft: "100px" }}>#331555</h6>
                    <h6 style={{ marginLeft: "130px" }}>00000000000</h6>
                    <h6 style={{ marginLeft: "100px" }}>R250</h6>
                    <h6 style={{ marginLeft: "90px" }}>Dr. Bellamy Nicholas</h6>
                    <h6 style={{ marginLeft: "60px" }}>2021/11/13</h6>
                    <p className="remain">Remaining</p>
                    <p className="cancel">Cancelled</p>
                    <h6 style={{ marginLeft: "100px" }}>View</h6>
                </div>
                <div className="show">
                    <p className="text3">Showing 1 To 9 Of 9 Entries</p>
                </div>
            </div>
        </div>
    )
}









