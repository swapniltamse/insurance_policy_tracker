// Main application JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    let currentPolicy = 'policy1';
    let currentStage = 3; // Default to stage 3 (Medical Review)
    
    // Load initial policy data
    loadPolicyData(currentPolicy);
    
    // Update the tracker based on the current stage
    updateTracker(currentStage);
    
    // Set up event listeners for demo controls
    document.getElementById('update-stage-btn').addEventListener('click', function() {
        const selectedStage = parseInt(document.getElementById('stage-select').value);
        updateTracker(selectedStage);
    });
    
    document.getElementById('load-policy-btn').addEventListener('click', function() {
        const selectedPolicy = document.getElementById('policy-select').value;
        loadPolicyData(selectedPolicy);
    });
    
    // Set up event listeners for action checkboxes
    setupActionCheckboxes();
});

// Function to load policy data
function loadPolicyData(policyId) {
    const policy = policyData[policyId];
    
    // Update policy information
    document.getElementById('policy-number').textContent = policy.policyNumber;
    document.getElementById('insured-name').textContent = policy.insuredName;
    document.getElementById('policy-type').textContent = policy.policyType;
    document.getElementById('coverage-amount').textContent = policy.coverageAmount;
    
    // Update advisor information
    document.getElementById('advisor-name').textContent = policy.advisorName;
    document.getElementById('advisor-email').textContent = policy.advisorEmail;
    document.getElementById('advisor-phone').textContent = policy.advisorPhone;
    
    // Update dates
    document.getElementById('stage-start-date').textContent = policy.stageStartDate;
    document.getElementById('estimated-completion-date').textContent = policy.estimatedCompletionDate;
    document.getElementById('stage-last-updated').textContent = policy.lastUpdated;
    document.getElementById('last-updated-date').textContent = policy.lastUpdated;
    
    // Update actions
    updateActions(policy.actions);
    
    // Update tracker
    updateTracker(policy.currentStage);
    
    // Update stage selector to match current policy stage
    document.getElementById('stage-select').value = policy.currentStage;
}

// Function to update the tracker based on the current stage
function updateTracker(stage) {
    currentStage = stage;
    
    // Update all steps
    for (let i = 1; i <= 7; i++) {
        const stepElement = document.getElementById(`step-${i}`);
        
        if (i < stage) {
            // Completed stages
            stepElement.className = 'step completed';
            stepElement.querySelector('.step-icon').innerHTML = '<i class="fas fa-check"></i>';
        } else if (i === stage) {
            // Current stage
            stepElement.className = 'step active';
            stepElement.querySelector('.step-icon').innerHTML = `<i class="${stageInfo[i].icon}"></i>`;
        } else {
            // Future stages
            stepElement.className = 'step';
            stepElement.querySelector('.step-icon').innerHTML = `<i class="${stageInfo[i].icon}"></i>`;
        }
    }
    
    // Update progress bar width
    // Calculate progress as percentage: (completed stages / total stages) * 100
    const progressPercentage = ((stage - 1) / 6) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercentage}%`;
    
    // Update current stage information
    document.getElementById('current-stage-title').textContent = stageInfo[stage].title;
    document.getElementById('stage-description').textContent = stageInfo[stage].description;
    
    // Enable/disable action checkboxes based on stage
    updateActionCheckboxesBasedOnStage(stage);
}

// Function to update the action list
function updateActions(actions) {
    const actionList = document.getElementById('action-list');
    actionList.innerHTML = '';
    
    actions.forEach(action => {
        const li = document.createElement('li');
        li.className = 'action-item';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'action-checkbox';
        checkbox.id = `action-${action.id}`;
        checkbox.checked = action.completed;
        checkbox.disabled = action.completed || action.pending;
        
        const label = document.createElement('label');
        label.htmlFor = `action-${action.id}`;
        label.className = 'action-text';
        label.textContent = action.text;
        if (action.pending && !action.completed) {
            label.textContent += ' (pending)';
        }
        
        li.appendChild(checkbox);
        li.appendChild(label);
        actionList.appendChild(li);
    });
}

// Function to set up event listeners for action checkboxes
function setupActionCheckboxes() {
    document.getElementById('action-list').addEventListener('change', function(e) {
        if (e.target.classList.contains('action-checkbox')) {
            const actionId = e.target.id.split('-')[1];
            const isChecked = e.target.checked;
            
            // In a real application, this would update the backend
            console.log(`Action ${actionId} ${isChecked ? 'completed' : 'uncompleted'}`);
            
            // If this was a real application, we would update the policy data here
            // For demo purposes, we'll just disable the checkbox
            e.target.disabled = isChecked;
        }
    });
}

// Function to update action checkboxes based on current stage
function updateActionCheckboxesBasedOnStage(stage) {
    const actionCheckboxes = document.querySelectorAll('.action-checkbox');
    
    // Enable/disable checkboxes based on stage
    // This is a simplified logic - in a real application, this would be more complex
    actionCheckboxes.forEach((checkbox, index) => {
        // For demo purposes, we'll enable checkboxes for actions that should be available at the current stage
        if (index < stage && !checkbox.checked) {
            checkbox.disabled = false;
        } else if (index >= stage) {
            checkbox.disabled = true;
        }
    });
}
