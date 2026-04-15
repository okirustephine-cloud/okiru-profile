// Typed.js initialization
var typed = new Typed(".text", {
    strings: ["Data Scientist", "AI Enthusiast", "Public Health Analyst", "Full Stack Developer"],
    typeSpeed: 55,
    backSpeed: 45,
    backDelay: 1200,
    loop: true
});

// ---------- EMAILJS (Fixed) ----------
emailjs.init("221hybmZxaELmGszm");

const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Optional: show sending indicator
        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn.innerText;
        btn.innerText = "Sending...";
        btn.disabled = true;

        // Send email
        emailjs.sendForm("service_rk63jc1", "template_8gupiq4", this)
            .then(function(response) {
                alert("✅ Message sent successfully! I'll get back to you soon.");
                contactForm.reset();
            })
            .catch(function(error) {
                console.error("EmailJS error:", error);
                alert("❌ Failed to send. Please email me directly at Okirustephine@gmail.com");
            })
            .finally(function() {
                btn.innerText = originalText;
                btn.disabled = false;
            });
    });
}

// ---------- PROJECTS DATA ----------
const projectsData = [
    { name: "DATA & AI: Comprehensive Overview", desc: "Comprehensive overview of data science and AI concepts, tools, and applications.", tech: "Python, NumPy, Pandas, AI principles, LangChain, RAG, GPT, LLM agent", colab: "https://colab.research.google.com/drive/1Sd4x7xwIUpgR25KA2YAjtOgZme16iN8W?usp=sharing" },
    { name: "Generative AI, RAG and Agentic AI", desc: "Generative models, retrieval-augmented generation, and AI agents.", tech: "LangChain, RAG, GPT, LLM agents", colab: "https://colab.research.google.com/drive/1A9aINgHPb3axoXXMwTxb2sU7vAGv18DF?usp=sharing" },
    { name: "MLOps", desc: "Model deployment, monitoring, and lifecycle management.", tech: "Docker, FastAPI, CI/CD, MLflow", colab: "https://colab.research.google.com/drive/1tXgKhnbuP3VET7MY7FSv1MUW_JJqBT2D?usp=sharing" },
    { name: "Deep Learning", desc: "Neural networks, CNNs, RNNs, and frameworks.", tech: "TensorFlow, Keras, PyTorch", colab: "https://colab.research.google.com/drive/1UqPKoO8yESsfCUMmhLzqP4nfn-YvMWBB#scrollTo=vWQvDpfIv9xt" },
    { name: "Natural Language Processing with Transformers", desc: "Text processing, BERT, GPT, and transformer architectures.", tech: "Hugging Face, Transformers, Tokenization", colab: "https://colab.research.google.com/drive/1KObInjzAJysJ9yARsdkmqBsbGsZx0g4I?usp=sharing" },
    { name: "Machine Learning", desc: "Supervised and unsupervised learning basics.", tech: "Scikit-learn, train/test split, evaluation metrics", colab: "https://colab.research.google.com/drive/1sc1zW0KmQpum15_GhwofMdbFYm7mc1vQ?usp=sharing" },
    { name: "Regression Models", desc: "Linear and logistic regression for prediction.", tech: "LinearRegression, LogisticRegression, regularization", colab: "https://colab.research.google.com/drive/1sc1zW0KmQpum15_GhwofMdbFYm7mc1vQ?usp=sharing" },
    { name: "Classification Models", desc: "Decision trees, random forests, SVM for classification tasks.", tech: "RandomForest, SVM, XGBoost", colab: "https://colab.research.google.com/drive/1nnv9vpWPTrQRNbbSkRFZfWvPEweDIMF_?usp=sharing" },
    { name: "Exploratory Data Analysis (EDA)", desc: "Visualizing and summarizing data to uncover patterns and insights.", tech: "Matplotlib, Seaborn, Summary statistics", kaggle: "https://www.kaggle.com/code/okirustephine/week-3-eda-assignment" },
    { name: "Business Intelligence", desc: "Interactive dashboards using Power BI.", tech: "Power BI, DAX, SQL", demoLink: "https://drive.google.com/file/d/1jn7Co60UvBObx3O_sc2hPHtIKx5xMIzP/view?usp=sharing", demoLabel: "View Dashboard", image: "images/Dashboard 2.png" },
    { name: "Data Visualization using Tableau", desc: "Interactive stories and charts with Tableau.", tech: "Tableau, Data Blending", demoLink: "https://public.tableau.com/app/profile/okiru.stephine/viz/HRDashboard_17761622750210/HRSummary?publish=yes", demoLabel: "View Dashboard", image: "images/Dashboard.png" },
    { name: "Web Scraping and Data Collection", desc: "Collecting data from websites using Python.", tech: "BeautifulSoup, Requests, Pandas", colab: "https://colab.research.google.com/drive/1cLWdHoeUq71CJLX0U2qXtjVkdh_hAD_5?usp=sharing" },
    { name: "Data Wrangling", desc: "Cleaning and transforming raw data.", tech: "Pandas, handling missing values", kaggle: "https://www.kaggle.com/code/okirustephine/week-2-data-wrangling" }
];

function generateProjectLinks(project) {
    let linksHtml = '<div class="project-links">';
    if (project.demoLink) {
        linksHtml += `<a href="${project.demoLink}" target="_blank"><i class='bx bx-link-external'></i> ${project.demoLabel || 'View Project'}</a>`;
    } else {
        if (project.colab) linksHtml += `<a href="${project.colab}" target="_blank"><i class='bx bxl-google'></i> Colab</a>`;
        if (project.kaggle) linksHtml += `<a href="${project.kaggle}" target="_blank"><i class='bx bxl-kaggle'></i> Kaggle</a>`;
        if (!project.colab && !project.kaggle && !project.demoLink) linksHtml += `<span>No link</span>`;
    }
    linksHtml += '</div>';
    return linksHtml;
}

const projectsGrid = document.getElementById("projectsGrid");
if (projectsGrid) {
    projectsData.forEach(project => {
        const card = document.createElement("div");
        card.className = "project-card";
        let imageHtml = project.image ? `<img src="${project.image}" alt="${project.name}" class="project-image">` : '';
        card.innerHTML = `${imageHtml}<div class="project-icon"><i class='bx bx-data'></i></div><h3>${project.name}</h3><p>${project.desc} <br><strong style="color:#0ef;">Tech:</strong> ${project.tech}</p>${generateProjectLinks(project)}`;
        projectsGrid.appendChild(card);
    });
}

// Active navigation highlight
const sections = document.querySelectorAll("section, .home");
const navLinks = document.querySelectorAll(".navbar a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (pageYOffset >= sectionTop) current = section.getAttribute("id");
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) link.classList.add("active");
    });
});