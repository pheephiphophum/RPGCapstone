import MedBay from "../components/rooms/MedBay";
import Hallway4 from "../components/rooms/Hallway4";


function SelectScene({scene, setScene}){


    return(
        
        scene == 'hallway1' ? <Hallway1 setScene={setScene}/> :
        scene == 'hallway2' ? <Hallway2 setScene={setScene}/> :
        scene == 'hallway3' ? <Hallway3 setScene={setScene}/> :
        scene == 'hallway4' ? <Hallway4 setScene={setScene}/> :
        scene == 'medbay' ? <MedBay setScene={setScene}/> : 
        scene == '' ? <X setScene={setScene}/> :
        scene == '' ? <X setScene={setScene}/> :
        scene == '' ? <X setScene={setScene}/> :
        scene == '' ? <X setScene={setScene}/> :
        scene == '' ? <X setScene={setScene}/> :
        scene == '' ? <X setScene={setScene}/> :
        scene == '' ? <X setScene={setScene}/> :
        scene == '' ? <X setScene={setScene}/> :
        scene == '' ? <X setScene={setScene}/> :
        scene == '' ? <X setScene={setScene}/> :
        <p>The ship exploded and you are now floating out in space (room selector error)</p>
    )
}

export default SelectScene