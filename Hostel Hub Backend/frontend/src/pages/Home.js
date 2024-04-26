import { useState } from 'react';

import './Home.css'

import HostelDetails from '../components/HostelDetails';
import axios from 'axios';


const Home = () => {
    const [allHostels, setAllHostels] = useState(null);
    const [hostelType, setHostelType] = useState(null);
    const [roomType, setRoomType] = useState(null);
    const [name, setName] = useState(null);
    const [enrollmentNo, setEnrollmentNumber] = useState(null);
    const [roomNumber, setRoomNumber] = useState(null);

    const fetchHostels = async () => {
      const response = await axios.get(`http://localhost:5000/hostels/${hostelType}/${roomType}`)

      setAllHostels(response.data)

    }

    

    const handleHostelChange = (event) => {
        setHostelType(event.target.value);
    };

    const handleRoomChange = (event) => {
        setRoomType(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEnrollmentNumberChange = (event) => {
        setEnrollmentNumber(event.target.value);
    };

    const handleRoomNumberChange = (event) => {
        setRoomNumber(event.target.value);
    };

    const handleBookNow = async () => {
      try{
        await axios.patch(`http://localhost:5000/hostels/${roomNumber}`, {
          name,
          enrollmentNo,
          roomNumber
        })
        alert("Booking Confirmed")
      }
      catch(error){
        console.log("Booking Failed", error);
      }
    }


    return (
        <div className="home">
          <h1>Hostel Hub</h1>
          <div className="dropdowns">
            <select value={hostelType} onChange={handleHostelChange}>
              <option value="">Choose Hostel</option>
              <option value="Boys">Boys Hostel</option>
              <option value="Girls">Girls Hostel</option>
            </select>
            <select value={roomType} onChange={handleRoomChange}>
              <option value="">Choose Sharing</option>
              <option value="Double Sharing">Double Sharing</option>
              <option value="Triple Sharing">Triple Sharing</option>
            </select>

            <button onClick={fetchHostels}>Search</button>
          </div>
        <div className="available-rooms">
            <h2>Available Rooms:</h2>
            <div className="hostels">
                {allHostels && allHostels.map((hostel) => (
                  <HostelDetails key={hostel._id} hostel={hostel}/>
                ))}
            </div>
        </div>
          <div className="booking-form">
            <h2>Booking Form</h2>
            <span className="input-wrapper">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
              />
            </span>
            <span className="input-wrapper">
              <input
                type="text"
                placeholder="Enrollment Number"
                value={enrollmentNo}
                onChange={handleEnrollmentNumberChange}
              />
            </span>
            <span className="input-wrapper">
              <input
                type="text"
                placeholder="Room Number"
                value={roomNumber}
                onChange={handleRoomNumberChange}
              />
            </span>
            <span className="input-wrapper">
              <button onClick={handleBookNow}>Book Now</button>
            </span>
          </div>
        </div>
      );
}

export default Home;