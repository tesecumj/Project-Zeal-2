class ReferralsQueue {
    constructor() {
        this.queue = [];
        this.processedReferrals = [];
    }

    addReferral(referral) {
        this.queue.push(referral);
    }

    processReferral() {
        if (this.queue.length > 0) {
            const referral = this.queue.shift();
            this.processedReferrals.push(referral);
            document.getElementById('output').innerHTML += `<p>Referral ${referral} processed.</p>`;
        } else {
            document.getElementById('output').innerHTML += `<p>No referrals in the queue.</p>`;
        }
    }
}

const referralQueue = new ReferralsQueue();
referralQueue.addReferral(111);
referralQueue.addReferral(222);
referralQueue.processReferral();
