const HostelDetails = ({ hostel }) => {
    return(
        <div className="hostel-details">
            {/* <p><strong>Hostel Type: </strong>{hostel.hostelType}</p>
            <p><strong>Room Type: </strong>{hostel.roomType}</p> */}
            <p><strong>Room Number: </strong>{hostel.roomNo}</p>
            <p><strong>Room Status: </strong>{hostel.roomStatus}</p>

            <hr />
        </div>
    )
}

export default HostelDetails