<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NyeRu Body Butter</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Custom Styles -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="images/logo.png" alt="NyeRu Logo" class="logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#products">Products</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 hero-content">
                    <h1 class="hero-title">NYERU BODY BUTTER</h1>
                    <p class="hero-subtitle">Luxurious natural nourishment for radiant, healthy skin</p>
                    <div class="cta-buttons">
                        <button id="checkout-button" class="btn btn-primary">Buy with Stripe</button>
                        <button id="flutterwave-button" class="btn btn-outline-secondary">Pay with Flutterwave</button>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="hero-image">
                        <img src="images/image4.jpg" alt="NyeRu Body Butter" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Payment Scripts -->
    <script src="https://js.stripe.com/v3/"></script>
    <script src="https://checkout.flutterwave.com/v3.js"></script>
    <script>
        document.getElementById("checkout-button").addEventListener("click", function () {
            fetch("/create-checkout-session", { method: "POST" })
                .then(response => response.json())
                .then(session => window.location.href = session.url)
                .catch(error => console.error("Error:", error));
        });

        document.getElementById("flutterwave-button").addEventListener("click", function () {
            FlutterwaveCheckout({
                public_key: "your-flutterwave-public-key",
                tx_ref: "txn_" + Date.now(),
                amount: 20,
                currency: "USD",
                payment_options: "card, banktransfer, ussd",
                redirect_url: "https://yourwebsite.com/payment-success",
                customer: {
                    email: "customer@example.com",
                    name: "Customer Name",
                },
            });
        });
    </script>
</body>
</html>
