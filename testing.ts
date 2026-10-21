import { test } from "node:test";
import assert from "node:assert/strict";

type AgentStatus =
    "active" | "waiting" | "completed" | "unknown";

// function mapTicketStatus(status: string): AgentStatus {

//     if (status === "new") {
//         return "active";
//     }

//     if (status === "open") {
//         return "active";
//     }

//     return "unknown";
// }



function mapTicketStatus(status: string): AgentStatus {
    if (status === "new" || status === "open") {
        return "active";
    }

    if(status==="pending" || status==="on_hold"){
        return "waiting"

    }

    if(status==="solved" || status==="closed"){
        return "completed"
    }

    return "unknown";
}

test("open should become active", () => {
    assert.equal(mapTicketStatus("open"), "active");
});

test("new should become active", () => {
    assert.equal(mapTicketStatus("new"), "active");
});

test("otherwise unknown", ()=>{
assert.equal(mapTicketStatus(""),"unknown")

})


test("on_hold should become waiting", () => {
    assert.equal(mapTicketStatus("on_hold"), "waiting");
});

const cases = [
    { input: "open", expected: "active" },
    { input: "new", expected: "active" },
    { input: "pending", expected: "waiting" },
    { input: "closed", expected: "completed" },
    { input: "", expected: "unknown" }
];

for (const c of cases) {
    test(`${c.input} should become ${c.expected}`, () => {
        assert.equal(mapTicketStatus(c.input), c.expected);
    });
}