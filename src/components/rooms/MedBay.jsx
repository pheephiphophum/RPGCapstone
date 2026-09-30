import '../../styles/roomStyles.css'

function MedBay({setScene}){



    return(
        <div onClick={() => setScene('hallway4')}>
            this is the MedBay.
        </div>
    )
}

export default MedBay