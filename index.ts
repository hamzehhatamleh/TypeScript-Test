import express from "express";
import { findTicket , getPendingTasks } from "./ticketService";

const app = express();





app.get("/tickets/:id", (req, res) => {

    const id = Number(req.params.id);

    const ticket = findTicket(id);

    if (!ticket) {
        return res.status(404).json({
            message: "Ticket not found"
        });
    }

    return res.status(200).json(ticket);
});



app.get("/pending-tickets", (req, res) => {

try{
   const pendingTasks = getPendingTasks()


   if (pendingTasks.length>0){
    return res.status(200).json(pendingTasks)

   }

   else{
    return res.status(404).json({
        message:"no pending tasks"
    })
   }



}


catch(error){
     return res.status(500).json({
        message:"unexpected error"
     })
}
});




type AgentStatus =
    "active" | "waiting" | "completed" | "unknown";



function mapTicketStatus(status: string): AgentStatus {
    
    if (status==="new"){
        return "active"
    }

    if(status==="open"){
        return "active"
    }


        if ...

        if ...
   
}


app.listen(3000, () => {
    console.log("Server running on port 3000");
});