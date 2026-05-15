/* =========================================
   Mindanao Media Network CATV SCSS Theme
   ========================================= */

$primary-color: #0f172a;
$secondary-color: #16a34a;
$accent-color: #22c55e;
$text-color: #ffffff;
$dark-bg: #020617;
$card-bg: rgba(255, 255, 255, 0.08);

$font-main: 'Poppins', sans-serif;

body {
  margin: 0;
  padding: 0;
  font-family: $font-main;
  background: linear-gradient(135deg, $dark-bg, $primary-color);
  color: $text-color;
}

/* HEADER */
.header {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid $accent-color;

  .logo {
    display: flex;
    align-items: center;
    gap: 15px;

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: 2px solid $accent-color;
    }

    h1 {
      font-size: 28px;
      font-weight: 700;
      color: $accent-color;
      margin: 0;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    span {
      display: block;
      font-size: 12px;
      color: #cbd5e1;
      letter-spacing: 1px;
    }
  }
}

/* HERO SECTION */
.hero {
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.7)
    ),
    url("banner.jpg") center/cover no-repeat;

  .hero-content {
    h2 {
      font-size: 48px;
      margin-bottom: 10px;
      color: $accent-color;
      text-shadow: 0 0 15px rgba(34, 197, 94, 0.7);
    }

    p {
      font-size: 18px;
      color: #e2e8f0;
    }

    .btn-watch {
      margin-top: 25px;
      padding: 12px 30px;
      background: $secondary-color;
      color: white;
      border: none;
      border-radius: 50px;
      font-size: 16px;
      cursor: pointer;
      transition: 0.3s ease;

      &:hover {
        background: lighten($secondary-color, 10%);
        transform: scale(1.05);
      }
    }
  }
}

/* CHANNEL GRID */
.channels {
  padding: 50px 40px;

  h3 {
    font-size: 32px;
    margin-bottom: 25px;
    color: $accent-color;
  }

  .channel-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
  }

  .channel-card {
    background: $card-bg;
    border-radius: 20px;
    overflow: hidden;
    transition: 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
      transform: translateY(-5px);
      border-color: $accent-color;
      box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
    }

    img {
      width: 100%;
      height: 140px;
      object-fit: cover;
    }

    .info {
      padding: 15px;

      h4 {
        margin: 0;
        font-size: 20px;
      }

      p {
        font-size: 14px;
        color: #cbd5e1;
        margin-top: 8px;
      }
    }
  }
}

/* FOOTER */
.footer {
  text-align: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.7);
  border-top: 2px solid $accent-color;

  p {
    margin: 0;
    color: #94a3b8;
    font-size: 14px;
  }
}