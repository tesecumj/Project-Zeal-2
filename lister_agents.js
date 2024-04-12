// Lister Agents Script
class ListerAgents {
    constructor() {
        this.agents = [571, 681, 514, 774, 775, 773, 776, 382, 661, 647, 421, 414, 662, 678, 737, 541, 649];
    }

    processReferral(referral) {
        if (this.agents.length > 0) {
            const agentId = this.agents.shift();
            document.getElementById('output').innerHTML += `<p>Lister Agent ${agentId} processing Referral ${referral}.</p>`;
        } else {
            document.getElementById('output').innerHTML += `<p>No lister agents available.</p>`;
        }
    }
}

const listerAgents = new ListerAgents();
listerAgents.processReferral(111);
