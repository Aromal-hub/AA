<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Professional Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav>
            <div class="logo">MyCompany</div>
            <ul class="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section id="hero">
        <h1>Welcome to MyCompany</h1>
        <p>We provide the best solutions for your business needs.</p>
        <a href="#services" class="btn">Explore Services</a>
    </section>

    <section id="about">
        <h2>About Us</h2>
        <p>We are a leading provider of innovative solutions tailored to your needs.</p>
    </section>

    <section id="services">
        <h2>Our Services</h2>
        <div class="service-cards">
            <div class="card">
                <h3>Web Development</h3>
                <p>Modern and responsive web solutions.</p>
            </div>
            <div class="card">
                <h3>Mobile Apps</h3>
                <p>Cross-platform mobile applications.</p>
            </div>
            <div class="card">
                <h3>Cloud Solutions</h3>
                <p>Scalable and secure cloud services.</p>
            </div>
        </div>
    </section>

    <section id="contact">
        <h2>Contact Us</h2>
        <form id="contact-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit" class="btn">Send</button>
        </form>
    </section>

    <footer>
        <p>&copy; 2024 MyCompany. All rights reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
body {
    margin: 0;
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(45deg, #ff7eb3, #ff758c, #ff6b67, #ff633e, #ffae42);
    background-size: 300% 300%;
    animation: gradientAnimation 10s ease infinite;
}

@keyframes gradientAnimation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

header {
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 1em 0;
    position: sticky;
    top: 0;
    z-index: 1000;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1em;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 1.5em;
}

.nav-links a {
    text-decoration: none;
    color: white;
    font-weight: bold;
}

#hero {
    text-align: center;
    padding: 4em 1em;
    color: white;
    background: rgba(0, 0, 0, 0.5);
}

#hero h1 {
    font-size: 2.5em;
}

.btn {
    padding: 0.5em 1.5em;
    background: #007BFF;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 1em;
}

section {
    padding: 2em 1em;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
}

.service-cards {
    display: flex;
    gap: 1em;
    flex-wrap: wrap;
    justify-content: center;
}

.card {
    flex: 1 1 calc(33% - 2em);
    border: 1px solid #ccc;
    padding: 1em;
    margin: 1em;
    border-radius: 5px;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Footer */
footer {
    text-align: center;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 1em 0;
}
// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    this.reset();
});
