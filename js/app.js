// State variables
let doneState = {};
let currentWeekIndex = 0;
let searchQuery = "";

// Initialize application
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  loadProgress();
  renderTabs();
  renderCurrentWeek();
  updateDashboard();
});

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem("dsa_tracker_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeUI(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("dsa_tracker_theme", newTheme);
  updateThemeUI(newTheme);
}

function updateThemeUI(theme) {
  const sunIcon = document.querySelector(".sun-icon");
  const moonIcon = document.querySelector(".moon-icon");
  if (theme === "dark") {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
  } else {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
  }
}

// Progress and Local Storage
function loadProgress() {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved) {
      doneState = JSON.parse(saved);
    }
  } catch (e) {
    console.error("Error loading progress:", e);
  }
}

function saveProgress() {
  try {
    localStorage.setItem(KEY, JSON.stringify(doneState));
  } catch (e) {
    console.error("Error saving progress:", e);
  }
}

// Render tabs
function renderTabs() {
  const tabsContainer = document.getElementById("weekTabs");
  let html = "";
  WEEKS.forEach((week, index) => {
    const icon = getWeekIcon(index);
    html += `
      <button class="filter-tab ${index === currentWeekIndex ? 'active' : ''}" onclick="switchWeek(${index})" id="tab-wk-${index}">
        ${icon} Week ${index + 1}
      </button>
    `;
  });
  tabsContainer.innerHTML = html;
}

function getWeekIcon(index) {
  switch(index) {
    case 0: return "📦";
    case 1: return "🔍";
    case 2: return "🔁";
    case 3: return "🏆";
    default: return "📚";
  }
}

// Switch week tab
function switchWeek(index) {
  if (searchQuery.trim() !== "") {
    // Clear search first
    document.getElementById("searchBar").value = "";
    searchQuery = "";
  }
  currentWeekIndex = index;
  
  // Update active tab styling
  document.querySelectorAll(".filter-tab").forEach((btn, i) => {
    btn.classList.toggle("active", i === index);
  });
  
  renderCurrentWeek();
  document.getElementById("statActiveWeek").textContent = `Week ${index + 1}`;
}

// Render dynamic weeks and lists
function renderCurrentWeek() {
  const container = document.getElementById("weeksContainer");
  container.innerHTML = ""; // Clear
  
  if (searchQuery.trim() !== "") {
    renderSearchResults(container);
    return;
  }

  const week = WEEKS[currentWeekIndex];
  
  const weekSection = document.createElement("div");
  weekSection.className = "week-section active";
  
  let html = `
    <div class="week-info">
      <h2>${week.title}</h2>
      <p>${week.desc}</p>
    </div>
  `;
  
  week.patterns.forEach(pattern => {
    html += generatePatternCardHTML(pattern);
  });
  
  weekSection.innerHTML = html;
  container.appendChild(weekSection);
  
  // Apply visual progress to individual pattern cards
  week.patterns.forEach(pattern => {
    updatePatternProgressUI(pattern.id);
  });
}

// Search Functionality
function handleSearch() {
  const searchInput = document.getElementById("searchBar");
  searchQuery = searchInput.value.toLowerCase().trim();
  
  const container = document.getElementById("weeksContainer");
  renderCurrentWeek();
}

function renderSearchResults(container) {
  let resultsFound = false;
  
  const searchSection = document.createElement("div");
  searchSection.className = "week-section active";
  searchSection.innerHTML = `
    <div class="week-info">
      <h2>Search Results</h2>
      <p>Showing search matches for "${escapeHTML(searchQuery)}"</p>
    </div>
  `;
  
  WEEKS.forEach(week => {
    week.patterns.forEach(pattern => {
      // Check if pattern name matches, or any problems match
      const patternMatch = pattern.name.toLowerCase().includes(searchQuery);
      const matchingProblems = pattern.problems.filter(prob => 
        prob.name.toLowerCase().includes(searchQuery) ||
        prob.diff.toLowerCase().includes(searchQuery)
      );
      
      if (patternMatch || matchingProblems.length > 0) {
        resultsFound = true;
        
        // If pattern matches but no specific problems matched, show all problems in that pattern.
        // Otherwise, filter just the matching problems.
        const problemsToShow = patternMatch ? pattern.problems : matchingProblems;
        
        const filteredPattern = {
          ...pattern,
          problems: problemsToShow
        };
        
        searchSection.innerHTML += generatePatternCardHTML(filteredPattern, true);
      }
    });
  });
  
  if (!resultsFound) {
    searchSection.innerHTML += `
      <div style="text-align: center; padding: 40px; color: var(--text-muted);">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 12px; color: var(--text-muted);">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <p style="font-size: 16px; font-weight: 500;">No matching patterns or problems found</p>
        <p style="font-size: 13px; margin-top: 4px;">Try searching for "Sliding Window", "Binary Search", or a specific problem name.</p>
      </div>
    `;
  }
  
  container.appendChild(searchSection);
  
  // Update progress bars for visible matching patterns
  WEEKS.forEach(week => {
    week.patterns.forEach(pattern => {
      if (document.getElementById(`mb-${pattern.id}`)) {
        updatePatternProgressUI(pattern.id);
      }
    });
  });
}

// HTML Generator Helpers
function generatePatternCardHTML(pattern, forceOpen = false) {
  const totalProblems = pattern.problems.length;
  
  let problemsHTML = "";
  pattern.problems.forEach(prob => {
    const isDone = !!doneState[prob.id];
    const codeContent = PY[prob.id] || "class Solution:\n    # Solution coming soon";
    
    problemsHTML += `
      <div class="problem-row-container" id="container-${prob.id}">
        <div class="problem-row">
          <div class="custom-checkbox ${isDone ? 'done' : ''}" id="ck-${prob.id}" onclick="toggleProblem('${prob.id}', '${pattern.id}', event)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <span class="problem-name ${isDone ? 'done' : ''}" id="nm-${prob.id}" onclick="toggleDrawer('dr-${prob.id}', event)">
            ${escapeHTML(prob.name)}
          </span>
          <span class="diff-badge ${prob.diff}">${prob.diff}</span>
          <div class="action-buttons">
            <a class="action-btn" href="${prob.lc}" target="_blank" rel="noopener noreferrer">
              LeetCode 
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>
            <a class="action-btn yt-btn" href="${prob.yt}" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              Walkthrough
            </a>
          </div>
        </div>
        
        <div class="solution-drawer" id="dr-${prob.id}">
          <div class="solution-header">
            <span class="solution-title">Python3 Solution</span>
            <button class="copy-btn" id="btn-copy-${prob.id}" onclick="copySolution('${prob.id}')">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              <span>Copy Code</span>
            </button>
          </div>
          <pre class="solution-pre"><code class="language-python">${escapeHTML(codeContent)}</code></pre>
        </div>
      </div>
    `;
  });

  return `
    <div class="pattern-card" id="card-${pattern.id}">
      <div class="pattern-header" onclick="togglePatternExpand('pl-${pattern.id}', 'cv-${pattern.id}')">
        <span class="badge ${pattern.badge}">${pattern.badgeTxt}</span>
        <span class="pattern-title">${pattern.name}</span>
        <div class="pattern-progress-bar">
          <div class="pattern-progress-fill" id="mb-${pattern.id}"></div>
        </div>
        <span class="pattern-count" id="pp-${pattern.id}">0 / ${totalProblems}</span>
        <span class="chev-icon ${forceOpen ? 'open' : ''}" id="cv-${pattern.id}">&#9662;</span>
      </div>
      <div class="problem-list" id="pl-${pattern.id}" style="${forceOpen ? 'display: block;' : ''}">
        ${problemsHTML}
      </div>
    </div>
  `;
}

// UI Interaction Handlers
function togglePatternExpand(listId, chevId) {
  const el = document.getElementById(listId);
  const chev = document.getElementById(chevId);
  const isOpen = el.style.display === "block";
  
  el.style.display = isOpen ? "none" : "block";
  chev.classList.toggle("open", !isOpen);
}

function toggleDrawer(drawerId, event) {
  if (event) event.stopPropagation();
  const drawer = document.getElementById(drawerId);
  drawer.classList.toggle("open");
}

function toggleProblem(probId, patternId, event) {
  if (event) event.stopPropagation();
  
  // Toggle state
  doneState[probId] = !doneState[probId];
  saveProgress();
  
  // Toggle visual elements
  const checkbox = document.getElementById(`ck-${probId}`);
  const nameLabel = document.getElementById(`nm-${probId}`);
  
  if (doneState[probId]) {
    checkbox.classList.add("done");
    nameLabel.classList.add("done");
  } else {
    checkbox.classList.remove("done");
    nameLabel.classList.remove("done");
  }
  
  // Refresh UI metrics
  updatePatternProgressUI(patternId);
  updateDashboard();
}

function updatePatternProgressUI(patternId) {
  // Find pattern in data
  let pattern = null;
  for (let week of WEEKS) {
    const found = week.patterns.find(p => p.id === patternId);
    if (found) {
      pattern = found;
      break;
    }
  }
  
  if (!pattern) return;
  
  const total = pattern.problems.length;
  const solved = pattern.problems.filter(q => doneState[q.id]).length;
  const pct = Math.round((solved / total) * 100);
  
  const progressBar = document.getElementById(`mb-${patternId}`);
  const countLabel = document.getElementById(`pp-${patternId}`);
  
  if (progressBar) progressBar.style.width = `${pct}%`;
  if (countLabel) countLabel.textContent = `${solved} / ${total}`;
}

function updateDashboard() {
  let totalSolved = 0;
  let totalProblems = 0;
  
  let easySolved = 0;
  let easyTotal = 0;
  let mediumSolved = 0;
  let mediumTotal = 0;
  let hardSolved = 0;
  let hardTotal = 0;
  
  WEEKS.forEach(week => {
    week.patterns.forEach(pattern => {
      pattern.problems.forEach(prob => {
        totalProblems++;
        const isSolved = !!doneState[prob.id];
        if (isSolved) totalSolved++;
        
        if (prob.diff === "easy") {
          easyTotal++;
          if (isSolved) easySolved++;
        } else if (prob.diff === "medium") {
          mediumTotal++;
          if (isSolved) mediumSolved++;
        } else if (prob.diff === "hard") {
          hardTotal++;
          if (isSolved) hardSolved++;
        }
      });
    });
  });
  
  const totalPct = totalProblems > 0 ? Math.round((totalSolved / totalProblems) * 100) : 0;
  
  // Update stats counters
  document.getElementById("statSolved").textContent = totalSolved;
  document.getElementById("statRemaining").textContent = totalProblems - totalSolved;
  document.getElementById("dashboardPct").textContent = `${totalPct}%`;
  
  // Update circular progress ring
  const circle = document.getElementById("dashboardProgressRing");
  const circumference = 2 * Math.PI * 65; // ~408.4
  const offset = circumference - (totalPct / 100) * circumference;
  circle.style.strokeDashoffset = offset;
  
  // Update difficulty bars and labels
  document.getElementById("lblEasyCount").textContent = `${easySolved} / ${easyTotal}`;
  document.getElementById("lblMediumCount").textContent = `${mediumSolved} / ${mediumTotal}`;
  document.getElementById("lblHardCount").textContent = `${hardSolved} / ${hardTotal}`;
  
  const easyPct = easyTotal > 0 ? (easySolved / totalProblems) * 100 : 0;
  const mediumPct = mediumTotal > 0 ? (mediumSolved / totalProblems) * 100 : 0;
  const hardPct = hardTotal > 0 ? (hardSolved / totalProblems) * 100 : 0;
  
  document.getElementById("barEasy").style.width = `${easyPct}%`;
  document.getElementById("barMedium").style.width = `${mediumPct}%`;
  document.getElementById("barHard").style.width = `${hardPct}%`;
}

// Copy to Clipboard
function copySolution(probId) {
  const code = PY[probId] || "";
  navigator.clipboard.writeText(code).then(() => {
    const copyBtn = document.getElementById(`btn-copy-${probId}`);
    const origHTML = copyBtn.innerHTML;
    
    copyBtn.innerHTML = `
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--success);"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span style="color: var(--success);">Copied!</span>
    `;
    setTimeout(() => {
      copyBtn.innerHTML = origHTML;
    }, 1500);
  }).catch(err => {
    console.error("Could not copy text: ", err);
  });
}

// Reset Progress
function resetAllProgress() {
  if (confirm("Are you sure you want to reset all tracking progress? This cannot be undone.")) {
    doneState = {};
    saveProgress();
    switchWeek(0); // reset to week 1
    updateDashboard();
  }
}

// Escape HTML utility
function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
