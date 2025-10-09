// Language Translations
const translations = {
    en: {
        logoText: "Crop Advisory",
        navHome: "Home",
        navAdvisory: "Advisory",
        navWeather: "Weather",
        navMarket: "Market",
        navSchemes: "Schemes",
        navForum: "Forum",
        loginBtn: "Login",
        signupBtn: "Sign Up",
        heroTitleEn: "Empowering Farmers with Knowledge, Not Guesswork.",
        heroTitleHi: "किसानों को दे ज्ञान की शक्ति, अंदाज़े की नहीं।",
        ctaBtn: "Get Started",
        dashboardTitle: "Farmer Dashboard",
        cropAdvisoryTitle: "Crop & Soil Advisory",
        cropAdvisoryDescEn: "Get personalized crop recommendations based on your soil type",
        cropAdvisoryDescHi: "अपनी मिट्टी के प्रकार के आधार पर फसल की सलाह पाएं",
        weatherTitle: "Weather Updates",
        weatherDescEn: "Real-time weather forecasts for better farming decisions",
        weatherDescHi: "बेहतर खेती के लिए मौसम का पूर्वानुमान",
        marketTitle: "Market Prices",
        marketDescEn: "Latest mandi rates and price trends for your crops",
        marketDescHi: "अपनी फसलों के लिए ताज़ा मंडी भाव",
        fertilizerTitle: "Fertilizer Recommendations",
        fertilizerDescEn: "Optimal fertilizer guidance for healthy crop growth",
        fertilizerDescHi: "स्वस्थ फसल के लिए उर्वरक की सही सलाह",
        schemesTitle: "Government Schemes",
        schemesDescEn: "Access information about government benefits and subsidies",
        schemesDescHi: "सरकारी योजनाओं और सब्सिडी की जानकारी",
        forumTitle: "Community Forum",
        forumDescEn: "Connect with fellow farmers and share experiences",
        forumDescHi: "अन्य किसानों से जुड़ें और अनुभव साझा करें",
        learnMore: "Learn More",
        footerText: "© 2024 Farmer-Friendly Crop Advisory System. Empowering Indian Farmers."
    },
    hi: {
        logoText: "फसल सलाहकार",
        navHome: "होम",
        navAdvisory: "सलाह",
        navWeather: "मौसम",
        navMarket: "बाज़ार",
        navSchemes: "योजनाएं",
        navForum: "मंच",
        loginBtn: "लॉगिन",
        signupBtn: "साइन अप",
        heroTitleEn: "Empowering Farmers with Knowledge, Not Guesswork.",
        heroTitleHi: "किसानों को दे ज्ञान की शक्ति, अंदाज़े की नहीं।",
        ctaBtn: "शुरू करें",
        dashboardTitle: "किसान डैशबोर्ड",
        cropAdvisoryTitle: "फसल और मिट्टी सलाह",
        cropAdvisoryDescEn: "अपनी मिट्टी के प्रकार के आधार पर फसल की सलाह पाएं",
        cropAdvisoryDescHi: "स्वस्थ फसल के लिए विशेष सुझाव",
        weatherTitle: "मौसम अपडेट",
        weatherDescEn: "बेहतर खेती के लिए मौसम का पूर्वानुमान",
        weatherDescHi: "सटीक मौसम की जानकारी",
        marketTitle: "बाज़ार मूल्य",
        marketDescEn: "अपनी फसलों के लिए ताज़ा मंडी भाव",
        marketDescHi: "फसल की कीमतों की जानकारी",
        fertilizerTitle: "उर्वरक सिफारिशें",
        fertilizerDescEn: "स्वस्थ फसल के लिए उर्वरक की सही सलाह",
        fertilizerDescHi: "सही खाद का चुनाव",
        schemesTitle: "सरकारी योजनाएं",
        schemesDescEn: "सरकारी योजनाओं और सब्सिडी की जानकारी",
        schemesDescHi: "लाभ और सहायता की जानकारी",
        forumTitle: "समुदाय मंच",
        forumDescEn: "अन्य किसानों से जुड़ें और अनुभव साझा करें",
        forumDescHi: "किसान भाइयों से बात करें",
        learnMore: "और जानें",
        footerText: "© 2024 किसान-अनुकूल फसल सलाहकार प्रणाली। भारतीय किसानों को सशक्त बनाना।"
    },
    ta: {
        logoText: "பயிர் ஆலோசனை",
        navHome: "முகப்பு",
        navAdvisory: "ஆலோசனை",
        navWeather: "வானிலை",
        navMarket: "சந்தை",
        navSchemes: "திட்டங்கள்",
        navForum: "மன்றம்",
        loginBtn: "உள்நுழைய",
        signupBtn: "பதிவு செய்ய",
        heroTitleEn: "Empowering Farmers with Knowledge, Not Guesswork.",
        heroTitleHi: "விவசாயிகளுக்கு அறிவு சக்தி, ஊகங்கள் அல்ல.",
        ctaBtn: "தொடங்குங்கள்",
        dashboardTitle: "விவசாயி டாஷ்போர்டு",
        cropAdvisoryTitle: "பயிர் & மண் ஆலோசனை",
        cropAdvisoryDescEn: "உங்கள் மண் வகையின் அடிப்படையில் பயிர் பரிந்துரைகள்",
        cropAdvisoryDescHi: "சிறந்த பயிர் தேர்வுக்கான வழிகாட்டி",
        weatherTitle: "வானிலை புதுப்பிப்புகள்",
        weatherDescEn: "சிறந்த விவசாய முடிவுகளுக்கான வானிலை முன்னறிவிப்பு",
        weatherDescHi: "துல்லியமான வானிலை தகவல்",
        marketTitle: "சந்தை விலைகள்",
        marketDescEn: "உங்கள் பயிர்களுக்கான சமீபத்திய மண்டி விலைகள்",
        marketDescHi: "பயிர் விலை தகவல்",
        fertilizerTitle: "உர பரிந்துரைகள்",
        fertilizerDescEn: "ஆரோக்கியமான பயிர் வளர்ச்சிக்கான உர வழிகாட்டுதல்",
        fertilizerDescHi: "சரியான உர தேர்வு",
        schemesTitle: "அரசு திட்டங்கள்",
        schemesDescEn: "அரசு நன்மைகள் மற்றும் மானியங்கள் பற்றிய தகவல்",
        schemesDescHi: "பயன்கள் மற்றும் உதவி தகவல்",
        forumTitle: "சமூக மன்றம்",
        forumDescEn: "சக விவசாயிகளுடன் இணைந்து அனுபவங்களைப் பகிரவும்",
        forumDescHi: "விவசாயிகளுடன் பேசுங்கள்",
        learnMore: "மேலும் அறிய",
        footerText: "© 2024 விவசாயி நட்பு பயிர் ஆலோசனை அமைப்பு. இந்திய விவசாயிகளை வலுப்படுத்துதல்."
    },
    mr: {
        logoText: "पीक सल्लागार",
        navHome: "मुखपृष्ठ",
        navAdvisory: "सल्ला",
        navWeather: "हवामान",
        navMarket: "बाजार",
        navSchemes: "योजना",
        navForum: "मंच",
        loginBtn: "लॉगिन",
        signupBtn: "साइन अप",
        heroTitleEn: "Empowering Farmers with Knowledge, Not Guesswork.",
        heroTitleHi: "शेतकऱ्यांना द्या ज्ञानाची शक्ती, अंदाजाची नाही.",
        ctaBtn: "सुरू करा",
        dashboardTitle: "शेतकरी डॅशबोर्ड",
        cropAdvisoryTitle: "पीक आणि माती सल्ला",
        cropAdvisoryDescEn: "तुमच्या मातीच्या प्रकारावर आधारित पीक शिफारसी मिळवा",
        cropAdvisoryDescHi: "तुमच्या मातीच्या प्रकारावर आधारित पीक शिफारसी",
        weatherTitle: "हवामान अद्यतने",
        weatherDescEn: "चांगल्या शेतीसाठी हवामान अंदाज",
        weatherDescHi: "चांगल्या शेतीसाठी हवामान अंदाज",
        marketTitle: "बाजार किंमती",
        marketDescEn: "तुमच्या पिकांसाठी ताज्या मंडी भाव",
        marketDescHi: "तुमच्या पिकांसाठी ताज्या मंडी भाव",
        fertilizerTitle: "खत शिफारसी",
        fertilizerDescEn: "निरोगी पीक वाढीसाठी खत मार्गदर्शन",
        fertilizerDescHi: "निरोगी पीक वाढीसाठी खत मार्गदर्शन",
        schemesTitle: "सरकारी योजना",
        schemesDescEn: "सरकारी फायदे आणि अनुदानाची माहिती",
        schemesDescHi: "सरकारी फायदे आणि अनुदानाची माहिती",
        forumTitle: "समुदाय मंच",
        forumDescEn: "इतर शेतकऱ्यांशी संपर्क साधा आणि अनुभव शेअर करा",
        forumDescHi: "इतर शेतकऱ्यांशी संपर्क साधा आणि अनुभव शेअर करा",
        learnMore: "अधिक जाणून घ्या",
        footerText: "© 2024 शेतकरी-अनुकूल पीक सल्लागार प्रणाली. भारतीय शेतकऱ्यांना सशक्त बनवत आहे."
    },
    bn: {
        logoText: "ফসল পরামর্শ",
        navHome: "হোম",
        navAdvisory: "পরামর্শ",
        navWeather: "আবহাওয়া",
        navMarket: "বাজার",
        navSchemes: "প্রকল্প",
        navForum: "ফোরাম",
        loginBtn: "লগইন",
        signupBtn: "সাইন আপ",
        heroTitleEn: "Empowering Farmers with Knowledge, Not Guesswork.",
        heroTitleHi: "কৃষকদের দিন জ্ঞানের শক্তি, অনুমানের নয়।",
        ctaBtn: "শুরু করুন",
        dashboardTitle: "কৃষক ড্যাশবোর্ড",
        cropAdvisoryTitle: "ফসল ও মাটি পরামর্শ",
        cropAdvisoryDescEn: "আপনার মাটির ধরন অনুযায়ী ফসল সুপারিশ পান",
        cropAdvisoryDescHi: "আপনার মাটির ধরন অনুযায়ী ফসল সুপারিশ পান",
        weatherTitle: "আবহাওয়া আপডেট",
        weatherDescEn: "ভালো কৃষির জন্য আবহাওয়া পূর্বাভাস",
        weatherDescHi: "ভালো কৃষির জন্য আবহাওয়া পূর্বাভাস",
        marketTitle: "বাজার মূল্য",
        marketDescEn: "আপনার ফসলের সর্বশেষ মান্ডি দর",
        marketDescHi: "আপনার ফসলের সর্বশেষ মান্ডি দর",
        fertilizerTitle: "সার সুপারিশ",
        fertilizerDescEn: "সুস্থ ফসল বৃদ্ধির জন্য সার নির্দেশিকা",
        fertilizerDescHi: "সুস্থ ফসল বৃদ্ধির জন্য সার নির্দেশিকা",
        schemesTitle: "সরকারি প্রকল্প",
        schemesDescEn: "সরকারি সুবিধা এবং ভর্তুকি সম্পর্কে তথ্য",
        schemesDescHi: "সরকারি সুবিধা এবং ভর্তুকি সম্পর্কে তথ্য",
        forumTitle: "সম্প্রদায় ফোরাম",
        forumDescEn: "সহকর্মী কৃষকদের সাথে সংযোগ করুন এবং অভিজ্ঞতা শেয়ার করুন",
        forumDescHi: "সহকর্মী কৃষকদের সাথে সংযোগ করুন এবং অভিজ্ঞতা শেয়ার করুন",
        learnMore: "আরও জানুন",
        footerText: "© 2024 কৃষক-বান্ধব ফসল পরামর্শ সিস্টেম। ভারতীয় কৃষকদের ক্ষমতায়ন।"
    }
};

// Current language
let currentLanguage = 'en';
let isLoggedIn = false;

// Speech Recognition
let recognition = null;
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-IN';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Language Selector Event
    const languageSelector = document.getElementById('languageSelector');
    languageSelector.addEventListener('change', function() {
        changeLanguage(this.value);
    });

    // Microphone Button Event
    const micBtn = document.getElementById('micBtn');
    if (micBtn) {
        micBtn.addEventListener('click', toggleSpeechRecognition);
    }

    // Login Button Event
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', showLoginMessage);
    }

    // Sign Up Button Event
    const signupBtn = document.querySelector('.signup-btn');
    if (signupBtn) {
        signupBtn.addEventListener('click', showFeatureMessage);
    }

    // Login Form Event
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // Initialize language
    changeLanguage('en');

    // Load government schemes
    loadGovernmentSchemes();

    // Load forum discussions
    loadForumDiscussions();
});

// Change Language Function
function changeLanguage(lang) {
    currentLanguage = lang;
    const elements = document.querySelectorAll('[data-lang-key]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    if (recognition) {
        recognition.lang = lang === 'hi' ? 'hi-IN' : lang === 'ta' ? 'ta-IN' : lang === 'mr' ? 'mr-IN' : lang === 'bn' ? 'bn-IN' : 'en-IN';
    }
}

// Speech Recognition Toggle
function toggleSpeechRecognition() {
    if (!recognition) {
        alert('🎤 Voice input feature will be available in the full version!\n\nThis feature will allow you to use voice commands to search for information and navigate the app.');
        return;
    }

    const micBtn = document.getElementById('micBtn');
    const micIcon = micBtn.querySelector('i');

    if (micIcon.classList.contains('mic-listening')) {
        recognition.stop();
        micIcon.classList.remove('mic-listening');
    } else {
        recognition.start();
        micIcon.classList.add('mic-listening');
    }
}

// Speech Recognition Events
if (recognition) {
    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        const micBtn = document.getElementById('micBtn');
        const micIcon = micBtn.querySelector('i');
        micIcon.classList.remove('mic-listening');
        
        const activeInput = document.activeElement;
        if (activeInput && (activeInput.tagName === 'INPUT' || activeInput.tagName === 'TEXTAREA')) {
            activeInput.value = transcript;
        } else {
            alert('Voice recognized: ' + transcript + '\n\nPlease click on an input field first, then use the microphone.');
        }
    };

    recognition.onerror = function(event) {
        const micBtn = document.getElementById('micBtn');
        const micIcon = micBtn.querySelector('i');
        micIcon.classList.remove('mic-listening');
        console.error('Speech recognition error:', event.error);
    };

    recognition.onend = function() {
        const micBtn = document.getElementById('micBtn');
        const micIcon = micBtn.querySelector('i');
        micIcon.classList.remove('mic-listening');
    };
}

// Show feature message for non-working features
function showFeatureMessage() {
    alert('🚧 This feature will be available in the full version!\n\nIn the complete system, you will be able to access all the agricultural advisory services.');
}

// Show login message
function showLoginMessage() {
    openModal('loginModal');
}

// Scroll to Dashboard
function scrollToDashboard() {
    const dashboard = document.getElementById('dashboard');
    dashboard.scrollIntoView({ behavior: 'smooth' });
}

// Modal Functions
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

// Login Handler
function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (username && password) {
        isLoggedIn = true;
        closeModal('loginModal');
        document.getElementById('loginBtn').textContent = `Welcome, ${username.split(' ')[0]}!`;
        alert(`✅ Login successful! Welcome ${username}!`);
    } else {
        alert('Please enter both username and password');
    }
}

// Check if user is logged in for forum access
function checkLoginForForum() {
    if (!isLoggedIn) {
        alert('🔐 Please login first to access the Community Forum');
        openModal('loginModal');
        return false;
    }
    return true;
}

// Crop Advisory Functions - Non-working
function openCropAdvisory() {
    showFeatureMessage();
}

function getCropAdvisory() {
    showFeatureMessage();
}

// Weather Updates Functions - Non-working
function openWeatherUpdates() {
    showFeatureMessage();
}

function getWeatherUpdates() {
    showFeatureMessage();
}

// Market Prices Functions - Non-working
function openMarketPrices() {
    showFeatureMessage();
}

function getMarketPrices() {
    showFeatureMessage();
}

// Fertilizer Recommendation Functions - Non-working
function openFertilizerRecommendation() {
    showFeatureMessage();
}

function getFertilizerRecommendation() {
    showFeatureMessage();
}

// Government Schemes Functions - Non-working
function openGovernmentSchemes() {
    showFeatureMessage();
}

function loadGovernmentSchemes() {
    const schemesDiv = document.getElementById('schemesContent');
    schemesDiv.innerHTML = '<p>Government schemes information will be available in the full version.</p>';
}

// Community Forum Functions - With login check
function openCommunityForum() {
    if (!checkLoginForForum()) {
        return;
    }
    openModal('forumModal');
}

function postQuestion() {
    if (!checkLoginForForum()) {
        return;
    }

    const questionText = document.getElementById('forumQuestion').value.trim();
    if (!questionText) {
        alert('Please type your question');
        return;
    }

    const discussionsDiv = document.getElementById('forumDiscussions');
    const newPost = document.createElement('div');
    newPost.className = 'forum-post';
    newPost.innerHTML = `
        <div class="post-author">You</div>
        <div class="post-question">${questionText}</div>
        <div class="post-time">Just now</div>
        <div class="post-answer"><em>In the full version, other farmers and experts would reply to your question here.</em></div>
    `;
    discussionsDiv.insertBefore(newPost, discussionsDiv.firstChild);
    document.getElementById('forumQuestion').value = '';
    
    alert('✅ Your question has been posted successfully!\n\nIn the full version, other farmers and agricultural experts would be able to reply to your question.');
}

function loadForumDiscussions() {
    const discussionsDiv = document.getElementById('forumDiscussions');
    
    const discussions = [
        {
            author: "Ramesh Kumar",
            question: "What is the best time to plant wheat in Punjab?",
            answer: "In the full version, agricultural experts and fellow farmers would provide answers here.",
            time: "2 hours ago"
        },
        {
            author: "Lakshmi Devi",
            question: "How to control pest attack on cotton crops?",
            answer: "In the full version, you would get real advice from experienced farmers and experts.",
            time: "5 hours ago"
        },
        {
            author: "Suresh Patil",
            question: "Which fertilizer is best for paddy in monsoon season?",
            answer: "Expert advice and farmer experiences would be shared here in the full version.",
            time: "1 day ago"
        }
    ];

    discussionsDiv.innerHTML = discussions.map(disc => `
        <div class="forum-post">
            <div class="post-author">${disc.author}</div>
            <div class="post-question">${disc.question}</div>
            <div class="post-answer">${disc.answer}</div>
            <div class="post-time">${disc.time}</div>
        </div>
    `).join('');
}
