const tickets = [
    { id: 201, status: "open", requester: "Sara" },
    { id: 202, status: "pending", requester: "Omar" },
    { id: 203, status: "solved", requester: "Ahmad" }
];

export function findTicket(id: number) {
    return tickets.find(t => t.id === id);
}


export function getPendingTasks() {
    const pendingTasks = [];

    for (let i = 0; i < tickets.length; i++) {
       
        if (tickets[i].status === 'pending') {
            pendingTasks.push(tickets[i]);
        }
    }

    return pendingTasks;
}
