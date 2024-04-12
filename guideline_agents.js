class GuidelineAgents {
    constructor() {
        this.agents = [456, 111, 385, 633, 380, 631, 718, 562, 503, 638, 536, 745, 639, 67, 637, 635, 624, 567, 626];
    }

    processReferral(referral) {
        if (this.agents.length > 0) {
            const agentId = this.agents.shift();
            document.getElementById('output').innerHTML += `<p>Guideline Agent ${agentId} processing Referral ${referral}.</p>`;
        } else {
            document.getElementById('output').innerHTML += `<p>No guideline agents available.</p>`;
        }
    }
}

const guidelineAgents = new GuidelineAgents();
guidelineAgents.processReferral(111);
