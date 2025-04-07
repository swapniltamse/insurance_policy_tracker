// Enhanced interactive features for the insurance policy tracker
document.addEventListener('DOMContentLoaded', function() {
    // Add animation effects to the tracker
    addTrackerAnimations();
    
    // Add tooltip functionality
    addTooltips();
    
    // Add notification system
    setupNotificationSystem();
    
    // Add policy search functionality
    setupPolicySearch();
    
    // Add stage transition animation
    setupStageTransitionAnimation();
    
    // Add responsive menu for mobile
    setupResponsiveMenu();
});

// Function to add animations to the tracker
function addTrackerAnimations() {
    // Add hover effects to steps
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => {
        step.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active') && !this.classList.contains('completed')) {
                this.querySelector('.step-icon').style.transform = 'scale(1.1)';
                this.querySelector('.step-icon').style.boxShadow = '0 0 10px rgba(26, 95, 122, 0.3)';
            }
        });
        
        step.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active') && !this.classList.contains('completed')) {
                this.querySelector('.step-icon').style.transform = '';
                this.querySelector('.step-icon').style.boxShadow = '';
            }
        });
        
        // Add click event to show stage details
        step.addEventListener('click', function() {
            const stageNumber = parseInt(this.id.split('-')[1]);
            showStageDetails(stageNumber);
        });
    });
}

// Function to show stage details when a step is clicked
function showStageDetails(stageNumber) {
    // Create a modal with stage details
    const modal = document.createElement('div');
    modal.className = 'stage-modal';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'stage-modal-content';
    
    const closeBtn = document.createElement('span');
    closeBtn.className = 'close-btn';
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', function() {
        document.body.removeChild(modal);
    });
    
    const title = document.createElement('h3');
    title.textContent = stageInfo[stageNumber].title;
    
    const description = document.createElement('p');
    description.textContent = stageInfo[stageNumber].description;
    
    const estimatedTime = document.createElement('p');
    estimatedTime.className = 'estimated-time';
    
    // Set estimated time based on stage
    switch(stageNumber) {
        case 1:
            estimatedTime.textContent = 'Estimated time: 1-2 days';
            break;
        case 2:
            estimatedTime.textContent = 'Estimated time: 3-5 days';
            break;
        case 3:
            estimatedTime.textContent = 'Estimated time: 3-5 days';
            break;
        case 4:
            estimatedTime.textContent = 'Estimated time: 1-2 days';
            break;
        case 5:
            estimatedTime.textContent = 'Estimated time: 2-3 days';
            break;
        case 6:
            estimatedTime.textContent = 'Estimated time: 1-2 days';
            break;
        case 7:
            estimatedTime.textContent = 'Policy is active';
            break;
    }
    
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(title);
    modalContent.appendChild(description);
    modalContent.appendChild(estimatedTime);
    
    // Add typical actions for this stage
    const actionsTitle = document.createElement('h4');
    actionsTitle.textContent = 'Typical Actions at This Stage:';
    modalContent.appendChild(actionsTitle);
    
    const actionsList = document.createElement('ul');
    actionsList.className = 'stage-actions-list';
    
    // Add stage-specific actions
    const stageActions = getStageActions(stageNumber);
    stageActions.forEach(action => {
        const actionItem = document.createElement('li');
        actionItem.textContent = action;
        actionsList.appendChild(actionItem);
    });
    
    modalContent.appendChild(actionsList);
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Add animation to modal
    setTimeout(() => {
        modalContent.style.transform = 'translateY(0)';
        modalContent.style.opacity = '1';
    }, 10);
}

// Function to get stage-specific actions
function getStageActions(stageNumber) {
    switch(stageNumber) {
        case 1:
            return [
                'Application form is reviewed for completeness',
                'Initial contact with client to confirm details',
                'Application is prepared for underwriting'
            ];
        case 2:
            return [
                'Risk assessment begins',
                'Financial information verification',
                'Background checks are performed',
                'Medical exam may be scheduled'
            ];
        case 3:
            return [
                'Medical exam results are analyzed',
                'Health history is reviewed',
                'Additional medical records may be requested',
                'Medical underwriting decision is prepared'
            ];
        case 4:
            return [
                'Final risk assessment is completed',
                'Premium rate is determined',
                'Policy terms are finalized',
                'Decision is communicated to client'
            ];
        case 5:
            return [
                'Policy documents are generated',
                'Policy contract is prepared',
                'Documents are sent to client for review',
                'Payment schedule is established'
            ];
        case 6:
            return [
                'Policy documents are delivered to client',
                'Client reviews and signs documents',
                'Signed documents are returned',
                'First premium payment is processed'
            ];
        case 7:
            return [
                'Policy is activated in the system',
                'Coverage begins according to policy terms',
                'Welcome package is sent to client',
                'Regular premium payment schedule begins'
            ];
    }
}

// Function to add tooltips to elements
function addTooltips() {
    // Add tooltips to steps
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = 'Click for details';
        step.appendChild(tooltip);
        
        step.addEventListener('mouseenter', function() {
            tooltip.style.opacity = '1';
            tooltip.style.visibility = 'visible';
        });
        
        step.addEventListener('mouseleave', function() {
            tooltip.style.opacity = '0';
            tooltip.style.visibility = 'hidden';
        });
    });
    
    // Add tooltips to action items
    const actionItems = document.querySelectorAll('.action-item');
    actionItems.forEach(item => {
        const checkbox = item.querySelector('.action-checkbox');
        const label = item.querySelector('.action-text');
        
        if (checkbox.disabled && checkbox.checked) {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip action-tooltip';
            tooltip.textContent = 'Completed on ' + getRandomPastDate();
            item.appendChild(tooltip);
            
            item.addEventListener('mouseenter', function() {
                tooltip.style.opacity = '1';
                tooltip.style.visibility = 'visible';
            });
            
            item.addEventListener('mouseleave', function() {
                tooltip.style.opacity = '0';
                tooltip.style.visibility = 'hidden';
            });
        } else if (checkbox.disabled && !checkbox.checked) {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip action-tooltip';
            tooltip.textContent = 'Waiting for previous steps to complete';
            item.appendChild(tooltip);
            
            item.addEventListener('mouseenter', function() {
                tooltip.style.opacity = '1';
                tooltip.style.visibility = 'visible';
            });
            
            item.addEventListener('mouseleave', function() {
                tooltip.style.opacity = '0';
                tooltip.style.visibility = 'hidden';
            });
        }
    });
}

// Function to get a random past date (for demo purposes)
function getRandomPastDate() {
    const today = new Date();
    const pastDays = Math.floor(Math.random() * 10) + 1;
    const pastDate = new Date(today);
    pastDate.setDate(today.getDate() - pastDays);
    
    return pastDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// Function to set up notification system
function setupNotificationSystem() {
    // Create notification container
    const notificationContainer = document.createElement('div');
    notificationContainer.className = 'notification-container';
    document.body.appendChild(notificationContainer);
    
    // Add notification button to header
    const header = document.querySelector('.header');
    const notificationBtn = document.createElement('div');
    notificationBtn.className = 'notification-btn';
    notificationBtn.innerHTML = '<i class="fas fa-bell"></i>';
    notificationBtn.innerHTML += '<span class="notification-badge">2</span>';
    header.appendChild(notificationBtn);
    
    // Add click event to notification button
    notificationBtn.addEventListener('click', function() {
        showNotifications();
    });
    
    // Add demo notification button to demo controls
    const demoControls = document.querySelector('.demo-controls');
    const notificationDemo = document.createElement('div');
    notificationDemo.className = 'notification-demo';
    notificationDemo.innerHTML = '<button id="show-notification-btn" class="btn">Show Sample Notification</button>';
    demoControls.appendChild(notificationDemo);
    
    // Add click event to demo notification button
    document.getElementById('show-notification-btn').addEventListener('click', function() {
        showNotification('Policy Update', 'Medical review has been completed for John Smith\'s policy. Moving to Final Decision stage.', 'info');
    });
}

// Function to show notifications panel
function showNotifications() {
    // Create notifications panel
    const notificationsPanel = document.createElement('div');
    notificationsPanel.className = 'notifications-panel';
    
    const panelHeader = document.createElement('div');
    panelHeader.className = 'panel-header';
    panelHeader.innerHTML = '<h3>Notifications</h3><span class="close-btn">&times;</span>';
    
    const notificationsList = document.createElement('div');
    notificationsList.className = 'notifications-list';
    
    // Add sample notifications
    const notification1 = document.createElement('div');
    notification1.className = 'notification-item unread';
    notification1.innerHTML = `
        <div class="notification-icon"><i class="fas fa-file-medical"></i></div>
        <div class="notification-content">
            <div class="notification-title">Medical Exam Results Received</div>
            <div class="notification-message">Medical exam results for John Smith have been received and are being reviewed.</div>
            <div class="notification-time">Today, 10:23 AM</div>
        </div>
    `;
    
    const notification2 = document.createElement('div');
    notification2.className = 'notification-item unread';
    notification2.innerHTML = `
        <div class="notification-icon"><i class="fas fa-clock"></i></div>
        <div class="notification-content">
            <div class="notification-title">Policy Update Reminder</div>
            <div class="notification-message">Final decision for Jane Doe's policy is due in 2 days.</div>
            <div class="notification-time">Yesterday, 3:45 PM</div>
        </div>
    `;
    
    const notification3 = document.createElement('div');
    notification3.className = 'notification-item';
    notification3.innerHTML = `
        <div class="notification-icon"><i class="fas fa-check-circle"></i></div>
        <div class="notification-content">
            <div class="notification-title">Policy Issued</div>
            <div class="notification-message">Robert Johnson's policy has been issued and documents are ready for delivery.</div>
            <div class="notification-time">Apr 5, 2025</div>
        </div>
    `;
    
    notificationsList.appendChild(notification1);
    notificationsList.appendChild(notification2);
    notificationsList.appendChild(notification3);
    
    notificationsPanel.appendChild(panelHeader);
    notificationsPanel.appendChild(notificationsList);
    
    document.body.appendChild(notificationsPanel);
    
    // Add close event to close button
    panelHeader.querySelector('.close-btn').addEventListener('click', function() {
        document.body.removeChild(notificationsPanel);
    });
    
    // Add animation to panel
    setTimeout(() => {
        notificationsPanel.style.transform = 'translateX(0)';
    }, 10);
    
    // Add click event to notification items
    const notificationItems = document.querySelectorAll('.notification-item');
    notificationItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.remove('unread');
            // In a real app, this would mark the notification as read in the database
        });
    });
}

// Function to show a notification
function showNotification(title, message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    let icon = '';
    switch(type) {
        case 'info':
            icon = '<i class="fas fa-info-circle"></i>';
            break;
        case 'success':
            icon = '<i class="fas fa-check-circle"></i>';
            break;
        case 'warning':
            icon = '<i class="fas fa-exclamation-triangle"></i>';
            break;
        case 'error':
            icon = '<i class="fas fa-times-circle"></i>';
            break;
    }
    
    notification.innerHTML = `
        <div class="notification-icon">${icon}</div>
        <div class="notification-content">
            <div class="notification-title">${title}</div>
            <div class="notification-message">${message}</div>
        </div>
        <div class="notification-close">&times;</div>
    `;
    
    document.querySelector('.notification-container').appendChild(notification);
    
    // Add close event to notification
    notification.querySelector('.notification-close').addEventListener('click', function() {
        notification.classList.add('fade-out');
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Auto remove notification after 5 seconds
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
    
    // Add animation to notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
}

// Function to set up policy search functionality
function setupPolicySearch() {
    // Create search container
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
        <div class="search-input-container">
            <input type="text" id="policy-search" placeholder="Search policy by number or name...">
            <button id="search-btn"><i class="fas fa-search"></i></button>
        </div>
        <div class="search-results" id="search-results"></div>
    `;
    
    // Insert search container after header
    const header = document.querySelector('.header');
    header.parentNode.insertBefore(searchContainer, header.nextSibling);
    
    // Add event listener to search button
    document.getElementById('search-btn').addEventListener('click', function() {
        performSearch();
    });
    
    // Add event listener to search input for enter key
    document.getElementById('policy-search').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Add event listener to search input for suggestions
    document.getElementById('policy-search').addEventListener('input', function() {
        showSearchSuggestions();
    });
}

// Function to perform search
function performSearch() {
    const searchTerm = document.getElementById('policy-search').value.trim().toLowerCase();
    const searchResults = document.getElementById('search-results');
    
    if (searchTerm === '') {
        searchResults.innerHTML = '';
        searchResults.style.display = 'none';
        return;
    }
    
    // In a real app, this would search the database
    // For demo purposes, we'll search our sample data
    const results = [];
    
    for (const policyId in policyData) {
        const policy = policyData[policyId];
        if (policy.policyNumber.toLowerCase().includes(searchTerm) || 
            policy.insuredName.toLowerCase().includes(searchTerm)) {
            results.push({
                id: policyId,
                policyNumber: policy.policyNumber,
                insuredName: policy.insuredName,
                policyType: policy.policyType
            });
        }
    }
    
    // Display results
    searchResults.innerHTML = '';
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="no-results">No policies found matching your search.</div>';
    } else {
        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            resultItem.innerHTML = `
                <div class="result-policy-number">${result.policyNumber}</div>
                <div class="result-insured-name">${result.insuredName}</div>
                <div class="result-policy-type">${result.policyType}</div>
            `;
            
            resultItem.addEventListener('click', function() {
                loadPolicyData(result.id);
                searchResults.innerHTML = '';
                searchResults.style.display = 'none';
                document.getElementById('policy-search').value = '';
                
                // Show notification
                showNotification('Policy Loaded', `${result.insuredName}'s policy has been loaded.`, 'success');
            });
            
            searchResults.appendChild(resultItem);
        });
    }
    
    searchResults.style.display = 'block';
}

// Function to show search suggestions
function showSearchSuggestions() {
    const searchTerm = document.getElementById('policy-search').value.trim().toLowerCase();
    const searchResults = document.getElementById('search-results');
    
    if (searchTerm === '' || searchTerm.length < 2) {
        searchResults.innerHTML = '';
        searchResults.style.display = 'none';
        return;
    }
    
    // In a real app, this would search the database
    // For demo purposes, we'll search our sample data
    const suggestions = [];
    
    for (const policyId in policyData) {
        const policy = policyData[policyId];
        if (policy.policyNumber.toLowerCase().includes(searchTerm) || 
            policy.insuredName.toLowerCase().includes(searchTerm)) {
            suggestions.push({
                id: policyId,
                policyNumber: policy.policyNumber,
                insuredName: policy.insuredName
            });
        }
    }
    
    // Display suggestions
    searchResults.innerHTML = '';
    
    if (suggestions.length === 0) {
        searchResults.style.display = 'none';
    } else {
        suggestions.forEach(suggestion => {
            const suggestionItem = document.createElement('div');
            suggestionItem.className = 'search-suggestion-item';
            suggestionItem.innerHTML = `
                <div class="suggestion-text">${suggestion.policyNumber} - ${suggestion.insuredName}</div>
            `;
            
            suggestionItem.addEventListener('click', function() {
                loadPolicyData(suggestion.id);
                searchResults.innerHTML = '';
                searchResults.style.display = 'none';
                document.getElementById('policy-search').value = '';
            });
            
            searchResults.appendChild(suggestionItem);
        });
        
        searchResults.style.display = 'block';
    }
}

// Function to set up stage transition animation
function setupStageTransitionAnimation() {
    // Enhance the update stage button to show animation
    document.getElementById('update-stage-btn').addEventListener('click', function() {
        const selectedStage = parseInt(document.getElementById('stage-select').value);
        const currentStage = getCurrentStage();
        
        if (selectedStage !== currentStage) {
            animateStageTransition(currentStage, selectedStage);
        }
    });
}

// Function to get current stage
function getCurrentStage() {
    const activeStep = document.querySelector('.step.active');
    return parseInt(activeStep.id.split('-')[1]);
}

// Function to animate stage transition
function animateStageTransition(fromStage, toStage) {
    // Show transition overlay
    const overlay = document.createElement('div');
    overlay.className = 'transition-overlay';
    document.body.appendChild(overlay);
    
    // Add animation to overlay
    setTimeout(() => {
        overlay.style.opacity = '1';
    }, 10);
    
    // Show transition message
    const message = document.createElement('div');
    message.className = 'transition-message';
    
    if (toStage > fromStage) {
        message.innerHTML = `
            <div class="transition-icon"><i class="fas fa-arrow-circle-right"></i></div>
            <div class="transition-text">Advancing to ${stageInfo[toStage].title}</div>
        `;
    } else {
        message.innerHTML = `
            <div class="transition-icon"><i class="fas fa-arrow-circle-left"></i></div>
            <div class="transition-text">Returning to ${stageInfo[toStage].title}</div>
        `;
    }
    
    overlay.appendChild(message);
    
    // After animation, update tracker and remove overlay
    setTimeout(() => {
        updateTracker(toStage);
        
        overlay.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(overlay);
        }, 500);
        
        // Show notification
        if (toStage > fromStage) {
            showNotification('Stage Advanced', `Policy has advanced to ${stageInfo[toStage].title} stage.`, 'success');
        } else {
            showNotification('Stage Changed', `Policy has returned to ${stageInfo[toStage].title} stage.`, 'info');
        }
    }, 1500);
}

// Function to set up responsive menu for mobile
function setupResponsiveMenu() {
    // Add mobile menu button
    const header = document.querySelector('.header');
    const mobileMenuBtn = document.createElement('div');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    header.appendChild(mobileMenuBtn);
    
    // Add mobile menu
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = `
        <div class="mobile-menu-header">
            <div class="mobile-menu-title">Menu</div>
            <div class="mobile-menu-close">&times;</div>
        </div>
        <div class="mobile-menu-items">
            <div class="mobile-menu-item" data-action="dashboard">
                <i class="fas fa-tachometer-alt"></i> Dashboard
            </div>
            <div class="mobile-menu-item" data-action="policies">
                <i class="fas fa-file-contract"></i> All Policies
            </div>
            <div class="mobile-menu-item" data-action="clients">
                <i class="fas fa-users"></i> Clients
            </div>
            <div class="mobile-menu-item" data-action="reports">
                <i class="fas fa-chart-bar"></i> Reports
            </div>
            <div class="mobile-menu-item" data-action="settings">
                <i class="fas fa-cog"></i> Settings
            </div>
        </div>
    `;
    
    document.body.appendChild(mobileMenu);
    
    // Add click event to mobile menu button
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.add('show');
    });
    
    // Add click event to mobile menu close button
    mobileMenu.querySelector('.mobile-menu-close').addEventListener('click', function() {
        mobileMenu.classList.remove('show');
    });
    
    // Add click events to mobile menu items
    const menuItems = mobileMenu.querySelectorAll('.mobile-menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            handleMobileMenuAction(action);
            mobileMenu.classList.remove('show');
        });
    });
    
    // Add media query listener for responsive design
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    handleResponsiveChanges(mediaQuery);
    mediaQuery.addEventListener('change', handleResponsiveChanges);
}

// Function to handle mobile menu actions
function handleMobileMenuAction(action) {
    // In a real app, these would navigate to different pages
    // For demo purposes, we'll show notifications
    switch(action) {
        case 'dashboard':
            showNotification('Dashboard', 'Dashboard view would be shown here.', 'info');
            break;
        case 'policies':
            showNotification('All Policies', 'All policies view would be shown here.', 'info');
            break;
        case 'clients':
            showNotification('Clients', 'Clients view would be shown here.', 'info');
            break;
        case 'reports':
            showNotification('Reports', 'Reports view would be shown here.', 'info');
            break;
        case 'settings':
            showNotification('Settings', 'Settings view would be shown here.', 'info');
            break;
    }
}

// Function to handle responsive design changes
function handleResponsiveChanges(mediaQuery) {
    if (mediaQuery.matches) {
        // Mobile view
        document.querySelector('.mobile-menu-btn').style.display = 'block';
    } else {
        // Desktop view
        document.querySelector('.mobile-menu-btn').style.display = 'none';
        document.querySelector('.mobile-menu').classList.remove('show');
    }
}
