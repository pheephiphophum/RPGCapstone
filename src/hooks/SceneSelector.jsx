import Bridge from "../components/rooms/Bridge"
import CargoHold from "../components/rooms/CargoHold"
import CommonRoom from "../components/rooms/CommonRoom"
import Dorm1 from "../components/rooms/Dorm1"
import Dorm2 from "../components/rooms/Dorm2"
import EscapePod from "../components/rooms/EscapePod"
import Hallway1 from "../components/rooms/Hallway1"
import Hallway2 from "../components/rooms/Hallway2"
import Hallway3 from "../components/rooms/Hallway3"
import Hallway4 from "../components/rooms/Hallway4"
import MedBay from "../components/rooms/MedBay"
import MessHall from "../components/rooms/MessHall"
import ScienceLab from "../components/rooms/ScienceLab"
import StorageRoom from "../components/rooms/StorageRoom"



function SelectScene({scene, setScene}){


    return(
        // scene == '' ? <X setScene={setScene}/> :
        // ^^^ copy and paste for new scenes ^^^
        
        
        scene == 'bridge' ? <Bridge setScene={setScene}/> :
        scene == 'cargohold' ? <CargoHold setScene={setScene}/> :
        scene == 'commonroom' ? <CommonRoom setScene={setScene}/> :
        scene == 'dorm1' ? <Dorm1 setScene={setScene}/> :
        scene == 'dorm2' ? <Dorm2 setScene={setScene}/> :
        scene == 'escapepod' ? <EscapePod setScene={setScene}/> :
        scene == 'hallway1' ? <Hallway1 setScene={setScene}/> :
        scene == 'hallway2' ? <Hallway2 setScene={setScene}/> :
        scene == 'hallway3' ? <Hallway3 setScene={setScene}/> :
        scene == 'hallway4' ? <Hallway4 setScene={setScene}/> :
        scene == 'medbay' ? <MedBay setScene={setScene}/> : 
        scene == 'messhall' ? <MessHall setScene={setScene}/> :
        scene == 'sciencelab' ? <ScienceLab setScene={setScene}/> :
        scene == 'storageroom' ? <StorageRoom setScene={setScene}/> :

        <p>The ship exploded and you are now floating out in space (room selector error) scene = {scene}</p>
    )
}

export default SelectScene