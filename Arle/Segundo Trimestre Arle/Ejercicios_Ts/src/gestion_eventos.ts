import * as readlineSync from "readline-sync";

let events_array: Event[] = [];

class Event {
    id_event: number;
    name_event: string;
    date_event: string;
    type_event: string;
    participants: Map<number, string> | null;
    max_participants: number;

    constructor(
        name_event: string,
        date_event: string,
        type_event: string,
        max_participants: number
    ) {
        this.id_event = events_array.length + 1;
        this.name_event = name_event;
        this.date_event = date_event;
        this.type_event = type_event;
        this.participants = null;
        this.max_participants = max_participants;
    }

    addParticipant(id_participant: number, name_participant: string) {
        if (this.participants === null) {
            this.participants = new Map<number, string>();
        }
        if (this.participants.size < this.max_participants) {
            this.participants.set(id_participant, name_participant);
            console.log(`Certificate generated for ${name_participant}`);
            console.log(`ID: ${id_participant}, Name: ${name_participant}`);
            console.log(`Event: ${this.name_event}, Date: ${this.date_event}`);
            console.log(`autorizathed by Company XYZ`);
            console.log("Certificate generated successfully");
        } else {
            console.log("The event is full");
        }
    }

    getParticipants() {
        if (this.participants === null) {
            console.log("No participants registered");
            return;
        }
        let count: number = 0
        this.participants.forEach((name, id) => {
            console.log(`ID: ${id}, Name: ${name}`)
            count++
        })
        console.log(`Total participants: ${count}`)
    }

    verifyAvailability(): void {
        if (this.participants === null) {
            console.log("No participants registered")
            console.log(`The event is available for ${this.max_participants} participants`)
            return
        }
        if (this.participants.size < this.max_participants) {
            console.log(`There are available ${this.max_participants - this.participants.size} spots`);
        } else {
            console.log("The event is full");
        }
    }
}

function createEvent(): Event | undefined {
    const name_event = readlineSync.question("Enter the name of the event: ");
    const date_event = readlineSync.question(
        "Enter the date of the event (dd/mm/yyyy): "
    );
    let type_event: string | undefined;
    while (type_event === undefined) {
        let selectTypeEvent = readlineSync.keyInSelect(
            ["Conference", "Seminar", "Workshop"],
            "Select the type of event: "
        );
        if (selectTypeEvent === 0) {
            type_event = "Conference";
        } else if (selectTypeEvent === 1) {
            type_event = "Seminar";
        } else if (selectTypeEvent === 2) {
            type_event = "Workshop";
        } else {
            console.log("Invalid option, please select a valid type of event");
        }
    }
    const max_participants = readlineSync.questionInt(
        "Enter the maximum number of participants: "
    );

    if (!name_event || !date_event || !type_event || !max_participants) {
        console.log("All fields are required")
        return
    }

    if(events_array.some(event => event.name_event === name_event)) {
        console.log("An event with this name already exists")
        return
    }

    const newEvent = new Event(name_event, date_event, type_event, max_participants)
    events_array.push(newEvent)
    console.log("Event created successfully")

    return newEvent
}

function listEvents(typeEvent: string, dataSearch: string): Event[] | undefined {
    if(events_array.length === 0){
        console.log("No events available")
        return  
    }

    if(typeEvent === "date") {
        const filteredEvents = events_array.filter(event => event.date_event === dataSearch)
        if(filteredEvents.length === 0) {
            console.log("No events found for the specified date")
            return
        }
        filteredEvents.forEach(event => {
            console.log(`Event ID: ${event.id_event}, Name: ${event.name_event}, Date: ${event.date_event}, Type: ${event.type_event}, Max Participants: ${event.max_participants}`)
        })
        return filteredEvents
    }

    if(typeEvent === "type") {
        const filteredEvents = events_array.filter(event => event.type_event === dataSearch)
        if(filteredEvents.length === 0) {
            console.log("No events found for the specified type")
            return
        }
        filteredEvents.forEach(event => {
            console.log(`Event ID: ${event.id_event}, Name: ${event.name_event}, Date: ${event.date_event}, Type: ${event.type_event}, Max Participants: ${event.max_participants}`)
        })
        return filteredEvents
    }
} 


function stadisticsEvents(): void {
    let total_Count: number = 0
    if(events_array.length === 0){
        console.log("No events available")
        return
    }
    const eventType_Conference: any = events_array.filter(event => event.type_event === "Conference")
    if(eventType_Conference.length === 0) {
        console.log("No events of type Conference")
    }else{
        let conference_Count: number = 0
        eventType_Conference.forEach((event: any) => {
            if(event.participants !== null) {
                conference_Count += event.participants.size
            }
        })
        console.log(`Total participants in Conference events: ${conference_Count}`)
        console.log(`On average ${conference_Count / eventType_Conference.length} participants per Conference event`)
        total_Count += conference_Count
    }


    const eventType_Seminar: any = events_array.filter(event => event.type_event === "Seminar")
    if(eventType_Seminar.length === 0) {
        console.log("No events of type Seminar")
    }else{
        let seminar_Count: number = 0
        eventType_Seminar.forEach((event: any) => {
            if(event.participants !== null) {
                seminar_Count += event.participants.size
            }
        })
        console.log(`Total participants in Seminar events: ${seminar_Count}`)
        console.log(`On average ${seminar_Count / eventType_Seminar.length} participants per Seminar event`)
        total_Count += seminar_Count
    }


    const eventType_Workshop = events_array.filter(event => event.type_event === "Workshop")
    if(eventType_Workshop.length === 0) {
        console.log("No events of type Workshop")
    }else{
        let workshop_Count: number = 0
        eventType_Workshop.forEach((event: any) => {
            if(event.participants !== null) {
                workshop_Count += event.participants.size
            }
        })
        console.log(`Total participants in Workshop events: ${workshop_Count}`)
        console.log(`On average ${workshop_Count / eventType_Workshop.length} participants per Workshop event`)
        total_Count += workshop_Count
    }

    console.log(`Total participants in all events: ${total_Count}`)
    console.log(`On average ${total_Count / events_array.length} participants per event`)
}




let active: boolean = true
while(active) {
    console.log("Select an option:")
    const option = readlineSync.keyInSelect(["Create Event", "List Events", "Add Participant", "Show participants in a event", "Verify Availability", "Stadistics", "Exit"], "Select an option: ")
    switch(option) {
        case 0:
            createEvent()
            break
        case 1:
            let typeEvent: string | undefined
            while(typeEvent === undefined){
                let typeEventSelect = readlineSync.keyInSelect(["Date", "Category of event"], "Select the type of filter: ")
                if(typeEventSelect === 0) {
                    typeEvent = "date"
                } else if(typeEventSelect === 1) {
                    typeEvent = "type"
                } else {
                    console.log("Invalid option, please select a valid filter")
                }
            }
            const dataSearch = readlineSync.question("Enter the data to search: ")
            listEvents(typeEvent, dataSearch)
            break
        case 2:
            const id_event = readlineSync.questionInt("Enter the ID of the event: ")
            if(events_array.some(event => event.id_event === id_event)) {
                const name_participant = readlineSync.question("Enter the name of the participant: ")
                const id_participant = readlineSync.questionInt("Enter the ID of the participant: ")
                const event = events_array.find(event => event.id_event === id_event)
                if(event) {
                    event.addParticipant(id_participant, name_participant)
                    console.log("Participant added successfully")
                }
            }else{
                console.log("Event not found")
            }
            break
        case 3:
            const id_event_participant = readlineSync.questionInt("Enter the ID of the event: ")
            if(events_array.some(event => event.id_event === id_event_participant)) {
                const event = events_array.find(event => event.id_event === id_event_participant)
                if(event) {
                    event.getParticipants()
                }
            }else{
                console.log("Event not found")
            }
            break
        case 4:
            const id_event_availability = readlineSync.questionInt("Enter the ID of the event: ")
            if(events_array.some(event => event.id_event === id_event_availability)) {
                const event = events_array.find(event => event.id_event === id_event_availability)
                if(event) {
                    event.verifyAvailability()
                }
            }else{
                console.log("Event not found")
            }
            break
        case 5:
            stadisticsEvents()
            break
        case 6:
            console.log("Exiting the program")
            active = false
            break
        default:
            console.log("Invalid option, please select a valid option")
            break
    }
}

// 1. Filtrar eventos por fecha o categoría -> Hecho
// 2. Obtener lista de participantes inscritos en un evento específico -> Hecho
// 3. Verificar disponibilidad de cupos en un evento -> Hecho
// 4. Transformar datos de inscripciones para generar certificados -> Hecho
// 5. Calcular estadísticas de asistencia por tipo de evento -> Hecho
