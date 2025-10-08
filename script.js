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
        navHome: "मुख्यपृष्ठ",
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
        cropAdvisoryDescEn: "आपल्या मातीच्या प्रकारावर आधारित पीक शिफारसी",
        cropAdvisoryDescHi: "चांगल्या पिकासाठी खास सूचना",
        weatherTitle: "हवामान अद्यतने",
        weatherDescEn: "चांगल्या शेतीसाठी हवामान अंदाज",
        weatherDescHi: "अचूक हवामान माहिती",
        marketTitle: "बाजार किंमती",
        marketDescEn: "आपल्या पिकांसाठी ताज्या मंडी भाव",
        marketDescHi: "पीक किंमत माहिती",
        fertilizerTitle: "खत शिफारसी",
        fertilizerDescEn: "निरोगी पीक वाढीसाठी खत मार्गदर्शन",
        fertilizerDescHi: "योग्य खत निवड",
        schemesTitle: "सरकारी योजना",
        schemesDescEn: "सरकारी फायदे आणि अनुदानाची माहिती",
        schemesDescHi: "लाभ आणि मदत माहिती",
        forumTitle: "समुदाय मंच",
        forumDescEn: "इतर शेतकऱ्यांशी संपर्क साधा आणि अनुभव शेअर करा",
        forumDescHi: "शेतकरी भावांशी बोला",
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
        cropAdvisoryDescEn: "আপনার মাটির ধরন অনুযায়ী ফসল সুপারিশ",
        cropAdvisoryDescHi: "ভালো ফসলের জন্য বিশেষ পরামর্শ",
        weatherTitle: "আবহাওয়া আপডেট",
        weatherDescEn: "ভালো কৃষির জন্য আবহাওয়া পূর্বাভাস",
        weatherDescHi: "নির্ভুল আবহাওয়ার তথ্য",
        marketTitle: "বাজার মূল্য",
        marketDescEn: "আপনার ফসলের সর্বশেষ মান্ডি দর",
        marketDescHi: "ফসলের দামের তথ্য",
        fertilizerTitle: "সার সুপারিশ",
        fertilizerDescEn: "সুস্থ ফসল বৃদ্ধির জন্য সার নির্দেশিকা",
        fertilizerDescHi: "সঠিক সার নির্বাচন",
        schemesTitle: "সরকারি প্রকল্প",
        schemesDescEn: "সরকারি সুবিধা এবং ভর্তুকি সম্পর্কে তথ্য",
        schemesDescHi: "সুবিধা এবং সহায়তা তথ্য",
        forumTitle: "সম্প্রদায় ফোরাম",
        forumDescEn: "সহকর্মী কৃষকদের সাথে সংযোগ করুন এবং অভিজ্ঞতা শেয়ার করুন",
        forumDescHi: "কৃষক ভাইদের সাথে কথা বলুন",
        learnMore: "আরও জানুন",
        footerText: "© 2024 কৃষক-বান্ধব ফসল পরামর্শ সিস্টেম। ভারতীয় কৃষকদের ক্ষমতায়ন।"
    }
};

// Current language
let currentLanguage = 'en';
let isLoggedIn = false;
let currentUser = '';

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
        loginBtn.addEventListener('click', () => openModal('loginModal'));
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
        alert('Speech recognition is not supported in your browser. Please use Chrome, Edge, or Safari.');
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
        currentUser = username;
        closeModal('loginModal');
        document.getElementById('loginBtn').textContent = `Welcome, ${username.split(' ')[0]}!`;
        alert(`Login successful! Welcome ${username}!`);
    }
}

// Crop Advisory Functions
function openCropAdvisory() {
    openModal('cropAdvisoryModal');
}

async function getCropAdvisory() {
    const location = document.getElementById('cropLocation').value.trim();
    if (!location) {
        alert('Please enter your location');
        return;
    }

    const resultsDiv = document.getElementById('cropResults');
    resultsDiv.innerHTML = '<p>Loading...</p>';

    try {
        const geoData = await getLocationCoordinates(location);
        const weatherData = await getWeatherData(geoData.lat, geoData.lon);
        
        const climate = determineClimate(weatherData);
        const crops = recommendCrops(climate, weatherData);
        const soil = recommendSoil(climate);

        resultsDiv.innerHTML = `
            <div class="result-card">
                <h4>📍 Location: ${geoData.name}</h4>
                <p><strong>Climate Type:</strong> ${climate}</p>
                <p><strong>Temperature:</strong> ${weatherData.temp}°C | <strong>Humidity:</strong> ${weatherData.humidity}%</p>
            </div>
            <div class="result-card">
                <h4>🌾 Recommended Crops:</h4>
                <p>${crops}</p>
            </div>
            <div class="result-card">
                <h4>🏞️ Soil Advisory:</h4>
                <p>${soil}</p>
            </div>
        `;
    } catch (error) {
        resultsDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
}

// Weather Updates Functions
function openWeatherUpdates() {
    openModal('weatherModal');
}

async function getWeatherUpdates() {
    const location = document.getElementById('weatherLocation').value.trim();
    if (!location) {
        alert('Please enter your location');
        return;
    }

    const resultsDiv = document.getElementById('weatherResults');
    resultsDiv.innerHTML = '<p>Loading weather data...</p>';

    try {
        const geoData = await getLocationCoordinates(location);
        const weatherData = await getWeatherData(geoData.lat, geoData.lon);

        resultsDiv.innerHTML = `
            <h3>Weather for ${geoData.name}</h3>
            <div class="weather-info">
                <div class="weather-item">
                    <i class="fas fa-temperature-high"></i>
                    <h4>Temperature</h4>
                    <p>${weatherData.temp}°C</p>
                </div>
                <div class="weather-item">
                    <i class="fas fa-tint"></i>
                    <h4>Humidity</h4>
                    <p>${weatherData.humidity}%</p>
                </div>
                <div class="weather-item">
                    <i class="fas fa-wind"></i>
                    <h4>Wind Speed</h4>
                    <p>${weatherData.windSpeed} km/h</p>
                </div>
                <div class="weather-item">
                    <i class="fas fa-cloud"></i>
                    <h4>Conditions</h4>
                    <p>${weatherData.conditions}</p>
                </div>
            </div>
            <div class="result-card">
                <h4>📅 7-Day Forecast</h4>
                <p>${weatherData.forecast}</p>
            </div>
        `;
    } catch (error) {
        resultsDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
}

// Market Prices Functions
function openMarketPrices() {
    openModal('marketModal');
}

function getMarketPrices() {
    const crop = document.getElementById('marketCrop').value.trim();
    const location = document.getElementById('marketLocation').value.trim();

    if (!crop || !location) {
        alert('Please enter both crop name and location');
        return;
    }

    const resultsDiv = document.getElementById('marketResults');

    const marketData = getMarketPriceData(crop, location);

    resultsDiv.innerHTML = `
        <h3>Market Prices for ${crop} in ${location}</h3>
        <table class="price-table">
            <tr>
                <th>Market</th>
                <th>Price (₹/Quintal)</th>
                <th>Trend</th>
            </tr>
            ${marketData.map(data => `
                <tr>
                    <td>${data.market}</td>
                    <td>₹${data.price}</td>
                    <td>${data.trend}</td>
                </tr>
            `).join('')}
        </table>
        <div class="result-card">
            <h4>💡 Market Advisory</h4>
            <p>Based on current trends, prices are expected to ${marketData[0].trend.includes('↑') ? 'increase' : 'stabilize'} in the coming weeks. Consider ${marketData[0].trend.includes('↑') ? 'holding your stock' : 'selling at current rates'}.</p>
        </div>
    `;
}

// Fertilizer Recommendation Functions
function openFertilizerRecommendation() {
    openModal('fertilizerModal');
}

function getFertilizerRecommendation() {
    const crop = document.getElementById('fertilizerCrop').value.trim();
    const location = document.getElementById('fertilizerLocation').value.trim();

    if (!crop || !location) {
        alert('Please enter both crop name and location');
        return;
    }

    const resultsDiv = document.getElementById('fertilizerResults');

    const fertilizerData = getFertilizerData(crop);

    resultsDiv.innerHTML = `
        <h3>Fertilizer Recommendations for ${crop}</h3>
        <div class="result-card">
            <h4>🧪 Primary Nutrients (NPK)</h4>
            <p><strong>Nitrogen (N):</strong> ${fertilizerData.nitrogen}</p>
            <p><strong>Phosphorus (P):</strong> ${fertilizerData.phosphorus}</p>
            <p><strong>Potassium (K):</strong> ${fertilizerData.potassium}</p>
        </div>
        <div class="result-card">
            <h4>📅 Application Schedule</h4>
            <p>${fertilizerData.schedule}</p>
        </div>
        <div class="result-card">
            <h4>⚠️ Important Tips</h4>
            <p>${fertilizerData.tips}</p>
        </div>
    `;
}

// Government Schemes Functions
function openGovernmentSchemes() {
    openModal('schemesModal');
}

function loadGovernmentSchemes() {
    const schemesDiv = document.getElementById('schemesContent');
    
    const schemes = [
        {
            name: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
            description: "Direct income support of ₹6,000 per year to all farmer families in three equal installments.",
            benefit: "₹2,000 every 4 months",
            eligibility: "All landholding farmer families"
        },
        {
            name: "Kisan Credit Card (KCC)",
            description: "Provides farmers with timely access to credit for agriculture and allied activities.",
            benefit: "Credit up to ₹3 lakh at 4% interest",
            eligibility: "Farmers with cultivable land"
        },
        {
            name: "PM Fasal Bima Yojana",
            description: "Crop insurance scheme providing financial support to farmers in case of crop failure.",
            benefit: "Coverage up to sum insured",
            eligibility: "All farmers growing notified crops"
        },
        {
            name: "Soil Health Card Scheme",
            description: "Provides soil health cards to farmers every 2 years to improve soil productivity.",
            benefit: "Free soil testing & recommendations",
            eligibility: "All farmers"
        },
        {
            name: "PM Krishi Sinchai Yojana",
            description: "Aims to provide irrigation solutions and expand cultivable area under assured irrigation.",
            benefit: "Subsidy on irrigation equipment",
            eligibility: "Farmers with irrigation needs"
        },
        {
            name: "National Agriculture Market (e-NAM)",
            description: "Online trading platform for agricultural commodities to ensure better price discovery.",
            benefit: "Access to online mandi",
            eligibility: "All registered farmers"
        }
    ];

    schemesDiv.innerHTML = schemes.map(scheme => `
        <div class="scheme-card">
            <h3>${scheme.name}</h3>
            <p>${scheme.description}</p>
            <p><strong>Eligibility:</strong> ${scheme.eligibility}</p>
            <div class="scheme-benefit">
                💰 Benefit: ${scheme.benefit}
            </div>
        </div>
    `).join('');
}

// Community Forum Functions
function openCommunityForum() {
    openModal('forumModal');
}

function postQuestion() {
    const questionText = document.getElementById('forumQuestion').value.trim();
    if (!questionText) {
        alert('Please type your question');
        return;
    }

    if (!isLoggedIn) {
        alert('Please login to post questions');
        closeModal('forumModal');
        openModal('loginModal');
        return;
    }

    const discussionsDiv = document.getElementById('forumDiscussions');
    const newPost = document.createElement('div');
    newPost.className = 'forum-post';
    newPost.innerHTML = `
        <div class="post-author">${currentUser || 'Anonymous Farmer'}</div>
        <div class="post-question">${questionText}</div>
        <div class="post-time">Just now</div>
    `;
    discussionsDiv.insertBefore(newPost, discussionsDiv.firstChild);
    document.getElementById('forumQuestion').value = '';
    alert('Your question has been posted successfully!');
}

function loadForumDiscussions() {
    const discussionsDiv = document.getElementById('forumDiscussions');
    
    const discussions = [
        {
            author: "Ramesh Kumar",
            question: "What is the best time to plant wheat in Punjab?",
            answer: "Expert: The ideal time for wheat sowing in Punjab is from November 1-15. Early sowing helps achieve better yields.",
            time: "2 hours ago"
        },
        {
            author: "Lakshmi Devi",
            question: "How to control pest attack on cotton crops?",
            answer: "Expert: Use integrated pest management. Spray neem oil solution early morning. For severe cases, consult local agriculture officer.",
            time: "5 hours ago"
        },
        {
            author: "Suresh Patil",
            question: "Which fertilizer is best for paddy in monsoon season?",
            answer: "Expert: Apply urea (50 kg/acre) in 2-3 splits. First at planting, second at tillering, third at flowering stage.",
            time: "1 day ago"
        },
        {
            author: "Vijay Singh",
            question: "How to improve soil fertility naturally?",
            answer: "Expert: Practice crop rotation, use green manure, add compost, and maintain mulch cover. Avoid excessive chemical fertilizers.",
            time: "2 days ago"
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

// Helper Functions for Weather and Location
async function getLocationCoordinates(location) {
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(location)}&count=1&language=en&format=json`);
    const data = await response.json();
    
    if (!data.results || data.results.length === 0) {
        throw new Error('Location not found');
    }
    
    return {
        lat: data.results[0].latitude,
        lon: data.results[0].longitude,
        name: data.results[0].name
    };
}

async function getWeatherData(lat, lon) {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=Asia/Kolkata`);
    const data = await response.json();
    
    const weatherCode = data.current.weather_code;
    const conditions = getWeatherCondition(weatherCode);
    
    return {
        temp: Math.round(data.current.temperature_2m),
        humidity: data.current.relative_humidity_2m,
        windSpeed: Math.round(data.current.wind_speed_10m),
        conditions: conditions,
        forecast: `Next 7 days: High ${Math.round(data.daily.temperature_2m_max[0])}°C, Low ${Math.round(data.daily.temperature_2m_min[0])}°C`
    };
}

function getWeatherCondition(code) {
    const conditions = {
        0: 'Clear sky',
        1: 'Mainly clear',
        2: 'Partly cloudy',
        3: 'Overcast',
        45: 'Foggy',
        48: 'Foggy',
        51: 'Light drizzle',
        61: 'Light rain',
        63: 'Moderate rain',
        65: 'Heavy rain',
        80: 'Rain showers',
        95: 'Thunderstorm'
    };
    return conditions[code] || 'Unknown';
}

function determineClimate(weatherData) {
    if (weatherData.temp > 30) return 'Hot & Humid';
    if (weatherData.temp > 25) return 'Warm & Tropical';
    if (weatherData.temp > 20) return 'Moderate';
    if (weatherData.temp > 15) return 'Cool & Pleasant';
    return 'Cold';
}

function recommendCrops(climate, weatherData) {
    const recommendations = {
        'Hot & Humid': 'Rice, Sugarcane, Cotton, Jute, Groundnut, Turmeric',
        'Warm & Tropical': 'Maize, Sorghum, Millets, Pulses, Vegetables',
        'Moderate': 'Wheat, Barley, Mustard, Chickpea, Lentils, Peas',
        'Cool & Pleasant': 'Wheat, Potato, Cabbage, Cauliflower, Peas',
        'Cold': 'Wheat, Barley, Oats, Mustard, Root vegetables'
    };
    return recommendations[climate] || 'Consult local agriculture officer for recommendations';
}

function recommendSoil(climate) {
    const soilAdvice = {
        'Hot & Humid': 'Use well-drained alluvial or laterite soil. Maintain organic content with compost. Ensure good drainage during monsoon.',
        'Warm & Tropical': 'Red or black soil is ideal. Add organic matter regularly. Mulching helps retain moisture.',
        'Moderate': 'Loamy soil works best. Regular crop rotation recommended. Add farmyard manure before sowing.',
        'Cool & Pleasant': 'Well-drained loamy or sandy-loam soil. Prepare soil with deep ploughing. Add lime if soil is acidic.',
        'Cold': 'Sandy-loam or loamy soil. Ensure good drainage. Add compost before winter crop sowing.'
    };
    return soilAdvice[climate] || 'Test soil pH and nutrient levels. Consult soil health card for recommendations.';
}

function getMarketPriceData(crop, location) {
    const basePrice = {
        'wheat': 2200,
        'rice': 2400,
        'cotton': 6500,
        'sugarcane': 3100,
        'maize': 1900,
        'soybean': 4200,
        'groundnut': 5800
    };

    const cropLower = crop.toLowerCase();
    const price = basePrice[cropLower] || 2500;

    const variation = Math.random() * 200 - 100;
    
    return [
        {
            market: `${location} APMC`,
            price: Math.round(price + variation),
            trend: variation > 0 ? '↑ Rising' : '↓ Stable'
        },
        {
            market: `${location} District Market`,
            price: Math.round(price + variation - 50),
            trend: '→ Stable'
        },
        {
            market: 'National Average',
            price: price,
            trend: '→ Stable'
        }
    ];
}

function getFertilizerData(crop) {
    const fertilizers = {
        'wheat': {
            nitrogen: '120-150 kg/hectare (Urea)',
            phosphorus: '60 kg/hectare (DAP)',
            potassium: '40 kg/hectare (MOP)',
            schedule: 'Apply 1/3 nitrogen at sowing, 1/3 at first irrigation (21 days), 1/3 at second irrigation (40 days). Full phosphorus and potassium at sowing.',
            tips: 'Apply fertilizers in moist soil. Use neem-coated urea for better efficiency. Conduct soil test before application.'
        },
        'rice': {
            nitrogen: '100-120 kg/hectare (Urea)',
            phosphorus: '50-60 kg/hectare (DAP)',
            potassium: '40 kg/hectare (MOP)',
            schedule: 'Apply half nitrogen and full P&K at transplanting. Remaining nitrogen in 2 splits at tillering and panicle initiation.',
            tips: 'Avoid nitrogen application during flowering. Use zinc sulfate if deficiency observed. Maintain 2-3 inches water during fertilizer application.'
        },
        'cotton': {
            nitrogen: '120-150 kg/hectare (Urea)',
            phosphorus: '60-70 kg/hectare (SSP)',
            potassium: '60 kg/hectare (MOP)',
            schedule: 'Apply 25% nitrogen and full P&K at sowing. Remaining nitrogen in 3 splits at 30, 60, and 90 days.',
            tips: 'Apply boron and zinc if deficiency symptoms appear. Top dressing should be followed by irrigation.'
        }
    };

    const cropLower = crop.toLowerCase();
    return fertilizers[cropLower] || {
        nitrogen: '80-120 kg/hectare (Urea)',
        phosphorus: '40-60 kg/hectare (DAP)',
        potassium: '30-40 kg/hectare (MOP)',
        schedule: 'Apply half at sowing and half at 30 days after sowing.',
        tips: 'Conduct soil test for accurate dosage. Apply in moist soil. Follow with irrigation for better absorption.'
    };
}
