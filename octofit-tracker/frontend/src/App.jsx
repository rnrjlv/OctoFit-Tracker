import './App.css'

function App() {
  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-5">
              <p className="text-uppercase text-primary fw-semibold">OctoFit Tracker</p>
              <h1 className="display-5 fw-bold mb-3">Modern fitness tracking for teams</h1>
              <p className="lead text-muted mb-4">
                Log workouts, build teams, and stay motivated with a multi-tier app
                powered by React, Express, and MongoDB.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <a className="btn btn-primary btn-lg" href="http://localhost:8000/api/health">
                  Check API health
                </a>
                <span className="btn btn-outline-secondary btn-lg disabled">
                  Frontend on 5173
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
