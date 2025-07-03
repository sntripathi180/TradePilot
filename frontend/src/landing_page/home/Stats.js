import React from "react";

function Stats() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-6">
          <h1 className="mb-5">Trust with confidence</h1>
          <h4 className="mb-2 fs-4">Customer-first always</h4>
          <p className="mb-5">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>

          <h4 className="mb-2 fs-4">No spam or gimmicks</h4>
          <p className="mb-5" text-muted>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>

          <h4 className="mb-2 fs-4">The Zerodha universe</h4>
          <p className="mb-5">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h4 className="mb-2 fs-4">Do better with money</h4>
          <p className="mb-5">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6">
          <img src="images/ecosystem.png" style={{ width: "100%" }} />
          <div className="text-center">
            <a href="" className="mx-5" style={{textDecoration:"none"}}>Explore our products<i class="ri-arrow-right-long-line"></i></a>
            <a href=""  style={{textDecoration:"none"}}>Try Kite demo<i class="ri-arrow-right-long-line"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
