
let jobs = [
  {
    id: 1,
    company: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 – $175,000",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide and collaborate with top-tier design teams.",
    status: "none",
  },
  {
    id: 2,
    company: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 – $120,000",
    description:
      "Design and develop visually stunning websites for global brands using Webflow and modern web technologies. Bring creative visions to life.",
    status: "none",
  },
  {
    id: 3,
    company: "FinTech Nexus",
    position: "Senior Frontend Engineer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$150,000 – $200,000",
    description:
      "Lead frontend development for a cutting-edge trading platform serving institutional investors across 30+ countries. Drive architecture decisions.",
    status: "none",
  },
  {
    id: 4,
    company: "CloudBase Inc.",
    position: "DevOps Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$120,000 – $160,000",
    description:
      "Manage and scale cloud infrastructure on AWS. Implement robust CI/CD pipelines and improve system reliability for a high-traffic SaaS platform.",
    status: "none",
  },
  {
    id: 5,
    company: "DataSpark AI",
    position: "Machine Learning Engineer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$160,000 – $220,000",
    description:
      "Build and deploy ML models for real-time recommendation systems powering 50M+ daily active users. Work at the intersection of research and production.",
    status: "none",
  },
  {
    id: 6,
    company: "EduLearn Platform",
    position: "Full Stack Developer",
    location: "Chicago, IL",
    type: "Part-time",
    salary: "$95,000 – $135,000",
    description:
      "Develop and maintain e-learning platform features using React and Node.js, serving students and educators across 80 countries.",
    status: "none",
  },
  {
    id: 7,
    company: "HealthSync",
    position: "iOS Developer",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$110,000 – $150,000",
    description:
      "Create intuitive health-tracking iOS apps that help patients manage chronic conditions, track vitals, and communicate seamlessly with doctors.",
    status: "none",
  },
  {
    id: 8,
    company: "GreenGrid Energy",
    position: "Backend Engineer",
    location: "Seattle, WA",
    type: "Part-time",
    salary: "$105,000 – $165,000",
    description:
      "Build scalable backend systems for a renewable energy marketplace that connects buyers and sellers of green power across North America.",
    status: "none",
  },
];

let activeTab = "all";

const typeChipClass = {
  "Full-time": "text-[#64748B]",
  "Part-time": "text-[#64748B]",
  Remote: "text-[#64748B]",
  Contract: "text-[#64748B]",
};

const statusBadge = {
  none: {
    cls: "bg-[#EEF4FF] text-[#002C5C] px-[8px] py-[12px] font-medium",
    label: "NOT APPLIED",
  },
  interview: {
    cls: "bg-emerald-50 text-[#10B981] border border-emerald-200",
    label: "INTERVIEW",
  },
  rejected: {
    cls: "bg-rose-50 text-red-400 border border-rose-200",
    label: "REJECTED",
  },
};


const countTotal = document.getElementById("count-total");
const countInterview = document.getElementById("count-interview");
const countRejected = document.getElementById("count-rejected");
const jobsBadge = document.getElementById("jobs-badge");
const cardsList = document.getElementById("cards-list");

function getCounts() {
  return {
    total: jobs.length,
    interview: jobs.filter((j) => j.status === "interview").length,
    rejected: jobs.filter((j) => j.status === "rejected").length,
  };
}

function getDisplayJobs() {
  if (activeTab === "interview")
    return jobs.filter((j) => j.status === "interview");
  if (activeTab === "rejected")
    return jobs.filter((j) => j.status === "rejected");
  return jobs;
}

function updateTabs() {
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    const active = btn.dataset.tab === activeTab;
    btn.classList.toggle("bg-[#3B82F6]", active);
    btn.classList.toggle("text-white", active);
    btn.classList.toggle("text-gray-500", !active);
  });
}


function render() {
  const counts = getCounts();
  const displayed = getDisplayJobs();
  countTotal.textContent = counts.total;
  countInterview.textContent = counts.interview;
  countRejected.textContent = counts.rejected;
  jobsBadge.textContent =
    activeTab === "all"
      ? `${counts.total} jobs`
      : `${counts[activeTab]} of ${counts.total} jobs`;

  updateTabs();
  cardsList.innerHTML = "";

  if (displayed.length === 0 && activeTab !== "all") {
    const isInterview = activeTab === "interview";
    cardsList.innerHTML = `
      <div class="bg-white rounded-xl shadow-card py-20 px-6 text-center">
        <div class="text-4xl mb-4">${isInterview ? "📋" : "📋"}</div>
        <p class="text-lg font-bold text-gray-800">
          No ${isInterview ? "Jobs" : "Jobs"} Available
        </p>
        <p class="text-sm text-gray-400 mt-2">
          ${
            isInterview
              ? "Check back soon for new job opportunities."
              : "Check back soon for new job opportunities."
          }
        </p>
      </div>`;
    return;
  }

  displayed.forEach((job) => {
    const badge = statusBadge[job.status];
    const chip = typeChipClass[job.type];

    const card = document.createElement("div");
    card.className =
      "bg-white rounded-xl px-6 py-5 shadow-card animate-fadeUp " +
      "transition hover:-translate-y-0.5 hover:shadow-card-hover";

    card.innerHTML = `
      <div class="flex justify-between gap-3 mb-2">
        <div>
          <p class="font-semibold text-[18px] text-[#002C5C]">${job.company}</p>
          <p class="text-sm text-gray-500">${job.position}</p>
        </div>
        <button data-delete="${job.id}"
  class="w-8 h-8 flex items-center justify-center rounded-lg
         border border-gray-200 text-gray-400"
  title="Delete job">

  <svg xmlns="http://www.w3.org/2000/svg"
       width="16" height="16"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       stroke-width="2"
       stroke-linecap="round"
       stroke-linejoin="round">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6l-1 14H6L5 6"></path>
    <path d="M10 11v6"></path>
    <path d="M14 11v6"></path>
    <path d="M9 6V4h6v2"></path>
  </svg>

</button>
      </div>

      <div class="flex flex-wrap gap-2 text-xs mb-3">
        <span class="text-gray-500">${job.location}</span>
        <span class="px-2 py-0.5 rounded-full font-bold ${chip}">
          ${job.type}
        </span>
        <span class="font-semibold text-gray-600">${job.salary}</span>
      </div>

      <div class="inline-flex items-center px-2.5 py-1 rounded-md
            text-[10.5px] font-bold tracking-wider mb-3 ${badge.cls}">
  ${badge.label}
</div>

      <p class="text-sm text-gray-500 mb-4">${job.description}</p>

      <div class="flex gap-2 flex-wrap">
        <button data-action="interview" data-id="${job.id}"
          class="px-4 py-2 text-xs font-bold tracking-wider rounded-lg border
          ${
            job.status === "interview"
              ? "bg-white text-[#10B981] border-[#10B981]"
              : "border-[#10B981] text-[#10B981] hover:bg-white hover:text-[#10B981]"
          }">
          INTERVIEW
        </button>

        <button data-action="rejected" data-id="${job.id}"
          class="px-4 py-2 text-xs font-bold tracking-wider rounded-lg border
          ${
            job.status === "rejected"
              ? "bg-white text-[#EF4444] border-[#EF4444]"
              : "border-[#EF4444] text-[#EF4444] hover:text-[#EF4444]"
          }">
          REJECTED
        </button>
      </div>
    `;

    cardsList.appendChild(card);
  });
}

function setStatus(id, newStatus) {
  jobs = jobs.map((j) =>
    j.id === id
      ? { ...j, status: j.status === newStatus ? "none" : newStatus }
      : j
  );
  render();
}

function deleteJob(id) {
  jobs = jobs.filter((j) => j.id !== id);
  render();
}

document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    activeTab = btn.dataset.tab;
    render();
  });
});

cardsList.addEventListener("click", (e) => {
  const delBtn = e.target.closest("[data-delete]");
  if (delBtn) return deleteJob(Number(delBtn.dataset.delete));

  const actBtn = e.target.closest("[data-action]");
  if (actBtn) setStatus(Number(actBtn.dataset.id), actBtn.dataset.action);
});

render();