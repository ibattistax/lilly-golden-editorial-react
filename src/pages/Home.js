import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import serialImg from "../images/non-fiction-books/raised-by-a-serial-killer.jpg";
import climateImg from "../images/non-fiction-books/surviving-climate-anxiety.jpg";
import healingImg from "../images/non-fiction-books/healing-the-opressed-body.jpg";
import cultImg from "../images/non-fiction-books/manhattan-cult-story.jpg";
import returnImg from "../images/non-fiction-books/return.jpg";
import ghostsImg from "../images/fiction-books/comfort-of-ghosts.jpg";
import whiteladyImg from "../images/fiction-books/white-lady.jpg";
import feverImg from "../images/fiction-books/american-fever.jpg";
import oilmarbleImg from "../images/fiction-books/oil-and-marble.jpg";

export default function Home() {
  return (
    <div className="Home">
      <Hero />
      <main>
        <div className="grid-2-columns outer-grid">
          <section>
            <h3 className="features-header sticky-top sticky-top-custom">
              Featured Nonfiction
            </h3>
            <div className="nonfiction-features">
              <div className="inner-grid grid-2-columns">
                <div className="featured-book-cover-container img-container">
                  <img
                    src={healingImg}
                    className="featured-book-cover-img"
                    alt=""
                  />
                </div>
                <div className="featured-book-reviews">
                  <h5 className="book-title">
                    HEALING THE OPPRESSED BODY: A Therapeutic Guide for Radical
                    Self-Liberation
                  </h5>
                  <div className="feature-byline">
                    Andrea Gutiérrez-Glik, LCSW—Penguin Life, March 2026
                  </div>

                  <br />
                  <div>
                    An essential guide to healing from oppression-based trauma
                    for those who experience homophobia, transphobia,
                    institutional injustices, isolation, medical trauma, and
                    discrimination. Somatic therapist Andrea Gutiérrez-Glik
                    provides the best tools and approaches to healing trauma and
                    filters them through an anti-oppression lens, making them
                    uniquely impactful for all of us at the margins.
                  </div>
                  <br />
                  <a
                    href="https://bookshop.org/p/books/healing-the-oppressed-body-a-therapeutic-guide-for-radical-self-liberation-andrea-guti-rrez-glik/1a699df2024ffaa9?ean=9780593656761&next=t"
                    className="button-branding-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <hr />
              <div className="inner-grid grid-2-columns">
                <div className="featured-book-cover-container img-container">
                  <img
                    src={climateImg}
                    className="featured-book-cover-img"
                    alt=""
                  />
                </div>
                <div className="featured-book-reviews">
                  <h5 className="book-title">
                    SURVIVING CLIMATE ANXIETY: A Guide to Coping, Healing, and
                    Thriving
                  </h5>
                  <div className="feature-byline">
                    Thomas Doherty, Psy.D.—Little, Brown Spark, October 2025
                  </div>

                  <br />
                  <div>
                    A revolutionary program to help us flourish in these anxious
                    times by Dr. Thomas Doherty, a globally recognized clinical
                    and environmental psychologist. The
                    <em>New York Times</em> calls him, “the most prominent
                    American advocate of a growing discipline known as
                    ‘ecopsychology.’”
                  </div>
                  <br />
                  <a
                    href="https://bookshop.org/p/books/surviving-climate-anxiety-a-guide-to-coping-healing-and-thriving-dr-thomas-doherty/23eb1ec0bffb8a8e?ean=9780316572798&next=t"
                    className="button-branding-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <hr />
              <div className="inner-grid grid-2-columns">
                <div className="featured-book-cover-container img-container">
                  <img
                    src={serialImg}
                    className="featured-book-cover-img"
                    alt=""
                  />
                </div>
                <div className="featured-book-reviews">
                  <h5 className="book-title">
                    RAISED BY A SERIAL KILLER: Discovering the Truth About My
                    Father
                  </h5>
                  <div className="feature-byline">
                    April Balascio—Simon & Schuster, Gallery, December 2024
                    <div>
                      <em>Amazon Editor’s Pick</em>
                    </div>
                  </div>
                  <br />
                  <div>
                    “A mesmerizing memoir…The details, research, and candor in
                    this highly recommended work will captivate readers, who
                    won’t be able to put it down.”
                  </div>
                  <div>
                    —<em>Library Journal</em>, Starred Review
                  </div>
                  <br />
                  <div>
                    “Unputdownable…Readers will find themselves utterly
                    immersed.” 
                  </div>
                  <div>
                    —<em>BookPage</em>, Starred Review
                  </div>
                  <br />
                  <a
                    href="https://bookshop.org/p/books/raised-by-a-serial-killer-discovering-the-truth-about-my-father-april-balascio/32d8ff67864b14b0?ean=9781982177058&next=t"
                    className="button-branding-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <hr />
              <div className="inner-grid grid-2-columns">
                <div className="featured-book-cover-container img-container">
                  <img
                    src={cultImg}
                    className="featured-book-cover-img"
                    alt=""
                  />
                </div>
                <div className="featured-book-reviews">
                  <h5 className="book-title">
                    MANHATTAN CULT STORY: My Unbelievable True Story of Sex,
                    Crimes, Chaos, and Survival
                  </h5>
                  <div className="feature-byline">
                    Spencer Schneider—Arcade, July 2022
                  </div>
                  <br />
                  <div>
                    “A haunting story...[told]not only with vividness and
                    vulnerability but also with an eye to humanizing the cult
                    experience and helping survivors of such abuse—and all of
                    us, really—understand (and forgive) behavior that seems
                    inexplicable.”
                  </div>
                  <div>
                    —Amanda Montell, author of
                    <em>Cultish: The Language of Fanaticism</em>
                  </div>
                  <br />
                  <a
                    href="https://bookshop.org/p/books/manhattan-cult-story-my-unbelievable-true-story-of-sex-crimes-chaos-and-survival-spencer-schneider/17561247?ean=9781950994557&next=t"
                    className="button-branding-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <hr />
              <div className="inner-grid grid-2-columns">
                <div className="featured-book-cover-container img-container">
                  <img
                    src={returnImg}
                    className="featured-book-cover-img"
                    alt=""
                  />
                </div>
                <div className="featured-book-reviews">
                  <h5 className="book-title">
                    RETURN: A Journey Back to Living Wild
                  </h5>
                  <div className="feature-byline">
                    Lynx Vilden—HarperOne, April 2023
                  </div>
                  <br />
                  <div>
                    Lynx Vilden, a groundbreaking wilderness survival expert,
                    recounts her spiritual and physical quest to deeply connect
                    with the earth, living in the wild using Stone Age
                    technology, returning to ancient ways to live honestly in
                    the natural world.
                  </div>

                  <br />
                  <div>“[A] mesmerizing and ethereal autobiography …”</div>
                  <div>
                    —<em>Booklist</em>
                  </div>
                  <br />
                  <a
                    href="https://bookshop.org/p/books/return-a-journey-back-to-living-wild-lynx-vilden/18637615?ean=9780063215108&next=t"
                    className="button-branding-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h3 className="features-header sticky-top sticky-top-custom">
              Featured Fiction
            </h3>
            <div className="fiction-features">
              <div className="inner-grid grid-2-columns">
                <div className="featured-book-cover-container img-container">
                  <img
                    src={ghostsImg}
                    className="featured-book-cover-img"
                    alt=""
                  />
                </div>
                <div className="featured-book-reviews">
                  <h5 className="book-title">
                    THE COMFORT OF GHOSTS: A Maisie Dobbs Novel
                  </h5>
                  <div className="feature-byline">
                    Jacqueline Winspear—Soho Crime, June 2024
                  </div>
                  <br />
                  <div>
                    “An emotional and satisfying conclusion to a long running
                    and beloved series.”
                  </div>
                  <div>
                    —<em>Library Journal</em>, Starred Review
                  </div>
                  <br />
                  <div>
                    “Winspear delivers a most elegant and satisfying resolution
                    . . . It’s a privilege to experience life with Winspear’s
                    determined and maximally resilient woman protagonist.”
                  </div>
                  <div>
                    — <em>Booklist</em>, Starred Review
                  </div>
                  <br />
                  <a
                    href="https://bookshop.org/p/books/the-comfort-of-ghosts-jacqueline-winspear/20707154?ean=9781641296069&next=t"
                    className="button-branding-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <hr />
              <div className="inner-grid grid-2-columns">
                <div className="featured-book-cover-container img-container">
                  <img
                    src={whiteladyImg}
                    className="featured-book-cover-img"
                    alt=""
                  />
                </div>
                <div className="featured-book-reviews">
                  <h5 className="book-title">THE WHITE LADY: A Novel</h5>
                  <div className="feature-byline">
                    Jacqueline Winspear—HarperCollins, March 2023
                  </div>
                  <br />
                  <div>
                    A new stand-alone historical novel covering two World Wars
                    from the internationally bestselling author of the Maisie
                    Dobbs series. “A poignant story of courage, misogyny, and
                    misused power. A tense history-based thriller filled with
                    anguish and suspense.”
                  </div>
                  <div>
                    —<em>Kirkus Reviews</em>, Starred Review
                  </div>
                  <br />

                  <a
                    href="https://bookshop.org/p/books/the-white-lady/18898630?ean=9780062867995&next=t"
                    className="button-branding-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <hr />
              <div className="inner-grid grid-2-columns">
                <div className="featured-book-cover-container img-container">
                  <img
                    src={feverImg}
                    className="featured-book-cover-img"
                    alt=""
                  />
                </div>
                <div className="featured-book-reviews">
                  <h5 className="book-title">AMERICAN FEVER: A Novel</h5>
                  <div className="feature-byline">
                    Dur e Aziz Amna—Arcade, August 2022
                  </div>
                  <br />
                  <div>
                    “Provocatively undercuts received narratives about the
                    ‘American dream’ from the immigrant’s perspective.”
                  </div>
                  <div>
                    —<em>The Guardian</em>
                  </div>
                  <br />
                  <div>
                    “A funny and affecting novel, understated but powerful, a
                    wonderful new spin on the coming-of-age story.”
                  </div>
                  <div>
                    —<em>Kirkus Reviews</em>, Starred Review
                  </div>
                  <br />
                  <a
                    href="https://bookshop.org/p/books/american-fever-dur-e-aziz-amna/17561239?ean=9781950994496&next=t"
                    className="button-branding-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <hr />
              <div className="inner-grid grid-2-columns">
                <div className="featured-book-cover-container img-container">
                  <img
                    src={oilmarbleImg}
                    className="featured-book-cover-img"
                    alt=""
                  />
                </div>
                <div className="featured-book-reviews">
                  <h5 className="book-title">
                    OIL AND MARBLE: A Novel of Leonardo and Michelangelo
                  </h5>
                  <div className="feature-byline">
                    Stephanie Storey—Arcade, March 2016
                    <div>National bestseller</div>
                  </div>
                  <br />

                  <div>
                    “Tremendously entertaining and unapologetic in its artistic
                    license.”
                  </div>
                  <div>
                    —<em>The New York Times</em>
                  </div>
                  <br />

                  <a
                    href="https://bookshop.org/p/books/oil-and-marble-a-novel-of-leonardo-and-michelangelo-stephanie-storey/236421?ean=9781628729061&next=t"
                    className="button-branding-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
