// Health Education & Awareness - Interactive Features

// Program details data
const programDetails = {
    workshops: {
        title: "Community Health Workshops",
        description: "Our interactive workshops are designed to educate and empower community members with essential health knowledge and practical skills.",
        details: [
            {
                name: "First Aid & CPR Training",
                description: "Learn life-saving techniques including basic first aid, CPR, and AED usage. Certified instructors provide hands-on training.",
                duration: "4 hours",
                frequency: "Monthly",
                cost: "Free"
            },
            {
                name: "Health Screening Awareness",
                description: "Understand the importance of regular health screenings and learn about different types of preventive tests.",
                duration: "2 hours",
                frequency: "Bi-weekly",
                cost: "Free"
            },
            {
                name: "Chronic Disease Management",
                description: "Comprehensive education on managing conditions like diabetes, hypertension, and heart disease.",
                duration: "3 hours",
                frequency: "Weekly",
                cost: "Free"
            },
            {
                name: "Women's Health Education",
                description: "Specialized sessions covering reproductive health, maternal care, and women-specific health concerns.",
                duration: "2.5 hours",
                frequency: "Monthly",
                cost: "Free"
            }
        ]
    },
    prevention: {
        title: "Disease Prevention Tips",
        description: "Evidence-based strategies and practical tips to help prevent common diseases and maintain optimal health throughout life.",
        details: [
            {
                name: "Vaccination Guidelines",
                description: "Stay up-to-date with recommended vaccines for all ages, including seasonal flu shots and travel vaccines.",
                keyPoints: ["Adult vaccination schedules", "Childhood immunizations", "Travel health requirements"]
            },
            {
                name: "Hygiene Best Practices",
                description: "Learn proper hygiene techniques to prevent the spread of infectious diseases and maintain personal health.",
                keyPoints: ["Hand washing techniques", "Food safety practices", "Personal hygiene habits"]
            },
            {
                name: "Lifestyle Disease Prevention",
                description: "Strategies to prevent heart disease, diabetes, obesity, and other lifestyle-related conditions.",
                keyPoints: ["Dietary modifications", "Exercise routines", "Stress management"]
            },
            {
                name: "Infectious Disease Control",
                description: "Understanding how infectious diseases spread and how to protect yourself and others.",
                keyPoints: ["Transmission prevention", "Isolation guidelines", "Community health measures"]
            }
        ]
    },
    lifestyle: {
        title: "Healthy Lifestyle Guides",
        description: "Comprehensive guides to help you make informed decisions about daily health habits and create sustainable wellness routines.",
        details: [
            {
                name: "Exercise & Fitness Plans",
                description: "Customized workout plans for different fitness levels and health goals.",
                benefits: ["Improved cardiovascular health", "Better mental health", "Weight management", "Increased energy"]
            },
            {
                name: "Sleep Hygiene Guidelines",
                description: "Learn how to improve sleep quality and establish healthy sleep patterns.",
                benefits: ["Better immune function", "Improved mood", "Enhanced cognitive performance", "Reduced stress"]
            },
            {
                name: "Stress Management Techniques",
                description: "Practical strategies for managing stress and building resilience.",
                benefits: ["Lower blood pressure", "Improved relationships", "Better work performance", "Enhanced well-being"]
            },
            {
                name: "Work-Life Balance Tips",
                description: "Strategies for maintaining healthy boundaries between work and personal life.",
                benefits: ["Reduced burnout", "Better relationships", "Improved productivity", "Enhanced life satisfaction"]
            }
        ]
    },
    nutrition: {
        title: "Nutritional Education Programs",
        description: "Learn about proper nutrition and dietary choices for optimal health and wellbeing across all life stages.",
        details: [
            {
                name: "Balanced Diet Planning",
                description: "Create personalized meal plans that meet your nutritional needs and health goals.",
                components: ["Macronutrient balance", "Portion control", "Meal timing", "Food variety"]
            },
            {
                name: "Special Dietary Needs",
                description: "Nutrition guidance for specific conditions like diabetes, heart disease, and food allergies.",
                components: ["Medical nutrition therapy", "Allergen management", "Specialized diets", "Supplement guidance"]
            },
            {
                name: "Food Safety & Preparation",
                description: "Safe food handling, storage, and preparation techniques to prevent foodborne illness.",
                components: ["Safe cooking temperatures", "Proper storage methods", "Cross-contamination prevention", "Food hygiene"]
            },
            {
                name: "Nutritional Supplements Guide",
                description: "Understanding when and how to use nutritional supplements safely and effectively.",
                components: ["Vitamin and mineral needs", "Supplement quality", "Drug interactions", "Natural vs. synthetic"]
            }
        ]
    },
    "mental-health": {
        title: "Mental Health Awareness Campaigns",
        description: "Breaking stigma and promoting mental wellness through education, support, and community engagement.",
        details: [
            {
                name: "Mental Health First Aid",
                description: "Learn to recognize signs of mental health crises and provide initial support.",
                skills: ["Crisis recognition", "Active listening", "Resource referral", "Self-care practices"]
            },
            {
                name: "Anxiety & Depression Support",
                description: "Understanding common mental health conditions and available treatment options.",
                skills: ["Symptom recognition", "Coping strategies", "Treatment options", "Support networks"]
            },
            {
                name: "Mindfulness & Meditation",
                description: "Practical techniques for reducing stress and improving mental well-being.",
                skills: ["Breathing exercises", "Meditation practices", "Mindful living", "Stress reduction"]
            },
            {
                name: "Crisis Intervention Resources",
                description: "24/7 support services and emergency resources for mental health crises.",
                skills: ["Emergency contacts", "Crisis hotlines", "Safety planning", "Professional resources"]
            }
        ]
    }
};

// Newsletter subscription functionality
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        if (validateEmail(email)) {
            showNotification('Thank you for subscribing! You will receive our next newsletter soon.', 'success');
            this.reset();
        } else {
            showNotification('Please enter a valid email address.', 'error');
        }
    });
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add animation on scroll
    observeElements();
});

// Show program details in modal
function showDetails(category) {
    const modal = document.getElementById('program-modal');
    const modalBody = document.getElementById('modal-body');
    const program = programDetails[category];
    
    if (!program) return;
    
    let detailsHTML = `
        <h2>${program.title}</h2>
        <p class="program-description">${program.description}</p>
        <div class="program-details">
    `;
    
    program.details.forEach(detail => {
        detailsHTML += `
            <div class="detail-item">
                <h3>${detail.name}</h3>
                <p>${detail.description}</p>
        `;
        
        if (detail.duration) {
            detailsHTML += `
                <div class="detail-info">
                    <span><strong>Duration:</strong> ${detail.duration}</span>
                    <span><strong>Frequency:</strong> ${detail.frequency}</span>
                    <span><strong>Cost:</strong> ${detail.cost}</span>
                </div>
            `;
        }
        
        if (detail.keyPoints) {
            detailsHTML += `
                <div class="key-points">
                    <strong>Key Points:</strong>
                    <ul>
                        ${detail.keyPoints.map(point => `<li>${point}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
        
        if (detail.benefits) {
            detailsHTML += `
                <div class="benefits">
                    <strong>Benefits:</strong>
                    <ul>
                        ${detail.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
        
        if (detail.components) {
            detailsHTML += `
                <div class="components">
                    <strong>Components:</strong>
                    <ul>
                        ${detail.components.map(component => `<li>${component}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
        
        if (detail.skills) {
            detailsHTML += `
                <div class="skills">
                    <strong>Skills Covered:</strong>
                    <ul>
                        ${detail.skills.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
        
        detailsHTML += `</div>`;
    });
    
    detailsHTML += `
        </div>
        <div class="modal-actions">
            <button class="btn-primary" onclick="registerInterest('${category}')">Register Interest</button>
            <button class="btn-secondary" onclick="closeModal()">Close</button>
        </div>
    `;
    
    modalBody.innerHTML = detailsHTML;
    modal.style.display = 'block';
    
    // Add modal styles
    addModalStyles();
}

// Close modal
function closeModal() {
    const modal = document.getElementById('program-modal');
    modal.style.display = 'none';
}

// Register interest in program
function registerInterest(category) {
    const program = programDetails[category];
    showNotification(`Thank you for your interest in ${program.title}! We'll contact you with more information soon.`, 'success');
    closeModal();
}

// Email validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show notification
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 5px;
        color: white;
        font-weight: 600;
        z-index: 1001;
        opacity: 0;
        transform: translateY(-20px);
        transition: all 0.3s ease;
        ${type === 'success' ? 'background-color: #4caf50;' : 'background-color: #f44336;'}
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add modal styles dynamically
function addModalStyles() {
    if (document.getElementById('modal-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'modal-styles';
    style.textContent = `
        .program-description {
            font-size: 1.1rem;
            color: #666;
            margin-bottom: 25px;
            line-height: 1.6;
        }
        
        .detail-item {
            margin-bottom: 25px;
            padding: 20px;
            background: #f8fbff;
            border-radius: 10px;
            border-left: 4px solid #2196f3;
        }
        
        .detail-item h3 {
            color: #1976d2;
            margin-bottom: 10px;
        }
        
        .detail-info {
            display: flex;
            gap: 20px;
            margin-top: 15px;
            flex-wrap: wrap;
        }
        
        .detail-info span {
            background: white;
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 0.9rem;
        }
        
        .key-points, .benefits, .components, .skills {
            margin-top: 15px;
        }
        
        .key-points ul, .benefits ul, .components ul, .skills ul {
            margin-top: 10px;
            padding-left: 20px;
        }
        
        .key-points li, .benefits li, .components li, .skills li {
            margin-bottom: 5px;
        }
        
        .modal-actions {
            display: flex;
            gap: 15px;
            justify-content: center;
            margin-top: 30px;
        }
        
        .btn-primary, .btn-secondary {
            padding: 12px 30px;
            border: none;
            border-radius: 25px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .btn-primary {
            background: #2196f3;
            color: white;
        }
        
        .btn-primary:hover {
            background: #1976d2;
        }
        
        .btn-secondary {
            background: #f5f5f5;
            color: #666;
        }
        
        .btn-secondary:hover {
            background: #e0e0e0;
        }
    `;
    
    document.head.appendChild(style);
}

// Intersection Observer for animations
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe program cards
    document.querySelectorAll('.program-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
    
    // Observe resource items
    document.querySelectorAll('.resource-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease';
        observer.observe(item);
    });
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('program-modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Keyboard navigation for modal
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});