import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <header className="max-w-5xl mx-auto p-6 md:p-12">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Tarik Dahmani</h1>
            <p className="mt-1 text-sm md:text-base text-gray-600">Senior Software Engineer — Data & Machine Learning</p>
            <p className="text-sm text-gray-500 mt-1">Tanger, Morocco • <a href="https://www.linkedin.com/in/tarik-dahmani-90b33660" className="underline">LinkedIn</a></p>
          </div>
          <div className="space-x-3">
            <a href="#contact" className="inline-block px-4 py-2 rounded-lg border border-gray-200">Contact</a>
            <a href="#work" className="inline-block px-4 py-2 rounded-lg bg-black text-white">See work</a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6 md:p-12">
        {/* About */}
        <section id="about" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">About</h2>
          <p className="text-gray-700 leading-relaxed">
            I’m a software engineer with 14+ years of professional experience, focused on data engineering, email systems and
            machine learning pipelines. I design scalable ETL processes, build models to predict user actions (clicks, opens), and
            create tools to manage very large email datasets (500M+ records). I mainly program in Python, PHP and JavaScript,
            and I regularly use pandas, XGBoost and MongoDB / MySQL in production environments.
          </p>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-medium">Languages</h3>
              <p className="text-sm text-gray-600 mt-1">Python, PHP, JavaScript, Shell</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-medium">Data & DB</h3>
              <p className="text-sm text-gray-600 mt-1">MySQL, MongoDB, Big Data ETL</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-medium">ML & Analytics</h3>
              <p className="text-sm text-gray-600 mt-1">pandas, XGBoost, imbalanced-learn, feature engineering</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-medium">Tools</h3>
              <p className="text-sm text-gray-600 mt-1">IMAP automation, regex, subprocess, Streamlit</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Experience (selected)</h2>
          <div className="space-y-6">
            <article className="p-5 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold">DataTeam — Senior Software Engineer</h3>
              <p className="text-sm text-gray-500">Working across data ingestion, cleaning, reporting and ML for email marketing platforms.</p>
              <ul className="mt-3 list-disc list-inside text-gray-700">
                <li>Designed and maintained ETL processes for a dataset exceeding 500M emails (imports, deletions, deduplication).</li>
                <li>Built ML pipelines to predict email clicks and engagement using XGBoost, SMOTEENN and cross-validation.</li>
                <li>Created reporting dashboards and automation tools for production monitoring and model evaluation.</li>
              </ul>
            </article>

            <article className="p-5 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold">Email Infrastructure & Tools</h3>
              <p className="text-sm text-gray-500">Development of scripts and services handling large-scale email operations.</p>
              <ul className="mt-3 list-disc list-inside text-gray-700">
                <li>Implemented IMAP-based inbox processors, URL/domain/IP extraction, and email body normalization functions.</li>
                <li>Optimized Python functions for performance and resilience on remote Linux servers.</li>
                <li>Integrated MySQL and MongoDB queries for fast lookups and analytics.</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Projects */}
        <section id="work" className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Selected Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold">Click Prediction — ML Pipeline</h4>
              <p className="text-sm text-gray-600 mt-1">End-to-end model for predicting email clicks using feature engineering and XGBoost.</p>
              <p className="text-gray-700 mt-2">Highlights: temporal & behavioral features, handling class imbalance (SMOTEENN, under/oversampling), model validation, feature importance visualizations and Streamlit UI for evaluation.</p>
            </div>

            <div className="p-5 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold">Email Data Platform</h4>
              <p className="text-sm text-gray-600 mt-1">Systems to import, store, and query hundreds of millions of emails for marketing workflows.</p>
              <p className="text-gray-700 mt-2">Highlights: scalable import scripts, domain/IP detection, shortlink checks, automated notifications and integration with downstream mailing apps.</p>
            </div>

            <div className="p-5 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold">Tooling & Automation</h4>
              <p className="text-sm text-gray-600 mt-1">Various libraries and scripts to automate daily operational tasks on remote Linux servers without GUI.</p>
            </div>

            <div className="p-5 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold">Data Visualizations & Reports</h4>
              <p className="text-sm text-gray-600 mt-1">Generation of reports and visualizations for model metrics, email counts and delivery analytics, often exposed via Streamlit apps.</p>
            </div>
          </div>
        </section>

        {/* Callouts */}
        <section id="callouts" className="mb-12 grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h5 className="font-semibold">14+ years experience</h5>
            <p className="text-sm text-gray-600 mt-1">Strong background in data systems and production ML.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h5 className="font-semibold">Languages</h5>
            <p className="text-sm text-gray-600 mt-1">English, Moroccan (Darija)</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h5 className="font-semibold">Open to</h5>
            <p className="text-sm text-gray-600 mt-1">Consulting, engineering roles, ML & data engineering projects.</p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-24 p-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-3">Contact</h2>
          <p className="text-gray-700">Interested in teaming up? Connect on LinkedIn or send a message through the contact form (placeholder).</p>
          <div className="mt-4">
            <a href="https://www.linkedin.com/in/tarik-dahmani-90b33660" className="inline-block px-4 py-2 rounded-lg bg-black text-white">Message on LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="max-w-5xl mx-auto p-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Tarik Dahmani — Built with a focus on data & ML.
      </footer>
    </div>
  );
}
