import React from "react";
import Footer from "../components/Footer";
import authorImg from "../images/lillygoldenauthor.jpg";

export default function About() {
  return (
    <div className="About">
      <div>
        <header>
          <h1 className="page-subtitle text-center">About Me</h1>
        </header>
        <main>
          <div className="about-paragraphs">
            <div className="author-img wrap">
              <img className="img-fluid" src={authorImg} alt="" />
            </div>
            <div>
              <p>
                Story is at the heart of great writing. I have been shaping
                story for three decades as an editor and writer, working with
                authors, agents, and publishers to help bring bestselling,
                critically acclaimed books to life. I’ve worked extensively with
                literary fiction, crime novels, thrillers, historical novels,
                and fiction that blurs the line between genres. In the
                nonfiction realm, I have broad experience in memoir, true crime,
                narrative, natural history, and prescriptive books.
              </p>

              <p>
                I’ve had the privilege of working with
                <em>New York Times</em> bestselling writers including Jacqueline
                Winspear, F. Lee Bailey, Elizabeth Cobbs, Stephanie Storey, Tom
                McGuane, Jay McInerney, and Joy Williams among hundreds of
                others, from seasoned professionals to first time authors to
                nonwriters with a great story to tell.
              </p>
              <p>
                Recent projects include the true crime memoir
                <span className="bio-book-title">
                  Raised by a Serial Killer
                </span>
                (December 2024, S&S, Gallery), by April Balascio;
                <span className="bio-book-title">
                  Surviving Climate Anxiety: A Guide to Coping, Healing, and
                  Thriving
                </span>
                (October 2025, Little, Brown Spark), by Dr. Thomas Doherty, and
                <span className="bio-book-title">
                  Healing the Oppressed Body: A Therapeutic Guide for Radical
                  Self- Liberation
                </span>
                (March 2026, Penguin Life), by Andrea Gutiérrez-Glik.
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
