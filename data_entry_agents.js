// Data Entry Agents Script
class DataEntryAgents {
    constructor() {
        this.agents = [785, 769, 768, 766, 786, 770, 771];
    }

    processReferral(referral) {
        if (this.agents.length > 0) {
            const agentId = this.agents.shift();
            document.getElementById('output').innerHTML += `<p>Data Entry Agent ${agentId} processing Referral ${referral}.</p>`;
        } else {
            document.getElementById('output').innerHTML += `<p>No data entry agents available.</p>`;
        }
    }
}

const dataEntryAgents = new DataEntryAgents();
dataEntryAgents.processReferral(111);
